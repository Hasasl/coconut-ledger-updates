create table public.bug_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  description text not null check (char_length(btrim(description)) between 5 and 4000),
  user_actions text not null default '' check (char_length(user_actions) <= 2000),
  app_version text not null check (app_version ~ '^[0-9]+(\.[0-9]+){1,2}$' and char_length(app_version) <= 32),
  current_page text not null check (current_page in ('overview', 'months', 'insights', 'forecast', 'data')),
  device_info jsonb not null check (
    jsonb_typeof(device_info) = 'object'
    and pg_column_size(device_info) <= 4096
    and (device_info - 'browser' - 'operating_system' - 'device_type') = '{}'::jsonb
    and coalesce(jsonb_typeof(device_info -> 'browser') = 'string', false)
    and char_length(coalesce(device_info ->> 'browser', '')) <= 160
    and coalesce(jsonb_typeof(device_info -> 'operating_system') = 'string', false)
    and char_length(coalesce(device_info ->> 'operating_system', '')) <= 40
    and coalesce(jsonb_typeof(device_info -> 'device_type') = 'string', false)
    and device_info ->> 'device_type' in ('mobile', 'tablet', 'desktop')
  ),
  error_logs jsonb not null default '[]'::jsonb check (
    case
      when jsonb_typeof(error_logs) = 'array'
        then jsonb_array_length(error_logs) <= 20 and pg_column_size(error_logs) <= 32768
      else false
    end
  ),
  status text not null default 'NEW' check (status in ('NEW', 'INVESTIGATING', 'FIXED', 'CLOSED')),
  created_at timestamptz not null default now()
);

create table public.bug_report_rate_limits (
  user_id uuid primary key references auth.users(id) on delete cascade,
  window_started_at timestamptz not null,
  report_count integer not null check (report_count > 0)
);

create index bug_reports_created_at_idx on public.bug_reports (created_at desc);
create index bug_reports_status_created_at_idx on public.bug_reports (status, created_at desc);
create index bug_reports_user_created_at_idx on public.bug_reports (user_id, created_at desc);

alter table public.bug_reports enable row level security;
alter table public.bug_report_rate_limits enable row level security;

revoke all on public.bug_reports, public.bug_report_rate_limits from public, anon, authenticated;
grant select on public.bug_reports to authenticated;
grant update (status) on public.bug_reports to authenticated;

create function public.is_bug_report_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce((select auth.jwt() -> 'app_metadata' ->> 'bug_report_admin') = 'true', false);
$$;

create policy "users can view their own bug reports"
on public.bug_reports for select to authenticated
using (user_id = (select auth.uid()));

create policy "bug report admins can view all reports"
on public.bug_reports for select to authenticated
using (public.is_bug_report_admin());

create policy "bug report admins can update report status"
on public.bug_reports for update to authenticated
using (public.is_bug_report_admin())
with check (public.is_bug_report_admin());

create function public.submit_bug_report(
  p_description text,
  p_user_actions text,
  p_app_version text,
  p_current_page text,
  p_device_info jsonb,
  p_error_logs jsonb
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user_id uuid := auth.uid();
  v_count integer;
  v_logs jsonb := '[]'::jsonb;
  v_log jsonb;
  v_type text;
  v_message text;
  v_stack text;
  v_path text;
  v_status integer;
  v_id uuid;
begin
  if v_user_id is null then raise exception 'sign in to submit a bug report'; end if;
  if p_description is null or char_length(btrim(p_description)) not between 5 and 4000 then
    raise exception 'describe the problem in 5 to 4000 characters';
  end if;
  if char_length(coalesce(p_user_actions, '')) > 2000 then
    raise exception 'the activity description is too long';
  end if;
  if p_app_version is null or char_length(p_app_version) > 32
    or p_app_version !~ '^[0-9]+(\.[0-9]+){1,2}$' then
    raise exception 'invalid application version';
  end if;
  if p_current_page is null or p_current_page not in ('overview', 'months', 'insights', 'forecast', 'data') then
    raise exception 'invalid application page';
  end if;
  if p_device_info is null or jsonb_typeof(p_device_info) <> 'object' then
    raise exception 'invalid device information';
  end if;
  if pg_column_size(p_device_info) > 4096
    or (p_device_info - 'browser' - 'operating_system' - 'device_type') <> '{}'::jsonb
    or not coalesce(jsonb_typeof(p_device_info -> 'browser') = 'string', false)
    or char_length(coalesce(p_device_info ->> 'browser', '')) > 160
    or not coalesce(jsonb_typeof(p_device_info -> 'operating_system') = 'string', false)
    or char_length(coalesce(p_device_info ->> 'operating_system', '')) > 40
    or not coalesce(jsonb_typeof(p_device_info -> 'device_type') = 'string', false)
    or p_device_info ->> 'device_type' not in ('mobile', 'tablet', 'desktop') then
    raise exception 'invalid device information';
  end if;
  if p_error_logs is null or jsonb_typeof(p_error_logs) <> 'array' then
    raise exception 'invalid application error log';
  end if;
  if jsonb_array_length(p_error_logs) > 20 or pg_column_size(p_error_logs) > 32768 then
    raise exception 'invalid application error log';
  end if;

  insert into public.bug_report_rate_limits as limits (user_id, window_started_at, report_count)
  values (v_user_id, now(), 1)
  on conflict (user_id) do update
  set window_started_at = case
        when limits.window_started_at <= now() - interval '1 hour' then now()
        else limits.window_started_at
      end,
      report_count = case
        when limits.window_started_at <= now() - interval '1 hour' then 1
        else limits.report_count + 1
      end
  returning report_count into v_count;
  if v_count > 5 then raise exception 'report limit reached; try again in an hour'; end if;

  for v_log in select value from jsonb_array_elements(p_error_logs)
  loop
    if jsonb_typeof(v_log) <> 'object'
      or coalesce(jsonb_typeof(v_log -> 'type'), '') <> 'string'
      or coalesce(jsonb_typeof(v_log -> 'message'), '') <> 'string'
      or char_length(v_log ->> 'message') > 2000
      or (v_log ? 'stack' and jsonb_typeof(v_log -> 'stack') not in ('string', 'null'))
      or (v_log ? 'status' and jsonb_typeof(v_log -> 'status') not in ('number', 'null'))
      or (v_log ? 'path' and jsonb_typeof(v_log -> 'path') not in ('string', 'null')) then
      raise exception 'invalid error log entry';
    end if;
    v_type := left(v_log ->> 'type', 40);
    v_message := left(v_log ->> 'message', 1000);
    v_stack := left(coalesce(v_log ->> 'stack', ''), 2000);
    v_path := left(coalesce(v_log ->> 'path', ''), 200);
    v_status := case
      when jsonb_typeof(v_log -> 'status') = 'number' then (v_log ->> 'status')::integer
      else null
    end;
    v_logs := v_logs || jsonb_build_array(jsonb_strip_nulls(jsonb_build_object(
      'type', v_type,
      'message', regexp_replace(
        regexp_replace(
          regexp_replace(v_message, '(?i)bearer\s+[a-z0-9._~+/-]+=*', 'Bearer [redacted]', 'g'),
          '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}', '[email redacted]', 'g'
        ),
        '(?i)(password|passwd|token|secret|authorization|cookie)([=: ]+)[^ ,;]+',
        '\1\2[redacted]', 'g'
      ),
      'stack', regexp_replace(
        regexp_replace(
          regexp_replace(v_stack, '(?i)bearer\s+[a-z0-9._~+/-]+=*', 'Bearer [redacted]', 'g'),
          '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}', '[email redacted]', 'g'
        ),
        '(?i)(password|passwd|token|secret|authorization|cookie)([=: ]+)[^ ,;]+',
        '\1\2[redacted]', 'g'
      ),
      'path', case when v_path ~ '^/[A-Za-z0-9/_-]{0,200}$' then v_path else null end,
      'status', case when v_status between 100 and 599 then v_status else null end
    )));
  end loop;

  insert into public.bug_reports (
    user_id, description, user_actions, app_version, current_page, device_info, error_logs
  )
  values (
    v_user_id, btrim(p_description), coalesce(p_user_actions, ''), p_app_version,
    p_current_page, p_device_info, v_logs
  )
  returning id into v_id;
  return v_id;
end;
$$;

revoke all on function public.is_bug_report_admin() from public, anon;
revoke all on function public.submit_bug_report(text, text, text, text, jsonb, jsonb) from public, anon;
grant execute on function public.is_bug_report_admin() to authenticated;
grant execute on function public.submit_bug_report(text, text, text, text, jsonb, jsonb) to authenticated;

notify pgrst, 'reload schema';

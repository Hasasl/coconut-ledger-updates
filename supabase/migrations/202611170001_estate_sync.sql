create schema if not exists extensions;
create extension if not exists pgcrypto with schema extensions;

create type public.estate_role as enum ('owner', 'manager', 'data_entry', 'viewer');
create type public.estate_request_status as enum ('pending', 'approved', 'rejected');

create table public.estates (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 80),
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now()
);

create table public.estate_members (
  estate_id uuid not null references public.estates(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.estate_role not null,
  display_name text check (display_name is null or char_length(btrim(display_name)) between 1 and 60),
  approved_by uuid not null references auth.users(id) on delete restrict,
  approved_at timestamptz not null default now(),
  primary key (estate_id, user_id)
);

create table public.estate_invites (
  id uuid primary key default gen_random_uuid(),
  estate_id uuid not null references public.estates(id) on delete cascade,
  token_hash text not null unique check (token_hash ~ '^[0-9a-f]{64}$'),
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null,
  used_at timestamptz,
  check (expires_at > created_at)
);

create table public.estate_join_requests (
  id uuid primary key default gen_random_uuid(),
  estate_id uuid not null references public.estates(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  invite_id uuid not null unique references public.estate_invites(id) on delete cascade,
  display_name text not null check (char_length(btrim(display_name)) between 1 and 60),
  status public.estate_request_status not null default 'pending',
  requested_at timestamptz not null default now(),
  reviewed_by uuid references auth.users(id) on delete restrict,
  reviewed_at timestamptz,
  check (
    (status = 'pending' and reviewed_by is null and reviewed_at is null)
    or (status <> 'pending' and reviewed_by is not null and reviewed_at is not null)
  )
);

create table public.estate_records (
  estate_id uuid not null references public.estates(id) on delete cascade,
  record_type text not null check (
    record_type in ('settings', 'harvest', 'other_income', 'deduction_preset', 'month_payout', 'reviewed_month')
  ),
  record_id text not null check (char_length(record_id) between 1 and 120),
  payload jsonb,
  revision bigint not null default 1 check (revision > 0),
  updated_by uuid not null references auth.users(id) on delete restrict,
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  primary key (estate_id, record_type, record_id),
  check (payload is null or jsonb_typeof(payload) = 'object'),
  check ((payload is null) = (deleted_at is not null))
);

create index estate_members_user_idx on public.estate_members (user_id, estate_id);
create index estate_join_requests_owner_idx on public.estate_join_requests (estate_id, status, requested_at);
create unique index estate_join_requests_pending_member_idx
  on public.estate_join_requests (estate_id, user_id) where status = 'pending';
create index estate_records_updated_idx on public.estate_records (estate_id, updated_at);

create function public.is_estate_member(p_estate_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.estate_members m
    where m.estate_id = p_estate_id and m.user_id = (select auth.uid())
  );
$$;

create function public.has_estate_role(p_estate_id uuid, p_roles public.estate_role[])
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.estate_members m
    where m.estate_id = p_estate_id
      and m.user_id = (select auth.uid())
      and m.role = any (p_roles)
  );
$$;

alter table public.estates enable row level security;
alter table public.estate_members enable row level security;
alter table public.estate_invites enable row level security;
alter table public.estate_join_requests enable row level security;
alter table public.estate_records enable row level security;

create policy "estate members can view their estates"
on public.estates for select to authenticated
using (public.is_estate_member(id));

create policy "members can view approved memberships"
on public.estate_members for select to authenticated
using (public.is_estate_member(estate_id));

create policy "requesters and owners can view join requests"
on public.estate_join_requests for select to authenticated
using (
  user_id = (select auth.uid())
  or public.has_estate_role(estate_id, array['owner']::public.estate_role[])
);

create policy "members can read estate records"
on public.estate_records for select to authenticated
using (public.is_estate_member(estate_id));

revoke all on public.estates, public.estate_members, public.estate_invites,
  public.estate_join_requests, public.estate_records from anon, authenticated;
grant select on public.estates, public.estate_members, public.estate_join_requests,
  public.estate_records to authenticated;
revoke all on function public.is_estate_member(uuid) from public, anon;
revoke all on function public.has_estate_role(uuid, public.estate_role[]) from public, anon;
grant execute on function public.is_estate_member(uuid) to authenticated;
grant execute on function public.has_estate_role(uuid, public.estate_role[]) to authenticated;

create function public.create_estate(p_name text)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_estate_id uuid;
begin
  if auth.uid() is null then raise exception 'authentication required'; end if;
  if p_name is null or char_length(btrim(p_name)) not between 1 and 80 then raise exception 'estate name must be 1 to 80 characters'; end if;

  insert into public.estates (name, created_by)
  values (btrim(p_name), auth.uid())
  returning id into v_estate_id;

  insert into public.estate_members (estate_id, user_id, role, approved_by)
  values (v_estate_id, auth.uid(), 'owner', auth.uid());

  return v_estate_id;
end;
$$;

create function public.create_estate_invite(p_estate_id uuid)
returns table (invite_id uuid, invite_code text, expires_at timestamptz)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_invite_id uuid;
  v_code text := encode(extensions.gen_random_bytes(32), 'hex');
  v_expires_at timestamptz := now() + interval '24 hours';
begin
  if not public.has_estate_role(p_estate_id, array['owner']::public.estate_role[]) then
    raise exception 'only an estate owner can create invitations';
  end if;

  insert into public.estate_invites (estate_id, token_hash, created_by, expires_at)
  values (
    p_estate_id,
    encode(extensions.digest(convert_to(v_code, 'UTF8'), 'sha256'), 'hex'),
    auth.uid(),
    v_expires_at
  ) returning id into v_invite_id;

  return query select v_invite_id, v_code, v_expires_at;
end;
$$;

create function public.list_estate_invites(p_estate_id uuid)
returns table (invite_id uuid, created_at timestamptz, expires_at timestamptz)
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.has_estate_role(p_estate_id, array['owner']::public.estate_role[]) then
    raise exception 'only an estate owner can view invitations';
  end if;
  return query
    select i.id, i.created_at, i.expires_at
    from public.estate_invites i
    where i.estate_id = p_estate_id and i.used_at is null and i.expires_at > now()
    order by i.created_at desc;
end;
$$;

create function public.revoke_estate_invite(p_invite_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_estate_id uuid;
begin
  select i.estate_id into v_estate_id
  from public.estate_invites i
  where i.id = p_invite_id and i.used_at is null and i.expires_at > now()
  for update;
  if not found then raise exception 'active invite not found'; end if;
  if not public.has_estate_role(v_estate_id, array['owner']::public.estate_role[]) then
    raise exception 'only an estate owner can revoke invitations';
  end if;
  update public.estate_invites set used_at = now() where id = p_invite_id;
end;
$$;

create function public.list_estate_join_requests(p_estate_id uuid)
returns table (request_id uuid, user_id uuid, email text, display_name text, requested_at timestamptz)
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.has_estate_role(p_estate_id, array['owner']::public.estate_role[]) then
    raise exception 'only an estate owner can view join requests';
  end if;
  return query
    select r.id, r.user_id, u.email::text, r.display_name, r.requested_at
    from public.estate_join_requests r
    join auth.users u on u.id = r.user_id
    where r.estate_id = p_estate_id and r.status = 'pending'
    order by r.requested_at asc;
end;
$$;

create function public.request_estate_access(p_invite_code text, p_display_name text)
returns table (estate_id uuid, estate_name text, request_status public.estate_request_status)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_invite public.estate_invites%rowtype;
  v_estate_name text;
  v_status public.estate_request_status;
begin
  if auth.uid() is null then raise exception 'authentication required'; end if;
  if p_invite_code is null or p_invite_code !~ '^[0-9a-fA-F]{64}$' then raise exception 'invalid or expired invite'; end if;
  if p_display_name is null or char_length(btrim(p_display_name)) not between 1 and 60 then raise exception 'enter a name between 1 and 60 characters'; end if;

  select i.* into v_invite
  from public.estate_invites i
  where i.token_hash = encode(extensions.digest(convert_to(lower(p_invite_code), 'UTF8'), 'sha256'), 'hex')
    and i.used_at is null
    and i.expires_at > now()
  for update;
  if not found then raise exception 'invalid or expired invite'; end if;

  if exists (
    select 1 from public.estate_members m
    where m.estate_id = v_invite.estate_id and m.user_id = auth.uid()
  ) then raise exception 'already an estate member'; end if;

  update public.estate_invites set used_at = now() where id = v_invite.id;
  insert into public.estate_join_requests (estate_id, user_id, invite_id, display_name)
  values (v_invite.estate_id, auth.uid(), v_invite.id, btrim(p_display_name))
  returning status into v_status;

  select e.name into v_estate_name from public.estates e where e.id = v_invite.estate_id;
  return query select v_invite.estate_id, v_estate_name, v_status;
exception
  when unique_violation then raise exception 'a request for this estate already exists';
end;
$$;

create function public.review_estate_request(p_request_id uuid, p_approve boolean, p_role public.estate_role default 'viewer')
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_request public.estate_join_requests%rowtype;
begin
  select r.* into v_request
  from public.estate_join_requests r
  where r.id = p_request_id and r.status = 'pending'
  for update;
  if not found then raise exception 'pending request not found'; end if;
  if not public.has_estate_role(v_request.estate_id, array['owner']::public.estate_role[]) then
    raise exception 'only an estate owner can review requests';
  end if;
  if p_approve and p_role is null then raise exception 'choose a role for the new member'; end if;
  if p_role = 'owner' then raise exception 'owner role cannot be granted by invitation'; end if;

  update public.estate_join_requests
  set status = case when p_approve then 'approved'::public.estate_request_status else 'rejected'::public.estate_request_status end,
      reviewed_by = auth.uid(),
      reviewed_at = now()
  where id = p_request_id;

  if p_approve then
    insert into public.estate_members (estate_id, user_id, role, display_name, approved_by)
    values (v_request.estate_id, v_request.user_id, p_role, v_request.display_name, auth.uid());
  end if;
end;
$$;

create function public.change_estate_member_role(p_estate_id uuid, p_user_id uuid, p_role public.estate_role)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.has_estate_role(p_estate_id, array['owner']::public.estate_role[]) then
    raise exception 'only an estate owner can change member roles';
  end if;
  if p_role = 'owner' then raise exception 'ownership transfer is not supported by this operation'; end if;
  update public.estate_members
  set role = p_role
  where estate_id = p_estate_id and user_id = p_user_id and role <> 'owner';
  if not found then raise exception 'member not found or is the owner'; end if;
end;
$$;

create function public.remove_estate_member(p_estate_id uuid, p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.has_estate_role(p_estate_id, array['owner']::public.estate_role[]) then
    raise exception 'only an estate owner can remove members';
  end if;
  delete from public.estate_members
  where estate_id = p_estate_id and user_id = p_user_id and role <> 'owner';
  if not found then raise exception 'member not found or is the owner'; end if;
end;
$$;

create function public.sync_estate_records(p_estate_id uuid, p_changes jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_change jsonb;
  v_current public.estate_records%rowtype;
  v_conflicts jsonb := '[]'::jsonb;
  v_results jsonb := '[]'::jsonb;
  v_expected bigint;
  v_type text;
  v_id text;
  v_payload jsonb;
begin
  if not public.has_estate_role(p_estate_id, array['owner', 'manager', 'data_entry']::public.estate_role[]) then
    raise exception 'estate write permission required';
  end if;
  if p_changes is null or jsonb_typeof(p_changes) <> 'array'
    or jsonb_array_length(p_changes) > 200 or pg_column_size(p_changes) > 2097152 then
    raise exception 'changes must be an array of at most 200 records and 2 MiB';
  end if;
  if exists (
    select 1
    from jsonb_array_elements(p_changes) as change(value)
    group by change.value->>'record_type', change.value->>'record_id'
    having count(*) > 1
  ) then raise exception 'each record can appear only once per sync request'; end if;
  perform pg_advisory_xact_lock(hashtextextended(p_estate_id::text, 0));

  for v_change in select value from jsonb_array_elements(p_changes)
  loop
    v_type := v_change->>'record_type';
    v_id := v_change->>'record_id';
    v_expected := (v_change->>'expected_revision')::bigint;
    v_payload := nullif(v_change->'payload', 'null'::jsonb);
    if v_type is null or v_type not in ('settings', 'harvest', 'other_income', 'deduction_preset', 'month_payout', 'reviewed_month')
      or v_id is null or char_length(v_id) not between 1 and 120
      or v_expected is null or v_expected < 0
      or (v_payload is not null and jsonb_typeof(v_payload) <> 'object') then
      raise exception 'invalid estate record change';
    end if;
    if v_payload is not null and (
      (v_type = 'settings' and v_id <> 'settings')
      or (v_type in ('harvest', 'other_income', 'deduction_preset')
        and (coalesce(jsonb_typeof(v_payload->'id'), '') <> 'string' or v_payload->>'id' <> v_id))
      or (v_type = 'harvest' and (
        coalesce(jsonb_typeof(v_payload->'date'), '') <> 'string' or v_payload->>'date' !~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$'
        or coalesce(jsonb_typeof(v_payload->'total'), '') <> 'number'
        or coalesce(jsonb_typeof(v_payload->'price'), '') <> 'number'
        or coalesce(jsonb_typeof(v_payload->'ded'), '') <> 'object'
        or (v_payload ? 'payments' and jsonb_typeof(v_payload->'payments') <> 'array')
        or (v_payload ? 'customDeds' and jsonb_typeof(v_payload->'customDeds') <> 'array')
        or (v_payload ? 'shareDeds' and jsonb_typeof(v_payload->'shareDeds') <> 'array')
        or (v_payload ? 'shareAdds' and jsonb_typeof(v_payload->'shareAdds') <> 'array')
      ))
      or (v_type = 'other_income' and (
        coalesce(jsonb_typeof(v_payload->'date'), '') <> 'string' or v_payload->>'date' !~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$'
        or coalesce(jsonb_typeof(v_payload->'amount'), '') <> 'number'
        or coalesce(jsonb_typeof(v_payload->'note'), '') <> 'string'
      ))
      or (v_type = 'deduction_preset' and (
        coalesce(jsonb_typeof(v_payload->'name'), '') <> 'string'
        or coalesce(jsonb_typeof(v_payload->'ded'), '') <> 'object'
      ))
      or (v_type = 'month_payout' and (
        v_id !~ '^[0-9]{4}-(0[1-9]|1[0-2])$'
        or coalesce(jsonb_typeof(v_payload->'amounts'), '') <> 'array'
      ))
      or (v_type = 'reviewed_month' and (
        v_id !~ '^[0-9]{4}-(0[1-9]|1[0-2])$' or coalesce(v_payload->>'month', '') <> v_id
      ))
    ) then raise exception 'estate record payload does not match its record type'; end if;
    if not public.has_estate_role(p_estate_id, array['owner', 'manager']::public.estate_role[])
      and (v_type not in ('harvest', 'other_income') or v_payload is null) then
      raise exception 'data-entry members may only add or edit harvest and income records';
    end if;

    select r.* into v_current
    from public.estate_records r
    where r.estate_id = p_estate_id and r.record_type = v_type and r.record_id = v_id;
    if found then
      if v_current.revision <> v_expected then
        v_conflicts := v_conflicts || jsonb_build_array(jsonb_build_object(
          'record_type', v_type, 'record_id', v_id, 'revision', v_current.revision,
          'payload', v_current.payload, 'deleted', v_current.deleted_at is not null
        ));
      end if;
    elsif v_expected <> 0 then
      v_conflicts := v_conflicts || jsonb_build_array(jsonb_build_object(
        'record_type', v_type, 'record_id', v_id, 'revision', 0,
        'payload', null, 'deleted', true
      ));
    end if;
  end loop;

  if jsonb_array_length(v_conflicts) > 0 then
    return jsonb_build_object('ok', false, 'conflicts', v_conflicts);
  end if;

  for v_change in select value from jsonb_array_elements(p_changes)
  loop
    v_type := v_change->>'record_type';
    v_id := v_change->>'record_id';
    v_expected := (v_change->>'expected_revision')::bigint;
    v_payload := nullif(v_change->'payload', 'null'::jsonb);

    insert into public.estate_records (estate_id, record_type, record_id, payload, revision, updated_by, deleted_at)
    values (p_estate_id, v_type, v_id, v_payload, v_expected + 1, auth.uid(), case when v_payload is null then now() else null end)
    on conflict (estate_id, record_type, record_id) do update
      set payload = excluded.payload,
          revision = excluded.revision,
          updated_by = excluded.updated_by,
          updated_at = now(),
          deleted_at = excluded.deleted_at;

    v_results := v_results || jsonb_build_array(jsonb_build_object(
      'record_type', v_type, 'record_id', v_id, 'revision', v_expected + 1
    ));
  end loop;
  return jsonb_build_object('ok', true, 'records', v_results);
end;
$$;

revoke all on function public.create_estate(text) from public, anon;
revoke all on function public.create_estate_invite(uuid) from public, anon;
revoke all on function public.list_estate_invites(uuid) from public, anon;
revoke all on function public.revoke_estate_invite(uuid) from public, anon;
revoke all on function public.list_estate_join_requests(uuid) from public, anon;
revoke all on function public.request_estate_access(text, text) from public, anon;
revoke all on function public.review_estate_request(uuid, boolean, public.estate_role) from public, anon;
revoke all on function public.change_estate_member_role(uuid, uuid, public.estate_role) from public, anon;
revoke all on function public.remove_estate_member(uuid, uuid) from public, anon;
revoke all on function public.sync_estate_records(uuid, jsonb) from public, anon;

grant execute on function public.create_estate(text) to authenticated;
grant execute on function public.create_estate_invite(uuid) to authenticated;
grant execute on function public.list_estate_invites(uuid) to authenticated;
grant execute on function public.revoke_estate_invite(uuid) to authenticated;
grant execute on function public.list_estate_join_requests(uuid) to authenticated;
grant execute on function public.request_estate_access(text, text) to authenticated;
grant execute on function public.review_estate_request(uuid, boolean, public.estate_role) to authenticated;
grant execute on function public.change_estate_member_role(uuid, uuid, public.estate_role) to authenticated;
grant execute on function public.remove_estate_member(uuid, uuid) to authenticated;
grant execute on function public.sync_estate_records(uuid, jsonb) to authenticated;

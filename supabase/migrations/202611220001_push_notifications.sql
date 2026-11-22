create table public.push_devices (
  fcm_token text primary key check (char_length(fcm_token) between 100 and 4096),
  user_id uuid not null references auth.users(id) on delete cascade,
  platform text not null check (platform = 'android'),
  updated_at timestamptz not null default now()
);

create index push_devices_user_id_idx on public.push_devices (user_id);

create table public.push_event_limits (
  estate_id uuid not null references public.estates(id) on delete cascade,
  event_type text not null check (event_type in ('estate_change', 'join_request', 'membership_change')),
  recipient_user_id uuid not null default '00000000-0000-0000-0000-000000000000',
  last_sent_at timestamptz not null default now(),
  primary key (estate_id, event_type, recipient_user_id)
);

alter table public.push_event_limits
  add constraint push_event_limits_recipient_check check (
    (event_type = 'membership_change' and recipient_user_id <> '00000000-0000-0000-0000-000000000000')
    or (event_type <> 'membership_change' and recipient_user_id = '00000000-0000-0000-0000-000000000000')
  );

alter table public.push_devices enable row level security;
alter table public.push_event_limits enable row level security;

revoke all on public.push_devices, public.push_event_limits from public, anon, authenticated;
grant all on public.push_devices, public.push_event_limits to service_role;

create function public.claim_push_notification(
  p_estate_id uuid,
  p_event_type text,
  p_cooldown_seconds integer,
  p_recipient_user_id uuid default null
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_claimed boolean;
begin
  if p_event_type not in ('estate_change', 'join_request', 'membership_change')
    or p_cooldown_seconds not between 30 and 600
    or (p_event_type = 'membership_change' and p_recipient_user_id is null)
    or (p_event_type <> 'membership_change' and p_recipient_user_id is not null) then
    raise exception 'invalid push notification claim';
  end if;

  insert into public.push_event_limits (estate_id, event_type, recipient_user_id, last_sent_at)
  values (
    p_estate_id,
    p_event_type,
    coalesce(p_recipient_user_id, '00000000-0000-0000-0000-000000000000'),
    now()
  )
  on conflict (estate_id, event_type, recipient_user_id) do update
  set last_sent_at = now()
  where push_event_limits.last_sent_at <= now() - make_interval(secs => p_cooldown_seconds)
  returning true into v_claimed;

  return coalesce(v_claimed, false);
end;
$$;

revoke all on function public.claim_push_notification(uuid, text, integer, uuid) from public, anon, authenticated;
grant execute on function public.claim_push_notification(uuid, text, integer, uuid) to service_role;

notify pgrst, 'reload schema';

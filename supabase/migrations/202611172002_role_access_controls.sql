alter table public.estate_members
  add column if not exists access_status text not null default 'active'
    check (access_status in ('active', 'suspended'));

create table if not exists public.estate_role_features (
  estate_id uuid not null references public.estates(id) on delete cascade,
  role public.estate_role not null check (role in ('member_1', 'member_2', 'member_3', 'member_4', 'member_5')),
  feature_key text not null check (feature_key in ('overview', 'months', 'insights', 'forecast')),
  enabled boolean not null default false,
  primary key (estate_id, role, feature_key)
);

create table if not exists public.global_account_bans (
  user_id uuid primary key references auth.users(id) on delete cascade,
  banned_by uuid references auth.users(id) on delete set null,
  estate_id uuid references public.estates(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.estate_role_features enable row level security;
alter table public.global_account_bans enable row level security;
revoke all on public.estate_role_features, public.global_account_bans from public, anon, authenticated;

alter table public.estates alter column created_by drop not null;
alter table public.estates drop constraint if exists estates_created_by_fkey;
alter table public.estates add constraint estates_created_by_fkey
  foreign key (created_by) references auth.users(id) on delete set null;

alter table public.estate_members alter column approved_by drop not null;
alter table public.estate_members drop constraint if exists estate_members_approved_by_fkey;
alter table public.estate_members add constraint estate_members_approved_by_fkey
  foreign key (approved_by) references auth.users(id) on delete set null;

alter table public.estate_invites alter column created_by drop not null;
alter table public.estate_invites drop constraint if exists estate_invites_created_by_fkey;
alter table public.estate_invites add constraint estate_invites_created_by_fkey
  foreign key (created_by) references auth.users(id) on delete set null;

alter table public.estate_join_requests drop constraint if exists estate_join_requests_reviewed_by_fkey;
alter table public.estate_join_requests add constraint estate_join_requests_reviewed_by_fkey
  foreign key (reviewed_by) references auth.users(id) on delete set null;
alter table public.estate_join_requests drop constraint if exists estate_join_requests_check;
alter table public.estate_join_requests add constraint estate_join_requests_reviewed_state_check
  check (
    (status = 'pending' and reviewed_by is null and reviewed_at is null)
    or (status <> 'pending' and reviewed_at is not null)
  );

alter table public.estate_records alter column updated_by drop not null;
alter table public.estate_records drop constraint if exists estate_records_updated_by_fkey;
alter table public.estate_records add constraint estate_records_updated_by_fkey
  foreign key (updated_by) references auth.users(id) on delete set null;

update public.estate_members
set role = 'member_1'
where role in ('data_entry', 'viewer');

insert into public.estate_role_features (estate_id, role, feature_key, enabled)
select e.id, r.role_name::public.estate_role, f.feature_key, f.feature_key = 'months'
from public.estates e
cross join unnest(array['member_1', 'member_2', 'member_3', 'member_4', 'member_5']::text[]) as r(role_name)
cross join unnest(array['overview', 'months', 'insights', 'forecast']::text[]) as f(feature_key)
on conflict (estate_id, role, feature_key) do nothing;

create or replace function public.seed_estate_role_features()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.estate_role_features (estate_id, role, feature_key, enabled)
  select new.id, r.role_name::public.estate_role, f.feature_key, f.feature_key = 'months'
  from unnest(array['member_1', 'member_2', 'member_3', 'member_4', 'member_5']::text[]) as r(role_name)
  cross join unnest(array['overview', 'months', 'insights', 'forecast']::text[]) as f(feature_key);
  return new;
end;
$$;

drop trigger if exists estates_seed_role_features on public.estates;
create trigger estates_seed_role_features
after insert on public.estates
for each row execute function public.seed_estate_role_features();

create or replace function public.is_estate_member(p_estate_id uuid)
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
      and m.access_status = 'active'
      and not exists (select 1 from public.global_account_bans b where b.user_id = m.user_id)
  );
$$;

create or replace function public.has_estate_role(p_estate_id uuid, p_roles public.estate_role[])
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
      and m.access_status = 'active'
      and m.role = any (p_roles)
      and not exists (select 1 from public.global_account_bans b where b.user_id = m.user_id)
  );
$$;

create or replace function public.get_estate_features(p_estate_id uuid)
returns text[]
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  v_role public.estate_role;
  v_features text[];
begin
  select m.role into v_role
  from public.estate_members m
  where m.estate_id = p_estate_id
    and m.user_id = (select auth.uid())
    and m.access_status = 'active'
    and not exists (select 1 from public.global_account_bans b where b.user_id = m.user_id);
  if not found then raise exception 'active estate membership required'; end if;

  if v_role in ('owner', 'manager') then
    return array['overview', 'months', 'insights', 'forecast', 'data']::text[];
  end if;

  select coalesce(array_agg(f.feature_key order by f.feature_key) filter (where f.enabled), array[]::text[])
  into v_features
  from public.estate_role_features f
  where f.estate_id = p_estate_id and f.role = v_role;
  return v_features;
end;
$$;

create or replace function public.list_estate_role_features(p_estate_id uuid)
returns table (role text, feature_key text, enabled boolean)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.has_estate_role(p_estate_id, array['owner']::public.estate_role[]) then
    raise exception 'only an estate owner can view role feature settings';
  end if;
  return query
    select f.role::text, f.feature_key, f.enabled
    from public.estate_role_features f
    where f.estate_id = p_estate_id
    order by f.role, f.feature_key;
end;
$$;

create or replace function public.set_estate_role_features(
  p_estate_id uuid,
  p_role public.estate_role,
  p_features text[]
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_all_features text[] := array['overview', 'months', 'insights', 'forecast'];
begin
  if not public.has_estate_role(p_estate_id, array['owner']::public.estate_role[]) then
    raise exception 'only an estate owner can change role feature settings';
  end if;
  if p_role is null or p_role not in ('member_1', 'member_2', 'member_3', 'member_4', 'member_5') then
    raise exception 'feature settings apply only to member roles';
  end if;
  if p_features is null or exists (
    select 1 from unnest(p_features) as f(feature_key)
    where not (f.feature_key = any (v_all_features))
  ) then raise exception 'invalid feature selection'; end if;
  if not ('months' = any (p_features)) then
    raise exception 'monthly coconut counts are always available to members';
  end if;

  insert into public.estate_role_features (estate_id, role, feature_key, enabled)
  select p_estate_id, p_role, f.feature_key, f.feature_key = any (p_features)
  from unnest(v_all_features) as f(feature_key)
  on conflict (estate_id, role, feature_key) do update set enabled = excluded.enabled;
end;
$$;

create or replace function public.set_estate_member_status(
  p_estate_id uuid,
  p_user_id uuid,
  p_status text
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_actor_role public.estate_role;
  v_target_role public.estate_role;
begin
  if p_status is null or p_status not in ('active', 'suspended') then
    raise exception 'invalid member status';
  end if;
  select m.role into v_actor_role
  from public.estate_members m
  where m.estate_id = p_estate_id and m.user_id = (select auth.uid()) and m.access_status = 'active';
  if not found or not public.has_estate_role(p_estate_id, array['owner', 'manager']::public.estate_role[]) then
    raise exception 'owner or manager role required to manage members';
  end if;
  select m.role into v_target_role
  from public.estate_members m
  where m.estate_id = p_estate_id and m.user_id = p_user_id
  for update;
  if not found then raise exception 'member not found'; end if;
  if v_target_role = 'owner' then raise exception 'the estate owner cannot be suspended'; end if;
  if v_actor_role = 'manager' and v_target_role not in ('member_1', 'member_2', 'member_3', 'member_4', 'member_5') then
    raise exception 'managers can manage member roles only';
  end if;
  update public.estate_members set access_status = p_status
  where estate_id = p_estate_id and user_id = p_user_id;
end;
$$;

create or replace function public.change_estate_member_role(p_estate_id uuid, p_user_id uuid, p_role public.estate_role)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_actor_role public.estate_role;
  v_target_role public.estate_role;
begin
  select m.role into v_actor_role
  from public.estate_members m
  where m.estate_id = p_estate_id and m.user_id = (select auth.uid()) and m.access_status = 'active';
  if not found or not public.has_estate_role(p_estate_id, array['owner', 'manager']::public.estate_role[]) then
    raise exception 'owner or manager role required to change member roles';
  end if;
  select m.role into v_target_role from public.estate_members m
  where m.estate_id = p_estate_id and m.user_id = p_user_id for update;
  if not found then raise exception 'member not found'; end if;
  if v_target_role = 'owner' or p_role = 'owner' then raise exception 'owner role cannot be changed here'; end if;
  if p_role is null or p_role not in ('manager', 'member_1', 'member_2', 'member_3', 'member_4', 'member_5') then
    raise exception 'invalid member role';
  end if;
  if v_actor_role = 'manager' and (
    v_target_role not in ('member_1', 'member_2', 'member_3', 'member_4', 'member_5')
    or p_role not in ('member_1', 'member_2', 'member_3', 'member_4', 'member_5')
  ) then raise exception 'managers can manage member roles only'; end if;
  update public.estate_members set role = p_role
  where estate_id = p_estate_id and user_id = p_user_id;
end;
$$;

create or replace function public.remove_estate_member(p_estate_id uuid, p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_actor_role public.estate_role;
  v_target_role public.estate_role;
begin
  select m.role into v_actor_role
  from public.estate_members m
  where m.estate_id = p_estate_id and m.user_id = (select auth.uid()) and m.access_status = 'active';
  if not found or not public.has_estate_role(p_estate_id, array['owner', 'manager']::public.estate_role[]) then
    raise exception 'owner or manager role required to remove members';
  end if;
  select m.role into v_target_role from public.estate_members m
  where m.estate_id = p_estate_id and m.user_id = p_user_id for update;
  if not found then raise exception 'member not found'; end if;
  if v_target_role = 'owner' then raise exception 'the estate owner cannot be removed'; end if;
  if v_actor_role = 'manager' and v_target_role not in ('member_1', 'member_2', 'member_3', 'member_4', 'member_5') then
    raise exception 'managers can manage member roles only';
  end if;
  delete from public.estate_members where estate_id = p_estate_id and user_id = p_user_id;
end;
$$;

create or replace function public.review_estate_request(
  p_request_id uuid,
  p_approve boolean,
  p_role public.estate_role default 'member_1'
)
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
  if p_approve and (
    p_role is null
    or p_role not in ('manager', 'member_1', 'member_2', 'member_3', 'member_4', 'member_5')
  ) then
    raise exception 'choose a valid member role';
  end if;

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

alter function public.sync_estate_records(uuid, jsonb) rename to sync_estate_records_unrestricted;
revoke all on function public.sync_estate_records_unrestricted(uuid, jsonb) from public, anon, authenticated;

create function public.sync_estate_records(p_estate_id uuid, p_changes jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.has_estate_role(p_estate_id, array['owner']::public.estate_role[]) then
    raise exception 'only the estate owner can modify estate records';
  end if;
  return public.sync_estate_records_unrestricted(p_estate_id, p_changes);
end;
$$;

create or replace function public.list_estate_records(p_estate_id uuid)
returns table (
  record_type text,
  record_id text,
  payload jsonb,
  revision bigint,
  deleted_at timestamptz,
  updated_at timestamptz
)
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  v_role public.estate_role;
  v_features text[];
  v_full_access boolean;
begin
  select m.role into v_role
  from public.estate_members m
  where m.estate_id = p_estate_id and m.user_id = (select auth.uid()) and m.access_status = 'active';
  if not found or exists (select 1 from public.global_account_bans b where b.user_id = (select auth.uid())) then
    raise exception 'active estate membership required';
  end if;

  if v_role in ('owner', 'manager') then
    return query
      select r.record_type, r.record_id, r.payload, r.revision, r.deleted_at, r.updated_at
      from public.estate_records r where r.estate_id = p_estate_id
      order by r.record_type, r.record_id;
    return;
  end if;

  select coalesce(array_agg(f.feature_key) filter (where f.enabled), array[]::text[])
  into v_features
  from public.estate_role_features f
  where f.estate_id = p_estate_id and f.role = v_role;
  if coalesce(cardinality(v_features), 0) = 0 then return; end if;

  select exists (
    select 1 from unnest(v_features) as f(feature_key) where f.feature_key <> 'months'
  ) into v_full_access;
  if v_full_access then
    return query
      select r.record_type, r.record_id,
        case
          when r.deleted_at is not null then null
          when r.record_type = 'settings' then jsonb_set(r.payload, '{shareName}', '"Share"'::jsonb, true)
          when r.record_type = 'harvest' then
            (r.payload - array['buyer', 'contact', 'by', 'note', 'otherNote', 'payments', 'customDeds']::text[])
            || jsonb_build_object(
              'buyer', '',
              'contact', '',
              'by', '',
              'note', '',
              'otherNote', '',
              'customDeds', (
                select coalesce(jsonb_agg(jsonb_build_object(
                  'name', 'Custom deduction',
                  'amount', item.value->'amount',
                  'kind', item.value->'kind'
                )), '[]'::jsonb)
                from jsonb_array_elements(
                  case when jsonb_typeof(r.payload->'customDeds') = 'array'
                    then r.payload->'customDeds' else '[]'::jsonb end
                ) as item(value)
              ),
              'payments', (
                select coalesce(jsonb_agg(jsonb_build_object(
                  'date', item.value->'date',
                  'amount', item.value->'amount'
                )), '[]'::jsonb)
                from jsonb_array_elements(
                  case when jsonb_typeof(r.payload->'payments') = 'array'
                    then r.payload->'payments' else '[]'::jsonb end
                ) as item(value)
              )
            )
          when r.record_type = 'other_income' then
            (r.payload - 'note') || jsonb_build_object('note', 'Other income')
          else null
        end,
        r.revision, r.deleted_at, r.updated_at
      from public.estate_records r
      where r.estate_id = p_estate_id
        and r.record_type in ('settings', 'harvest', 'other_income')
      order by r.record_type, r.record_id;
    return;
  end if;

  return query
    select r.record_type, r.record_id,
      case when r.deleted_at is null then jsonb_build_object(
        'id', r.payload->'id',
        'date', r.payload->'date',
        'total', r.payload->'total'
      ) else null end,
      r.revision, r.deleted_at, r.updated_at
    from public.estate_records r
    where r.estate_id = p_estate_id and r.record_type = 'harvest'
    order by r.record_id;
end;
$$;

create or replace function public.enforce_owner_record_writes()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_estate_id uuid;
begin
  if tg_op = 'DELETE' then v_estate_id := old.estate_id; else v_estate_id := new.estate_id; end if;
  if not public.has_estate_role(v_estate_id, array['owner']::public.estate_role[]) then
    raise exception 'only the estate owner can modify estate records';
  end if;
  if tg_op = 'DELETE' then return old; end if;
  return new;
end;
$$;

drop trigger if exists estate_records_owner_write_only on public.estate_records;
create trigger estate_records_owner_write_only
before insert or update or delete on public.estate_records
for each row execute function public.enforce_owner_record_writes();

create or replace function public.list_estate_members(p_estate_id uuid)
returns table (
  user_id uuid,
  email text,
  display_name text,
  role text,
  access_status text,
  global_banned boolean
)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.has_estate_role(p_estate_id, array['owner', 'manager']::public.estate_role[]) then
    raise exception 'owner or manager role required to list members';
  end if;
  return query
    select m.user_id, u.email::text, m.display_name, m.role::text, m.access_status,
      exists (select 1 from public.global_account_bans b where b.user_id = m.user_id)
    from public.estate_members m
    join auth.users u on u.id = m.user_id
    where m.estate_id = p_estate_id
    order by case when m.role = 'owner' then 0 when m.role = 'manager' then 1 else 2 end,
      m.approved_at asc;
end;
$$;

drop policy if exists "members can read estate records" on public.estate_records;
revoke select on public.estate_records from authenticated;
grant execute on function public.get_estate_features(uuid) to authenticated;
grant execute on function public.list_estate_role_features(uuid) to authenticated;
grant execute on function public.set_estate_role_features(uuid, public.estate_role, text[]) to authenticated;
grant execute on function public.list_estate_members(uuid) to authenticated;
grant execute on function public.set_estate_member_status(uuid, uuid, text) to authenticated;
grant execute on function public.list_estate_records(uuid) to authenticated;
grant execute on function public.sync_estate_records(uuid, jsonb) to authenticated;

revoke all on function public.seed_estate_role_features() from public, anon, authenticated;
revoke all on function public.enforce_owner_record_writes() from public, anon, authenticated;
revoke all on function public.get_estate_features(uuid) from public, anon;
revoke all on function public.list_estate_role_features(uuid) from public, anon;
revoke all on function public.set_estate_role_features(uuid, public.estate_role, text[]) from public, anon;
revoke all on function public.list_estate_members(uuid) from public, anon;
revoke all on function public.set_estate_member_status(uuid, uuid, text) from public, anon;
revoke all on function public.list_estate_records(uuid) from public, anon;
revoke all on function public.sync_estate_records(uuid, jsonb) from public, anon;
revoke all on function public.change_estate_member_role(uuid, uuid, public.estate_role) from public, anon;
revoke all on function public.remove_estate_member(uuid, uuid) from public, anon;
revoke all on function public.review_estate_request(uuid, boolean, public.estate_role) from public, anon;

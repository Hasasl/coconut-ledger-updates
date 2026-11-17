create or replace function public.enforce_owner_record_writes()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_estate_id uuid;
  v_manager_device_sync_estate text;
begin
  if tg_op = 'DELETE' then v_estate_id := old.estate_id; else v_estate_id := new.estate_id; end if;
  if not public.has_estate_role(v_estate_id, array['owner']::public.estate_role[]) then
    v_manager_device_sync_estate := current_setting('app.manager_device_sync_estate', true);
    if not public.has_estate_role(v_estate_id, array['manager']::public.estate_role[])
      or v_manager_device_sync_estate is distinct from v_estate_id::text then
      raise exception 'only the estate owner can modify estate records';
    end if;
  end if;
  if tg_op = 'DELETE' then return old; end if;
  return new;
end;
$$;

create function public.sync_estate_records_from_device(p_estate_id uuid, p_changes jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.has_estate_role(p_estate_id, array['manager']::public.estate_role[]) then
    raise exception 'active estate manager role required';
  end if;
  perform set_config('app.manager_device_sync_estate', p_estate_id::text, true);
  return public.sync_estate_records_unrestricted(p_estate_id, p_changes);
end;
$$;

revoke all on function public.sync_estate_records_from_device(uuid, jsonb) from public, anon;
grant execute on function public.sync_estate_records_from_device(uuid, jsonb) to authenticated;

notify pgrst, 'reload schema';

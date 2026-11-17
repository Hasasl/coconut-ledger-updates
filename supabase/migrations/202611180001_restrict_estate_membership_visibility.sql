drop policy if exists "members can view approved memberships" on public.estate_members;
drop policy if exists "members can view their own active membership" on public.estate_members;

create policy "members can view their own active membership"
on public.estate_members for select to authenticated
using (
  user_id = (select auth.uid())
  and public.is_estate_member(estate_id)
);

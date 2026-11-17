import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function respond(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (request: Request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return respond(405, { error: "POST is required." });

  const projectUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const authorization = request.headers.get("Authorization");
  if (!projectUrl || !serviceRoleKey) return respond(500, { error: "Account management is not configured." });
  if (!authorization?.startsWith("Bearer ")) return respond(401, { error: "Sign in is required." });

  const input = await request.json().catch(() => null);
  if (
    !input ||
    !["ban", "unban", "delete"].includes(input.action) ||
    !uuidPattern.test(input.user_id || "") ||
    !uuidPattern.test(input.estate_id || "")
  ) {
    return respond(400, { error: "A valid action, account ID, and estate ID are required." });
  }

  const supabase = createClient(projectUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const token = authorization.slice("Bearer ".length);
  const { data: authData, error: authError } = await supabase.auth.getUser(token);
  if (authError || !authData.user) return respond(401, { error: "The sign-in token is invalid or expired." });
  const actorId = authData.user.id;
  const targetId = input.user_id as string;
  const estateId = input.estate_id as string;
  if (targetId === actorId) return respond(400, { error: "You cannot manage your own account." });

  const { data: actorBan, error: actorBanError } = await supabase
    .from("global_account_bans")
    .select("user_id")
    .eq("user_id", actorId)
    .maybeSingle();
  if (actorBanError) return respond(500, { error: "Could not verify the estate owner account." });
  if (actorBan) return respond(403, { error: "A globally banned account cannot manage other accounts." });

  const { data: actorMembership, error: actorError } = await supabase
    .from("estate_members")
    .select("role, access_status")
    .eq("estate_id", estateId)
    .eq("user_id", actorId)
    .maybeSingle();
  if (actorError) return respond(500, { error: "Could not verify the estate owner." });
  if (!actorMembership || actorMembership.role !== "owner" || actorMembership.access_status !== "active") {
    return respond(403, { error: "Only an active estate owner can manage global accounts." });
  }

  const { data: targetMembership, error: targetError } = await supabase
    .from("estate_members")
    .select("role")
    .eq("estate_id", estateId)
    .eq("user_id", targetId)
    .maybeSingle();
  if (targetError) return respond(500, { error: "Could not verify the target account." });
  if (!targetMembership) return respond(404, { error: "The account is not a member of this estate." });
  if (targetMembership.role === "owner") {
    return respond(409, { error: "An estate owner cannot be globally banned or deleted." });
  }

  const { data: ownedEstates, error: ownershipError } = await supabase
    .from("estate_members")
    .select("estate_id")
    .eq("user_id", targetId)
    .eq("role", "owner")
    .limit(1);
  if (ownershipError || !ownedEstates) return respond(500, { error: "Could not verify account ownership." });
  if (ownedEstates.length) {
    return respond(409, { error: "An account that owns another estate cannot be globally banned or deleted." });
  }

  if (input.action === "ban") {
    const { data: existingBan, error: existingBanError } = await supabase
      .from("global_account_bans")
      .select("user_id")
      .eq("user_id", targetId)
      .maybeSingle();
    if (existingBanError) return respond(500, { error: "Could not check the current global ban." });
    const { error: banRecordError } = await supabase.from("global_account_bans").upsert(
      { user_id: targetId, banned_by: actorId, estate_id: estateId },
      { onConflict: "user_id" },
    );
    if (banRecordError) return respond(500, { error: "Could not record the global account ban." });

    const { error: authBanError } = await supabase.auth.admin.updateUserById(targetId, {
      ban_duration: "876000h",
    });
    if (authBanError) {
      if (!existingBan) {
        const { error: rollbackError } = await supabase.from("global_account_bans").delete().eq("user_id", targetId);
        if (rollbackError)
          return respond(500, { error: "The login ban failed and its access block could not be rolled back." });
      }
      return respond(502, { error: "Could not apply the global login ban." });
    }
    return respond(200, { ok: true });
  }

  if (input.action === "unban") {
    const { error: authUnbanError } = await supabase.auth.admin.updateUserById(targetId, {
      ban_duration: "none",
    });
    if (authUnbanError) return respond(502, { error: "Could not restore account sign-in." });
    const { error: accessError } = await supabase.from("global_account_bans").delete().eq("user_id", targetId);
    if (accessError) return respond(500, { error: "Sign-in was restored, but the estate access block remains." });
    return respond(200, { ok: true });
  }

  const { error: deleteError } = await supabase.auth.admin.deleteUser(targetId);
  if (deleteError) return respond(502, { error: "Could not delete the account." });
  return respond(200, { ok: true });
});

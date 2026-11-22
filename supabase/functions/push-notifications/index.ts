const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-release-token",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const uuidPattern = /^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
let cachedFcmToken = "";
let cachedFcmTokenExpiresAt = 0;

function jsonResponse(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function requiredEnv(name: string) {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing server configuration: ${name}`);
  return value;
}

function serviceHeaders() {
  const key = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
  return { apikey: key, Authorization: `Bearer ${key}` };
}

async function restGet(table: string, query: Record<string, string>) {
  const url = new URL(`/rest/v1/${table}`, requiredEnv("SUPABASE_URL"));
  for (const [key, value] of Object.entries(query)) url.searchParams.set(key, value);
  const response = await fetch(url, { headers: serviceHeaders() });
  if (!response.ok) throw new Error("Push service could not read notification targets.");
  return await response.json();
}

async function restWrite(table: string, query: string, method: string, body?: unknown, prefer?: string) {
  const url = new URL(`/rest/v1/${table}${query}`, requiredEnv("SUPABASE_URL"));
  const response = await fetch(url, {
    method,
    headers: {
      ...serviceHeaders(),
      "Content-Type": "application/json",
      ...(prefer ? { Prefer: prefer } : {}),
    },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
  if (!response.ok) throw new Error("Push service could not update a device registration.");
}

async function authenticate(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  if (!/^Bearer\s+\S+$/i.test(authorization)) return null;
  const response = await fetch(`${requiredEnv("SUPABASE_URL")}/auth/v1/user`, {
    headers: {
      apikey: requiredEnv("SUPABASE_ANON_KEY"),
      Authorization: authorization,
    },
  });
  if (!response.ok) return null;
  const user = await response.json();
  return typeof user.id === "string" && uuidPattern.test(user.id) ? user : null;
}

function base64Url(bytes: Uint8Array) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function pemBytes(pem: string) {
  const encoded = pem.replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\s/g, "");
  return Uint8Array.from(atob(encoded), (char) => char.charCodeAt(0));
}

async function fcmAccessToken() {
  if (cachedFcmToken && Date.now() < cachedFcmTokenExpiresAt - 60_000) return cachedFcmToken;
  const serviceAccount = JSON.parse(requiredEnv("FIREBASE_SERVICE_ACCOUNT_JSON"));
  if (!serviceAccount.client_email || !serviceAccount.private_key)
    throw new Error("Firebase service account configuration is invalid.");
  const projectId = requiredEnv("FIREBASE_PROJECT_ID");
  if (serviceAccount.project_id !== projectId) throw new Error("Firebase project configuration does not match.");
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(new TextEncoder().encode(JSON.stringify({ alg: "RS256", typ: "JWT" })));
  const claims = base64Url(new TextEncoder().encode(JSON.stringify({
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/firebase.messaging",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })));
  const unsigned = `${header}.${claims}`;
  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemBytes(serviceAccount.private_key.replace(/\\n/g, "\n")),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = new Uint8Array(await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(unsigned)));
  const assertion = `${unsigned}.${base64Url(signature)}`;
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  if (!response.ok) throw new Error("Firebase authentication failed.");
  const result = await response.json();
  if (typeof result.access_token !== "string" || typeof result.expires_in !== "number")
    throw new Error("Firebase returned an invalid access token.");
  cachedFcmToken = result.access_token;
  cachedFcmTokenExpiresAt = Date.now() + result.expires_in * 1000;
  return cachedFcmToken;
}

async function sendFcmMessage(message: Record<string, unknown>) {
  const projectId = requiredEnv("FIREBASE_PROJECT_ID");
  const response = await fetch(
    `https://fcm.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/messages:send`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${await fcmAccessToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: { ...message, android: { priority: "HIGH" } } }),
    },
  );
  if (!response.ok) {
    const body = await response.text();
    let errorCode = "";
    try {
      const result = JSON.parse(body);
      errorCode = Array.isArray(result.error?.details)
        ? result.error.details.find((detail: { errorCode?: string }) => typeof detail.errorCode === "string")?.errorCode || ""
        : "";
    } catch {
      errorCode = "";
    }
    throw new Error(`Firebase rejected a push message (${response.status}${errorCode ? `, ${errorCode}` : ""}).`);
  }
}

async function claimEstateNotification(estateId: string, eventType: string, cooldown: number, recipientUserId?: string) {
  const url = new URL("/rest/v1/rpc/claim_push_notification", requiredEnv("SUPABASE_URL"));
  const key = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
  const response = await fetch(url, {
    method: "POST",
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      p_estate_id: estateId,
      p_event_type: eventType,
      p_cooldown_seconds: cooldown,
      p_recipient_user_id: recipientUserId || null,
    }),
  });
  if (!response.ok) throw new Error("Push service could not reserve an estate notification.");
  return response.json() === true;
}

async function sendToUsers(userIds: string[], title: string, body: string, type: string) {
  const ids = [...new Set(userIds.filter((id) => uuidPattern.test(id)))];
  if (!ids.length) return 0;
  const registrations = await restGet("push_devices", {
    select: "fcm_token",
    user_id: `in.(${ids.join(",")})`,
  });
  const tokens = [...new Set(registrations.map((row: { fcm_token: string }) => row.fcm_token))];
  let sent = 0;
  for (let offset = 0; offset < tokens.length; offset += 25) {
    const batch = tokens.slice(offset, offset + 25);
    const outcomes = await Promise.allSettled(batch.map(async (token) => {
      await sendFcmMessage({
        token,
        data: { title, body, type },
      });
    }));
    for (let index = 0; index < outcomes.length; index++) {
      const outcome = outcomes[index];
      if (outcome.status === "fulfilled") {
        sent++;
      } else {
        const message = outcome.reason instanceof Error ? outcome.reason.message : "";
        if (message.includes("UNREGISTERED") || message.includes("registration-token-not-registered")) {
          await restWrite(
            "push_devices",
            `?fcm_token=eq.${encodeURIComponent(batch[index])}`,
            "DELETE",
          );
        } else {
          throw outcome.reason;
        }
      }
    }
  }
  return sent;
}

function safeEqual(a: string, b: string) {
  let mismatch = a.length ^ b.length;
  const length = Math.max(a.length, b.length);
  for (let i = 0; i < length; i++) mismatch |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return mismatch === 0;
}

async function sendRelease(request: Request, body: Record<string, unknown>) {
  const supplied = request.headers.get("x-release-token") || "";
  if (!safeEqual(supplied, requiredEnv("PUSH_RELEASE_SECRET"))) return jsonResponse(401, { error: "Unauthorized." });
  const version = typeof body.version === "string" && /^\d+\.\d+(?:\.\d+)?$/.test(body.version)
    ? body.version
    : "";
  if (!version) return jsonResponse(400, { error: "A valid release version is required." });
  await sendFcmMessage({
    topic: "app-updates",
    data: {
      title: "Coconut Ledger update",
      body: `Version ${version} is available. Open the app to update.`,
      type: "release",
    },
  });
  return jsonResponse(200, { sent: true });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return jsonResponse(405, { error: "Method not allowed." });

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > 8192)
      return jsonResponse(413, { error: "Request is too large." });
    body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body))
      return jsonResponse(400, { error: "Invalid request." });
  } catch {
    return jsonResponse(400, { error: "Invalid request." });
  }

  try {
    if (body.event === "release") return await sendRelease(request, body);
    const user = await authenticate(request);
    if (!user) return jsonResponse(401, { error: "Sign in is required." });

    if (body.event === "register_device") {
      const token = typeof body.token === "string" ? body.token : "";
      if (token.length < 100 || token.length > 4096 || /[\u0000-\u001f]/.test(token))
        return jsonResponse(400, { error: "Invalid device registration." });
      await restWrite(
        "push_devices",
        "?on_conflict=fcm_token",
        "POST",
        { fcm_token: token, user_id: user.id, platform: "android", updated_at: new Date().toISOString() },
        "resolution=merge-duplicates,return=minimal",
      );
      return jsonResponse(200, { registered: true });
    }

    if (body.event === "unregister_device") {
      const token = typeof body.token === "string" ? body.token : "";
      if (token.length < 100 || token.length > 4096)
        return jsonResponse(400, { error: "Invalid device registration." });
      await restWrite(
        "push_devices",
        `?user_id=eq.${user.id}&fcm_token=eq.${encodeURIComponent(token)}`,
        "DELETE",
      );
      return jsonResponse(200, { registered: false });
    }

    if (body.event === "bug_report") {
      const reportId = typeof body.report_id === "string" ? body.report_id : "";
      if (!uuidPattern.test(reportId)) return jsonResponse(400, { error: "Invalid report." });
      const reports = await restGet("bug_reports", {
        select: "id",
        id: `eq.${reportId}`,
        user_id: `eq.${user.id}`,
        limit: "1",
      });
      if (!reports.length) return jsonResponse(404, { error: "Report not found." });
      const admins: string[] = [];
      for (let page = 1; ; page++) {
        const response = await fetch(
          `${requiredEnv("SUPABASE_URL")}/auth/v1/admin/users?page=${page}&per_page=1000`,
          { headers: serviceHeaders() },
        );
        if (!response.ok) throw new Error("Push service could not read developer registrations.");
        const result = await response.json();
        const users = Array.isArray(result.users) ? result.users : [];
        for (const candidate of users) {
          if (candidate.app_metadata?.bug_report_admin === true && uuidPattern.test(candidate.id))
            admins.push(candidate.id);
        }
        if (users.length < 1000) break;
      }
      const sent = await sendToUsers(admins, "New problem report", "A user submitted a new app problem report.", "bug_report");
      return jsonResponse(200, { sent });
    }

    const estateId = typeof body.estate_id === "string" && uuidPattern.test(body.estate_id)
      ? body.estate_id
      : "";
    if (!estateId) return jsonResponse(400, { error: "Invalid estate." });

    if (body.event === "estate_change") {
      const actor = await restGet("estate_members", {
        select: "role",
        estate_id: `eq.${estateId}`,
        user_id: `eq.${user.id}`,
        access_status: "eq.active",
        limit: "1",
      });
      if (!actor.length || !["owner", "manager", "data_entry"].includes(actor[0].role))
        return jsonResponse(403, { error: "Estate write access is required." });
      if (!await claimEstateNotification(estateId, "estate_change", 120))
        return jsonResponse(200, { sent: 0, throttled: true });
      const members = await restGet("estate_members", {
        select: "user_id",
        estate_id: `eq.${estateId}`,
        access_status: "eq.active",
        user_id: `neq.${user.id}`,
      });
      const sent = await sendToUsers(
        members.map((member: { user_id: string }) => member.user_id),
        "Estate updated",
        "New estate information is available. Open the app to sync.",
        "estate_change",
      );
      return jsonResponse(200, { sent });
    }

    if (body.event === "join_request") {
      const requests = await restGet("estate_join_requests", {
        select: "id",
        estate_id: `eq.${estateId}`,
        user_id: `eq.${user.id}`,
        status: "eq.pending",
        limit: "1",
      });
      if (!requests.length) return jsonResponse(403, { error: "No pending join request was found." });
      if (!await claimEstateNotification(estateId, "join_request", 30))
        return jsonResponse(200, { sent: 0, throttled: true });
      const owners = await restGet("estate_members", {
        select: "user_id",
        estate_id: `eq.${estateId}`,
        role: "eq.owner",
        access_status: "eq.active",
      });
      const sent = await sendToUsers(
        owners.map((owner: { user_id: string }) => owner.user_id),
        "Estate join request",
        "A user is waiting for approval to join your estate.",
        "join_request",
      );
      return jsonResponse(200, { sent });
    }

    if (body.event === "join_reviewed") {
      const requestId = typeof body.request_id === "string" ? body.request_id : "";
      if (!uuidPattern.test(requestId)) return jsonResponse(400, { error: "Invalid join request." });
      const requests = await restGet("estate_join_requests", {
        select: "user_id,status",
        id: `eq.${requestId}`,
        estate_id: `eq.${estateId}`,
        reviewed_by: `eq.${user.id}`,
        limit: "1",
      });
      if (!requests.length || !["approved", "rejected"].includes(requests[0].status))
        return jsonResponse(403, { error: "Join request review was not found." });
      const sent = await sendToUsers(
        [requests[0].user_id],
        "Estate join request updated",
        requests[0].status === "approved"
          ? "Your request was approved. Open the app to access the estate."
          : "Your request was declined.",
        "join_reviewed",
      );
      return jsonResponse(200, { sent });
    }

    if (body.event === "membership_change") {
      const targetUserId = typeof body.user_id === "string" && uuidPattern.test(body.user_id)
        ? body.user_id
        : "";
      if (!targetUserId) return jsonResponse(400, { error: "Invalid member." });
      const actor = await restGet("estate_members", {
        select: "role",
        estate_id: `eq.${estateId}`,
        user_id: `eq.${user.id}`,
        access_status: "eq.active",
        limit: "1",
      });
      if (!actor.length || !["owner", "manager"].includes(actor[0].role))
        return jsonResponse(403, { error: "Estate management access is required." });
      const target = await restGet("estate_members", {
        select: "user_id",
        estate_id: `eq.${estateId}`,
        user_id: `eq.${targetUserId}`,
        limit: "1",
      });
      if (!target.length) return jsonResponse(404, { error: "Estate member not found." });
      if (!await claimEstateNotification(estateId, "membership_change", 30, targetUserId))
        return jsonResponse(200, { sent: 0, throttled: true });
      const sent = await sendToUsers(
        [targetUserId],
        "Estate access updated",
        "Your estate role or access has changed. Open the app to sync.",
        "membership_change",
      );
      return jsonResponse(200, { sent });
    }

    return jsonResponse(400, { error: "Unsupported notification event." });
  } catch (error) {
    console.error("Push notification request failed:", error instanceof Error ? error.message : "unknown error");
    return jsonResponse(500, { error: "Push notification could not be sent. Check server configuration." });
  }
});

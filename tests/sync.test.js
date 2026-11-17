const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "web", "sync.js"), "utf8");
const appSource = fs.readFileSync(path.join(__dirname, "..", "web", "app.js"), "utf8");

function createClient(fetch) {
  const values = new Map(),
    context = {
      fetch,
      localStorage: {
        getItem: (key) => values.get(key) || null,
        setItem: (key, value) => values.set(key, value),
        removeItem: (key) => values.delete(key),
      },
      atob,
      Blob,
      window: {},
    };
  vm.runInNewContext(source, context);
  return { client: context.window.EstateSync, values };
}

function response(data, status = 200, headers = {}) {
  return {
    ok: status >= 200 && status < 300,
    status,
    text: async () => JSON.stringify(data),
    headers: { get: (name) => headers[name.toLowerCase()] || null },
  };
}

test("sync configuration accepts only an HTTPS Supabase project URL", () => {
  const { client } = createClient(async () => response({}));
  assert.equal(client.getConfig().url, "https://ukmyztfewlklzitmpccc.supabase.co");
  assert.match(client.getConfig().anonKey, /^sb_publishable_/);
  assert.throws(() => client.setConfig({ url: "http://estate.supabase.co", anonKey: "public" }));
  assert.throws(() => client.setConfig({ url: "https://estate.supabase.co.attacker.test", anonKey: "public" }));
  assert.throws(() => client.setConfig({ url: "https://estate.supabase.co", anonKey: "sb_secret_test" }), /service_role key/);
  const serviceRoleJwt = `header.${Buffer.from(JSON.stringify({ role: "service_role" })).toString("base64url")}.signature`;
  assert.throws(() => client.setConfig({ url: "https://estate.supabase.co", anonKey: serviceRoleJwt }), /service_role key/);
  assert.equal(client.setConfig({ url: "https://estate.supabase.co/", anonKey: "public" }).configured, true);
});

test("developer reset restores the bundled connection and clears the local session and override", async () => {
  const { client, values } = createClient(async (url) =>
    url.endsWith("/auth/v1/token?grant_type=password")
      ? response({
          access_token: "access",
          refresh_token: "refresh",
          expires_in: 3600,
          user: { id: "user-1" },
        })
      : response({}),
  );
  client.setConfig({ url: "https://other.supabase.co", anonKey: "public" });
  await client.signIn("owner@example.test", "long-password");
  assert.equal(client.publicStatus().signedIn, true);
  client.resetConfig();
  assert.equal(client.getConfig().url, "https://ukmyztfewlklzitmpccc.supabase.co");
  assert.match(client.getConfig().anonKey, /^sb_publishable_/);
  assert.equal(client.publicStatus().signedIn, false);
  assert.equal(values.has("coconut-ledger-sync-config-v1"), false);
});

test("saved estate selection restores only for the signed-in member", async () => {
  const { client } = createClient(async (url) =>
    url.endsWith("/auth/v1/token?grant_type=password")
      ? response({
          access_token: "access",
          refresh_token: "refresh",
          expires_in: 3600,
          user: { id: "user-1" },
        })
      : response({}),
  );
  client.setConfig({ url: "https://estate.supabase.co", anonKey: "public" });
  await client.signIn("user@example.test", "long-password");

  assert.equal(client.restoreEstateSelection("estate-1", "user-1", [{ estate_id: "estate-1" }]), "estate-1");
  assert.equal(client.restoreEstateSelection("estate-1", "", [{ estate_id: "estate-1" }]), "estate-1");
  assert.equal(client.restoreEstateSelection("estate-1", "other-user", [{ estate_id: "estate-1" }]), "");
  assert.equal(client.restoreEstateSelection("estate-1", "", []), "");
});

test("estate listing only returns the signed-in user's membership and role", async () => {
  let membershipUrl = "";
  const { client } = createClient(async (url) => {
    if (url.endsWith("/auth/v1/token?grant_type=password"))
      return response({
        access_token: "access",
        refresh_token: "refresh",
        expires_in: 3600,
        user: { id: "member-1" },
      });
    membershipUrl = url;
    return response([
      { estate_id: "estate-1", user_id: "owner-1", role: "owner" },
      { estate_id: "estate-1", user_id: "member-1", role: "member_1" },
    ]);
  });
  client.setConfig({ url: "https://estate.supabase.co", anonKey: "public" });
  await client.signIn("member@example.test", "long-password");

  const estates = await client.listEstates();
  assert.match(membershipUrl, /user_id=eq\.member-1&/);
  assert.equal(estates.length, 1);
  assert.equal(estates[0].user_id, "member-1");
  assert.equal(estates[0].role, "member_1");
});

test("join request listing provides the id field used by approve and reject controls", async () => {
  const reviewCalls = [],
    { client } = createClient(async (url, options) => {
      if (url.endsWith("/auth/v1/token?grant_type=password"))
        return response({
          access_token: "access",
          refresh_token: "refresh",
          expires_in: 3600,
          user: { id: "owner-1" },
        });
      if (url.endsWith("/rest/v1/rpc/list_estate_join_requests"))
        return response([
          {
            request_id: "request-1",
            user_id: "member-1",
            email: "member@example.test",
            display_name: "Member",
            requested_at: "2026-11-17T00:00:00Z",
          },
        ]);
      if (url.endsWith("/rest/v1/rpc/review_estate_request")) reviewCalls.push(JSON.parse(options.body));
      return response(null);
    });
  client.setConfig({ url: "https://estate.supabase.co", anonKey: "public" });
  await client.signIn("owner@example.test", "long-password");
  const [request] = await client.listRequests("estate-1");
  assert.equal(request.id, "request-1");
  assert.equal(request.request_id, "request-1");
  await client.reviewRequest(request.id, true, "member_2");
  await client.reviewRequest(request.id, false);
  assert.deepEqual(reviewCalls, [
    { p_request_id: "request-1", p_approve: true, p_role: "member_2" },
    { p_request_id: "request-1", p_approve: false, p_role: "member_1" },
  ]);
});

test("join requests submit the invite and require server confirmation", async () => {
  const submitted = [],
    { client } = createClient(async (url, options) => {
      if (url.endsWith("/auth/v1/token?grant_type=password"))
        return response({
          access_token: "access",
          refresh_token: "refresh",
          expires_in: 3600,
          user: { id: "member-1" },
        });
      if (url.endsWith("/rest/v1/rpc/request_estate_access")) {
        submitted.push(JSON.parse(options.body));
        return response(
          submitted.length === 1
            ? [{ estate_id: "estate-1", estate_name: "Coconut Estate", request_status: "pending" }]
            : [],
        );
      }
      return response(null);
    });
  client.setConfig({ url: "https://estate.supabase.co", anonKey: "public" });
  await client.signIn("member@example.test", "long-password");

  const request = await client.requestAccess("a".repeat(64), "Member");
  assert.equal(request.estate_name, "Coconut Estate");
  assert.equal(request.request_status, "pending");
  await assert.rejects(client.requestAccess("b".repeat(64), "Member"), /did not confirm the join request/);
  assert.deepEqual(submitted, [
    { p_invite_code: "a".repeat(64), p_display_name: "Member" },
    { p_invite_code: "b".repeat(64), p_display_name: "Member" },
  ]);
});

test("each invite creation returns a fresh server-generated code", async () => {
  const calls = [],
    { client } = createClient(async (url, options) => {
      if (url.endsWith("/auth/v1/token?grant_type=password"))
        return response({
          access_token: "access",
          refresh_token: "refresh",
          expires_in: 3600,
          user: { id: "owner-1" },
        });
      if (url.endsWith("/rest/v1/rpc/create_estate_invite")) {
        calls.push(JSON.parse(options.body));
        const index = calls.length;
        return response([
          {
            invite_id: `invite-${index}`,
            invite_code: String(index).repeat(64),
            expires_at: `2026-11-${17 + index}T00:00:00Z`,
          },
        ]);
      }
      return response(null);
    });
  client.setConfig({ url: "https://estate.supabase.co", anonKey: "public" });
  await client.signIn("owner@example.test", "long-password");

  const first = await client.createInvite("estate-1");
  const second = await client.createInvite("estate-1");
  assert.notEqual(first.invite_code, second.invite_code);
  assert.notEqual(first.invite_id, second.invite_id);
  assert.deepEqual(calls, [{ p_estate_id: "estate-1" }, { p_estate_id: "estate-1" }]);
  const invalidClient = createClient(async (url) =>
    url.endsWith("/auth/v1/token?grant_type=password")
      ? response({
          access_token: "access",
          refresh_token: "refresh",
          expires_in: 3600,
          user: { id: "owner-1" },
        })
      : response([{ invite_id: "invite-bad", invite_code: "old-code", expires_at: "2026-11-18T00:00:00Z" }]),
  ).client;
  invalidClient.setConfig({ url: "https://estate.supabase.co", anonKey: "public" });
  await invalidClient.signIn("owner@example.test", "long-password");
  await assert.rejects(invalidClient.createInvite("estate-1"), /valid invitation/);
});

test("copy-invite handler recognizes its valueless HTML data attribute", () => {
  assert.match(appSource, /if \(b\.hasAttribute\("data-copy-invite"\)\)/);
});

test("role controls use the authorized RPCs for memberships, features, and status changes", async () => {
  const calls = [],
    { client } = createClient(async (url, options) => {
      if (url.endsWith("/auth/v1/token?grant_type=password"))
        return response({
          access_token: "access",
          refresh_token: "refresh",
          expires_in: 3600,
          user: { id: "owner-1" },
        });
      calls.push({ name: url.split("/").pop(), body: JSON.parse(options.body) });
      if (url.endsWith("/rpc/get_estate_features")) return response(["months"]);
      if (url.endsWith("/rpc/list_estate_members"))
        return response([{ user_id: "member-1", role: "member_1", access_status: "active" }]);
      return response([]);
    });
  client.setConfig({ url: "https://estate.supabase.co", anonKey: "public" });
  await client.signIn("owner@example.test", "long-password");
  const members = await client.listMembers("estate-1");
  assert.equal(members[0].user_id, "member-1");
  assert.equal(members[0].role, "member_1");
  assert.deepEqual(Array.from(await client.getFeatures("estate-1")), ["months"]);
  await client.setMemberStatus("estate-1", "member-1", "suspended");
  await client.setRoleFeatures("estate-1", "member_1", ["months", "insights"]);
  assert.deepEqual(calls, [
    { name: "list_estate_members", body: { p_estate_id: "estate-1" } },
    { name: "get_estate_features", body: { p_estate_id: "estate-1" } },
    {
      name: "set_estate_member_status",
      body: { p_estate_id: "estate-1", p_user_id: "member-1", p_status: "suspended" },
    },
    {
      name: "set_estate_role_features",
      body: { p_estate_id: "estate-1", p_role: "member_1", p_features: ["months", "insights"] },
    },
  ]);
});

test("global account actions call the owner-authenticated Edge Function", async () => {
  let captured;
  const { client } = createClient(async (url, options) => {
    if (url.endsWith("/auth/v1/token?grant_type=password"))
      return response({
        access_token: "access",
        refresh_token: "refresh",
        expires_in: 3600,
        user: { id: "owner-1" },
      });
    captured = { url, options };
    return response({ ok: true });
  });
  client.setConfig({ url: "https://estate.supabase.co", anonKey: "public" });
  await client.signIn("owner@example.test", "long-password");
  await client.manageAccount("ban", "estate-1", "member-1");
  assert.match(captured.url, /\/functions\/v1\/manage-account$/);
  assert.equal(captured.options.method, "POST");
  assert.deepEqual(JSON.parse(captured.options.body), {
    action: "ban",
    estate_id: "estate-1",
    user_id: "member-1",
  });
  assert.equal(captured.options.headers.Authorization, "Bearer access");
});

test("sign-up without an auth session does not mark the device signed in", async () => {
  const { client } = createClient(async () => response({ user: { id: "user-1" } }));
  client.setConfig({ url: "https://estate.supabase.co", anonKey: "public" });
  await client.signUp("owner@example.test", "long-password");
  assert.equal(client.publicStatus().signedIn, false);
});

test("failed remote logout still clears the locally persisted auth session", async () => {
  const { client, values } = createClient(async (url) => {
    if (url.endsWith("/auth/v1/token?grant_type=password"))
      return response({
        access_token: "access",
        refresh_token: "refresh",
        expires_in: 3600,
        user: { id: "user-1", email: "owner@example.test" },
      });
    throw new Error("offline");
  });
  client.setConfig({ url: "https://estate.supabase.co", anonKey: "public" });
  await client.signIn("owner@example.test", "long-password");
  assert.ok(values.has("coconut-ledger-sync-session-v1"));
  await assert.rejects(client.signOut(), /offline/);
  assert.equal(client.publicStatus().signedIn, false);
  assert.equal(values.has("coconut-ledger-sync-session-v1"), false);
});

test("changing Supabase projects clears the previous project's local session", async () => {
  const { client } = createClient(async () =>
    response({
      access_token: "access",
      refresh_token: "refresh",
      expires_in: 3600,
      user: { id: "user-1" },
    }),
  );
  client.setConfig({ url: "https://first.supabase.co", anonKey: "public-1" });
  await client.signIn("owner@example.test", "long-password");
  client.setConfig({ url: "https://second.supabase.co", anonKey: "public-2" });
  assert.equal(client.publicStatus().signedIn, false);
});

test("large record sets are sent in bounded, transactional batches", async () => {
  const batchSizes = [],
    { client } = createClient(async (url, options) => {
      if (url.endsWith("/auth/v1/token?grant_type=password"))
        return response({
          access_token: "access",
          refresh_token: "refresh",
          expires_in: 3600,
          user: { id: "user-1" },
        });
      batchSizes.push(JSON.parse(options.body).p_changes.length);
      return response({ ok: true, records: [] });
    });
  client.setConfig({ url: "https://estate.supabase.co", anonKey: "public" });
  await client.signIn("owner@example.test", "long-password");
  const changes = Array.from({ length: 205 }, (_, i) => ({
    record_type: "harvest",
    record_id: String(i),
    expected_revision: 0,
    payload: { id: String(i) },
  }));
  const result = await client.submitChanges("estate-1", changes);
  assert.equal(result.ok, true);
  assert.deepEqual(batchSizes, [200, 5]);
});

test("remote record reads paginate past the PostgREST row limit", async () => {
  const pageOffsets = [],
    rows = Array.from({ length: 1201 }, (_, i) => ({
      record_type: "harvest",
      record_id: String(i),
      payload: { id: String(i) },
      revision: 1,
      deleted_at: null,
      updated_at: "2026-01-01T00:00:00Z",
    })),
    { client } = createClient(async (url, options) => {
      if (url.endsWith("/auth/v1/token?grant_type=password"))
        return response({
          access_token: "access",
          refresh_token: "refresh",
          expires_in: 3600,
          user: { id: "user-1" },
        });
      const [start, end] = options.headers.Range.split("-").map(Number);
      assert.match(url, /\/rest\/v1\/rpc\/list_estate_records$/);
      assert.equal(options.method, "POST");
      assert.deepEqual(JSON.parse(options.body), { p_estate_id: "estate-1" });
      pageOffsets.push(start);
      const page = rows.slice(start, end + 1);
      return response(page, 200, {
        "content-range": page.length
          ? `${start}-${start + page.length - 1}/${rows.length}`
          : `*/${rows.length}`,
      });
    });
  client.setConfig({ url: "https://estate.supabase.co", anonKey: "public" });
  await client.signIn("owner@example.test", "long-password");
  const result = await client.listRecords("estate-1");
  assert.equal(result.length, rows.length);
  assert.deepEqual(pageOffsets, [0, 500, 1000]);
});


const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "web", "sync.js"), "utf8");

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
  assert.throws(() => client.setConfig({ url: "http://estate.supabase.co", anonKey: "public" }));
  assert.throws(() => client.setConfig({ url: "https://estate.supabase.co.attacker.test", anonKey: "public" }));
  assert.throws(() => client.setConfig({ url: "https://estate.supabase.co", anonKey: "sb_secret_test" }), /service_role key/);
  const serviceRoleJwt = `header.${Buffer.from(JSON.stringify({ role: "service_role" })).toString("base64url")}.signature`;
  assert.throws(() => client.setConfig({ url: "https://estate.supabase.co", anonKey: serviceRoleJwt }), /service_role key/);
  assert.equal(client.setConfig({ url: "https://estate.supabase.co/", anonKey: "public" }).configured, true);
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


const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "web", "bug-report.js"), "utf8");
const appSource = fs.readFileSync(path.join(__dirname, "..", "web", "app.js"), "utf8");
const htmlSource = fs.readFileSync(path.join(__dirname, "..", "web", "index.html"), "utf8");
const migration = fs.readFileSync(
  path.join(__dirname, "..", "supabase", "migrations", "202611210001_bug_reports.sql"),
  "utf8",
);

function createReporter({ motion = true, permissionRequired = false, permission = "granted" } = {}) {
  const sessionValues = new Map(),
    localValues = new Map(),
    listeners = new Map();
  let now = 100000;
  const storage = (values) => ({
    getItem: (key) => values.get(key) || null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
  });
  class MotionEvent {}
  if (permissionRequired) MotionEvent.requestPermission = async () => permission;
  const window = {
    DeviceMotionEvent: motion ? MotionEvent : undefined,
    localStorage: storage(localValues),
    sessionStorage: storage(sessionValues),
    addEventListener: (type, listener) => listeners.set(type, listener),
    removeEventListener: (type) => listeners.delete(type),
  };
  class TestDate extends Date {
    static now() {
      return now;
    }
    constructor(...args) {
      super(...(args.length ? args : [now]));
    }
  }
  const context = {
    window,
    navigator: { userAgent: "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/130.0.0.0 Mobile Safari/537.36" },
    Date: TestDate,
    Math,
    Number,
    String,
    Array,
    JSON,
    RegExp,
    setNow: (value) => {
      now = value;
    },
  };
  vm.runInNewContext(source, context);
  return { reporter: window.CoconutBugReports, listeners, localValues, sessionValues, setNow: context.setNow };
}

test("error buffer redacts sensitive strings and is capped at twenty entries", () => {
  const { listeners, sessionValues, reporter } = createReporter();
  for (let i = 0; i < 25; i++)
    listeners.get("error")({
      error: {
        name: "TypeError",
        message: `failure ${i} password=hidden user@example.test Bearer eyJhbGci.secret`,
        stack: "at app.js:1",
      },
    });
  const entries = reporter.recentErrors();
  assert.equal(entries.length, 20);
  assert.equal(entries[0].message.startsWith("failure 5"), true);
  assert.match(entries[0].message, /password=\[redacted\]/);
  assert.match(entries[0].message, /\[email redacted\]/);
  assert.doesNotMatch(JSON.stringify(entries), /user@example\.test|Bearer eyJhbGci/);
  assert.ok(sessionValues.size > 0);
});

test("failed API logs include only the path and HTTP status", () => {
  const { listeners, reporter } = createReporter();
  listeners.get("coconut-api-error")({
    detail: { status: 503, path: "/rest/v1/rpc/list_estate_records?apikey=private" },
  });
  assert.deepEqual(JSON.parse(JSON.stringify(reporter.recentErrors())), [
    {
      type: "ApiError",
      message: "Request failed",
      stack: "",
      at: new Date(100000).toISOString(),
      status: 503,
      path: "/rest/v1/rpc/list_estate_records",
    },
  ]);
});

test("error logs are cleared when the signed-in user changes", () => {
  const { listeners, reporter, sessionValues } = createReporter();
  listeners.get("error")({ message: "private account error" });
  assert.equal(reporter.recentErrors().length, 1);
  reporter.setUserScope("user-1");
  assert.equal(reporter.recentErrors().length, 0);
  listeners.get("error")({ message: "new account error" });
  reporter.setUserScope("user-1");
  assert.equal(reporter.recentErrors().length, 1);
  reporter.setUserScope("user-2");
  assert.equal(reporter.recentErrors().length, 0);
  assert.equal(sessionValues.get("coconut-ledger-error-log-user-v1"), "user-2");
});

test("shake requires multiple motion impulses and enforces a cooldown", async () => {
  const { reporter, listeners, setNow } = createReporter();
  let triggers = 0;
  assert.equal(reporter.startShake(() => triggers++), true);
  const dispatch = (x) =>
    listeners.get("devicemotion")({
      accelerationIncludingGravity: { x, y: 0, z: 0 },
    });
  dispatch(0);
  setNow(100100);
  dispatch(15);
  setNow(100220);
  dispatch(0);
  setNow(100340);
  dispatch(15);
  assert.equal(triggers, 1);
  setNow(101500);
  dispatch(0);
  setNow(101620);
  dispatch(15);
  setNow(101740);
  dispatch(0);
  setNow(101860);
  dispatch(15);
  assert.equal(triggers, 1);
  setNow(132000);
  dispatch(0);
  setNow(132120);
  dispatch(15);
  setNow(132240);
  dispatch(0);
  setNow(132360);
  dispatch(15);
  assert.equal(triggers, 2);
});

test("shake permission denial and unsupported devices do not enable detection", async () => {
  const denied = createReporter({ permissionRequired: true, permission: "denied" });
  assert.equal(denied.reporter.startShake(() => {}), false);
  listenersDispatch(denied.listeners, "pointerdown", {});
  await Promise.resolve();
  await Promise.resolve();
  assert.equal(denied.listeners.has("devicemotion"), false);
  const unsupported = createReporter({ motion: false });
  assert.equal(unsupported.reporter.startShake(() => {}), false);
  assert.equal(unsupported.listeners.has("pointerdown"), false);
});

test("shake callback is suppressed when the app marks an interaction as sensitive", async () => {
  const { reporter, listeners, setNow } = createReporter();
  let triggers = 0;
  reporter.startShake(() => triggers++, () => false);
  const dispatch = (x) =>
    listeners.get("devicemotion")({
      accelerationIncludingGravity: { x, y: 0, z: 0 },
    });
  dispatch(0);
  setNow(100100);
  dispatch(15);
  setNow(100220);
  dispatch(0);
  setNow(100340);
  dispatch(15);
  assert.equal(triggers, 0);
});

test("iOS motion permission is requested on the first user gesture without a visible control", async () => {
  const { reporter, listeners } = createReporter({ permissionRequired: true });
  assert.equal(reporter.startShake(() => {}), false);
  assert.equal(listeners.has("devicemotion"), false);
  listenersDispatch(listeners, "pointerdown", {});
  await Promise.resolve();
  await Promise.resolve();
  assert.equal(listeners.has("devicemotion"), true);
});

test("report access has no user-facing controls and its dashboard is in developer tools", () => {
  assert.doesNotMatch(htmlSource, /id="bugReportButton"/);
  assert.doesNotMatch(appSource, /bugReportSettingsCard|bugReportShakeToggle/);
  assert.match(appSource, /const devTools =[\s\S]*?id="bugReportAdminCard"/);
  assert.match(appSource, /user\.bugReportAdmin !== true/);
});

test("database migration keeps report access authenticated, owner-scoped, admin-gated, and rate-limited", () => {
  assert.match(migration, /alter table public\.bug_reports enable row level security/i);
  assert.match(migration, /revoke all on public\.bug_reports, public\.bug_report_rate_limits from public, anon, authenticated/i);
  assert.match(migration, /user_id = \(select auth\.uid\(\)\)/i);
  assert.match(migration, /auth\.jwt\(\) -> 'app_metadata' ->> 'bug_report_admin'/i);
  assert.match(migration, /grant update \(status\) on public\.bug_reports to authenticated/i);
  assert.match(migration, /if v_count > 5 then raise exception/i);
  assert.match(
    migration,
    /\(p_device_info - 'browser' - 'operating_system' - 'device_type'\) <> '\{\}'::jsonb/i,
  );
  assert.match(migration, /revoke all on function public\.submit_bug_report[\s\S]*from public, anon/i);
  assert.doesNotMatch(migration, /grant insert on public\.bug_reports/i);
});

function listenersDispatch(listeners, eventName, event) {
  const listener = listeners.get(eventName);
  if (listener) listener(event);
}

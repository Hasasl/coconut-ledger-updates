const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const migration = fs.readFileSync(
  path.join(root, "supabase", "migrations", "202611220001_push_notifications.sql"),
  "utf8",
);
const handler = fs.readFileSync(
  path.join(root, "supabase", "functions", "push-notifications", "index.ts"),
  "utf8",
);
const workflow = fs.readFileSync(
  path.join(root, ".github", "workflows", "release-push-notification.yml"),
  "utf8",
);
const mainActivity = fs.readFileSync(
  path.join(root, "android", "app", "src", "main", "java", "com", "estateledger", "coconut", "MainActivity.java"),
  "utf8",
);
const service = fs.readFileSync(
  path.join(root, "android", "app", "src", "main", "java", "com", "estateledger", "coconut", "PushMessagingService.java"),
  "utf8",
);
const app = fs.readFileSync(path.join(root, "web", "app.js"), "utf8");
const appGradle = fs.readFileSync(path.join(root, "android", "app", "build.gradle"), "utf8");
const firebaseConfig = JSON.parse(fs.readFileSync(path.join(root, "android", "app", "google-services.json"), "utf8"));

test("FCM device registrations and rate-limit rows are server-only", () => {
  assert.match(migration, /create table public\.push_devices/i);
  assert.match(migration, /alter table public\.push_devices enable row level security/i);
  assert.match(
    migration,
    /revoke all on public\.push_devices, public\.push_event_limits from public, anon, authenticated/i,
  );
  assert.match(migration, /grant execute on function public\.claim_push_notification\(uuid, text, integer, uuid\)[\s\S]*to service_role/i);
  assert.match(migration, /p_cooldown_seconds not between 30 and 600/i);
});

test("push sender authenticates app users and keeps Firebase credentials server-side", () => {
  assert.match(handler, /SUPABASE_SERVICE_ROLE_KEY/);
  assert.match(handler, /FIREBASE_SERVICE_ACCOUNT_JSON/);
  assert.match(handler, /FIREBASE_PROJECT_ID/);
  assert.match(handler, /auth\/v1\/user/);
  assert.match(handler, /x-release-token/);
  assert.match(handler, /bug_report_admin === true/);
  assert.match(handler, /estate_change/);
  assert.match(handler, /join_request/);
  assert.match(handler, /membership_change/);
  assert.match(handler, /messages:send/);
  assert.doesNotMatch(
    fs.readFileSync(path.join(root, "web", "sync.js"), "utf8"),
    /FIREBASE_SERVICE_ACCOUNT_JSON|SUPABASE_SERVICE_ROLE_KEY/,
  );
});

test("Android handles data-only FCM messages and protects account notifications after sign-out", () => {
  assert.match(mainActivity, /subscribeToTopic\("app-updates"\)/);
  assert.match(mainActivity, /setPushUserId/);
  assert.match(service, /extends FirebaseMessagingService/);
  assert.match(service, /onMessageReceived/);
  assert.match(service, /pushUserId/);
  assert.equal(
    firebaseConfig.client.some((client) =>
      client.client_info.android_client_info.package_name === "com.estateledger.coconut",
    ),
    true,
  );
  assert.match(app, /const VER = "1\.9\.6"/);
  assert.match(app, /const MIN_SHELL = 12/);
  assert.match(appGradle, /firebase-bom:35\.2\.0/);
});

test("release workflow only runs for published update manifest changes and uses a secret", () => {
  assert.match(workflow, /paths:[\s\S]*- update\.json/);
  assert.match(workflow, /secrets\.PUSH_RELEASE_SECRET/);
  assert.match(workflow, /X-Release-Token/);
  assert.match(workflow, /event: "release"/);
});

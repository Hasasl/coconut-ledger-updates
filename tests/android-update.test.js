const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const mainActivity = fs.readFileSync(
  path.join(
    __dirname,
    "..",
    "android",
    "app",
    "src",
    "main",
    "java",
    "com",
    "estateledger",
    "coconut",
    "MainActivity.java",
  ),
  "utf8",
);

test("Android updater resumes installation after install-source permission is granted", () => {
  const installFlow = mainActivity.slice(
    mainActivity.indexOf("private void installUpdate()"),
    mainActivity.indexOf("/** Tells the page what happened."),
  );
  const permissionResult = mainActivity.slice(
    mainActivity.indexOf("protected void onActivityResult"),
    mainActivity.indexOf("@Override public void onBackPressed"),
  );

  assert.match(installFlow, /canRequestPackageInstalls\(\)/);
  assert.match(installFlow, /ACTION_MANAGE_UNKNOWN_APP_SOURCES/);
  assert.match(installFlow, /startActivityForResult\(settings, REQ_INSTALL_PERMISSION\)/);
  assert.match(permissionResult, /req == REQ_INSTALL_PERMISSION[\s\S]*canRequestPackageInstalls\(\)[\s\S]*installUpdate\(\)/);
});

test("Android updater migrates its default feed to the release-only repository", () => {
  const updateUrl = mainActivity.slice(
    mainActivity.indexOf("private String updateUrl()"),
    mainActivity.indexOf("private void autoCheck()"),
  );

  assert.match(mainActivity, /DEFAULT_UPDATE_URL = "https:\/\/raw\.githubusercontent\.com\/Hasasl\/coconut-ledger-releases\/refs\/heads\/main\/update\.json"/);
  assert.match(updateUrl, /LEGACY_UPDATE_URL\.equals\(saved\)/);
  assert.match(updateUrl, /remove\("updateUrl"\)\.putLong\("lastCheck", 0\)/);
});

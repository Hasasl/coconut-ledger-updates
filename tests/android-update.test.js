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

"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const { createMetadata } = require("../tools/create_windows_update_metadata.cjs");

const root = path.join(__dirname, "..");
const packageInfo = require(path.join(root, "package.json"));
const apkInfo = require(path.join(root, "apk", "apk_info.json"));
const mainSource = fs.readFileSync(path.join(root, "desktop", "main.cjs"), "utf8");
const releaseWorkflow = fs.readFileSync(path.join(root, ".github", "workflows", "publish-app-updates.yml"), "utf8");

test("Windows package uses the shared page and Android version", () => {
  assert.equal(packageInfo.version, apkInfo.versionName);
});

test("desktop renderer has no Node integration and uses context isolation", () => {
  assert.match(mainSource, /nodeIntegration:\s*false/);
  assert.match(mainSource, /contextIsolation:\s*true/);
  assert.match(mainSource, /sandbox:\s*true/);
});

test("Windows desktop checks GitHub Releases and asks before download and installation", () => {
  assert.equal(packageInfo.dependencies["electron-updater"], "^6.6.2");
  assert.deepEqual(packageInfo.build.publish[0], {
    provider: "github",
    owner: "Hasasl",
    repo: "coconut-ledger-releases",
    releaseType: "release",
  });
  assert.match(mainSource, /process\.platform !== "win32" \|\| !app\.isPackaged/);
  assert.match(mainSource, /autoUpdater\.autoDownload = false/);
  assert.match(mainSource, /buttons: \["Download", "Later"\]/);
  assert.match(mainSource, /buttons: \["Restart and install", "Later"\]/);
  assert.match(releaseWorkflow, /dist\/windows\/latest\.yml/);
  assert.match(releaseWorkflow, /\$blockmap = "\$installer\.blockmap"/);
  assert.match(releaseWorkflow, /gh release upload \$tag \$installer \$blockmap \$updaterMetadata/);
});

test("Windows updater metadata describes the installer and its exact digest", () => {
  const metadata = createMetadata(
    "1.10.0",
    "CoconutLedger-Setup-1.10.0-x64.exe",
    1234,
    "A".repeat(88),
    new Date("2026-11-23T00:00:00.000Z"),
  );

  assert.match(metadata, /version: 1\.10\.0/);
  assert.match(metadata, /url: CoconutLedger-Setup-1\.10\.0-x64\.exe/);
  assert.match(metadata, /size: 1234/);
  assert.match(metadata, /releaseDate: '2026-11-23T00:00:00\.000Z'/);
});

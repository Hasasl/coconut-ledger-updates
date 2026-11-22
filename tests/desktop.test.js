"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const packageInfo = require(path.join(root, "package.json"));
const apkInfo = require(path.join(root, "apk", "apk_info.json"));
const mainSource = fs.readFileSync(path.join(root, "desktop", "main.cjs"), "utf8");

test("Windows package uses the shared page and Android version", () => {
  assert.equal(packageInfo.version, apkInfo.versionName);
});

test("desktop renderer has no Node integration and uses context isolation", () => {
  assert.match(mainSource, /nodeIntegration:\s*false/);
  assert.match(mainSource, /contextIsolation:\s*true/);
  assert.match(mainSource, /sandbox:\s*true/);
});

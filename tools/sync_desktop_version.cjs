"use strict";

const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const apkInfo = JSON.parse(fs.readFileSync(path.join(root, "apk", "apk_info.json"), "utf8"));
const version = apkInfo.versionName;
if (typeof version !== "string" || !/^\d+\.\d+(?:\.\d+)?$/.test(version))
  throw new Error("Set a valid shared versionName in apk/apk_info.json before building the desktop app.");

for (const filename of ["package.json", "package-lock.json"]) {
  const file = path.join(root, filename);
  if (!fs.existsSync(file)) continue;

  const metadata = JSON.parse(fs.readFileSync(file, "utf8"));
  metadata.version = version;
  if (filename === "package-lock.json" && metadata.packages?.[""])
    metadata.packages[""].version = version;
  fs.writeFileSync(file, `${JSON.stringify(metadata, null, 2)}\n`);
}

console.log(`Windows desktop version set to ${version}.`);

"use strict";

const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const packageInfo = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const outputDirectory = path.join(root, "dist", "windows");
const installerName = `CoconutLedger-Setup-${packageInfo.version}-x64.exe`;
const installerPath = path.join(outputDirectory, installerName);

function createMetadata(version, fileName, size, sha512, releaseDate) {
  if (!/^\d+\.\d+(?:\.\d+)?$/.test(version)) throw new Error("Invalid desktop release version.");
  if (!fileName || /[\r\n]/.test(fileName)) throw new Error("Invalid installer filename.");
  if (!Number.isSafeInteger(size) || size <= 0) throw new Error("Invalid installer size.");
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(sha512)) throw new Error("Invalid installer SHA-512.");
  const date = releaseDate instanceof Date ? releaseDate.toISOString() : new Date(releaseDate).toISOString();
  return [
    `version: ${version}`,
    "files:",
    `  - url: ${fileName}`,
    `    sha512: ${sha512}`,
    `    size: ${size}`,
    `path: ${fileName}`,
    `sha512: ${sha512}`,
    `releaseDate: '${date}'`,
    "",
  ].join("\n");
}

function writeMetadata() {
  if (!fs.existsSync(installerPath)) throw new Error(`Windows installer not found: ${installerPath}`);
  const installer = fs.readFileSync(installerPath);
  const sha512 = crypto.createHash("sha512").update(installer).digest("base64");
  const metadata = createMetadata(
    packageInfo.version,
    installerName,
    installer.length,
    sha512,
    new Date(),
  );
  fs.writeFileSync(path.join(outputDirectory, "latest.yml"), metadata, "utf8");
}

if (require.main === module) {
  try {
    writeMetadata();
    console.log("Generated Windows update metadata at dist\\windows\\latest.yml.");
  } catch (error) {
    console.error("Could not generate Windows update metadata:", error.message);
    process.exitCode = 1;
  }
}

module.exports = { createMetadata };

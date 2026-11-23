"""
Coconut Ledger: publish an update.

    python tools/make_release.py

What it does
  1. Builds the single-file page from web/ using the shared version in apk/apk_info.json.
  2. Copies the Android app from apk/CoconutLedger.apk into published/.
     If Android Studio has made a newer android/app/release/app-release.apk, it offers to use that first.
  3. Writes update.json (the shared release version plus file fingerprints) and signs it with your key
     (signing/ledger.keystore) into update.json.sig.

Set UPDATE_SIGNING_PASSWORD to run without an interactive prompt. CI should publish only update.json,
update.json.sig, published/page.html and published/CoconutLedger.apk to the public release repository.
Never publish the source tree or edit generated release files by hand.

Needs once:  pip install cryptography
"""
import base64
import datetime
import getpass
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build_page import build, ASSET  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
APK = ROOT / "apk" / "CoconutLedger.apk"
APK_INFO = ROOT / "apk" / "apk_info.json"
STUDIO_APK = ROOT / "android" / "app" / "release" / "app-release.apk"
GRADLE_APK = ROOT / "android" / "app" / "build" / "outputs" / "apk" / "release" / "app-release.apk"
UNSIGNED_GRADLE_APK = ROOT / "android" / "app" / "build" / "outputs" / "apk" / "release" / "app-release-unsigned.apk"
KEY = ROOT / "signing" / "ledger.keystore"
PUB = ROOT / "published"
MANIFEST = ROOT / "update.json"
PACKAGE = "com.estateledger.coconut"


def stop(msg):
    print("\nSTOPPED: " + msg)
    sys.exit(1)


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def is_newer_different(candidate, current):
    if not candidate.exists():
        return False
    if not current.exists():
        return True
    return candidate.stat().st_mtime > current.stat().st_mtime and (
        sha256(candidate.read_bytes()) != sha256(current.read_bytes())
    )


def parse_apk_metadata(output):
    match = re.search(
        r"^package: name='([^']+)' versionCode='(\d+)' versionName='([^']*)'",
        output,
        re.MULTILINE,
    )
    if not match:
        raise ValueError("Android SDK could not read package metadata from the APK.")
    return {
        "app": match.group(1),
        "versionCode": int(match.group(2)),
        "versionName": match.group(3),
    }


def find_aapt():
    candidates = []
    for command in ("aapt", "aapt.exe"):
        found = shutil.which(command)
        if found:
            candidates.append(Path(found))
    sdk_roots = [
        os.environ.get("ANDROID_HOME"),
        os.environ.get("ANDROID_SDK_ROOT"),
        str(Path(os.environ["LOCALAPPDATA"]) / "Android" / "Sdk") if os.environ.get("LOCALAPPDATA") else None,
        str(Path.home() / "Android" / "Sdk"),
    ]
    for sdk_root in sdk_roots:
        if not sdk_root:
            continue
        build_tools = Path(sdk_root) / "build-tools"
        if build_tools.is_dir():
            versions = sorted(
                (path for path in build_tools.iterdir() if path.is_dir()),
                key=lambda path: vtuple(path.name),
                reverse=True,
            )
            candidates.extend(
                path / ("aapt.exe" if os.name == "nt" else "aapt")
                for path in versions
            )
    return next((candidate for candidate in candidates if candidate.is_file()), None)


def read_apk_metadata(apk_path):
    aapt = find_aapt()
    if aapt is None:
        stop("Cannot find Android SDK aapt. Install Android build-tools or add aapt to PATH to verify the APK version.")
    result = subprocess.run(
        [str(aapt), "dump", "badging", str(apk_path)],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode:
        stop("Android SDK could not inspect the APK. Rebuild the signed release APK and try again.")
    try:
        return parse_apk_metadata(result.stdout)
    except ValueError as error:
        stop(str(error))


def vtuple(v):
    return tuple(int(x) for x in re.findall(r"\d+", v or ""))


def read_signing_password():
    password = os.environ.get("UPDATE_SIGNING_PASSWORD")
    if password is None:
        if not sys.stdin.isatty():
            stop("Set UPDATE_SIGNING_PASSWORD when running without an interactive terminal.")
        password = getpass.getpass("Signing key password: ")
    if not password:
        stop("A signing key password is required.")
    return password


def main():
    try:
        from cryptography.hazmat.primitives import hashes
        from cryptography.hazmat.primitives.asymmetric import padding
        from cryptography.hazmat.primitives.serialization import pkcs12
    except ImportError:
        stop("The 'cryptography' package is missing. Run this once:  pip install cryptography")
    if not KEY.exists():
        stop("Cannot find signing/ledger.keystore. Copy it there from your private key zip.")

    page, ver, min_shell = build()
    page_bytes = page.encode("utf-8")

    # Use the newest signed APK produced by Android Studio or Gradle.
    candidates = sorted(
        (candidate for candidate in (STUDIO_APK, GRADLE_APK) if candidate.exists()),
        key=lambda candidate: candidate.stat().st_mtime,
        reverse=True,
    )
    for candidate in candidates:
        if is_newer_different(candidate, APK):
            relative = candidate.relative_to(ROOT)
            ans = input(f"A newer signed Android app was built at {relative}. Use it? [y/N] ")
            if ans.strip().lower().startswith("y"):
                shutil.copyfile(candidate, APK)
                break

    if is_newer_different(UNSIGNED_GRADLE_APK, APK):
        stop("Gradle built a newer unsigned APK at android/app/build/outputs/apk/release/app-release-unsigned.apk.\n"
             "Build a signed release APK with the existing release keystore before publishing.")
    if not APK.exists() or not APK_INFO.exists():
        stop("apk/CoconutLedger.apk or apk/apk_info.json is missing.")
    apk_bytes = APK.read_bytes()
    info = json.loads(APK_INFO.read_text(encoding="utf-8"))
    if info.get("versionName") != ver:
        stop("The page and Android app must use the same versionName from apk/apk_info.json.")
    apk_info = read_apk_metadata(APK)
    if apk_info["app"] != PACKAGE:
        stop(f"The APK package is {apk_info['app']}, expected {PACKAGE}.")
    if apk_info["versionName"] != info["versionName"] or apk_info["versionCode"] != int(info["versionCode"]):
        stop(
            f"The signed APK is version {apk_info['versionName']} (code {apk_info['versionCode']}), "
            f"but apk/apk_info.json is {info['versionName']} (code {info['versionCode']}). "
            "Rebuild and sign the Android release APK, then try again."
        )

    prev = None
    if MANIFEST.exists():
        try:
            prev = json.loads(MANIFEST.read_text(encoding="utf-8"))
        except ValueError:
            prev = None
    if prev:
        pp, pa = prev.get("page", {}), prev.get("apk", {})
        page_changed = pp.get("sha256") != sha256(page_bytes)
        apk_changed = pa.get("sha256") != sha256(apk_bytes)
        if not page_changed and not apk_changed:
            stop("Nothing changed since the last release.")
        previous_version = max(vtuple(pp.get("version")), vtuple(pa.get("versionName")))
        if vtuple(ver) <= previous_version:
            stop(f"The shared version must be higher than the last release ({pp.get('version')} / {pa.get('versionName')}).\n"
                 "Set versionName in apk/apk_info.json to the next version.")
        if not apk_changed:
            stop("The shared version changed but the signed Android APK did not. Increment versionCode, rebuild the signed APK, and try again.")
        if int(info["versionCode"]) <= int(pa.get("versionCode", 0)):
            stop("apk/CoconutLedger.apk changed but apk/apk_info.json still has the old versionCode.\n"
                 "Raise versionCode (and versionName) in apk/apk_info.json, rebuild the app in Android Studio, and try again.")

    pw = read_signing_password()
    try:
        key, _cert, _ = pkcs12.load_key_and_certificates(KEY.read_bytes(), pw.encode())
    except ValueError:
        stop("Wrong password for signing/ledger.keystore.")

    manifest = {
        "app": PACKAGE,
        "page": {"version": ver, "file": "published/page.html", "sha256": sha256(page_bytes), "minShell": min_shell},
        "apk": {"versionCode": int(info["versionCode"]), "versionName": info["versionName"],
                "file": "published/CoconutLedger.apk", "sha256": sha256(apk_bytes)},
        "created": datetime.datetime.now().isoformat(timespec="seconds"),
    }
    data = (json.dumps(manifest, indent=2) + "\n").encode("utf-8")
    sig = key.sign(data, padding.PKCS1v15(), hashes.SHA256())

    PUB.mkdir(exist_ok=True)
    (PUB / "page.html").write_bytes(page_bytes)
    shutil.copyfile(APK, PUB / "CoconutLedger.apk")
    ASSET.parent.mkdir(parents=True, exist_ok=True)
    ASSET.write_bytes(page_bytes)
    MANIFEST.write_bytes(data)
    (ROOT / "update.json.sig").write_bytes(base64.b64encode(sig) + b"\n")

    print("\nRelease artifacts built:")
    print(f"  app version         {ver}")
    print(f"  Android install code {info['versionCode']} (internal)")


if __name__ == "__main__":
    main()

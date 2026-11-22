"""
Coconut Ledger: publish an update.

    python tools/make_release.py

What it does
  1. Builds the single-file page from web/ using the shared version in apk/apk_info.json.
  2. Copies the Android app from apk/CoconutLedger.apk into published/.
     If Android Studio has made a newer android/app/release/app-release.apk, it offers to use that first.
  3. Writes update.json (the shared release version plus file fingerprints) and signs it with your key
     (signing/ledger.keystore) into update.json.sig.

Then commit and push with GitHub Desktop. Phones read update.json from GitHub, check the signature,
and update themselves. Never edit update.json, update.json.sig or published/ by hand.

Needs once:  pip install cryptography
"""
import base64
import datetime
import getpass
import hashlib
import json
import re
import shutil
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build_page import build, ASSET  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
APK = ROOT / "apk" / "CoconutLedger.apk"
APK_INFO = ROOT / "apk" / "apk_info.json"
STUDIO_APK = ROOT / "android" / "app" / "release" / "app-release.apk"
KEY = ROOT / "signing" / "ledger.keystore"
PUB = ROOT / "published"
MANIFEST = ROOT / "update.json"
PACKAGE = "com.estateledger.coconut"


def stop(msg):
    print("\nSTOPPED: " + msg)
    sys.exit(1)


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def vtuple(v):
    return tuple(int(x) for x in re.findall(r"\d+", v or ""))


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

    # A new Android app from Android Studio?
    if STUDIO_APK.exists() and (not APK.exists() or STUDIO_APK.stat().st_mtime > APK.stat().st_mtime):
        if sha256(STUDIO_APK.read_bytes()) != (sha256(APK.read_bytes()) if APK.exists() else ""):
            ans = input("Android Studio made a newer app (android/app/release/app-release.apk). Use it? [y/N] ")
            if ans.strip().lower().startswith("y"):
                shutil.copyfile(STUDIO_APK, APK)
    if not APK.exists() or not APK_INFO.exists():
        stop("apk/CoconutLedger.apk or apk/apk_info.json is missing.")
    apk_bytes = APK.read_bytes()
    info = json.loads(APK_INFO.read_text(encoding="utf-8"))
    if info.get("versionName") != ver:
        stop("The page and Android app must use the same versionName from apk/apk_info.json.")

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

    pw = getpass.getpass("Signing key password: ")
    if not pw:
        stop("A signing key password is required.")
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

    print("\nDone. Ready to publish:")
    print(f"  app version         {ver}")
    print(f"  Android install code {info['versionCode']} (internal)")
    print("\nNext: in GitHub Desktop, write a summary like 'Release " + ver + "', click Commit to main, then Push origin.")


if __name__ == "__main__":
    main()

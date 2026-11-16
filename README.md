# Coconut Ledger

Harvest, income and deduction records for coconut estates, with charts, monthly PDF reports and forecasts.
Works offline on Android, in Sinhala and English. Records stay on the phone.

## Install on an Android phone

Download the app: **https://github.com/Hasasl/coconut-ledger-updates/releases/latest/download/CoconutLedger.apk**

Open the file and tap Install. If Play Protect warns you, tap **More details**, then **Install anyway**.
The app updates itself after that.

## For the developer

Everything needed to change, build and publish the app is in this repository.
Start with **[docs/DEVELOPING.md](docs/DEVELOPING.md)**.

| Folder or file | What it is |
|---|---|
| `web/` | The app's screens and logic. Almost all changes happen here. |
| `android/` | The Android app that shows the screens and installs updates. Open it in Android Studio. |
| `tools/` | `make_release.py` publishes an update. `build_page.py` builds the page into the Android app. |
| `apk/` | The current Android app file and its version numbers. |
| `published/`, `update.json`, `update.json.sig` | What the phones download. Made by `make_release.py`, never edited by hand. |
| `signing/` | Where your private key goes on your computer. Never uploaded. |

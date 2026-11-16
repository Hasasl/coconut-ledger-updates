#!/bin/sh
# Builds a signed apk/CoconutLedger.apk WITHOUT Android Studio, on Linux, with the old command-line tools
# (Debian/Ubuntu packages: aapt, dalvik-exchange, zipalign, apksigner, android-sdk-platform-23, a JDK).
# Most people should use Android Studio instead (see docs/DEVELOPING.md). This script exists so the app can
# also be built on a plain Linux machine.
#   KS_PASS=yourpassword sh tools/build_apk_linux.sh
set -e
cd "$(dirname "$0")/.."
AJ=${ANDROID_JAR:-/usr/lib/android-sdk/platforms/android-23/android.jar}
KS=${KEYSTORE:-signing/ledger.keystore}
A=android/app/src/main
W=$(mktemp -d)
python3 tools/build_page.py
CODE=$(python3 -c "import json;print(json.load(open('apk/apk_info.json'))['versionCode'])")
NAME=$(python3 -c "import json;print(json.load(open('apk/apk_info.json'))['versionName'])")
# The Android Studio manifest leaves these out (Gradle adds them); the old tools need them written in.
sed -e "s#<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\">#<manifest xmlns:android=\"http://schemas.android.com/apk/res/android\" package=\"com.estateledger.coconut\" android:versionCode=\"$CODE\" android:versionName=\"$NAME\">\n  <uses-sdk android:minSdkVersion=\"24\" android:targetSdkVersion=\"34\"/>#" $A/AndroidManifest.xml > $W/AndroidManifest.xml
mkdir -p $W/gen $W/obj
aapt package -f -m -J $W/gen -M $W/AndroidManifest.xml -S $A/res -I "$AJ"
javac --release 8 -nowarn -cp "$AJ" -d $W/obj $(find $A/java $W/gen -name '*.java')
dalvik-exchange --dex --output=$W/classes.dex $W/obj
aapt package -f -M $W/AndroidManifest.xml -S $A/res -A $A/assets -I "$AJ" -F $W/app-unaligned.apk
(cd $W && aapt add app-unaligned.apk classes.dex >/dev/null)
zipalign -f 4 $W/app-unaligned.apk $W/app-aligned.apk
apksigner sign --ks "$KS" ${KS_PASS:+--ks-pass pass:$KS_PASS} --min-sdk-version 24 --v4-signing-enabled false --out apk/CoconutLedger.apk $W/app-aligned.apk
apksigner verify apk/CoconutLedger.apk
rm -rf $W
echo "Built apk/CoconutLedger.apk (version $NAME, code $CODE)"

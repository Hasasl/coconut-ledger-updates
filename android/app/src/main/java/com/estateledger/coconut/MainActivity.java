package com.estateledger.coconut;

import android.app.Activity;
import android.Manifest;
import android.content.ClipData;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.graphics.Rect;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.print.PrintAttributes;
import android.print.PrintManager;
import android.util.Base64;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import android.view.WindowInsets;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import com.google.firebase.messaging.FirebaseMessaging;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.KeyFactory;
import java.security.MessageDigest;
import java.security.PublicKey;
import java.security.Signature;
import java.security.spec.X509EncodedKeySpec;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.json.JSONObject;

/**
 * Shows the ledger page and keeps it up to date.
 *
 * Updates come from one link the owner sets (update.json on their GitHub). That file must be signed
 * with the same key that signs this app (update.json.sig), so nobody else can push changes to it.
 *  - The app checks whenever it is opened or brought back (at most every 5 minutes).
 *  - A newer page (the screens and calculations) is downloaded quietly and switched on while the app is in the
 *    background, unless the person is in the middle of typing something.
 *  - A newer app (this Android shell) is downloaded on request and handed to Android's installer.
 * Records stay on the phone. They are also mirrored to a private file so a page update can never lose them.
 */
public class MainActivity extends Activity {
    static final String ASSET_URL = "file:///android_asset/index.html";
    /** Where updates come from unless the person sets another link in the Data tab. */
    static final String DEFAULT_UPDATE_URL = "https://raw.githubusercontent.com/Hasasl/coconut-ledger-updates/refs/heads/main/update.json";
    /** Public half of the signing key in ledger.keystore. Only files signed by the private half are accepted. */
    static final String PUBKEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsJJ21UlllRg9r2tLxWSeJIi5XUa7Aoe0AT59DxEKg+Sl7MYOQI8ocQzimRlY+1shQ2F75W8kxfGpibFHHwlDayoXH2CVSpW62U2JfqN4WZkcCdZGI7qa8IU0XoI1WZ2vOdsE8oe5EA3w9KPo4jaAAbJCHUpHzArwX9SgyG3Gvr9PTBUSv5LfFZpDJNyOlaDYKSs716MNEqVXeQ1V+7Z4Tw6PjfWMy78EPPft4dhNVBghHNyamblrTi+xGJjGKvAQjXFmgnHhfNbfOQPwWEGIXolNLwmKH+kXBqjHUAiAsVNPoCUGO23mqNKh9LP9+9wn+bBlRMBQosDtrJr2ySa0fQIDAQAB";
    private static final int REQ_PICK = 1, REQ_SAVE = 2;
    private static final int REQ_NOTIFICATIONS = 3;
    private static final long AUTO_CHECK_EVERY = 5L * 60L * 1000L;
    private static volatile MainActivity currentActivity;

    private WebView web;
    private ValueCallback<Uri[]> fileCb;
    private String pendingText;
    private SharedPreferences prefs;
    /** Version of the page built into this app, read from its const VER line (python tools/build_page.py puts it there). */
    private String bundledPage = "";
    private String activePage = "", justApplied = "";
    private boolean firstLoad = true;
    private volatile boolean busy = false;
    private boolean stopped = false;

    @Override protected void onCreate(Bundle state) {
        super.onCreate(state);
        allowCutout();
        prefs = getSharedPreferences("ledger", MODE_PRIVATE);
        currentActivity = this;
        bundledPage = readBundledVersion();
        FirebaseMessaging.getInstance().getToken().addOnSuccessListener(this, token -> updatePushToken(this, token));
        web = new WebView(this);
        web.setBackgroundColor(0xFF060A13);
        // No scroll bars: the system one showed up as a light bar on the dark theme.
        web.setVerticalScrollBarEnabled(false);
        web.setHorizontalScrollBarEnabled(false);
        setContentView(web);
        goFullScreen();
        watchInsetsAndKeyboard();
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(true);
        s.setTextZoom(100);
        web.addJavascriptInterface(new Bridge(), "AndroidBridge");
        web.setWebViewClient(new WebViewClient() {
            @Override public boolean shouldOverrideUrlLoading(WebView v, String url) {
                if (url.startsWith("file:")) return false;
                try {
                    startActivity(new Intent(url.startsWith("tel:") ? Intent.ACTION_DIAL : Intent.ACTION_VIEW, Uri.parse(url)));
                } catch (Exception ignored) { }
                return true;
            }
            @Override public void onPageFinished(WebView v, String url) {
                sendSafeArea();
                if (firstLoad) { firstLoad = false; autoCheck(); }
            }
        });
        web.setWebChromeClient(new WebChromeClient() {
            @Override public boolean onShowFileChooser(WebView v, ValueCallback<Uri[]> cb, FileChooserParams p) {
                if (fileCb != null) fileCb.onReceiveValue(null);
                fileCb = cb;
                Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType("*/*");
                try {
                    startActivityForResult(Intent.createChooser(i, "Choose file"), REQ_PICK);
                } catch (Exception e) {
                    fileCb = null;
                    return false;
                }
                return true;
            }
        });
        loadStart();
    }

    // ---------- full screen ----------

    /** Hides the status bar and the navigation bar. A swipe from the edge shows them for a moment. */
    private void goFullScreen() {
        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
    }

    @Override public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) goFullScreen();
    }

    /** Lets the app draw beside the punch-hole camera instead of leaving a black strip (Android 9 and newer). */
    private void allowCutout() {
        if (Build.VERSION.SDK_INT < 28) return;
        try {
            WindowManager.LayoutParams lp = getWindow().getAttributes();
            lp.getClass().getField("layoutInDisplayCutoutMode").setInt(lp, 1); // SHORT_EDGES
            getWindow().setAttributes(lp);
        } catch (Exception ignored) { }
    }

    private int safeTop, safeLeft, safeRight, safeBottom;

    /** Tells the page how much room the camera hole needs, in CSS pixels. */
    private void sendSafeArea() {
        float d = getResources().getDisplayMetrics().density;
        String js = "(function(s){s.setProperty('--safe-top','" + Math.round(safeTop / d) + "px');"
                + "s.setProperty('--safe-left','" + Math.round(safeLeft / d) + "px');"
                + "s.setProperty('--safe-right','" + Math.round(safeRight / d) + "px');"
                + "s.setProperty('--safe-bottom','" + Math.round(safeBottom / d) + "px')})(document.documentElement.style)";
        web.evaluateJavascript(js, null);
    }

    private void watchInsetsAndKeyboard() {
        final View decor = getWindow().getDecorView();
        decor.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() {
            @Override public WindowInsets onApplyWindowInsets(View v, WindowInsets insets) {
                int t = 0, l = 0, r = 0, b = 0;
                if (Build.VERSION.SDK_INT >= 28) {
                    try {
                        Object cut = insets.getClass().getMethod("getDisplayCutout").invoke(insets);
                        if (cut != null) {
                            t = (Integer) cut.getClass().getMethod("getSafeInsetTop").invoke(cut);
                            l = (Integer) cut.getClass().getMethod("getSafeInsetLeft").invoke(cut);
                            r = (Integer) cut.getClass().getMethod("getSafeInsetRight").invoke(cut);
                            b = (Integer) cut.getClass().getMethod("getSafeInsetBottom").invoke(cut);
                        }
                    } catch (Exception ignored) { }
                }
                if (t != safeTop || l != safeLeft || r != safeRight || b != safeBottom) {
                    safeTop = t; safeLeft = l; safeRight = r; safeBottom = b;
                    sendSafeArea();
                }
                return v.onApplyWindowInsets(insets);
            }
        });
        // Full screen apps do not shrink for the keyboard on their own: shrink the page so the form stays visible.
        decor.getViewTreeObserver().addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener() {
            @Override public void onGlobalLayout() {
                Rect r = new Rect();
                decor.getWindowVisibleDisplayFrame(r);
                int full = decor.getRootView().getHeight();
                int want = (full - r.bottom) > full * 0.15 ? r.bottom : ViewGroup.LayoutParams.MATCH_PARENT;
                ViewGroup.LayoutParams lp = web.getLayoutParams();
                if (lp != null && lp.height != want) {
                    lp.height = want;
                    web.setLayoutParams(lp);
                }
            }
        });
    }

    // ---------- app comes and goes ----------

    @Override protected void onStart() { super.onStart(); stopped = false; }

    @Override protected void onResume() {
        super.onResume();
        goFullScreen();
        web.onResume();
        if (!firstLoad) {
            autoCheck();
            web.evaluateJavascript("window.onAppResume&&window.onAppResume()", null);
        }
    }

    @Override protected void onPause() { web.onPause(); super.onPause(); }

    private boolean notificationsEnabled() {
        return Build.VERSION.SDK_INT < 33
                || checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) == PackageManager.PERMISSION_GRANTED;
    }

    private void requestNotifications() {
        if (Build.VERSION.SDK_INT < 33 || notificationsEnabled()) {
            enablePushNotifications();
            return;
        }
        requestPermissions(new String[] { Manifest.permission.POST_NOTIFICATIONS }, REQ_NOTIFICATIONS);
    }

    private void enablePushNotifications() {
        FirebaseMessaging.getInstance().subscribeToTopic("app-updates").addOnCompleteListener(this, task -> {
            if (!task.isSuccessful()) {
                sendNotificationPermission(false);
                return;
            }
            prefs.edit().putBoolean("pushEnabled", true).apply();
            ReminderReceiver.scheduleFromPrefs(this);
            sendNotificationPermission(true);
        });
    }

    static void updatePushToken(Context context, String token) {
        if (token == null || token.isEmpty()) return;
        context.getSharedPreferences("ledger", MODE_PRIVATE).edit().putString("pushToken", token).apply();
        MainActivity activity = currentActivity;
        if (activity != null) activity.sendPushToken(token);
    }

    private void sendPushToken(final String token) {
        if (web == null) return;
        runOnUiThread(() ->
                web.evaluateJavascript(
                        "window.onFirebasePushToken&&window.onFirebasePushToken(" + JSONObject.quote(token) + ")",
                        null));
    }

    private void sendNotificationPermission(final boolean enabled) {
        if (web == null) return;
        runOnUiThread(new Runnable() {
            @Override public void run() {
                web.evaluateJavascript("window.onNotificationPermission&&window.onNotificationPermission(" + enabled + ")", null);
            }
        });
    }

    @Override public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode != REQ_NOTIFICATIONS) return;
        boolean enabled = notificationsEnabled();
        if (enabled) enablePushNotifications();
        else sendNotificationPermission(false);
    }

    @Override protected void onDestroy() {
        if (currentActivity == this) currentActivity = null;
        super.onDestroy();
    }

    @Override protected void onStop() {
        super.onStop();
        stopped = true;
        applyPendingIfSafe();
    }

    private boolean hasPendingPage() {
        return cmp(prefs.getString("pageVersion", ""), activePage) > 0
                && prefs.getInt("pageMinShell", 0) <= shellCode() && pageFile().exists();
    }

    /** Swaps in a downloaded page while nobody is looking, unless the page says the person is busy with a form. */
    private void applyPendingIfSafe() {
        if (!hasPendingPage()) return;
        web.evaluateJavascript("(window.canReload?window.canReload():true)", new ValueCallback<String>() {
            @Override public void onReceiveValue(String v) {
                if ("true".equals(v) && stopped && hasPendingPage()) loadStart();
            }
        });
    }

    // ---------- which page to show ----------

    private File pageFile() { return new File(new File(getFilesDir(), "page"), "index.html"); }

    /** Uses the downloaded page when it is newer than the one inside the app, fits this app version and is intact. */
    private void loadStart() {
        File f = pageFile();
        String v = prefs.getString("pageVersion", "");
        if (f.exists() && cmp(v, bundledPage) > 0 && prefs.getInt("pageMinShell", 0) <= shellCode()) {
            try {
                byte[] b = readFile(f);
                if (hex(sha256(b)).equalsIgnoreCase(prefs.getString("pageSha", ""))) {
                    activePage = v;
                    noteApplied();
                    // Same address as the built-in page, so the page keeps the same saved records.
                    web.loadDataWithBaseURL(ASSET_URL, new String(b, "UTF-8"), "text/html", "utf-8", null);
                    return;
                }
            } catch (Exception ignored) { }
        }
        activePage = bundledPage;
        noteApplied();
        web.loadUrl(ASSET_URL);
    }

    private void noteApplied() {
        String last = prefs.getString("lastActivePage", "");
        justApplied = (!last.isEmpty() && cmp(activePage, last) > 0) ? activePage : "";
        prefs.edit().putString("lastActivePage", activePage).apply();
    }

    // ---------- update check ----------

    private String updateUrl() { return prefs.getString("updateUrl", DEFAULT_UPDATE_URL).trim(); }

    private void autoCheck() {
        if (updateUrl().isEmpty()) return;
        if (System.currentTimeMillis() - prefs.getLong("lastCheck", 0) < AUTO_CHECK_EVERY) return;
        startCheck(false);
    }

    private void startCheck(final boolean manual) {
        if (busy) return;
        busy = true;
        if (manual) status("checking", "", manual, "");
        new Thread(new Runnable() {
            @Override public void run() {
                try {
                    doCheck(manual);
                } catch (Exception e) {
                    status("error", "bad", manual, "");
                } finally {
                    busy = false;
                }
            }
        }).start();
    }

    private void doCheck(boolean manual) throws Exception {
        String url = updateUrl();
        if (url.isEmpty()) { status("error", "nolink", manual, ""); return; }
        String base = url.split("\\?")[0];
        String bust = "?t=" + System.currentTimeMillis();
        byte[] manifest, sig;
        try {
            manifest = get(base + bust, 256 * 1024);
            sig = get(base + ".sig" + bust, 16 * 1024);
        } catch (Exception e) {
            status("error", "net", manual, "");
            return;
        }
        if (!verify(manifest, new String(sig, "UTF-8").trim())) { status("error", "sig", manual, ""); return; }
        JSONObject m = new JSONObject(new String(manifest, "UTF-8"));
        if (!getPackageName().equals(m.optString("app"))) { status("error", "bad", manual, ""); return; }
        prefs.edit().putLong("lastCheck", System.currentTimeMillis()).apply();

        // A newer Android app: remember it, install only when the person taps Install.
        JSONObject a = m.optJSONObject("apk");
        SharedPreferences.Editor e = prefs.edit();
        if (a != null && a.optInt("versionCode", 0) > shellCode()) {
            e.putInt("apkCode", a.optInt("versionCode"))
             .putString("apkName", a.optString("versionName"))
             .putString("apkUrl", new URL(new URL(base), a.optString("file")).toString())
             .putString("apkSha", a.optString("sha256"));
        } else {
            e.remove("apkCode").remove("apkName").remove("apkUrl").remove("apkSha");
        }
        e.apply();

        // A newer page: download it now, use it next time the app opens.
        String ready = "";
        JSONObject p = m.optJSONObject("page");
        if (p != null) {
            String pv = p.optString("version");
            int minShell = p.optInt("minShell", 0);
            if (cmp(pv, activePage) > 0 && minShell <= shellCode()) {
                File f = pageFile();
                boolean have = pv.equals(prefs.getString("pageVersion", "")) && f.exists()
                        && hex(sha256(readFile(f))).equalsIgnoreCase(p.optString("sha256"));
                if (!have) {
                    byte[] b;
                    try {
                        b = get(new URL(new URL(base), p.optString("file")).toString() + bust, 16 * 1024 * 1024);
                    } catch (Exception ex) {
                        status("error", "net", manual, "");
                        return;
                    }
                    if (!hex(sha256(b)).equalsIgnoreCase(p.optString("sha256"))) { status("error", "file", manual, ""); return; }
                    writeAtomic(f, b);
                    prefs.edit().putString("pageVersion", pv).putString("pageSha", p.optString("sha256")).putInt("pageMinShell", minShell).apply();
                }
                ready = pv;
            }
        }
        if (!ready.isEmpty()) {
            status("page_ready", "", manual, ready);
            // Downloaded after the person already left the app: switch it on now.
            runOnUiThread(new Runnable() {
                @Override public void run() { if (stopped) applyPendingIfSafe(); }
            });
        }
        else if (prefs.getInt("apkCode", 0) > shellCode()) status("apk", "", manual, "");
        else status("ok", "", manual, "");
    }

    private void installUpdate() {
        if (busy) return;
        final String url = prefs.getString("apkUrl", ""), sha = prefs.getString("apkSha", "");
        if (url.isEmpty()) { status("error", "bad", true, ""); return; }
        busy = true;
        status("downloading", "", true, "");
        new Thread(new Runnable() {
            @Override public void run() {
                try {
                    byte[] b;
                    try {
                        b = get(url + "?t=" + System.currentTimeMillis(), 64 * 1024 * 1024);
                    } catch (Exception ex) {
                        status("error", "net", true, "");
                        return;
                    }
                    if (!hex(sha256(b)).equalsIgnoreCase(sha)) { status("error", "file", true, ""); return; }
                    File dir = new File(getCacheDir(), "share");
                    dir.mkdirs();
                    writeAtomic(new File(dir, "update.apk"), b);
                    runOnUiThread(new Runnable() {
                        @Override public void run() {
                            try {
                                Intent i = new Intent(Intent.ACTION_VIEW);
                                i.setDataAndType(Uri.parse("content://com.estateledger.coconut.share/update.apk"), "application/vnd.android.package-archive");
                                i.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK);
                                startActivity(i);
                                status("opened", "", true, "");
                            } catch (Exception ex) {
                                status("error", "file", true, "");
                            }
                        }
                    });
                } catch (Exception ex) {
                    status("error", "file", true, "");
                } finally {
                    busy = false;
                }
            }
        }).start();
    }

    /** Tells the page what happened. */
    private void status(String state, String code, boolean manual, String page) {
        try {
            JSONObject s = new JSONObject();
            s.put("state", state).put("code", code).put("manual", manual).put("page", page)
             .put("time", System.currentTimeMillis());
            if (!manual && "error".equals(state)) {
                // Quiet background failures: keep them for the Data tab, do not interrupt.
                s.put("quiet", true);
            }
            prefs.edit().putString("lastStatus", s.toString()).apply();
            final String js = "window.onUpdateStatus&&window.onUpdateStatus(" + JSONObject.quote(s.toString()) + ")";
            runOnUiThread(new Runnable() {
                @Override public void run() { web.evaluateJavascript(js, null); }
            });
        } catch (Exception ignored) { }
    }

    // ---------- helpers ----------

    private String readBundledVersion() {
        try {
            InputStream in = getAssets().open("index.html");
            ByteArrayOutputStream o = new ByteArrayOutputStream();
            byte[] buf = new byte[16384];
            int n;
            while ((n = in.read(buf)) > 0) o.write(buf, 0, n);
            in.close();
            Matcher m = Pattern.compile("const\\s+VER\\s*=\\s*\"([0-9.]+)\"").matcher(o.toString("UTF-8"));
            return m.find() ? m.group(1) : "0";
        } catch (Exception e) {
            return "0";
        }
    }

    private int shellCode() {
        try { return getPackageManager().getPackageInfo(getPackageName(), 0).versionCode; } catch (Exception e) { return 0; }
    }

    private String shellName() {
        try { return getPackageManager().getPackageInfo(getPackageName(), 0).versionName; } catch (Exception e) { return ""; }
    }

    /** Compares versions like 1.4.10 and 1.4.9 by number. An empty version is the lowest. */
    static int cmp(String a, String b) {
        String[] x = a == null || a.isEmpty() ? new String[0] : a.split("\\.");
        String[] y = b == null || b.isEmpty() ? new String[0] : b.split("\\.");
        if (x.length == 0 || y.length == 0) return x.length - y.length;
        for (int i = 0; i < Math.max(x.length, y.length); i++) {
            int p = i < x.length ? num(x[i]) : 0, q = i < y.length ? num(y[i]) : 0;
            if (p != q) return p < q ? -1 : 1;
        }
        return 0;
    }

    private static int num(String s) {
        try { return Integer.parseInt(s.replaceAll("[^0-9]", "")); } catch (Exception e) { return 0; }
    }

    static boolean verify(byte[] data, String sigB64) {
        try {
            PublicKey k = KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(Base64.decode(PUBKEY, Base64.DEFAULT)));
            Signature s = Signature.getInstance("SHA256withRSA");
            s.initVerify(k);
            s.update(data);
            return s.verify(Base64.decode(sigB64, Base64.DEFAULT));
        } catch (Exception e) {
            return false;
        }
    }

    private static byte[] get(String u, int max) throws Exception {
        HttpURLConnection c = (HttpURLConnection) new URL(u).openConnection();
        c.setConnectTimeout(15000);
        c.setReadTimeout(30000);
        c.setUseCaches(false);
        c.setRequestProperty("Cache-Control", "no-cache");
        try {
            if (c.getResponseCode() != 200) throw new Exception("HTTP " + c.getResponseCode());
            InputStream in = c.getInputStream();
            ByteArrayOutputStream o = new ByteArrayOutputStream();
            byte[] buf = new byte[16384];
            int n;
            while ((n = in.read(buf)) > 0) {
                o.write(buf, 0, n);
                if (o.size() > max) throw new Exception("too large");
            }
            in.close();
            return o.toByteArray();
        } finally {
            c.disconnect();
        }
    }

    private static byte[] sha256(byte[] b) throws Exception { return MessageDigest.getInstance("SHA-256").digest(b); }

    private static String hex(byte[] b) {
        StringBuilder s = new StringBuilder();
        for (byte x : b) s.append(String.format("%02x", x));
        return s.toString();
    }

    private static byte[] readFile(File f) throws Exception {
        FileInputStream in = new FileInputStream(f);
        ByteArrayOutputStream o = new ByteArrayOutputStream();
        byte[] buf = new byte[16384];
        int n;
        while ((n = in.read(buf)) > 0) o.write(buf, 0, n);
        in.close();
        return o.toByteArray();
    }

    private static void writeAtomic(File f, byte[] b) throws Exception {
        f.getParentFile().mkdirs();
        File tmp = new File(f.getPath() + ".tmp");
        FileOutputStream o = new FileOutputStream(tmp);
        o.write(b);
        o.getFD().sync();
        o.close();
        if (!tmp.renameTo(f)) {
            f.delete();
            if (!tmp.renameTo(f)) throw new Exception("rename failed");
        }
    }

    // ---------- files the person saves or picks ----------

    @Override protected void onActivityResult(int req, int res, Intent data) {
        super.onActivityResult(req, res, data);
        Uri uri = (res == RESULT_OK && data != null) ? data.getData() : null;
        if (req == REQ_PICK) {
            if (fileCb != null) {
                fileCb.onReceiveValue(uri == null ? null : new Uri[]{uri});
                fileCb = null;
            }
        } else if (req == REQ_SAVE) {
            boolean ok = false;
            if (uri != null && pendingText != null) {
                try {
                    OutputStream o = getContentResolver().openOutputStream(uri);
                    o.write(pendingText.getBytes("UTF-8"));
                    o.close();
                    ok = true;
                } catch (Exception ignored) { }
            }
            pendingText = null;
            tellPage(ok);
        }
    }

    @Override public void onBackPressed() {
        web.evaluateJavascript("(window.handleBack?window.handleBack():false)", new ValueCallback<String>() {
            @Override public void onReceiveValue(String v) {
                if (!"true".equals(v)) moveTaskToBack(true);
            }
        });
    }

    private void tellPage(boolean ok) {
        web.evaluateJavascript("window.onNativeResult&&window.onNativeResult(" + ok + ")", null);
    }

    private static String mime(String name) {
        return name.endsWith(".json") ? "application/json" : "text/csv";
    }

    private class Bridge {
        @JavascriptInterface public void saveFile(final String name, final String text) {
            runOnUiThread(new Runnable() {
                @Override public void run() {
                    pendingText = text;
                    Intent i = new Intent(Intent.ACTION_CREATE_DOCUMENT);
                    i.addCategory(Intent.CATEGORY_OPENABLE);
                    i.setType(mime(name));
                    i.putExtra(Intent.EXTRA_TITLE, name);
                    try {
                        startActivityForResult(i, REQ_SAVE);
                    } catch (Exception e) {
                        pendingText = null;
                        tellPage(false);
                    }
                }
            });
        }

        @JavascriptInterface public void printPage(final String name) {
            runOnUiThread(new Runnable() {
                @Override public void run() {
                    try {
                        PrintManager pm = (PrintManager) MainActivity.this.getSystemService(PRINT_SERVICE);
                        pm.print(name, web.createPrintDocumentAdapter(name), new PrintAttributes.Builder().build());
                    } catch (Exception e) {
                        tellPage(false);
                    }
                }
            });
        }

        @JavascriptInterface public void shareFile(final String name, final String text) {
            runOnUiThread(new Runnable() {
                @Override public void run() {
                    try {
                        File dir = new File(getCacheDir(), "share");
                        dir.mkdirs();
                        String safe = name.replaceAll("[^A-Za-z0-9._-]", "_");
                        File f = new File(dir, safe);
                        FileOutputStream o = new FileOutputStream(f);
                        o.write(text.getBytes("UTF-8"));
                        o.close();
                        Uri u = Uri.parse("content://com.estateledger.coconut.share/" + safe);
                        Intent i = new Intent(Intent.ACTION_SEND);
                        i.setType(mime(safe));
                        i.putExtra(Intent.EXTRA_STREAM, u);
                        i.putExtra(Intent.EXTRA_SUBJECT, safe);
                        i.setClipData(ClipData.newRawUri(safe, u));
                        i.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                        startActivity(Intent.createChooser(i, "Share"));
                    } catch (Exception e) {
                        tellPage(false);
                    }
                }
            });
        }

        /** Copy of the records in the app's private storage, used if the page's own storage is ever empty. */
        @JavascriptInterface public void saveState(String json) {
            try { writeAtomic(new File(getFilesDir(), "state.json"), json.getBytes("UTF-8")); } catch (Exception ignored) { }
        }

        @JavascriptInterface public String loadState() {
            try {
                File f = new File(getFilesDir(), "state.json");
                return f.exists() ? new String(readFile(f), "UTF-8") : "";
            } catch (Exception e) {
                return "";
            }
        }

        @JavascriptInterface public String getShellInfo() {
            try {
                JSONObject o = new JSONObject();
                o.put("versionCode", shellCode()).put("versionName", shellName())
                 .put("notificationsEnabled", notificationsEnabled())
                 .put("pushEnabled", prefs.getBoolean("pushEnabled", false))
                 .put("page", activePage).put("bundledPage", bundledPage).put("justApplied", justApplied)
                 .put("updateUrl", updateUrl())
                 .put("lastCheck", prefs.getLong("lastCheck", 0))
                 .put("lastStatus", prefs.getString("lastStatus", ""))
                 .put("pendingPage", cmp(prefs.getString("pageVersion", ""), activePage) > 0 ? prefs.getString("pageVersion", "") : "")
                 .put("apkName", prefs.getInt("apkCode", 0) > shellCode() ? prefs.getString("apkName", "") : "");
                justApplied = "";
                return o.toString();
            } catch (Exception e) {
                return "{}";
            }
        }

        @JavascriptInterface public String setUpdateUrl(String u) {
            u = u == null ? "" : u.trim();
            if (!u.isEmpty() && !u.startsWith("https://")) return "bad";
            // An empty link goes back to the built-in one.
            if (u.isEmpty()) prefs.edit().remove("updateUrl").putLong("lastCheck", 0).apply();
            else prefs.edit().putString("updateUrl", u).putLong("lastCheck", 0).apply();
            return "ok";
        }

        @JavascriptInterface public void checkForUpdates() { startCheck(true); }

        @JavascriptInterface public void requestNotificationPermission() {
            runOnUiThread(new Runnable() {
                @Override public void run() { MainActivity.this.requestNotifications(); }
            });
        }

        @JavascriptInterface public String getPushToken() {
            return prefs.getString("pushToken", "");
        }

        @JavascriptInterface public boolean isPushEnabled() {
            return prefs.getBoolean("pushEnabled", false) && notificationsEnabled();
        }

        @JavascriptInterface public void setPushUserId(String userId) {
            String value = userId == null ? "" : userId.trim();
            if (!value.isEmpty() && !value.matches("(?i)[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}"))
                value = "";
            prefs.edit().putString("pushUserId", value).apply();
        }

        @JavascriptInterface public void scheduleReminders(
                final String harvestDate,
                final String twoDayTitle,
                final String twoDayBody,
                final String oneDayTitle,
                final String oneDayBody,
                final String backupTitle,
                final String backupBody) {
            runOnUiThread(new Runnable() {
                @Override public void run() {
                    ReminderReceiver.savePlanAndSchedule(
                            MainActivity.this, harvestDate, twoDayTitle, twoDayBody,
                            oneDayTitle, oneDayBody, backupTitle, backupBody);
                }
            });
        }

        @JavascriptInterface public void installUpdate() {
            runOnUiThread(new Runnable() {
                @Override public void run() { MainActivity.this.installUpdate(); }
            });
        }

        @JavascriptInterface public void restart() {
            runOnUiThread(new Runnable() {
                @Override public void run() { loadStart(); }
            });
        }
    }
}

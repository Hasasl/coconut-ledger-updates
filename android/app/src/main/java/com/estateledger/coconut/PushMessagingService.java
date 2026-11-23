package com.estateledger.coconut;

import android.Manifest;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.service.notification.StatusBarNotification;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

public class PushMessagingService extends FirebaseMessagingService {
    private static final String CHANNEL_ID = "app_updates";
    static final String RELEASE_NOTIFICATION_TAG = "release-update";
    static final int RELEASE_NOTIFICATION_ID = 1;

    @Override public void onNewToken(String token) {
        MainActivity.updatePushToken(getApplicationContext(), token);
        if (getSharedPreferences("ledger", MODE_PRIVATE).getBoolean("pushEnabled", false)) {
            FirebaseMessaging.getInstance().subscribeToTopic("app-updates");
        }
    }

    @Override public void onMessageReceived(RemoteMessage message) {
        if (Build.VERSION.SDK_INT >= 33
                && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) return;
        String type = message.getData().get("type");
        if (!"release".equals(type)
                && getSharedPreferences("ledger", MODE_PRIVATE).getString("pushUserId", "").isEmpty()) return;
        String title = message.getData().get("title"),
                body = message.getData().get("body");
        if (title == null || title.isEmpty()) title = getString(R.string.app_name);
        if (body == null || body.isEmpty()) body = "There is an update for your estate app.";
        boolean release = "release".equals(type);
        String version = releaseVersion(message, body);
        if (release && version != null) {
            android.content.SharedPreferences prefs = getSharedPreferences("ledger", MODE_PRIVATE);
            String pendingVersion = prefs.getString("releaseNotificationVersion", "");
            if (MainActivity.cmp(pendingVersion, version) > 0) version = pendingVersion;
            prefs.edit().putString("releaseNotificationVersion", version).apply();
            String installedVersion = MainActivity.getInstalledVersionName(this);
            if (MainActivity.cmp(installedVersion, version) >= 0) {
                clearCompletedReleaseNotifications(this, installedVersion, version);
                prefs.edit().remove("releaseNotificationVersion").apply();
                return;
            }
            body = "Version " + version + " is available. Open the app to update.";
        }
        createChannel();

        Intent openApp = new Intent(this, MainActivity.class);
        openApp.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        PendingIntent content = PendingIntent.getActivity(
                this,
                release ? RELEASE_NOTIFICATION_ID : (int) System.currentTimeMillis(),
                openApp,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        Notification.Builder notification = Build.VERSION.SDK_INT >= 26
                ? new Notification.Builder(this, CHANNEL_ID)
                : new Notification.Builder(this);
        notification
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentTitle(title)
                .setContentText(body)
                .setStyle(new Notification.BigTextStyle().bigText(body))
                .setAutoCancel(true)
                .setContentIntent(content)
                .setDefaults(Notification.DEFAULT_ALL);
        if (Build.VERSION.SDK_INT < 26) notification.setPriority(Notification.PRIORITY_HIGH);
        NotificationManager manager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        if (manager != null) {
            if (release) manager.notify(RELEASE_NOTIFICATION_TAG, RELEASE_NOTIFICATION_ID, notification.build());
            else manager.notify((int) System.currentTimeMillis(), notification.build());
        }
    }

    static void clearCompletedReleaseNotifications(Context context, String installedVersion, String pendingVersion) {
        NotificationManager manager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
        if (manager == null) return;
        if (Build.VERSION.SDK_INT >= 23) {
            for (StatusBarNotification active : manager.getActiveNotifications()) {
                Notification notification = active.getNotification();
                CharSequence title = notification.extras.getCharSequence(Notification.EXTRA_TITLE);
                CharSequence text = notification.extras.getCharSequence(Notification.EXTRA_TEXT);
                String version = releaseVersion(text == null ? "" : text.toString());
                if (active.getId() == RELEASE_NOTIFICATION_ID
                        && RELEASE_NOTIFICATION_TAG.equals(active.getTag())
                        && version == null) version = pendingVersion;
                boolean releaseNotification = "Coconut Ledger update".contentEquals(title == null ? "" : title)
                        || version != null;
                if (releaseNotification && version != null
                        && MainActivity.cmp(installedVersion, version) >= 0) {
                    manager.cancel(active.getTag(), active.getId());
                }
            }
        }
    }

    private static String releaseVersion(RemoteMessage message, String body) {
        String version = message.getData().get("version");
        return isVersion(version) ? version : releaseVersion(body);
    }

    private static String releaseVersion(String body) {
        java.util.regex.Matcher matcher = java.util.regex.Pattern
                .compile("Version (\\d+\\.\\d+(?:\\.\\d+)?) is available")
                .matcher(body);
        return matcher.find() ? matcher.group(1) : null;
    }

    private static boolean isVersion(String version) {
        return version != null && version.matches("\\d+\\.\\d+(?:\\.\\d+)?");
    }

    private void createChannel() {
        if (Build.VERSION.SDK_INT < 26) return;
        NotificationManager manager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        if (manager != null) {
            manager.createNotificationChannel(new NotificationChannel(
                    CHANNEL_ID,
                    "App and estate updates",
                    NotificationManager.IMPORTANCE_DEFAULT));
        }
    }
}

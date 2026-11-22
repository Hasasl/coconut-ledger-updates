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
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

public class PushMessagingService extends FirebaseMessagingService {
    private static final String CHANNEL_ID = "app_updates";

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
        createChannel();
        String title = message.getData().get("title"),
                body = message.getData().get("body");
        if (title == null || title.isEmpty()) title = getString(R.string.app_name);
        if (body == null || body.isEmpty()) body = "There is an update for your estate app.";

        Intent openApp = new Intent(this, MainActivity.class);
        openApp.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        PendingIntent content = PendingIntent.getActivity(
                this,
                (int) System.currentTimeMillis(),
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
        if (manager != null) manager.notify((int) System.currentTimeMillis(), notification.build());
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

package com.estateledger.coconut;

import android.Manifest;
import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.BroadcastReceiver;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.os.Build;
import java.util.Calendar;

public class ReminderReceiver extends BroadcastReceiver {
    private static final String PREFS = "ledger_reminders";
    private static final String ACTION_REMINDER = "com.estateledger.coconut.REMINDER";
    private static final String CHANNEL_ID = "ledger_reminders";
    private static final int HARVEST_TWO_DAYS = 101;
    private static final int HARVEST_ONE_DAY = 102;
    private static final int MONTHLY_BACKUP = 103;

    @Override public void onReceive(Context context, Intent intent) {
        if (intent == null || !ACTION_REMINDER.equals(intent.getAction())) return;
        if (Build.VERSION.SDK_INT >= 33
                && context.checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) return;
        int id = intent.getIntExtra("notificationId", 0);
        showNotification(
                context,
                id,
                intent.getStringExtra("title"),
                intent.getStringExtra("body"));
        if (id == MONTHLY_BACKUP) {
            SharedPreferences prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
            scheduleBackup(
                    context,
                    prefs.getString("backupTitle", ""),
                    prefs.getString("backupBody", ""));
        }
    }

    static void savePlanAndSchedule(
            Context context,
            String harvestDate,
            String twoDayTitle,
            String twoDayBody,
            String oneDayTitle,
            String oneDayBody,
            String backupTitle,
            String backupBody) {
        SharedPreferences prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        prefs.edit()
                .putString("harvestDate", harvestDate == null ? "" : harvestDate)
                .putString("twoDayTitle", twoDayTitle)
                .putString("twoDayBody", twoDayBody)
                .putString("oneDayTitle", oneDayTitle)
                .putString("oneDayBody", oneDayBody)
                .putString("backupTitle", backupTitle)
                .putString("backupBody", backupBody)
                .apply();
        scheduleFromPrefs(context);
    }

    static void scheduleFromPrefs(Context context) {
        SharedPreferences prefs = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        scheduleHarvest(
                context,
                prefs.getString("harvestDate", ""),
                prefs.getString("twoDayTitle", ""),
                prefs.getString("twoDayBody", ""),
                prefs.getString("oneDayTitle", ""),
                prefs.getString("oneDayBody", ""));
        scheduleBackup(
                context,
                prefs.getString("backupTitle", ""),
                prefs.getString("backupBody", ""));
    }

    private static void scheduleHarvest(
            Context context,
            String date,
            String twoDayTitle,
            String twoDayBody,
            String oneDayTitle,
            String oneDayBody) {
        cancel(context, HARVEST_TWO_DAYS);
        cancel(context, HARVEST_ONE_DAY);
        Calendar harvest = parseHarvestDate(date);
        if (harvest == null) return;
        scheduleAt(context, HARVEST_TWO_DAYS, daysBefore(harvest, 2), twoDayTitle, twoDayBody);
        scheduleAt(context, HARVEST_ONE_DAY, daysBefore(harvest, 1), oneDayTitle, oneDayBody);
    }

    private static Calendar parseHarvestDate(String date) {
        if (date == null || !date.matches("\\d{4}-\\d{2}-\\d{2}")) return null;
        try {
            String[] parts = date.split("-");
            Calendar result = Calendar.getInstance();
            result.clear();
            result.setLenient(false);
            result.set(
                    Integer.parseInt(parts[0]),
                    Integer.parseInt(parts[1]) - 1,
                    Integer.parseInt(parts[2]),
                    8,
                    0,
                    0);
            result.getTimeInMillis();
            return result;
        } catch (IllegalArgumentException e) {
            return null;
        }
    }

    private static Calendar daysBefore(Calendar harvest, int days) {
        Calendar reminder = (Calendar) harvest.clone();
        reminder.add(Calendar.DAY_OF_MONTH, -days);
        return reminder;
    }

    private static void scheduleBackup(Context context, String title, String body) {
        Calendar now = Calendar.getInstance();
        Calendar reminder = (Calendar) now.clone();
        reminder.set(Calendar.DAY_OF_MONTH, 1);
        reminder.set(Calendar.HOUR_OF_DAY, 8);
        reminder.set(Calendar.MINUTE, 0);
        reminder.set(Calendar.SECOND, 0);
        reminder.set(Calendar.MILLISECOND, 0);
        if (!reminder.after(now)) {
            reminder.add(Calendar.MONTH, 1);
            reminder.set(Calendar.DAY_OF_MONTH, 1);
        }
        scheduleAt(context, MONTHLY_BACKUP, reminder, title, body);
    }

    private static void scheduleAt(Context context, int id, Calendar reminder, String title, String body) {
        if (!reminder.after(Calendar.getInstance())) return;
        AlarmManager alarms = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
        if (alarms == null) return;
        Intent intent = new Intent(context, ReminderReceiver.class);
        intent.setAction(ACTION_REMINDER);
        intent.putExtra("notificationId", id);
        intent.putExtra("title", title);
        intent.putExtra("body", body);
        PendingIntent pending = PendingIntent.getBroadcast(
                context,
                id,
                intent,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        alarms.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, reminder.getTimeInMillis(), pending);
    }

    private static void cancel(Context context, int id) {
        AlarmManager alarms = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
        if (alarms == null) return;
        Intent intent = new Intent(context, ReminderReceiver.class);
        intent.setAction(ACTION_REMINDER);
        PendingIntent pending = PendingIntent.getBroadcast(
                context,
                id,
                intent,
                PendingIntent.FLAG_NO_CREATE | PendingIntent.FLAG_IMMUTABLE);
        if (pending != null) alarms.cancel(pending);
    }

    private static void showNotification(Context context, int id, String title, String body) {
        NotificationManager manager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
        if (manager == null) return;
        if (Build.VERSION.SDK_INT >= 26) {
            NotificationChannel channel = new NotificationChannel(
                    CHANNEL_ID,
                    "Ledger reminders",
                    NotificationManager.IMPORTANCE_DEFAULT);
            manager.createNotificationChannel(channel);
        }
        Intent openApp = new Intent(context, MainActivity.class);
        openApp.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        PendingIntent content = PendingIntent.getActivity(
                context,
                id,
                openApp,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        Notification.Builder notification = Build.VERSION.SDK_INT >= 26
                ? new Notification.Builder(context, CHANNEL_ID)
                : new Notification.Builder(context);
        notification
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentTitle(title == null ? "" : title)
                .setContentText(body == null ? "" : body)
                .setAutoCancel(true)
                .setContentIntent(content);
        manager.notify(id, notification.build());
    }
}

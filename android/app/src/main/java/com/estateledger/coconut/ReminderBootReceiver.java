package com.estateledger.coconut;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class ReminderBootReceiver extends BroadcastReceiver {
    @Override public void onReceive(Context context, Intent intent) {
        if (intent != null) {
            ReminderReceiver.scheduleFromPrefs(context);
        }
    }
}

package com.estateledger.coconut;

import android.content.ContentProvider;
import android.content.ContentValues;
import android.database.Cursor;
import android.database.MatrixCursor;
import android.net.Uri;
import android.os.ParcelFileDescriptor;
import android.provider.OpenableColumns;
import java.io.File;
import java.io.FileNotFoundException;

/** Read-only access to the one file being shared, granted per share to the app the user picks. */
public class ShareProvider extends ContentProvider {
    private File fileFor(Uri uri) {
        String n = uri.getLastPathSegment();
        if (n == null || n.contains("/") || n.contains("..")) return null;
        return new File(new File(getContext().getCacheDir(), "share"), n);
    }

    @Override public boolean onCreate() { return true; }

    @Override public String getType(Uri uri) {
        String n = uri.getLastPathSegment();
        if (n != null && n.endsWith(".apk")) return "application/vnd.android.package-archive";
        return n != null && n.endsWith(".json") ? "application/json" : "text/csv";
    }

    @Override public Cursor query(Uri uri, String[] projection, String sel, String[] args, String sort) {
        File f = fileFor(uri);
        if (projection == null) projection = new String[]{OpenableColumns.DISPLAY_NAME, OpenableColumns.SIZE};
        MatrixCursor c = new MatrixCursor(projection, 1);
        Object[] row = new Object[projection.length];
        for (int i = 0; i < projection.length; i++) {
            if (OpenableColumns.DISPLAY_NAME.equals(projection[i])) row[i] = f == null ? null : f.getName();
            else if (OpenableColumns.SIZE.equals(projection[i])) row[i] = f == null ? null : Long.valueOf(f.length());
        }
        c.addRow(row);
        return c;
    }

    @Override public ParcelFileDescriptor openFile(Uri uri, String mode) throws FileNotFoundException {
        File f = fileFor(uri);
        if (f == null || !f.exists()) throw new FileNotFoundException();
        return ParcelFileDescriptor.open(f, ParcelFileDescriptor.MODE_READ_ONLY);
    }

    @Override public Uri insert(Uri uri, ContentValues v) { return null; }
    @Override public int delete(Uri uri, String s, String[] a) { return 0; }
    @Override public int update(Uri uri, ContentValues v, String s, String[] a) { return 0; }
}

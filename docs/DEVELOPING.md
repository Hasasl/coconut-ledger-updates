# Developing Coconut Ledger

This guide is everything you need to keep building the app on your own Windows computer.

---

## 1. How the app works (the big picture)

The app has two parts:

| Part | Where | What it does | How often it changes |
|---|---|---|---|
| **The page** | `web/` (HTML, CSS, JavaScript) | Every screen, calculation, chart, report and language | Almost every change |
| **The Android shell** | `android/` (Java) | Shows the page, saves files, prints, and installs updates | Rarely |

How an update reaches the phones:

```
You edit web/  ->  python tools/make_release.py  ->  GitHub Desktop: Commit + Push
                                                          |
                     Phones (every time the app is opened, at most every 5 minutes)
                     read update.json from GitHub, check your signature, download the new page,
                     and switch to it after the person leaves the app and comes back.
```

- A **page update** needs no install. Phones switch to it by themselves.
- An **Android shell update** shows "Install" in the app. The person taps it once.
- Records stay on the phone unless optional estate sync is configured. GitHub only holds the app, never anyone's data.
- The 1.8.5 page update displays a one-time in-app security notice after it applies. Update checks run
  when the app is opened or resumed; this is not a push notification while the app is closed.

### Optional multi-device estate sync

Estate sync is local-first. The app is preconfigured with the estate's Supabase project URL and public
publishable key, so users do not need to configure every device. Each person signs in with an individual
account. The app uploads ledger records to that project's private database; an invitation only creates
a join request, and an estate owner must approve every request before the account can read or sync records.
Users without an active estate membership keep full local app access and can create an estate; its creator
becomes the owner. A previously selected estate is restored only after the signed-in account's membership
is confirmed.

Before using real estate data:

1. Create a Supabase project and configure email/password authentication and email confirmation.
2. In the Supabase SQL Editor, run these migrations in order, once each:
   `202611170001_estate_sync.sql`, `202611172001_add_member_roles.sql`, and
   `202611172002_role_access_controls.sql`. Do not rerun an already-applied migration.
3. The project's URL and public publishable/anon key are bundled into `web/sync.js`. They are public
   client settings, not secrets; never bundle a `service_role` or `sb_secret` key. To inspect or change
   these settings on a device, open **Data > App updates** and tap the app version line seven times.
   The developer options reveal the connection fields. Supabase Auth and row-level security—not hiding
   or encrypting the public key—protect estate data.
4. Create an account and estate on the first device. The owner creates a one-time, 24-hour invite
   and can revoke any unused invite.
   The other person signs in, submits the invite code and a display name, then waits for owner
   approval. Approval is required for every join request.
5. Deploy the owner-only global account function after the migrations. Store the Supabase service-role
   key only as a server-side Edge Function secret; never add it to the app or repository:
   `supabase functions deploy manage-account`. Set or verify the `SUPABASE_SERVICE_ROLE_KEY` secret
   through the Supabase dashboard or CLI before enabling global account actions.
6. Test with separate owner, manager, and member accounts before migrating production records. Verify
   that member roles can only see enabled tabs, that restricted members receive only harvest dates and
   coconut counts, that managers cannot change ledger records or elevate users, and that role changes
   take effect on other devices.

Owners can approve requests as Manager or Member 1–5. Owners control each Member role's analytical
tabs; the monthly harvest-date and coconut-count view is always available. Members cannot open the
Data management tab. Managers can view every tab and
manage, suspend, or remove Member 1–5 accounts, but cannot edit ledger records, promote anyone to
Manager/Owner, approve join requests, or change feature visibility. Member 1–5 accounts are read-only.
The database denies direct record reads and exposes only an authorized, role-filtered read function.
Global ban/delete actions are owner-only and require the deployed Edge Function. Accounts that own an
estate cannot be globally banned or deleted; transfer ownership first. Visibility reductions purge the
restricted local ledger fields on the next successful sync. Removing estate access blocks future cloud
access but cannot remotely erase data already downloaded to a device. Back up devices and invite only
people authorized to see the estate's records.

---

## 2. Tools to install (once)

| Tool | Why | Get it from |
|---|---|---|
| **VS Code** | Edit the code | code.visualstudio.com |
| **GitHub Desktop** | Save versions and publish to GitHub without typing Git commands | desktop.github.com |
| **Python 3** | Runs the release tools. During install, tick **Add python.exe to PATH**. | python.org |
| **Google Chrome** | Preview and debug the page | google.com/chrome |
| **Android Studio** | Only when you change the Android shell. Skip it until then. | developer.android.com/studio |

When you open the project folder, VS Code suggests three extensions. Install them:
- **Live Preview**: shows the page while you edit.
- **Prettier**: tidies the code when you save.
- **Python**: runs the tools.

---

## 3. First-time setup

1. **Clone the repository.** Open GitHub Desktop, sign in, then choose
   **File > Clone repository > GitHub.com > Hasasl/coconut-ledger-updates > Clone**.
   Note the folder it uses, for example `C:\Users\You\Documents\GitHub\coconut-ledger-updates`.
2. **Remove the old published files.** In GitHub Desktop choose **Repository > Show in Explorer**.
   Delete `index.html` and `CoconutLedger.apk` at the top level. They now live in `published/`.
3. **Copy in the project.** From the project zip, open the `coconut-ledger-updates` folder and copy
   everything inside it into your clone. Choose **Replace** when Windows asks.
4. **Add your key.** Copy `ledger.keystore` from `KEEP-PRIVATE-signing-key.zip` into the `signing` folder.
5. **Install the signing library.** Open a terminal (in VS Code: **Terminal > New Terminal**) and run:
   ```
   pip install cryptography
   ```
6. **Commit and push.** In GitHub Desktop, check that `ledger.keystore` is **not** in the list of changes
   (Git ignores the `signing` folder). Type the summary `Move project into the repository`, click
   **Commit to main**, then **Push origin**.

That push also publishes page version 1.6.1, which looks the same as 1.6.0. When the phones switch to
1.6.1, you know the whole chain works.

---

## 4. Everyday work: change the page and publish

1. In VS Code, choose **File > Open Folder** and open your clone.
2. **Preview.** Right-click `web/index.html` and choose **Show Preview** (Live Preview), or open it in
   Chrome. In Chrome press **F12**, then the phone icon, to see it at phone size. The preview saves its
   own sample records in the browser, so nothing touches real data.
3. **Edit** `web/app.js` (ledger logic and screens), `web/sync.js` (Supabase auth and requests),
   `web/styles.css` (looks) or `web/index.html` (the outer frame and harvest form).
4. **Raise the version.** Near the top of `web/app.js`, change `const VER = "1.6.1";` to the next
   number, for example `"1.6.2"`. The release tool stops you if you forget.
5. **Publish.** Choose **Terminal > Run Task > Release: publish an update**, or run
   `python tools/make_release.py`. Enter the signing key password when prompted. Use a strong, unique
   password (at least 16 characters is recommended). Keep it private; do not put it in source code or
   commit it.
6. **Upload.** In GitHub Desktop, type a summary like `Release 1.6.2`, click **Commit to main**, then
   **Push origin**.

A few minutes later, every phone picks it up.

**Commit often, even without releasing.** GitHub Desktop's History tab shows every saved version, and
you can undo a commit with right-click > **Revert changes in commit**. Commits only reach the phones
after you run `make_release.py`.

---

## 5. Try an update on your phone before everyone gets it

1. In GitHub Desktop: **Current branch > New branch**, name it `test`.
2. Make your change, raise `VER`, run `make_release.py`, then commit and click **Publish branch**.
3. On your own phone, open **Data > App updates** and tap the line **This app: version ...** 7 times.
   The hidden developer options appear. In **Update link**, paste
   `https://raw.githubusercontent.com/Hasasl/coconut-ledger-updates/refs/heads/test/update.json`,
   tap **Save link**, then **Check for updates** and **Use it now**.
4. If it is good: in GitHub Desktop switch to `main`, choose **Branch > Merge into current branch >
   test**, then **Push origin**. Everyone gets it.
5. On your phone, open the developer options again (7 taps), clear the Update link and tap **Save link** to go back to the normal link.

If it is bad, switch back to `main` and nobody else is affected.

---

## 6. Map of the code

### `web/app.js`, in order from top to bottom

Press **Ctrl+Shift+O** in VS Code to jump to a function by name.

| Section | What is there |
|---|---|
| `const L = { en: {...}, si: {...} }` | **Every word on screen**, in English and Sinhala. The same key appears in both. |
| `VER`, `MIN_SHELL` | Page version, and the oldest Android shell (version code) this page runs on |
| `CATS` | The 8 deduction types, in order |
| `sample()` | The sample records a new user sees |
| `state`, `norm()`, `persist()`, `mirror()` | Saved data: loading, fixing older records, saving, and the backup copy kept inside the Android app |
| `calc()` | **The money rules**: income = loaded × price; rejected = harvested − home use − loaded; free coconuts; transport cart = harvested × rate |
| `monthly()` | Groups harvests, separate income entries and buyer balances into months |
| `yieldModel()`, `priceModel()`, `gapModel()`, `forecast()` | The forecast (see section 7b) |
| `barChart()`, `lineChart()`, `spark()` | The charts (hand-drawn SVG, no library) |
| Updates section (`UPD`, `readShell`, `updCard`) | The App updates card and messages from the Android shell |
| `vOverview`, `vMonths`, `vInsights`, `vForecast`, `vData` | **One function per tab.** Each returns the tab's HTML. |
| `pages`, `build()`, `render()`, `go()` | Tabs kept in memory: `build()` makes a tab, `go()` switches tabs, `render()` rebuilds after a change |
| `boot()` (near the end) | Start-up: the loading screen plays while every tab is built |
| `toggleSkin()` | Switch dark/light |
| `openForm()` and the `submit` handler | The add/edit harvest form and its checks |
| `toCSV()`, `importText()`, `doImport()` | CSV and backup export and import |
| `openReport()`, `openMonthReport()` | The PDF reports |
| `document.addEventListener("click", ...)` | What every button does (looks at `data-` attributes) |
| The last lines | Start-up |

### `web/index.html`
- The loading screen (`#loader`): palm tree, lorry, wheels and falling coconuts. Each moving part is its own
  element, animated in `styles.css` (search `ldDrive`, `ldSway`, `ldFall`).

### `web/styles.css`
- The top `:root { ... }` block holds the **neon colours**. `:root[data-skin="light"]` holds the light ones.
  Change a colour there and it changes everywhere.
- After that, styles go roughly in screen order: header, cards, charts, months, dialog, report, animations.

### Estate sync
- `web/sync.js` contains the Supabase Auth and PostgREST client. It uses only the public publishable key
  and the signed-in user's session.
- `supabase/migrations/202611170001_estate_sync.sql` contains the schema, row-level security policies
  and initial owner-gated RPCs. Apply the incremental migrations in timestamp order; the role-access
  migration removes direct authenticated record reads and adds the filtered record RPC.
- `supabase/functions/manage-account/index.ts` performs owner-verified global account actions. Its
  service-role key must remain a server-side Supabase secret and must never be bundled into the app.

### `android/app/src/main/java/com/estateledger/coconut/`
- `MainActivity.java`: shows the page full screen (hides the status and navigation bars, uses the area
  beside the camera hole, and shrinks the page when the keyboard opens), checks for updates, installs them,
  and talks to the page
  through `AndroidBridge` (`saveFile`, `shareFile`, `printPage`, `getShellInfo`, `scheduleReminders`,
  `requestNotificationPermission`, ...).
- `ReminderReceiver.java`: schedules local notifications at 08:00 two days and one day before the next
  forecast harvest, plus a monthly backup reminder on the first day of the month. Android 13+ requires
  notification permission.
- `ReminderBootReceiver.java`: restores reminders after reboot, time changes, and app replacement.
- `ShareProvider.java`: lets other apps (Drive, Gmail, the installer) read a file the app shares.

---

## 7. Common changes

**Set your company name.** Near the top of `web/app.js`, fill in `const COMPANY = "";`, for example
`const COMPANY = "Your Company (Pvt) Ltd";`. It shows in the footer at the bottom of the Data tab as
"© 2026 Your Company (Pvt) Ltd. All rights reserved." Use ™ for a name you claim as your brand. Use ®
only after the trademark is registered (in Sri Lanka, with the National Intellectual Property Office).

**Change or translate a word.** Search `web/app.js` for the English text. Change it in `L.en` and the
same key in `L.si`.

**Change a colour.** Edit the token in `web/styles.css` (`--accent`, `--bg` and so on).

**Change a calculation.** Edit `calc()`. Check the result in the preview: open the Months tab and
compare against a hand calculation.

**Add a new field to a harvest.**
1. Add the input to the form in `web/index.html`.
2. Fill it in `openForm()` and save it in the `submit` handler.
3. Show it in `vMonths()`.
4. Old records do not have it. Treat a missing value as empty, or give it a default in `norm()`.
5. Add it to the end of the columns in `toCSV()` and `importText()`.

**Rules that keep people's data safe**
- Never rename or remove a field that saved records already use (`total`, `loaded`, `price`, `ded`, ...).
  Phones hold records saved by older versions.
- Saved settings live in `state` (`estate`, `cur`, `freePer`, `shares`, `transRate`, ...). New settings
  need a default in `norm()`.
- Adding a deduction type to `CATS` also moves the CSV columns. Add it at the end and update
  `toCSV()` and `importText()` together.
- Per-harvest custom deductions are stored in `customDeds`; keep their trailing JSON column in
  `toCSV()` and `importText()` so CSV backups round-trip. Manual rounding is stored there as a
  tagged `rounding` deduction so it is included in totals and reports without changing the CSV schema.
- Per-recipient deductions and top-ups are stored in `shareDeds` and `shareAdds`. Deductions come
  out of each equal share; optional top-ups are added after the split and do not change the estate
  balance. Keep both CSV JSON columns in sync, and include each recipient's resulting amount in
  harvest and report breakdowns.
- Separate income entries live in `state.otherIncome`. The user chooses a month; new entries store
  the first day of that month in the existing date field. Monthly income is harvest income plus
  other income; monthly balance is that combined income minus the month's harvest deductions, then
  divided among shares before per-share deductions. This does not change any harvest calculation.
  Older CSV entries with any date in the month continue to be grouped into that month.
  Keep the `record_type`, `income_amount`, `income_note`, and `income_id` CSV columns in sync with
  `toCSV()` and `importText()`. Per-share additions are appended as `share_additions`.
- Buyer payments are stored per harvest in `payments` as dated, partial receipts. They do not change
  earned income, deductions, or shares. Outstanding is `max(0, harvest income − receipts)`; excess
  receipts appear separately as credit. The CSV appends `buyer_payments` after `share_additions`
  (column 28); older CSV files without it still import.
- Monthly Daughter/Son paid-to-date values, review-only month status, and reusable deduction
  presets are stored in `monthPayouts`, `reviewedMonths`, and `deductionPresets`. Full JSON backups
  include them. CSV is the harvest/payment ledger export; use JSON to preserve these monthly controls
  and presets. Reviewing a month never locks its records.
- `Check backup` validates a pasted full JSON backup without changing the saved ledger. The separate
  Import action is still required to restore it.

### 7b. How the forecast works

All of it is in `web/app.js`, from `/* ---------- forecast models` down to `function forecast`.

- **Three models.** Coconuts per day between harvests (`yieldModel`), price (`priceModel`) and days
  between harvests (`gapModel`).
- **Irregular records.** Yield is fitted to the actual days between recorded harvests. A missing month
  is elapsed time, not an invented zero-yield observation. Seasonality is averaged across each full
  interval; recent records are weighted by calendar age, and isolated extreme values are limited so
  one entry does not dominate the estimate.
- **Walk-forward backtest.** Each model tries a few settings. It predicts a later recorded harvest
  using only earlier records, using the actual elapsed time for that interval. The error display is an
  estimate, not a guarantee; it gets more meaningful as more harvest intervals are recorded.
- **Simplest good setting wins.** The simplest setting within one standard error of the best one is
  used (the "one standard error rule"). A season or a trend is only used when it clearly predicts your
  own past harvests better. That protects against overfitting with few records.
- **Public data.** National output usually peaks around March to June (Central Bank of Sri Lanka), so
  the season model starts from that shape (`SEASON`). The price model may assume prices rise when supply
  is low. Both are only kept if the backtest says they help.
- **Ranges.** The "likely" ranges come from the backtest errors, and widen further into the future.
- **Planning scenario.** On the Forecast tab, an optional date, coconut count and price can be entered
  to recalculate estimated sales, deductions and shares. Blank count or price uses the model's estimate.
  This is temporary planning only; it does not change the ledger or saved harvests. The sale estimate
  applies the recent loaded-coconut share.
- **Market notes.** The Forecast tab's market text is the word `fm_market_p` in `L.en` and `L.si`.
  Update it when the Central Bank publishes new figures (agriculture data bulletin, cbsl.gov.lk).

To check a change, open the Forecast tab: the "How much to trust this" card shows the backtest errors.

---

## 8. Changing the Android shell (rare)

You need this only to change Java code, permissions, the icon, or the built-in update link.

1. Install **Android Studio**. Choose **Open** and pick the `android` folder.
   The first sync downloads Gradle and the Android SDK, which can take 10 to 20 minutes.
   If it offers to upgrade the Android Gradle Plugin, you can choose not to. The project works as it is.
2. Make your change.
3. In `apk/apk_info.json`, raise `versionCode` by 1 and set a new `versionName`, for example
   `{"versionCode": 9, "versionName": "1.7.0"}`.
4. Build the page into the app: run `python tools/build_page.py`, or the VS Code task
   **Android: build the page into the app**. Android Studio refuses to build without it.
5. In Android Studio choose **Build > Generate Signed App Bundle / APK > APK**:
   - Key store path: `signing\ledger.keystore` in your clone
   - Key store password and key password: your key password
   - Key alias: `ledger`
   - Build variant: **release**, then **Create**

   The app lands in `android/app/release/app-release.apk`.
6. Run `python tools/make_release.py`. When it asks to use the new app from Android Studio, type `y`.
7. Commit and push in GitHub Desktop. Phones show **Install**.
8. On GitHub, create a new **Release** (for example `v1.7.0`) and attach `published/CoconutLedger.apk`,
   so new users download the new version.

**If a page needs something only the new shell has** (a new `AndroidBridge` function), set
`MIN_SHELL` in `web/app.js` to the new `versionCode`. Phones still on the old shell keep their current
page until they install the new app.

**Protect and preserve the key.** Android only installs an update over the existing app if it is signed
with the same `ledger.keystore`. Without it, every phone would have to uninstall and lose its records.
The former built-in password fallback was publicly readable. If your local keystore still uses that
password, change it to a strong, unique password before publishing. The keystore is ignored by Git,
but keep it and its password out of shared folders and backups that others can access.

---

## 9. Debugging

- **In the browser:** press **F12**. The Console tab shows errors with the line in `app.js`.
- **On the phone:** connect it by USB with USB debugging on (Settings > About phone > tap Build number
  7 times, then Developer options > USB debugging). In Chrome on the computer, open `chrome://inspect`.
  The app's page appears there with the same tools as F12.

---

## 10. When something goes wrong

| Problem | Fix |
|---|---|
| `make_release.py` says the version did not change | Raise `const VER` in `web/app.js` |
| `make_release.py` says `cryptography` is missing | `pip install cryptography` |
| `make_release.py` cannot find the key | Copy `ledger.keystore` into `signing/` |
| Phones say "not signed with your key" | Always run `make_release.py` and push all its files in one commit |
| Phones say "the downloaded file did not match" | Push again with everything `make_release.py` changed. Never edit `published/` by hand. |
| Phones do not update | Wait 5 minutes (GitHub caches files), then check in **Data > App updates** |
| `ledger.keystore` shows in GitHub Desktop's changes | Stop. Do not commit. Make sure `.gitignore` is in the folder. |
| Android Studio says the page is missing | Run `python tools/build_page.py` |
| Android Studio sync fails | Copy the first red error line and search it, or ask Claude |

---

## 11. Getting help from AI

Open this folder in VS Code with the **Claude Code** extension, and Claude can read the whole project,
make the change, and run the tools with you. Mention this guide so it follows the same release steps.

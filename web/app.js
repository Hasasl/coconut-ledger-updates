"use strict";
/* ---------- words: English and simple Sinhala ---------- */
const L = {
  en: {
    nav_overview: "Overview",
    nav_months: "Months",
    nav_insights: "Insights",
    nav_forecast: "Forecast",
    nav_data: "Data",
    rail_foot:
      "Works offline. Nothing personal is built into the app: every name, number and amount is a record you enter.",
    sub_overview: "Price and coconuts first, then the rest",
    sub_months: "Every month's records, newest first",
    sub_insights: "Price, yield and where the money goes",
    sub_forecast: "What the records suggest comes next",
    sub_data: "Share, backup, import and settings",
    add_harvest: "+ Add harvest",
    add_short: "+ Harvest",
    sync_device: "On this device",
    sync_ok: "Synced",
    sync_busy: "Syncing",
    sync_fail: "Sync failed, saved on this device",
    estate_sync_title: "Estate sharing and sync",
    estate_sync_hint:
      "Connection is preconfigured. Each person signs in with their own account; only approved members can access estate records.",
    sync_connection_public:
      "These are public client settings, not secrets. Never use a service-role key; Supabase row-level security protects estate data.",
    supabase_url: "Supabase project URL",
    supabase_key: "Supabase publishable (anon) key",
    sync_save_config: "Save connection",
    sync_reset_config: "Restore built-in connection",
    sync_config_saved: "Sync connection saved",
    sync_connection_settings: "Supabase connection settings",
    sync_email: "Email",
    sync_password: "Password",
    sync_signin: "Sign in",
    sync_login_success: "Signed in",
    sync_signup: "Create account",
    sync_signout: "Sign out",
    sync_email_confirm: "Check your email to confirm the new account, then sign in.",
    sync_signed_in: "Signed in as {0}",
    sync_create_estate: "Create an estate",
    sync_estate_name: "Estate name",
    sync_create: "Create estate",
    sync_request_join: "Request to join",
    sync_invite_code: "One-time invite code",
    sync_display_name: "Your name for the estate",
    sync_join: "Send join request",
    sync_pending_owner: "Request sent. An owner must approve it before this device can access records.",
    sync_estates: "Your approved estates",
    sync_select_estate: "Select estate",
    sync_set_active: "Open estate",
    sync_active: "Active estate",
    sync_sync_now: "Sync now",
    sync_new_invite: "Create 24-hour invite",
    sync_invite_created: "Invite created. Share it only with the intended person; owner approval is still required.",
    sync_invites: "Active invites",
    sync_revoke_invite: "Revoke invite",
    sync_revoke_invite_confirm: "Revoke this unused invite? Anyone holding its code will no longer be able to request access.",
    sync_invite_expires: "Expires {0}",
    sync_pending_requests: "Requests awaiting your approval",
    sync_approve_hint: "Check the account email and display name before approving.",
    sync_approve: "Approve as",
    sync_reject: "Reject",
    sync_role_owner: "Owner",
    sync_role_manager: "Manager",
    sync_role_member_1: "Member 1",
    sync_role_member_2: "Member 2",
    sync_role_member_3: "Member 3",
    sync_role_member_4: "Member 4",
    sync_role_member_5: "Member 5",
    sync_members: "Approved members",
    sync_change_role: "Change role",
    sync_remove_member: "Revoke access",
    sync_remove_member_confirm: "Remove this member? Future access will stop, but data already downloaded may remain on their device.",
    sync_suspend: "Suspend",
    sync_activate: "Restore access",
    sync_suspended: "Suspended",
    sync_member_active: "Active",
    sync_global_account: "Global account control",
    sync_global_ban: "Global ban",
    sync_global_unban: "Remove global ban",
    sync_global_delete: "Delete account",
    sync_global_ban_confirm: "Block this account from signing in or accessing any estate?",
    sync_global_unban_confirm: "Restore this account's sign-in and estate access?",
    sync_global_delete_confirm: "Permanently delete this account? This cannot be undone. Accounts that own an estate cannot be deleted.",
    sync_member_readonly: "Members can view only. Their default view shows harvest dates and coconut counts.",
    sync_feature_access: "Member feature visibility",
    sync_feature_hint: "Choose which tabs each member role can open. The monthly coconut-count view is always available.",
    sync_feature_overview: "Overview",
    sync_feature_months: "Monthly coconut counts",
    sync_feature_insights: "Insights",
    sync_feature_forecast: "Forecast",
    sync_save_features: "Save visibility",
    sync_month_count: "Coconuts",
    sync_readonly_account: "This account is read-only in the active estate.",
    sync_global_action_failed: "The account action could not be completed. Check that the manage-account Edge Function is deployed.",
    sync_no_estates: "No approved estate yet. Create one or request access with an invite code.",
    sync_local_migration:
      "This device already has local records. Copy them into this estate? Existing cloud records will be compared; conflicts require your choice. Your local backup remains on this device.",
    sync_keep_local: "Keep this device's record",
    sync_use_cloud: "Use the estate record",
    sync_conflicts: "Records need review",
    sync_conflict_hint:
      "Both this device and another approved device changed the same record. Choose which version to keep; neither version is discarded until you choose.",
    sync_not_ready: "Estate sync is unavailable until Supabase is configured.",
    sync_not_signed_in: "Sign in to manage estate sync.",
    sync_read_only: "This account has view-only access to the active estate.",
    sync_role_denied: "This account cannot change this type of estate record.",
    sync_change_too_large: "One record is too large to sync. Shorten its notes and try again.",
    sample_b: "These are sample records",
    sample_p:
      "so you can see how everything works. Clear them and add your own, or import your past months from the Data tab.",
    sample_btn: "Clear sample and start mine",
    empty_h: "No harvests yet",
    empty_p: "Add your first harvest, or import your past records from the Data tab.",
    price_lab: "Coconut price",
    per_coconut: "per coconut",
    from_prev: "from {0} at the harvest before",
    first_price: "First recorded price",
    no_change: "no change",
    avg12: "12-month average",
    highest: "highest",
    lowest: "lowest",
    exp_next: "expected next",
    harvested_lab: "Coconuts harvested",
    paid: "Paid for",
    free: "Free to buyer",
    free_rule: "1 per {0}",
    rejected: "Rejected by buyer",
    home: "Home use",
    split_aria: "How the harvest was divided",
    k_harv12: "Harvested, 12 months",
    n_harvests: "{0} harvests",
    k_paid_foot: "{0} free · {1} rejected · {2} home",
    income: "Income",
    total_income: "Total income",
    other_income: "Other income",
    add_income: "+ Add other income",
    edit_income: "Edit other income",
    income_month: "Month",
    income_amount: "Amount",
    income_note: "What is this money for?",
    income_hint: "Choose the month. This income is added to that month's total before deductions and the share split.",
    income_required: "Enter a positive amount and a note for this income.",
    income_saved: "Other income saved",
    income_deleted: "Other income deleted",
    income_record: "Additional income",
    rep_income: "Additional income records",
    income_records: "{0} additional income entries",
    no_income: "No additional income",
    c_del_income_h: "Delete this other income?",
    c_del_income_p: "This removes the income record for good.",
    deducted: "{0} deducted",
    balance: "Balance left",
    deductions: "Deductions",
    daughter: "Daughter",
    son: "Son",
    share_child: "Each child gets",
    share_custom: "Each {0} gets",
    share_child_n: "Child {0}",
    share_custom_n: "{0} {1}",
    share_deductions: "Deductions from each share",
    share_ded_amount: "Deduction for {0}",
    share_additions: "Add to each share (optional)",
    share_add_amount: "Add to {0}'s share",
    share_add_hint:
      "Optional top-up after splitting; it increases that person's payout without changing the harvest balance.",
    share_after_ded: "Final share amounts",
    share_result: "{0}: {1} share − {2} deduction + {3} added = {4}",
    latest_money: "Latest harvest, the money",
    latest_hint: "Income, each deduction, then the split.",
    bought_by: "Bought by {0}.",
    income_row: "Income, {0} × {1}",
    next_harvest: "Next harvest",
    next_hint: "From your recent gaps between harvests ({0} to {1} days).",
    days_go: "days to go",
    due_today: "due today",
    days_over: "days overdue",
    around: "Around {0}",
    day_of: "Day {0} of about {1} since the last harvest",
    exp_price: "expected price",
    coconuts: "coconuts",
    see_fc: "See the full forecast",
    need3: "Add at least 3 harvests and this card will estimate the next harvest date, yield and price.",
    per_harvest_h: "Coconuts per harvest",
    per_harvest_hint: "Last {0} harvests. Tap a bar for the numbers.",
    harvested: "Harvested",
    bought_s: "loaded",
    days_after: "{0} days after previous",
    first_rec: "First record",
    edit: "Edit",
    price: "Price",
    buyer: "Buyer",
    contact: "Contact",
    payments_title: "Buyer payments received",
    add_payment: "+ Add payment",
    payment_date: "Payment date",
    payment_amount: "Payment amount",
    payment_note: "Payment note (optional)",
    remove_payment: "Remove",
    amount_received: "Received",
    amount_due: "Outstanding",
    credit: "Credit",
    payment_invalid: "Each payment needs a valid date and a positive amount.",
    buyer_search: "Search buyer history",
    search_buyer: "Search",
    clear_search: "Clear",
    buyer_search_hint:
      "Monthly totals remain for the full month; matching harvests show their own paid and outstanding amounts.",
    buyer_none: "No harvests found for that buyer.",
    share_payouts: "Daughter and Son payouts",
    paid_to_date: "Paid to date",
    remaining: "Remaining",
    save_payouts: "Save paid amounts",
    payouts_saved: "Monthly payout amounts saved",
    mark_reviewed: "Mark reviewed",
    month_reviewed: "Reviewed",
    reopen_month: "Reopen review",
    deduction_presets: "Reusable deduction presets",
    choose_preset: "Choose a preset",
    preset_name: "Preset name",
    save_preset: "Save current deductions",
    apply_preset: "Apply preset",
    delete_preset: "Delete preset",
    preset_saved: "Deduction preset saved",
    preset_applied: "Deduction preset applied",
    preset_deleted: "Deduction preset deleted",
    preset_name_required: "Enter a name for this preset.",
    preset_required: "Choose a deduction preset first.",
    check_backup: "Check backup",
    backup_valid: "{0} records found. Backup is valid and ready to import.",
    backup_invalid: "Paste a valid full JSON backup to check it.",
    reminders_title: "Harvest and backup reminders",
    reminders_hint:
      "Harvest reminders are scheduled for 08:00 two days and one day before the forecast date. A monthly backup reminder is scheduled for the first day of the month.",
    reminders_enabled: "Notifications are enabled",
    reminders_disabled: "Allow notifications to receive reminders",
    enable_reminders: "Enable notifications",
    harvest_reminder_title: "Harvest reminder",
    harvest_reminder_two_days: "Your forecast harvest is in 2 days, on {0}.",
    harvest_reminder_one_day: "Your forecast harvest is tomorrow, on {0}.",
    backup_reminder_title: "Monthly backup reminder",
    backup_reminder_body: "Save a full backup of your ledger today.",
    payment_due_note: "Harvest income not yet received",
    review_editable_hint: "Reviewed status is for reference only; records remain editable.",
    entered_by: "Entered by",
    not_rec: "not recorded",
    ded_break: "Deductions breakdown",
    all_rec: "All records",
    m12: "12 months",
    m6: "6 months",
    avg_price: "Average price",
    per_paid: "per coconut paid for",
    n_paid: "{0} bought and paid",
    rej_rate: "Reject rate",
    of_picked: "{0} of {1} picked",
    gap_days: "Days between harvests",
    short_long: "Shortest {0}, longest {1}",
    need2: "Needs two harvests",
    price_chart_h: "Price per coconut",
    price_chart_hint: "What the buyer paid per coconut at each harvest.",
    picked_across: "{0} picked across {1} harvests.",
    mbm: "Month by month",
    mbm_hint: "Every month side by side. Scroll sideways on a phone.",
    th_month: "Month",
    th_bought: "Bought",
    th_free: "Free",
    th_rej: "Rejected",
    th_home: "Home",
    where_goes: "Where the income goes",
    where_hint: "Each deduction as a share of {0} income.",
    bal_per_h: "Balance left per harvest",
    best: "Best harvest: {0} with {1}.",
    fc_none_h: "Not enough records yet",
    fc_none_p:
      "A forecast needs at least 3 harvests. You have {0}. The more months you add, the steadier the estimate.",
    exp_price_k: "Expected price",
    exp_coconuts: "Expected coconuts",
    likely: "Likely {0} to {1}",
    next_date: "Next harvest date",
    usually: "Usually every {0} to {1} days",
    exp_bal: "Expected balance",
    after_charges: "After about {0} of charges",
    next_month: "Next month, {0}",
    nm_yes: "About <b>{0} coconuts</b> at about <b>{1}</b> each, around {2}.",
    nm_no: "No harvest is expected inside {0}. The next one lands around {1}.",
    fc_price_h: "Price forecast",
    fc_price_hint: "Your past prices, the forecast, and its likely range.",
    paid_so_far: "Paid so far",
    fc_range: "Forecast, with likely range",
    fc_harv_h: "Harvest forecast",
    fc_rate: "Your trees have been giving about {0} coconuts a day between harvests.",
    forecast_w: "Forecast",
    next3: "Next three harvests",
    next3_hint: "Assumes about {0}% of each harvest is loaded and your usual charges.",
    n_paid_for: "≈ {0} harvested, {1} loaded",
    about: "About {0}",
    trust_h: "How much to trust this",
    conf1: "Rough guide",
    conf2: "Reasonable",
    conf3: "Fairly steady",
    trust_p:
      "These figures come from {0} harvests. The date uses your recent gaps between harvests, the yield uses how many coconuts the trees give per day, and the price follows its recent trend. The app cannot see seasons such as drought or monsoon months, and market prices can jump for reasons no record shows. Treat the ranges as likely, not certain.",
    set_h: "Estate details and rules",
    set_hint: "These drive every calculation.",
    estate_name: "Estate name",
    cur_lab: "Currency label",
    free_every: "Buyer takes 1 free coconut for every (0 for none)",
    div_by: "Final balance is divided by",
    share_to: "Each share goes to a",
    save_details: "Save details",
    bk_h: "Share and backup",
    bk_hint:
      "Send the small CSV file to Google Drive, Gmail or WhatsApp, or save it on this device. No sign-in is needed here: it uses the Google account already on the phone. The file contains buyer names and contacts.",
    btn_share: "Share CSV (Drive, Gmail…)",
    btn_csv: "Save CSV file",
    btn_json: "Save full backup",
    btn_copy: "Copy backup text",
    open_drive: "Open Google Drive",
    bk_note:
      "CSV holds harvests, buyer payments and other income. Full backup also holds monthly payouts, reviews and deduction presets.",
    imp_h: "Import records",
    imp_hint:
      "Choose a CSV or backup file from the phone, Drive or Gmail, or paste rows below. One harvest per line, in this order:",
    imp_ex: "Dates can be 2026-11-02 or 02/11/2026. Empty charges count as zero. Free coconuts are worked out for you.",
    imp_ph: "Paste rows or backup text here",
    imp_go: "Import pasted rows",
    choose_file: "Choose file",
    wipe_h: "Start over",
    wipe_hint:
      "Removes every harvest, payment, monthly payout, review status, deduction preset and other income record. Save a backup first.",
    wipe_btn: "Delete all records",
    f_add: "Add harvest",
    f_edit: "Edit harvest",
    f_date: "Harvest date",
    f_price: "Price per coconut",
    f_total: "Coconuts harvested",
    f_rej: "Rejected by buyer",
    f_home: "Kept for home use",
    f_free: "Free to buyer ({0}). Leave empty to work it out",
    auto: "Auto: {0}",
    f_bname: "Buyer's name",
    f_bcontact: "Buyer's contact",
    phone_ph: "Phone number",
    copy_prev: "Use previous charges",
    custom_ded: "Custom deductions",
    add_custom_ded: "+ Add custom deduction",
    custom_name: "Name / person",
    custom_amount: "Amount ({0})",
    remove_custom_ded: "Remove",
    round_total: "Set total deductions to",
    round_apply: "Apply total",
    round_help:
      "Current deductions: {0}. Enter the total you want; the difference is added as a manual rounding adjustment.",
    round_preview: "This adds {0}, bringing deductions to {1}.",
    round_invalid: "Enter a total at least as high as current deductions ({0}).",
    round_applied: "Added {0} as a manual rounding adjustment. Total deductions: {1}.",
    round_adj: "Manual rounding adjustment",
    e_custom_name: "Enter a name/person for each custom deduction amount.",
    e_custom_amount: "Custom deduction amounts cannot be negative.",
    f_othernote: "What is the Other amount for?",
    othernote_ph: "Example: loan deducted from son",
    by_ph: "Your name",
    f_note: "Note (optional)",
    cancel: "Cancel",
    save_h: "Save harvest",
    delete: "Delete",
    clear: "Clear",
    delete_all: "Delete all",
    e_date: "Choose the harvest date.",
    e_price: "Enter the price per coconut.",
    e_total: "Enter how many coconuts were harvested.",
    e_sum: "Rejected and home use together cannot be more than harvested.",
    e_free: "Free coconuts cannot be more than the buyer took.",
    e_dup: "There is already a harvest on this date. Edit that one instead.",
    t_saved: "Harvest saved",
    t_deleted: "Harvest deleted",
    t_details: "Details saved",
    t_file: "File saved",
    t_nofile: "The file was not saved",
    t_copied: "Backup text copied",
    t_copyblock: "Copy blocked. The text is in the import box, select and copy it.",
    t_loaded: "Loaded your latest records",
    t_imported: "Imported {0} records",
    t_savedl: "File saved. Upload it to Drive from your Files app.",
    t_noprev: "No earlier harvest to copy from",
    c_del_h: "Delete this harvest?",
    c_del_p: "This removes the record for good.",
    c_clear_h: "Clear the sample records?",
    c_clear_p: "The app will be empty and ready for your own harvests.",
    c_wipe_h: "Delete all records?",
    c_wipe_p:
      "Every harvest, payment, monthly payout, review status, deduction preset and other income record will be removed. This cannot be undone.",
    i_none: "Nothing to import. Paste rows or choose a file.",
    i_bad: "That backup text is damaged and cannot be read.",
    i_notbk: "That file is not a backup from this app.",
    i_date: 'Line {0}: "{1}" is not a date. Use 2026-11-02 or 02/11/2026.',
    i_count: "Line {0}: the harvested count is missing.",
    i_income: "Line {0}: an income entry needs a positive amount.",
    i_sum: "Line {0}: rejected and home use add up to more than harvested.",
    i_rows: "No harvest rows found.",
    i_fail: "Could not read that.",
    cat_harvest: "Harvesting",
    cat_cart: "Collection",
    cat_transport: "Transport cart",
    cat_church: "Church donation",
    cat_personal: "My money",
    cat_fertilizer: "Fertilizer",
    cat_power: "Power bill",
    cat_other: "Other",
    loaded: "Loaded coconuts",
    loaded_lab: "Loaded coconuts (bought)",
    th_loaded: "Loaded",
    harv_n: "Harvested {0}",
    not_loaded: "Not loaded",
    f_loaded: "Loaded coconuts (bought by buyer)",
    e_loaded: "Loaded and home use together cannot be more than harvested.",
    e_loadreq: "Enter the loaded coconuts.",
    e_rejl: "Rejected cannot be more than loaded.",
    trans_rate: "Transport cart charge per harvested coconut",
    rej_in: "Rejected coconuts are counted inside the loaded count",
    n_loaded: "≈ {0} loaded",
    k_harv_foot: "{0} harvests · {1} rejected · {2} home",
    k_load_foot: "{0} paid for · {1} free",
    n_harv: "{0} harvested",
    version: "Version {0}",
    btn_pdf: "PDF report",
    rep_title: "Harvest report",
    rep_made: "Made on {0}",
    rep_save: "Save as PDF / Print",
    rep_close: "Close",
    rep_hint: "Choose Save as PDF in the print screen. If nothing opens here, use the Android app or the offline file.",
    rep_all: "All harvests",
    rep_latest: "Latest price",
    rep_fc_note: "Estimates from past records, not certain.",
    rep_month: "Monthly report",
    rep_details: "Harvest details",
    rep_coco: "Coconuts",
    rep_money: "Income and deduction breakdown",
    rep_item: "Item",
    rep_note: "Details",
    rep_amount: "Amount ({0})",
    rep_pct: "% of income",
    rep_totded: "Total deductions",
    rep_cmp: "Compared with {0}",
    rep_mtotal: "Month total",
    rep_harv_on: "Harvest on {0}",
    rep_dedm: "Deductions by month",
    btn_mpdf: "PDF",
    rep_pick: "Monthly PDF report",
    th_total: "Total",
    per_harv_x: "{0} harvested × {1}",
    rep_open: "Open",
    rep_sum: "Summary",
    fm_nm_price: "Price next month",
    fm_every: "About every {0} days",
    fm_year_h: "Next 12 months",
    fm_year_p:
      "About <b>{0} harvests</b> and <b>{1} coconuts</b> (likely {2} to {3}). Income about <b>{4}</b>, balance after deductions about <b>{5}</b>.",
    fm_cycle_h: "Harvest cycle",
    fm_cycle_p:
      "Your trees are picked about every <b>{0} days</b>. Most gaps are {1} to {2} days; the shortest was {3} and the longest {4}.",
    fm_season_h: "Season pattern",
    fm_season_used:
      "Expected coconuts per day by month, as a percentage of your average. Your records fit Sri Lanka's national pattern: most around March to June, fewest around September to December.",
    fm_season_flat:
      "Your records do not show a clear season yet, so the forecast treats every month the same. The line shows Sri Lanka's national pattern for reference: most around March to June, fewest around September to December.",
    fm_season_tip: "{0}% of a normal month",
    fm_bio_h: "How a coconut grows",
    fm_bio_p:
      "A coconut palm opens a new flower bunch about once a month, which is why it can be picked monthly. Each bunch develops for about 44 to 46 months from its first bud, and the nuts themselves grow during the last 12 months after the flower opens. Sri Lankan estates traditionally pick every two months, six picks a year; Coconut Research Institute trials found monthly picking means fewer ripe nuts fall and are lost. Dry spells show up in the harvest about a year later.",
    fm_acc_p:
      "Walk-forward test errors: price {0}, coconuts {1}, days between harvests {2}. Missing months are treated as elapsed time, not zero harvests.",
    fm_acc_n: "Tested on {0} past harvest intervals.",
    fm_acc_few:
      "Too few past intervals to measure accuracy reliably. Add records over time; missing months are not counted as zero harvests.",
    fm_methods: "Methods chosen: price, {0}; coconuts, {1}; harvest gaps, {2}.",
    scenario_h: "Try a planning scenario",
    scenario_hint:
      "Planning only; this does not change your records. Leave coconuts or price blank to use the model estimate. Coconuts means harvested total; sale income uses your recent loaded share.",
    scenario_date: "Expected harvest date",
    scenario_nuts: "Expected coconuts harvested",
    scenario_price: "Expected price per coconut",
    scenario_run: "Calculate scenario",
    scenario_reset: "Reset to model",
    scenario_estimate: "Scenario estimate",
    scenario_loaded: "Expected coconuts sold",
    scenario_income: "Estimated sale income",
    scenario_deductions: "Estimated deductions",
    scenario_balance: "Estimated balance after deductions",
    scenario_share: "Estimated {0} share",
    scenario_bad_date: "Choose a valid date after the latest recorded harvest.",
    scenario_bad_nuts: "Enter a whole coconut count greater than zero, or leave it blank.",
    scenario_bad_price: "Enter a price greater than zero, or leave it blank.",
    fm_gap_note:
      "A long gap between records makes this estimate less certain. The model uses the dates you entered and does not invent missing harvests.",
    m_naive: "last price",
    m_level: "smoothed price",
    m_trend: "recent trend that fades",
    m_season: "season",
    m_rate: "smoothed coconuts per day",
    m_median: "middle of recent gaps",
    m_smooth: "smoothed gaps",
    fm_market_h: "Market notes",
    fm_market_p:
      "Sri Lanka produced 3,040 million coconuts in 2025, up from 2,790 million in 2024. In 2026, national output was 8.9% lower than a year earlier in May and June, and 1.8% lower in July and August. Lower supply usually pushes prices up.",
    fm_sources:
      "Sources: Central Bank of Sri Lanka agriculture bulletins (2024 to 2026); Coconut Research Institute of Sri Lanka, COCOS journal.",
    upd_h: "App updates",
    upd_hint:
      "The app updates itself. A screen update downloads by itself and switches on after you leave the app and come back. A new Android app version asks you to tap Install.",
    rights: "All rights reserved.",
    made: "Made in 🇱🇰 with ❤️",
    dev_on: "Developer options shown",
    upd_link: "Update link",
    upd_save: "Save link",
    upd_check: "Check for updates",
    upd_cur: "This app: version {0} (Android app {1})",
    upd_none: "No update link. Paste one above, or leave it empty and tap Save link to use the built-in one.",
    upd_checking: "Checking…",
    upd_ok: "Up to date. Last checked {0}.",
    upd_ready: "Version {0} is downloaded. It switches on by itself after you leave the app and come back.",
    upd_restart: "Use it now",
    upd_apk: "Android app version {0} is available.",
    upd_install: "Install",
    upd_dl: "Downloading…",
    upd_opened: "The installer is open. Tap Install. If Android asks, allow Coconut Ledger to install apps.",
    upd_err_net: "Could not reach the update link. Check the internet connection and the link.",
    upd_err_sig: "This update is not signed with your key, so it was not used.",
    upd_err_file: "The downloaded file did not match, so it was not used. Try again later.",
    upd_err_bad: "The link does not point to a valid update.json file.",
    upd_applied: "Updated to version {0}",
    upd_security_applied: "Major security update {0} installed automatically. No action is needed.",
    upd_banner: "Android app version {0} is ready to install.",
    upd_saved: "Link saved",
    upd_badlink: "The link must start with https://",
    dev_sync_settings: "Estate sync connection",
  },
  si: {
    nav_overview: "මුල් පිටුව",
    nav_months: "මාස",
    nav_insights: "විශ්ලේෂණ",
    nav_forecast: "අනාවැකි",
    nav_data: "දත්ත",
    rail_foot: "අන්තර්ජාලය නැතිවත් වැඩ කරයි. නම්, අංක සහ මුදල් සියල්ල ඔබ ඇතුළත් කරන දත්ත පමණි.",
    sub_overview: "මුලින්ම පොල් මිල සහ පොල් ගණන",
    sub_months: "සෑම මාසයකම දත්ත, අලුත්ම ඒවා මුලින්",
    sub_insights: "මිල, අස්වැන්න සහ මුදල් යන තැන්",
    sub_forecast: "දත්ත අනුව ඊළඟට බලාපොරොත්තු විය හැකි දේ",
    sub_data: "බෙදාගැනීම, උපස්ථ, ඇතුළත් කිරීම සහ සැකසුම්",
    add_harvest: "+ අස්වැන්නක් එක් කරන්න",
    add_short: "+ අස්වැන්න",
    sync_device: "මේ උපාංගයේ",
    sync_ok: "සුරැකුණා",
    sync_busy: "සුරකිමින්",
    sync_fail: "Cloud එකට සුරැකීම අසාර්ථකයි, උපාංගයේ සුරැකුණා",
    estate_sync_title: "වතු දත්ත බෙදාගැනීම සහ සමමුහුර්ත කිරීම",
    estate_sync_hint:
      "සම්බන්ධතාව කලින් සකසා ඇත. සෑම අයෙකුම තමන්ගේ ගිණුමෙන් ඇතුළු වේ; අනුමත සාමාජිකයන්ට පමණක් වතු දත්ත වෙත පිවිසිය හැක.",
    sync_connection_public:
      "මේවා රහස් නොවන පොදු client සැකසුම්ය. service-role යතුර කිසිවිටෙක භාවිත නොකරන්න; වතු දත්ත ආරක්ෂා කරන්නේ Supabase row-level security මඟිනි.",
    supabase_url: "Supabase ව්‍යාපෘති URL",
    supabase_key: "Supabase publishable (anon) යතුර",
    sync_save_config: "සම්බන්ධතාව සුරකින්න",
    sync_reset_config: "යෙදුමේ පෙරනිමි සම්බන්ධතාව නැවත යොදන්න",
    sync_config_saved: "සමමුහුර්ත සම්බන්ධතාව සුරැකුණා",
    sync_connection_settings: "Supabase සම්බන්ධතා සැකසුම්",
    sync_email: "විද්‍යුත් තැපෑල",
    sync_password: "මුරපදය",
    sync_signin: "ඇතුළු වන්න",
    sync_login_success: "ඇතුළු වුණා",
    sync_signup: "ගිණුමක් සාදන්න",
    sync_signout: "ඉවත් වන්න",
    sync_email_confirm: "නව ගිණුම තහවුරු කිරීමට ඔබේ විද්‍යුත් තැපෑල පරීක්ෂා කර, පසුව ඇතුළු වන්න.",
    sync_signed_in: "{0} ලෙස ඇතුළු වී ඇත",
    sync_create_estate: "වත්තක් සාදන්න",
    sync_estate_name: "වත්තේ නම",
    sync_create: "වත්ත සාදන්න",
    sync_request_join: "එක්වීමට ඉල්ලීමක් යවන්න",
    sync_invite_code: "එක්වරක් භාවිත කරන ආරාධනා කේතය",
    sync_display_name: "වත්තේ පෙන්වන ඔබේ නම",
    sync_join: "එක්වීමේ ඉල්ලීම යවන්න",
    sync_pending_owner: "ඉල්ලීම යැවුණා. මෙම උපාංගයට දත්ත ලබාගැනීමට පෙර හිමිකරු අනුමත කළ යුතුය.",
    sync_estates: "ඔබට අනුමත වතු",
    sync_select_estate: "වත්ත තෝරන්න",
    sync_set_active: "වත්ත විවෘත කරන්න",
    sync_active: "දැනට භාවිත වත්ත",
    sync_sync_now: "දැන් සමමුහුර්ත කරන්න",
    sync_new_invite: "පැය 24ක ආරාධනයක් සාදන්න",
    sync_invite_created: "ආරාධනය සෑදුණා. එය අදහස් කළ පුද්ගලයාට පමණක් යවන්න; හිමිකරුගේ අනුමැතිය තවම අවශ්‍යයි.",
    sync_invites: "සක්‍රිය ආරාධනා",
    sync_revoke_invite: "ආරාධනය අවලංගු කරන්න",
    sync_revoke_invite_confirm: "මෙම භාවිත නොකළ ආරාධනය අවලංගු කරන්නද? කේතය ඇති අයට තවදුරටත් ප්‍රවේශය ඉල්ලිය නොහැක.",
    sync_invite_expires: "{0} දිනෙන් කල් ඉකුත් වේ",
    sync_pending_requests: "ඔබේ අනුමැතිය බලාපොරොත්තු වන ඉල්ලීම්",
    sync_approve_hint: "අනුමත කිරීමට පෙර ගිණුමේ විද්‍යුත් තැපෑල සහ නම පරීක්ෂා කරන්න.",
    sync_approve: "මෙම භූමිකාවෙන් අනුමත කරන්න",
    sync_reject: "ප්‍රතික්ෂේප කරන්න",
    sync_role_owner: "හිමිකරු",
    sync_role_manager: "කළමනාකරු",
    sync_role_member_1: "සාමාජික 1",
    sync_role_member_2: "සාමාජික 2",
    sync_role_member_3: "සාමාජික 3",
    sync_role_member_4: "සාමාජික 4",
    sync_role_member_5: "සාමාජික 5",
    sync_members: "අනුමත සාමාජිකයන්",
    sync_change_role: "භූමිකාව වෙනස් කරන්න",
    sync_remove_member: "ප්‍රවේශය අවලංගු කරන්න",
    sync_remove_member_confirm: "මෙම සාමාජිකයා ඉවත් කරන්නද? ඉදිරි ප්‍රවේශය නවතින නමුත් දැනටමත් බාගත කළ දත්ත ඔවුන්ගේ උපාංගයේ තිබිය හැක.",
    sync_suspend: "අත්හිටුවන්න",
    sync_activate: "ප්‍රවේශය නැවත ලබාදෙන්න",
    sync_suspended: "අත්හිටුවා ඇත",
    sync_member_active: "සක්‍රියයි",
    sync_global_account: "ගෝලීය ගිණුම් පාලනය",
    sync_global_ban: "සියලු වතුවලින් තහනම් කරන්න",
    sync_global_unban: "ගෝලීය තහනම ඉවත් කරන්න",
    sync_global_delete: "ගිණුම මකන්න",
    sync_member_readonly: "සාමාජිකයන්ට බැලීමට පමණක් හැකිය. පෙරනිමි දැක්ම අස්වනු දින සහ පොල් ගණන පෙන්වයි.",
    sync_feature_access: "සාමාජික විශේෂාංග දෘශ්‍යතාව",
    sync_feature_hint: "එක් එක් සාමාජික භූමිකාවට විවෘත කළ හැකි පිටු තෝරන්න. මාසික පොල් ගණන දැක්ම සැමවිටම ලබාගත හැක.",
    sync_feature_overview: "සාරාංශය",
    sync_feature_months: "මාසික පොල් ගණන",
    sync_feature_insights: "විශ්ලේෂණ",
    sync_feature_forecast: "පුරෝකථනය",
    sync_save_features: "දෘශ්‍යතාව සුරකින්න",
    sync_month_count: "පොල් ගණන",
    sync_readonly_account: "දැනට භාවිත වත්තේ මෙම ගිණුමට බැලීමට පමණක් හැකිය.",
    sync_global_action_failed: "ගිණුම් ක්‍රියාව සම්පූර්ණ කළ නොහැකි විය. manage-account Edge Function යොදවා ඇතිදැයි පරීක්ෂා කරන්න.",
    sync_no_estates: "තවම අනුමත වත්තක් නැත. එකක් සාදන්න හෝ ආරාධනා කේතයකින් ප්‍රවේශය ඉල්ලන්න.",
    sync_local_migration:
      "මෙම උපාංගයේ දැනටමත් දේශීය දත්ත ඇත. ඒවා මෙම වත්තට පිටපත් කරන්නද? Cloud දත්ත සමඟ ගැටුම් ඇති නම් ඔබෙන් තෝරාගැනීමක් අසනු ඇත. දේශීය උපස්ථය මෙම උපාංගයේ පවතී.",
    sync_keep_local: "මෙම උපාංගයේ වාර්තාව තබාගන්න",
    sync_use_cloud: "වතු වාර්තාව භාවිත කරන්න",
    sync_conflicts: "වාර්තා සමාලෝචනය අවශ්‍යයි",
    sync_conflict_hint:
      "මෙම උපාංගය සහ වෙනත් අනුමත උපාංගයක් එකම වාර්තාව වෙනස් කර ඇත. තබාගත යුතු සංස්කරණය තෝරන්න; ඔබ තෝරන තුරු කිසිදු සංස්කරණයක් ඉවත් නොවේ.",
    sync_not_ready: "Supabase සකස් කරන තුරු වතු සමමුහුර්ත කිරීම ලබාගත නොහැක.",
    sync_not_signed_in: "වතු සමමුහුර්ත කිරීම කළමනාකරණය කිරීමට ඇතුළු වන්න.",
    sync_read_only: "මෙම ගිණුමට දැනට භාවිත වත්ත බැලීමට පමණක් අවසර ඇත.",
    sync_role_denied: "මෙම වාර්තා වර්ගය වෙනස් කිරීමට මෙම ගිණුමට අවසර නැත.",
    sync_change_too_large: "සමමුහුර්ත කිරීමට එක් වාර්තාවක් ඉතා විශාලය. සටහන් කෙටි කර නැවත උත්සාහ කරන්න.",
    sample_b: "මේවා ආදර්ශ දත්ත",
    sample_p:
      "යෙදුම වැඩ කරන හැටි පෙන්වීමට පමණි. මේවා ඉවත් කර ඔබේ දත්ත එක් කරන්න, නැත්නම් දත්ත පිටුවෙන් පරණ මාස ඇතුළත් කරන්න.",
    sample_btn: "ආදර්ශ ඉවත් කර මගේ දත්ත පටන් ගන්න",
    empty_h: "තවම අස්වනු නැත",
    empty_p: "පළමු අස්වැන්න එක් කරන්න, නැත්නම් දත්ත පිටුවෙන් පරණ දත්ත ඇතුළත් කරන්න.",
    price_lab: "පොල් මිල",
    per_coconut: "පොල් ගෙඩියකට",
    from_prev: "පෙර අස්වැන්නේ {0} සිට",
    first_price: "පළමු මිල සටහන",
    no_change: "වෙනසක් නැත",
    avg12: "මාස 12 සාමාන්‍යය",
    highest: "ඉහළම",
    lowest: "අඩුම",
    exp_next: "ඊළඟට අනුමාන",
    harvested_lab: "කැඩූ පොල් ගණන",
    paid: "මුදල් ගෙවූ පොල්",
    free: "නොමිලේ දුන් පොල්",
    free_rule: "{0}කට 1ක්",
    rejected: "අයින් කළ පොල්",
    home: "ගෙදර පාවිච්චියට",
    split_aria: "අස්වැන්න බෙදුණු හැටි",
    k_harv12: "මාස 12ක අස්වැන්න",
    n_harvests: "අස්වනු {0}ක්",
    k_paid_foot: "නොමිලේ {0} · අයින් කළ {1} · ගෙදරට {2}",
    income: "ආදායම",
    total_income: "මුළු ආදායම",
    other_income: "වෙනත් ආදායම",
    add_income: "+ වෙනත් ආදායමක් එක් කරන්න",
    edit_income: "වෙනත් ආදායම වෙනස් කරන්න",
    income_month: "මාසය",
    income_amount: "මුදල",
    income_note: "මේ මුදල ලැබුණේ කුමකටද?",
    income_hint: "මාසය තෝරන්න. මෙම ආදායම එම මාසයේ එකතුවට එකතු කර, අඩු කිරීම් සහ කොටස් බෙදීමට පෙර ගණනය වේ.",
    income_required: "ධන මුදලක් සහ මෙම ආදායමට හේතුවක් ඇතුළත් කරන්න.",
    income_saved: "වෙනත් ආදායම සුරැකුණා",
    income_deleted: "වෙනත් ආදායම මැකුණා",
    income_record: "අමතර ආදායම",
    rep_income: "අමතර ආදායම් වාර්තා",
    income_records: "අමතර ආදායම් සටහන් {0}ක්",
    no_income: "අමතර ආදායම් නැත",
    c_del_income_h: "මෙම වෙනත් ආදායම මකන්නද?",
    c_del_income_p: "මෙම ආදායම් වාර්තාව ස්ථිරවම මැකේ.",
    deducted: "{0} අඩු කළා",
    balance: "ඉතිරි මුදල",
    deductions: "අඩු කිරීම්",
    daughter: "දියණිය",
    son: "පුතා",
    share_child: "එක් දරුවෙකුට",
    share_custom: "එක් {0} කොටසකට",
    share_child_n: "දරුවා {0}",
    share_custom_n: "{0} {1}",
    share_deductions: "එක් එක් කොටසෙන් අඩු කිරීම්",
    share_ded_amount: "{0} වෙතින් අඩු කිරීම",
    share_additions: "එක් එක් කොටසට මුදල් එකතු කරන්න (විකල්ප)",
    share_add_amount: "{0}ගේ කොටසට එකතු කරන්න",
    share_add_hint: "කොටස් බෙදූ පසු එක් කරන අමතර මුදලකි; එය එම පුද්ගලයාගේ ගෙවීම වැඩි කරයි.",
    share_after_ded: "අඩු කිරීම් සහ එකතු කිරීම් පසු අවසන් කොටස් මුදල්",
    share_result: "{0}: කොටස {1} − අඩු කිරීම {2} + එකතු කළ {3} = {4}",
    latest_money: "අවසන් අස්වැන්නේ මුදල්",
    latest_hint: "ආදායම, අඩු කිරීම්, ඉන්පසු බෙදීම.",
    bought_by: "ගත්තේ {0}.",
    income_row: "ආදායම, {0} × {1}",
    next_harvest: "ඊළඟ අස්වැන්න",
    next_hint: "මෑත අස්වනු අතර කාලය අනුව (දින {0} සිට {1}).",
    days_go: "දින ඉතිරියි",
    due_today: "අද දින",
    days_over: "දින පමායි",
    around: "{0} පමණ",
    day_of: "අවසන් අස්වැන්නෙන් පසු දින {0}යි (සාමාන්‍යයෙන් දින {1})",
    exp_price: "අනුමාන මිල",
    coconuts: "පොල්",
    see_fc: "සම්පූර්ණ අනාවැකිය බලන්න",
    need3: "අස්වනු 3ක් වත් එක් කළ පසු ඊළඟ දිනය, පොල් ගණන සහ මිල මෙහි පෙන්වයි.",
    per_harvest_h: "එක් අස්වැන්නක පොල්",
    per_harvest_hint: "අවසන් අස්වනු {0}. ගණන් බලන්න තීරුවක් ඔබන්න.",
    harvested: "කැඩූ පොල්",
    bought_s: "පැටවූ",
    days_after: "පෙර එකෙන් දින {0}කට පසු",
    first_rec: "පළමු සටහන",
    edit: "වෙනස් කරන්න",
    price: "මිල",
    buyer: "ගැනුම්කරු",
    contact: "දුරකථනය",
    payments_title: "ලැබුණු ගැනුම්කරුගේ ගෙවීම්",
    add_payment: "+ ගෙවීමක් එක් කරන්න",
    payment_date: "ගෙවූ දිනය",
    payment_amount: "ගෙවූ මුදල",
    payment_note: "ගෙවීමේ සටහන (විකල්ප)",
    remove_payment: "ඉවත් කරන්න",
    amount_received: "ලැබී ඇත",
    amount_due: "ගෙවීමට ඉතිරි",
    credit: "අතිරික්ත මුදල",
    payment_invalid: "සෑම ගෙවීමකටම නිවැරදි දිනයක් සහ ධන මුදලක් ඇතුළත් කරන්න.",
    buyer_search: "ගැනුම්කරුගේ වාර්තා සොයන්න",
    search_buyer: "සොයන්න",
    clear_search: "මකන්න",
    buyer_search_hint: "මාසික එකතුව සම්පූර්ණ මාසයටයි; ගැළපෙන අස්වනු සඳහා ලැබුණු සහ ඉතිරි මුදල් වෙන වෙනම පෙන්වයි.",
    buyer_none: "එම ගැනුම්කරුට ගැළපෙන අස්වනු හමු නොවීය.",
    share_payouts: "දියණියගේ සහ පුතාගේ ගෙවීම්",
    paid_to_date: "මෙතෙක් ගෙවා ඇත",
    remaining: "ඉතිරිය",
    save_payouts: "ගෙවූ මුදල් සුරකින්න",
    payouts_saved: "මාසික කොටස් ගෙවීම් සුරැකුණා",
    mark_reviewed: "සමාලෝචනය කළ ලෙස සලකුණු කරන්න",
    month_reviewed: "සමාලෝචනය කළා",
    reopen_month: "සමාලෝචනය නැවත අරඹන්න",
    deduction_presets: "නැවත භාවිත කළ හැකි අඩුකිරීම්",
    choose_preset: "අඩුකිරීමක් තෝරන්න",
    preset_name: "අඩුකිරීමේ නම",
    save_preset: "දැනට ඇති අඩුකිරීම් සුරකින්න",
    apply_preset: "යොදන්න",
    delete_preset: "මකන්න",
    preset_saved: "අඩුකිරීම සුරැකුණා",
    preset_applied: "අඩුකිරීම යෙදුවා",
    preset_deleted: "අඩුකිරීම මැකුණා",
    preset_name_required: "මෙම අඩුකිරීම සඳහා නමක් ඇතුළත් කරන්න.",
    preset_required: "පළමුව අඩුකිරීමක් තෝරන්න.",
    check_backup: "උපස්ථය පරීක්ෂා කරන්න",
    backup_valid: "වාර්තා {0}ක් හමු විය. උපස්ථය නිවැරදියි; ඇතුළත් කළ හැක.",
    backup_invalid: "පරීක්ෂා කිරීමට නිවැරදි සම්පූර්ණ JSON උපස්ථයක් අලවන්න.",
    reminders_title: "අස්වනු සහ උපස්ථ මතක් කිරීම්",
    reminders_hint:
      "අනාවැකි දිනයට දින දෙකකට සහ එක් දිනකට පෙර පෙ.ව. 8ට අස්වනු මතක් කිරීම් යෙදේ. සෑම මාසයකම පළමු දින උපස්ථ මතක් කිරීමක් යෙදේ.",
    reminders_enabled: "දැනුම්දීම් සක්‍රියයි",
    reminders_disabled: "මතක් කිරීම් ලැබීමට දැනුම්දීම් සඳහා අවසර දෙන්න",
    enable_reminders: "දැනුම්දීම් සක්‍රිය කරන්න",
    harvest_reminder_title: "අස්වනු මතක් කිරීම",
    harvest_reminder_two_days: "අනාවැකි අස්වැන්නට තව දින 2යි ({0}).",
    harvest_reminder_one_day: "අනාවැකි අස්වැන්න හෙටයි ({0}).",
    backup_reminder_title: "මාසික උපස්ථ මතක් කිරීම",
    backup_reminder_body: "අද ඔබේ ගිණුමේ සම්පූර්ණ උපස්ථයක් සුරකින්න.",
    payment_due_note: "තවම නොලැබුණු අස්වනු ආදායම",
    review_editable_hint: "සමාලෝචන තත්ත්වය සටහනක් පමණයි; වාර්තා තවදුරටත් වෙනස් කළ හැක.",
    entered_by: "ඇතුළත් කළේ",
    not_rec: "සටහන් කර නැත",
    ded_break: "අඩු කිරීම් විස්තරය",
    all_rec: "සියල්ල",
    m12: "මාස 12",
    m6: "මාස 6",
    avg_price: "සාමාන්‍ය මිල",
    per_paid: "ගෙවූ පොල් ගෙඩියකට",
    n_paid: "මුදල් ගෙවූ {0}",
    rej_rate: "අයින් කළ ප්‍රතිශතය",
    of_picked: "කැඩූ {1}න් {0}",
    gap_days: "අස්වනු අතර දින",
    short_long: "අඩුම {0}, වැඩිම {1}",
    need2: "අස්වනු දෙකක් අවශ්‍යයි",
    price_chart_h: "පොල් ගෙඩියක මිල",
    price_chart_hint: "එක් එක් අස්වැන්නේදී ගැනුම්කරු ගෙවූ මිල.",
    picked_across: "අස්වනු {1}කින් පොල් {0}ක්.",
    mbm: "මාසයෙන් මාසය",
    mbm_hint: "සෑම මාසයක්ම එක ළඟ. දුරකථනයේ දෙපැත්තට අදින්න.",
    th_month: "මාසය",
    th_bought: "ගෙවූ",
    th_free: "නොමිලේ",
    th_rej: "අයින් කළ",
    th_home: "ගෙදරට",
    where_goes: "ආදායම යන තැන්",
    where_hint: "{0} ආදායමෙන් එක් එක් අඩු කිරීම.",
    bal_per_h: "එක් අස්වැන්නක ඉතිරිය",
    best: "හොඳම අස්වැන්න: {0}, {1}.",
    fc_none_h: "දත්ත තවම මදි",
    fc_none_p: "අනාවැකියකට අස්වනු 3ක් වත් අවශ්‍යයි. දැන් ඇත්තේ {0}යි. දත්ත වැඩි වන තරමට අනාවැකිය හොඳ වේ.",
    exp_price_k: "අනුමාන මිල",
    exp_coconuts: "අනුමාන පොල් ගණන",
    likely: "බොහෝ විට {0} සිට {1}",
    next_date: "ඊළඟ අස්වැන්නේ දිනය",
    usually: "සාමාන්‍යයෙන් දින {0} සිට {1}කට වරක්",
    exp_bal: "අනුමාන ඉතිරිය",
    after_charges: "{0} පමණ වියදම් අඩු කළ පසු",
    next_month: "ලබන මාසය, {0}",
    nm_yes: "{2} පමණ, <b>පොල් {0}ක්</b> පමණ, ගෙඩියක් <b>{1}</b> පමණ.",
    nm_no: "{0} තුළ අස්වැන්නක් බලාපොරොත්තු නොවේ. ඊළඟ එක {1} පමණ.",
    fc_price_h: "මිල අනාවැකිය",
    fc_price_hint: "ඔබේ පරණ මිල, අනාවැකිය සහ එහි විය හැකි පරාසය.",
    paid_so_far: "මෙතෙක් ලැබුණු මිල",
    fc_range: "අනාවැකිය සහ විය හැකි පරාසය",
    fc_harv_h: "අස්වනු අනාවැකිය",
    fc_rate: "අස්වනු අතර ඔබේ ගස් දිනකට පොල් {0}ක් පමණ දී ඇත.",
    forecast_w: "අනාවැකිය",
    next3: "ඊළඟ අස්වනු තුන",
    next3_hint: "අස්වැන්නෙන් {0}%කට පමණ මුදල් ලැබෙන බවත්, සාමාන්‍ය වියදම් බවත් සලකයි.",
    n_paid_for: "≈ කැඩූ {0}, පැටවූ {1}",
    about: "{0} පමණ",
    trust_h: "මෙය කොතරම් විශ්වාස කළ හැකිද",
    conf1: "දළ අදහසක්",
    conf2: "සාධාරණයි",
    conf3: "තරමක් ස්ථාවරයි",
    trust_p:
      "මේ ගණන් අස්වනු {0}ක දත්ත මත පදනම් වේ. දිනය අස්වනු අතර කාලයෙන්ද, පොල් ගණන ගස් දිනකට දෙන පොල් ගණනින්ද, මිල මෑත මිල ගමනින්ද ගණනය කරයි. නියඟය, වැසි කාල සහ වෙළඳපොළේ හදිසි මිල වෙනස්වීම් යෙදුමට නොපෙනේ. මේවා අනුමාන පමණි.",
    set_h: "වත්තේ විස්තර සහ නීති",
    set_hint: "සියලු ගණනය කිරීම් මේ අනුව සිදු වේ.",
    estate_name: "වත්තේ නම",
    cur_lab: "මුදල් ඒකකය",
    free_every: "ගැනුම්කරු නොමිලේ 1ක් ගන්නේ පොල් කීයකටද (නැත්නම් 0)",
    div_by: "ඉතිරිය බෙදන කොටස් ගණන",
    share_to: "කොටසක් ලැබෙන්නේ",
    save_details: "විස්තර සුරකින්න",
    bk_h: "බෙදාගැනීම සහ උපස්ථ",
    bk_hint:
      "කුඩා CSV ගොනුව Google Drive, Gmail හෝ WhatsApp වෙත යවන්න, නැත්නම් මේ උපාංගයේ සුරකින්න. මෙහි ලොග් වීමක් අවශ්‍ය නැත: දුරකථනයේ දැනටමත් ඇති Google ගිණුම භාවිත වේ. ගොනුවේ ගැනුම්කරුවන්ගේ නම් සහ අංක ඇත.",
    btn_share: "CSV බෙදාගන්න (Drive, Gmail…)",
    btn_csv: "CSV ගොනුව සුරකින්න",
    btn_json: "සම්පූර්ණ උපස්ථය සුරකින්න",
    btn_copy: "උපස්ථ පෙළ පිටපත් කරන්න",
    open_drive: "Google Drive විවෘත කරන්න",
    bk_note:
      "CSV ගොනුවේ අස්වනු, ගැනුම්කරු ගෙවීම් සහ වෙනත් ආදායම් ඇත. සම්පූර්ණ උපස්ථයේ මාසික ගෙවීම්, සමාලෝචන සහ අඩුකිරීම් සැකසුම්ද ඇත.",
    imp_h: "දත්ත ඇතුළත් කිරීම",
    imp_hint:
      "දුරකථනයෙන්, Drive හෝ Gmail වෙතින් CSV හෝ උපස්ථ ගොනුවක් තෝරන්න, නැත්නම් පහත පේළි අලවන්න. එක් පේළියකට එක් අස්වැන්නක්, මේ පිළිවෙළට:",
    imp_ex: "දිනය 2026-11-02 හෝ 02/11/2026 ලෙස. හිස් වියදම් බිංදුව ලෙස ගැනේ. නොමිලේ දුන් පොල් ගණන යෙදුම ගණනය කරයි.",
    imp_ph: "පේළි හෝ උපස්ථ පෙළ මෙහි අලවන්න",
    imp_go: "අලවපු පේළි ඇතුළත් කරන්න",
    choose_file: "ගොනුවක් තෝරන්න",
    wipe_h: "මුල සිට පටන් ගන්න",
    wipe_hint:
      "සියලු අස්වනු, ගැනුම්කරු ගෙවීම්, වෙනත් ආදායම්, මාසික කොටස් ගෙවීම්, සමාලෝචන සහ අඩුකිරීම් සැකසුම් මැකේ. මුලින් උපස්ථයක් සුරකින්න.",
    wipe_btn: "සියලු දත්ත මකන්න",
    f_add: "අස්වැන්නක් එක් කරන්න",
    f_edit: "අස්වැන්න වෙනස් කරන්න",
    f_date: "පොල් කැඩූ දිනය",
    f_price: "පොල් ගෙඩියක මිල",
    f_total: "කැඩූ පොල් ගණන",
    f_rej: "ගැනුම්කරු අයින් කළ",
    f_home: "ගෙදරට තබාගත්",
    f_free: "නොමිලේ දුන් ({0}). හිස්ව තැබුවොත් ගණනය වේ",
    auto: "ස්වයංක්‍රීය: {0}",
    f_bname: "ගැනුම්කරුගේ නම",
    f_bcontact: "ගැනුම්කරුගේ දුරකථනය",
    phone_ph: "දුරකථන අංකය",
    copy_prev: "පෙර වියදම් යොදන්න",
    custom_ded: "අභිරුචි අඩු කිරීම්",
    add_custom_ded: "+ අඩු කිරීමක් එක් කරන්න",
    custom_name: "නම / පුද්ගලයා",
    custom_amount: "මුදල ({0})",
    remove_custom_ded: "ඉවත් කරන්න",
    round_total: "අඩු කිරීම් එකතුව මෙසේ සකසන්න",
    round_apply: "එකතුව යොදන්න",
    round_help: "දැනට අඩු කිරීම්: {0}. අවශ්‍ය එකතුව ඇතුළත් කරන්න; වෙනස අතින් වටකිරීමේ අඩු කිරීමක් ලෙස එක් වේ.",
    round_preview: "මෙයින් {0}ක් එක් වී අඩු කිරීම් එකතුව {1} වේ.",
    round_invalid: "දැනට අඩු කිරීම් ({0}) හෝ ඊට වැඩි එකතුවක් ඇතුළත් කරන්න.",
    round_applied: "අතින් වටකිරීමේ අඩු කිරීමක් ලෙස {0}ක් එක් කළා. අඩු කිරීම් එකතුව: {1}.",
    round_adj: "අතින් වටකිරීමේ අඩු කිරීම",
    e_custom_name: "අභිරුචි අඩු කිරීමේ සෑම මුදලකටම නමක් / පුද්ගලයෙක් ඇතුළත් කරන්න.",
    e_custom_amount: "අභිරුචි අඩු කිරීමේ මුදල ඍණ විය නොහැක.",
    f_othernote: "වෙනත් මුදල කුමක් සඳහාද?",
    othernote_ph: "උදා: පුතාගෙන් අඩු කළ ණය",
    by_ph: "ඔබේ නම",
    f_note: "සටහන (අවශ්‍ය නම්)",
    cancel: "එපා",
    save_h: "සුරකින්න",
    delete: "මකන්න",
    clear: "ඉවත් කරන්න",
    delete_all: "සියල්ල මකන්න",
    e_date: "පොල් කැඩූ දිනය තෝරන්න.",
    e_price: "පොල් ගෙඩියක මිල ඇතුළත් කරන්න.",
    e_total: "කැඩූ පොල් ගණන ඇතුළත් කරන්න.",
    e_sum: "අයින් කළ සහ ගෙදරට ගත් ගණන කැඩූ ගණනට වඩා වැඩි විය නොහැක.",
    e_free: "නොමිලේ දුන් ගණන ගැනුම්කරු ගත් ගණනට වඩා වැඩි විය නොහැක.",
    e_dup: "මේ දිනයට අස්වැන්නක් දැනටමත් ඇත. එය වෙනස් කරන්න.",
    t_saved: "අස්වැන්න සුරැකුණා",
    t_deleted: "අස්වැන්න මැකුණා",
    t_details: "විස්තර සුරැකුණා",
    t_file: "ගොනුව සුරැකුණා",
    t_nofile: "ගොනුව සුරැකුණේ නැත",
    t_copied: "උපස්ථ පෙළ පිටපත් වුණා",
    t_copyblock: "පිටපත් කළ නොහැකි විය. පෙළ ඇතුළත් කිරීමේ කොටුවේ ඇත, එතැනින් පිටපත් කරන්න.",
    t_loaded: "ඔබේ අලුත්ම දත්ත ලැබුණා",
    t_imported: "වාර්තා {0}ක් ඇතුළත් කළා",
    t_savedl: "ගොනුව සුරැකුණා. Files යෙදුමෙන් Drive වෙත උඩුගත කරන්න.",
    t_noprev: "පිටපත් කිරීමට පෙර අස්වැන්නක් නැත",
    c_del_h: "මේ අස්වැන්න මකන්නද?",
    c_del_p: "මෙය සදහටම මැකී යයි.",
    c_clear_h: "ආදර්ශ දත්ත ඉවත් කරන්නද?",
    c_clear_p: "යෙදුම හිස් වී ඔබේ දත්ත සඳහා සූදානම් වේ.",
    c_wipe_h: "සියලු දත්ත මකන්නද?",
    c_wipe_p:
      "සියලු අස්වනු, ගැනුම්කරු ගෙවීම්, වෙනත් ආදායම්, මාසික කොටස් ගෙවීම්, සමාලෝචන සහ අඩුකිරීම් සැකසුම් මැකේ. මෙය ආපසු ගත නොහැක.",
    i_none: "ඇතුළත් කිරීමට කිසිවක් නැත. පේළි අලවන්න හෝ ගොනුවක් තෝරන්න.",
    i_bad: "ඒ උපස්ථ පෙළ හානි වී ඇත, කියවිය නොහැක.",
    i_notbk: "ඒ ගොනුව මේ යෙදුමේ උපස්ථයක් නොවේ.",
    i_date: '{0} වන පේළිය: "{1}" දිනයක් නොවේ. 2026-11-02 හෝ 02/11/2026 ලෙස දෙන්න.',
    i_count: "{0} වන පේළිය: කැඩූ පොල් ගණන නැත.",
    i_income: "{0} වන පේළිය: ආදායම් සටහනකට ධන මුදලක් ඇතුළත් කරන්න.",
    i_sum: "{0} වන පේළිය: අයින් කළ සහ ගෙදරට ගත් ගණන කැඩූ ගණනට වඩා වැඩියි.",
    i_rows: "අස්වනු පේළි හමු නොවීය.",
    i_fail: "එය කියවිය නොහැකි විය.",
    cat_harvest: "පොල් කැඩීම",
    cat_cart: "එකතු කිරීම",
    cat_transport: "ප්‍රවාහන කරත්තය",
    cat_church: "පල්ලියට පරිත්‍යාග",
    cat_personal: "මගේ මුදල්",
    cat_fertilizer: "පොහොර",
    cat_power: "විදුලි බිල",
    cat_other: "වෙනත්",
    loaded: "පැටවූ පොල්",
    loaded_lab: "පැටවූ පොල් (ගැනුම්කරු ගත්)",
    th_loaded: "පැටවූ",
    harv_n: "කැඩූ පොල් {0}",
    not_loaded: "නොපැටවූ",
    f_loaded: "පැටවූ පොල් ගණන (ගැනුම්කරු ගත්)",
    e_loaded: "පැටවූ සහ ගෙදරට ගත් ගණන කැඩූ ගණනට වඩා වැඩි විය නොහැක.",
    e_loadreq: "පැටවූ පොල් ගණන ඇතුළත් කරන්න.",
    e_rejl: "අයින් කළ ගණන පැටවූ ගණනට වඩා වැඩි විය නොහැක.",
    trans_rate: "කැඩූ පොල් ගෙඩියකට ප්‍රවාහන කරත්ත ගාස්තුව",
    rej_in: "අයින් කළ පොල් පැටවූ ගණනට ඇතුළත්",
    n_loaded: "≈ පැටවූ {0}",
    k_harv_foot: "අස්වනු {0} · අයින් කළ {1} · ගෙදරට {2}",
    k_load_foot: "මුදල් ගෙවූ {0} · නොමිලේ {1}",
    n_harv: "කැඩූ පොල් {0}",
    version: "සංස්කරණය {0}",
    btn_pdf: "PDF වාර්තාව",
    rep_title: "අස්වනු වාර්තාව",
    rep_made: "සකස් කළේ {0}",
    rep_save: "PDF ලෙස සුරකින්න / මුද්‍රණය",
    rep_close: "වසන්න",
    rep_hint:
      "මුද්‍රණ තිරයේ Save as PDF තෝරන්න. මෙහි කිසිවක් විවෘත නොවුණොත් Android යෙදුම හෝ offline ගොනුව භාවිත කරන්න.",
    rep_all: "සියලු අස්වනු",
    rep_latest: "අවසන් මිල",
    rep_fc_note: "පරණ දත්ත අනුව අනුමාන පමණි.",
    rep_month: "මාසික වාර්තාව",
    rep_details: "අස්වැන්නේ විස්තර",
    rep_coco: "පොල් ගණන්",
    rep_money: "ආදායම සහ අඩු කිරීම් විස්තරය",
    rep_item: "අයිතමය",
    rep_note: "විස්තර",
    rep_amount: "මුදල ({0})",
    rep_pct: "ආදායමෙන් %",
    rep_totded: "මුළු අඩු කිරීම්",
    rep_cmp: "{0} සමඟ සසඳා",
    rep_mtotal: "මාසයේ එකතුව",
    rep_harv_on: "{0} දින අස්වැන්න",
    rep_dedm: "මාසයෙන් මාසය අඩු කිරීම්",
    btn_mpdf: "PDF",
    rep_pick: "මාසික PDF වාර්තාව",
    th_total: "එකතුව",
    per_harv_x: "කැඩූ {0} × {1}",
    rep_open: "විවෘත කරන්න",
    rep_sum: "සාරාංශය",
    fm_nm_price: "ලබන මාසයේ මිල",
    fm_every: "දින {0}කට වරක් පමණ",
    fm_year_h: "ඉදිරි මාස 12",
    fm_year_p:
      "<b>අස්වනු {0}ක්</b> පමණ සහ <b>පොල් {1}ක්</b> පමණ (බොහෝ විට {2} සිට {3}). ආදායම <b>{4}</b> පමණ, අඩු කිරීම් වලින් පසු ඉතිරිය <b>{5}</b> පමණ.",
    fm_cycle_h: "අස්වනු චක්‍රය",
    fm_cycle_p:
      "ඔබේ ගස් වලින් පොල් කඩන්නේ දින <b>{0}කට</b> වරක් පමණ. බොහෝ විට දින {1} සිට {2}. අඩුම දින {3}, වැඩිම දින {4}.",
    fm_season_h: "කාලීන රටාව",
    fm_season_used:
      "මාසය අනුව දිනකට බලාපොරොත්තු වන පොල්, ඔබේ සාමාන්‍යයේ ප්‍රතිශතයක් ලෙස. ඔබේ දත්ත ශ්‍රී ලංකාවේ ජාතික රටාවට ගැළපේ: මාර්තු සිට ජූනි වැඩිම, සැප්තැම්බර් සිට දෙසැම්බර් අඩුම.",
    fm_season_flat:
      "ඔබේ දත්ත වල තවම පැහැදිලි කාලීන රටාවක් නැති නිසා අනාවැකිය සෑම මාසයක්ම එක ලෙස සලකයි. රේඛාවෙන් පෙන්වන්නේ ශ්‍රී ලංකාවේ ජාතික රටාවයි: මාර්තු සිට ජූනි වැඩිම, සැප්තැම්බර් සිට දෙසැම්බර් අඩුම.",
    fm_season_tip: "සාමාන්‍ය මාසයක {0}%",
    fm_bio_h: "පොල් ගෙඩියක් වැඩෙන හැටි",
    fm_bio_p:
      "පොල් ගසක මාසයකට වරක් පමණ අලුත් මල් පොකුරක් විවෘත වේ. ඒ නිසා මාසිකව පොල් කැඩිය හැක. එක් පොකුරක් පළමු අංකුරයේ සිට මාස 44 සිට 46ක් පමණ වැඩේ. ගෙඩි වැඩෙන්නේ මල විවෘත වූ පසු අවසන් මාස 12 තුළයි. ශ්‍රී ලංකාවේ වතු වල සාම්ප්‍රදායිකව මාස දෙකකට වරක්, වසරකට කැඩීම් හයක් කරයි. මාසිකව කැඩීමෙන් ඉදුණු ගෙඩි වැටී නැති වීම අඩු වන බව පොල් පර්යේෂණ ආයතනයේ අත්හදා බැලීම් වලින් සොයා ගත්තේය. නියඟයේ බලපෑම අස්වැන්නට පෙනෙන්නේ වසරකට පමණ පසුවය.",
    fm_acc_p:
      "පියවරෙන් පියවර පරීක්ෂා කිරීමේ දෝෂ: මිල {0}, පොල් ගණන {1}, අස්වනු අතර දින {2}. මඟහැරුණු මාස ශූන්‍ය අස්වැන්නක් ලෙස නොව ගතවූ කාලය ලෙස සලකයි.",
    fm_acc_n: "පසුගිය අස්වනු අතර කාල පරතර {0}ක් මත පරීක්ෂා කළා.",
    fm_acc_few:
      "විශ්වාසදායක නිරවද්‍යතාවයක් මැනීමට තවම අස්වනු අතර කාල පරතර මදි. කාලයත් සමඟ වාර්තා එකතු කරන්න; මඟහැරුණු මාස ශූන්‍ය අස්වැන්නක් ලෙස ගණන් නොගනී.",
    fm_methods: "තෝරාගත් ක්‍රම: මිල, {0}; පොල් ගණන, {1}; අස්වනු අතර දින, {2}.",
    scenario_h: "සැලසුම් අවස්ථාවක් බලන්න",
    scenario_hint:
      "සැලසුමක් පමණි; ඔබේ වාර්තා වෙනස් නොවේ. පොල් ගණන හෝ මිල හිස්ව තැබුවහොත් ආකෘතියේ ඇස්තමේන්තුව භාවිත වේ. පොල් ගණන යනු කැඩූ මුළු ගණනයි; විකිණුම් ආදායම මෑතකදී පැටවූ අනුපාතය භාවිත කරයි.",
    scenario_date: "අපේක්ෂිත අස්වනු දිනය",
    scenario_nuts: "අපේක්ෂිතව කැඩෙන පොල් ගණන",
    scenario_price: "පොල් ගෙඩියක අපේක්ෂිත මිල",
    scenario_run: "සැලසුම ගණනය කරන්න",
    scenario_reset: "ආකෘතියට යළි පිහිටුවන්න",
    scenario_estimate: "සැලසුම් ඇස්තමේන්තුව",
    scenario_loaded: "විකිණීමට අපේක්ෂිත පොල්",
    scenario_income: "ඇස්තමේන්තුගත විකිණුම් ආදායම",
    scenario_deductions: "ඇස්තමේන්තුගත අඩු කිරීම්",
    scenario_balance: "අඩු කිරීම් පසු ඇස්තමේන්තුගත ශේෂය",
    scenario_share: "ඇස්තමේන්තුගත {0} කොටස",
    scenario_bad_date: "අවසන් වාර්තා කළ අස්වැන්නෙන් පසු වලංගු දිනයක් තෝරන්න.",
    scenario_bad_nuts: "ශූන්‍යයට වඩා වැඩි පූර්ණ පොල් ගණනක් ඇතුළත් කරන්න, නැත්නම් හිස්ව තබන්න.",
    scenario_bad_price: "ශූන්‍යයට වඩා වැඩි මිලක් ඇතුළත් කරන්න, නැත්නම් හිස්ව තබන්න.",
    fm_gap_note:
      "වාර්තා අතර දිගු පරතරයක් නිසා ඇස්තමේන්තුවේ විශ්වාසය අඩු විය හැක. ඔබ ඇතුළත් කළ දිනයන් භාවිත කරන අතර මඟහැරුණු අස්වනු නිර්මාණය නොකරයි.",
    m_naive: "අවසන් මිල",
    m_level: "සුමට කළ මිල",
    m_trend: "ක්‍රමයෙන් අඩු වන මෑත ප්‍රවණතාව",
    m_season: "කාලය",
    m_rate: "සුමට කළ දිනකට පොල්",
    m_median: "මෑත කාලයේ මැද අගය",
    m_smooth: "සුමට කළ කාලය",
    fm_market_h: "වෙළඳපොළ සටහන්",
    fm_market_p:
      "ශ්‍රී ලංකාව 2024 දී පොල් මිලියන 2,790ක් නිපදවූ අතර 2025 දී එය මිලියන 3,040ක් දක්වා ඉහළ ගියේය. 2026 මැයි සහ ජූනි මාස වල ජාතික නිෂ්පාදනය පෙර වසරට වඩා 8.9%කින් ද, ජූලි සහ අගෝස්තු මාස වල 1.8%කින් ද අඩු විය. සැපයුම අඩු වන විට සාමාන්‍යයෙන් මිල ඉහළ යයි.",
    fm_sources:
      "මූලාශ්‍ර: ශ්‍රී ලංකා මහ බැංකුවේ කෘෂිකර්ම දත්ත වාර්තා (2024 සිට 2026); ශ්‍රී ලංකා පොල් පර්යේෂණ ආයතනය, COCOS සඟරාව.",
    upd_h: "යෙදුම් යාවත්කාලීන",
    upd_hint:
      "යෙදුම ඉබේම යාවත්කාලීන වේ. තිරයේ යාවත්කාලීනයක් ඉබේම බාගත වී, ඔබ යෙදුමෙන් ඉවත් වී නැවත පැමිණි පසු ක්‍රියාත්මක වේ. නව Android යෙදුම් සංස්කරණයකදී Install ඔබන්න කියා අසයි.",
    rights: "සියලුම හිමිකම් ඇවිරිණි.",
    made: "Made in 🇱🇰 with ❤️",
    dev_on: "සංවර්ධක විකල්ප පෙන්වයි",
    upd_link: "යාවත්කාලීන සබැඳිය",
    upd_save: "සබැඳිය සුරකින්න",
    upd_check: "යාවත්කාලීන පරීක්ෂා කරන්න",
    upd_cur: "මෙම යෙදුම: සංස්කරණය {0} (Android යෙදුම {1})",
    upd_none:
      "යාවත්කාලීන සබැඳියක් නැත. ඉහත එකක් අලවන්න, නැත්නම් හිස්ව තබා සබැඳිය සුරකින්න ඔබා යෙදුමේ ඇතුළත් සබැඳිය භාවිත කරන්න.",
    upd_checking: "පරීක්ෂා කරමින්…",
    upd_ok: "අලුත්ම සංස්කරණයයි. අවසන් වරට පරීක්ෂා කළේ {0}.",
    upd_ready: "සංස්කරණය {0} බාගත විය. ඔබ යෙදුමෙන් ඉවත් වී නැවත පැමිණි පසු එය ඉබේම ක්‍රියාත්මක වේ.",
    upd_restart: "දැන් භාවිත කරන්න",
    upd_apk: "Android යෙදුම් සංස්කරණය {0} ලබා ගත හැක.",
    upd_install: "ස්ථාපනය කරන්න",
    upd_dl: "බාගත කරමින්…",
    upd_opened:
      "ස්ථාපන තිරය විවෘතයි. Install ඔබන්න. Android අසන්නේ නම් Coconut Ledger යෙදුමට යෙදුම් ස්ථාපනයට අවසර දෙන්න.",
    upd_err_net: "යාවත්කාලීන සබැඳියට සම්බන්ධ විය නොහැකි විය. අන්තර්ජාලය සහ සබැඳිය පරීක්ෂා කරන්න.",
    upd_err_sig: "මෙම යාවත්කාලීනය ඔබේ යතුරෙන් අත්සන් කර නැති නිසා භාවිත කළේ නැත.",
    upd_err_file: "බාගත කළ ගොනුව නොගැළපුණු නිසා භාවිත කළේ නැත. පසුව නැවත උත්සාහ කරන්න.",
    upd_err_bad: "සබැඳිය වලංගු update.json ගොනුවකට යොමු නොවේ.",
    upd_applied: "සංස්කරණය {0} දක්වා යාවත්කාලීන විය",
    upd_security_applied: "ප්‍රධාන ආරක්ෂක යාවත්කාලීනය {0} ස්වයංක්‍රීයව ස්ථාපනය විය. ඔබට කිසිවක් කිරීමට අවශ්‍ය නැත.",
    upd_banner: "Android යෙදුම් සංස්කරණය {0} ස්ථාපනයට සූදානම්.",
    upd_saved: "සබැඳිය සුරැකුණා",
    upd_badlink: "සබැඳිය https:// වලින් පටන් ගත යුතුයි.",
    dev_sync_settings: "වතු සමමුහුර්ත සම්බන්ධතාව",
  },
};
const MONS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  si: ["ජන", "පෙබ", "මාර්", "අප්‍රේ", "මැයි", "ජූනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"],
};
const MONLS = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  si: [
    "ජනවාරි",
    "පෙබරවාරි",
    "මාර්තු",
    "අප්‍රේල්",
    "මැයි",
    "ජූනි",
    "ජූලි",
    "අගෝස්තු",
    "සැප්තැම්බර්",
    "ඔක්තෝබර්",
    "නොවැම්බර්",
    "දෙසැම්බර්",
  ],
};
const LS = {
  get(k) {
    try {
      return localStorage.getItem(k);
    } catch (e) {
      return null;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch (e) {}
  },
};
let lang = LS.get("coconut-ledger-lang") === "si" ? "si" : "en";
const t = (k, ...a) => {
  let s = L[lang][k];
  if (s == null) s = L.en[k];
  if (s == null) return k;
  a.forEach((v, i) => {
    s = s.split("{" + i + "}").join(v);
  });
  return s;
};

const VER = "1.9.0";
const SECURITY_NOTICE_VERSION = "1.8.5";
/* Your company, shown at the bottom of the Data tab. Leave it empty to show the app name instead. */
const COMPANY = "CyberTech Lanka";
const FIRST_YEAR = 2026;
const MIN_SHELL = 11; /* the oldest Android app (version code) this page works with */
const CATS = ["harvest", "cart", "transport", "church", "personal", "fertilizer", "power", "other"];
const KEY = "coconut-ledger-v1",
  ESTATE_ACTIVE_KEY = "coconut-ledger-active-estate-v1",
  ESTATE_ACTIVE_USER_KEY = "coconut-ledger-active-user-v1",
  ESTATE_LOCAL_PREFIX = "coconut-ledger-estate-v1:",
  ME = "coconut-ledger-me",
  $ = (s) => document.querySelector(s),
  view = $("#view");
const esc = (s) =>
  String(s == null ? "" : s).replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const NB = window.AndroidBridge || null; /* present only inside the Android app */

/* ---------- state: the code holds no personal details, only the sample below ---------- */
function sample() {
  const d = [
      "2025-12-06",
      "2026-01-12",
      "2026-02-14",
      "2026-03-28",
      "2026-05-02",
      "2026-06-10",
      "2026-07-12",
      "2026-08-24",
      "2026-09-27",
      "2026-11-02",
    ],
    tt = [1180, 1090, 960, 1240, 1130, 1310, 1020, 1390, 1150, 1210],
    r = [62, 48, 71, 55, 60, 84, 43, 77, 52, 58],
    hm = [30, 25, 28, 35, 30, 40, 26, 38, 30, 31],
    p = [128, 134, 141, 138, 146, 152, 149, 158, 163, 168];
  return {
    v: 4,
    sample: true,
    updatedAt: 0,
    estate: "My coconut estate",
    cur: "Rs",
    freePer: 100,
    shares: 2,
    shareName: "child",
    transRate: 2,
    rejInLoaded: false,
    harvests: d.map((x, i) => ({
      id: "s" + i,
      date: x,
      total: tt[i],
      rejected: r[i],
      home: hm[i],
      loaded: tt[i] - r[i] - hm[i],
      free: null,
      price: p[i],
      buyer: "Sample buyer",
      contact: "",
      payments: [],
      by: "Sample",
      note: "",
      otherNote: i === 9 ? "Sample: loan deducted" : "",
      ded: {
        harvest: Math.round((tt[i] * 5.5) / 100) * 100,
        cart: 2500,
        transport: null,
        church: 2000,
        personal: 25000,
        fertilizer: i % 3 === 1 ? 18000 : 0,
        power: 3000 + i * 90,
        other: i === 9 ? 1000 : 0,
      },
    })),
    otherIncome: [],
    monthPayouts: {},
    reviewedMonths: [],
    deductionPresets: [],
  };
}
let activeEstateId = "",
  accessReady = true,
  stateStorageKey = KEY,
  state;
try {
  state = JSON.parse(localStorage.getItem(stateStorageKey));
} catch (e) {}
/* The Android app keeps a private copy of the records. Use it when it is newer, so an update can never lose them. */
const NBX = !!(NB && typeof NB.loadState === "function");
if (NBX) {
  try {
    const n = JSON.parse(NB.loadState() || "null");
    if (
      n &&
      n.state &&
      Array.isArray(n.state.harvests) &&
      (n.activeEstateId || "") === activeEstateId &&
      (!state || !Array.isArray(state.harvests) || (n.state.updatedAt || 0) > (state.updatedAt || 0))
    )
      state = n.state;
    if (n && n.ui) {
      if (LS.get("coconut-ledger-lang") == null && n.ui.lang) {
        lang = n.ui.lang === "si" ? "si" : "en";
        LS.set("coconut-ledger-lang", lang);
      }
      if (LS.get("coconut-ledger-skin") == null && n.ui.skin) LS.set("coconut-ledger-skin", n.ui.skin);
      if (LS.get(ME) == null && n.ui.me) LS.set(ME, n.ui.me);
    }
  } catch (e) {}
}
if (!state || !Array.isArray(state.harvests)) {
  state = sample();
  if (activeEstateId) {
    state.sample = false;
    state.harvests = [];
    state.otherIncome = [];
    state.monthPayouts = {};
    state.reviewedMonths = [];
    state.deductionPresets = [];
  }
}
function mirror() {
  if (!NBX) return;
  try {
    NB.saveState(
      JSON.stringify({
        state: state.sample ? null : state,
        activeEstateId,
        ui: {
          lang,
          skin: LS.get("coconut-ledger-skin") || "neon",
          me: LS.get(ME) || "",
        },
      }),
    );
  } catch (e) {}
}
function norm() {
  if (!Array.isArray(state.otherIncome)) state.otherIncome = [];
  if (!state.monthPayouts || typeof state.monthPayouts !== "object" || Array.isArray(state.monthPayouts))
    state.monthPayouts = {};
  if (!Array.isArray(state.reviewedMonths)) state.reviewedMonths = [];
  if (!Array.isArray(state.deductionPresets)) state.deductionPresets = [];
  state.harvests.forEach((h) => {
    if (!Array.isArray(h.payments)) h.payments = [];
  });
  if (state.freePer == null || !isFinite(state.freePer)) state.freePer = 100;
  if (!(state.shares >= 1)) state.shares = 2;
  if (!state.shareName) state.shareName = "child";
  if (typeof state.cur !== "string" || !state.cur.trim() || state.cur.length > 6) state.cur = "Rs";
  if (!state.estate) state.estate = "My coconut estate";
  if (!(state.transRate >= 0)) state.transRate = 2;
  state.rejInLoaded = !!state.rejInLoaded;
  /* older records stored an empty transport charge as 0: let those follow the per-coconut rule */
  if ((state.v || 0) < 4) {
    state.harvests.forEach((h) => {
      if (h.ded && !h.ded.transport) h.ded.transport = null;
    });
    state.v = 4;
  }
}
norm();
let lastLocalSnapshot = JSON.stringify(state);
function persist(touch) {
  if (touch !== false && activeEstateId && readOnlyEstateRole(estateSyncState.active?.role)) {
    state = JSON.parse(lastLocalSnapshot);
    toast(t("sync_readonly_account"));
    render();
    return false;
  }
  invalidate();
  if (touch !== false) {
    state.updatedAt = Date.now();
  }
  LS.set(stateStorageKey, JSON.stringify(state));
  lastLocalSnapshot = JSON.stringify(state);
  mirror();
  if (touch !== false && !activeEstateId) pushCloud();
  if (touch !== false && activeEstateId) scheduleEstateSync();
  syncNativeReminders();
  return true;
}

/* ---------- secure multi-device estate sync ---------- */
const ESTATE_SYNC = window.EstateSync;
let estateSyncState = {
  estates: [],
  active: null,
  requests: [],
  invites: [],
  members: [],
  features: [],
  roleFeatures: [],
  invite: null,
  error: "",
  busy: false,
};
let estateSyncTimer = 0,
  estateSyncRunning = false;
const MEMBER_ROLES = ["member_1", "member_2", "member_3", "member_4", "member_5"],
  MEMBER_FEATURES = ["overview", "months", "insights", "forecast"],
  FEATURE_LABELS = {
    overview: "sync_feature_overview",
    months: "sync_feature_months",
    insights: "sync_feature_insights",
    forecast: "sync_feature_forecast",
  };
function readOnlyEstateRole(role) {
  return role === "manager" || MEMBER_ROLES.includes(role);
}
function checkedEstateFeatures(features) {
  if (!Array.isArray(features) || features.some((feature) => !MEMBER_FEATURES.includes(feature)))
    throw new Error("The estate service returned invalid feature permissions.");
  return features.slice().sort();
}
function canViewEstateRoute(routeName) {
  if (!activeEstateId) return true;
  if (!estateSyncState.active || !accessReady) return routeName === "months";
  if (estateSyncState.active.role === "owner" || estateSyncState.active.role === "manager") return true;
  return routeName === "months" || estateSyncState.features.includes(routeName);
}
function defaultEstateRoute() {
  return activeEstateId ? "months" : "overview";
}
function estateErrorText(error) {
  const message = error && error.message ? error.message : String(error);
  return message === "sync_change_too_large" ? t("sync_change_too_large") : message;
}
function canonicalValue(value) {
  if (Array.isArray(value)) return value.map(canonicalValue);
  if (!value || typeof value !== "object") return value;
  return Object.keys(value)
    .sort()
    .reduce((sorted, key) => {
      sorted[key] = canonicalValue(value[key]);
      return sorted;
    }, {});
}
const stableJson = (value) => JSON.stringify(canonicalValue(value === undefined ? null : value));
function estateRecords(local) {
  const records = new Map(),
    add = (type, id, payload) => records.set(type + ":" + id, { record_type: type, record_id: String(id), payload }),
    monthOnlyMember =
      accessReady &&
      MEMBER_ROLES.includes(estateSyncState.active?.role) &&
      estateSyncState.features.length === 1 &&
      estateSyncState.features[0] === "months";
  if (!monthOnlyMember)
    add("settings", "settings", {
      estate: local.estate,
      cur: local.cur,
      freePer: local.freePer,
      shares: local.shares,
      shareName: local.shareName,
      transRate: local.transRate,
      rejInLoaded: local.rejInLoaded,
    });
  if (local.sample) return records;
  (local.harvests || []).forEach((row) =>
    add(
      "harvest",
      row.id,
      monthOnlyMember ? { id: String(row.id), date: String(row.date || ""), total: Number(row.total) || 0 } : row,
    ),
  );
  if (monthOnlyMember) return records;
  (local.otherIncome || []).forEach((row) => add("other_income", row.id, row));
  (local.deductionPresets || []).forEach((row) => add("deduction_preset", row.id, row));
  Object.entries(local.monthPayouts || {}).forEach(([month, amounts]) => add("month_payout", month, { month, amounts }));
  (local.reviewedMonths || []).forEach((month) => add("reviewed_month", month, { month }));
  return records;
}
function applyEstateRecord(target, type, id, payload) {
  if (type === "settings" && payload) {
    ["estate", "cur", "freePer", "shares", "shareName", "transRate", "rejInLoaded"].forEach((key) => {
      if (payload[key] !== undefined) target[key] = payload[key];
    });
    target.sample = false;
    return;
  }
  const collection =
    type === "harvest"
      ? target.harvests
      : type === "other_income"
        ? target.otherIncome
        : type === "deduction_preset"
          ? target.deductionPresets
          : null;
  if (collection) {
    const index = collection.findIndex((row) => String(row.id) === id);
    if (index >= 0) collection.splice(index, 1);
    if (payload) collection.push(payload);
    target.sample = false;
  } else if (type === "month_payout") {
    if (payload) target.monthPayouts[id] = payload.amounts || [];
    else delete target.monthPayouts[id];
  } else if (type === "reviewed_month") {
    target.reviewedMonths = target.reviewedMonths.filter((month) => month !== id);
    if (payload && !target.reviewedMonths.includes(id)) target.reviewedMonths.push(id);
  }
}
function estatePayload(row) {
  return row && !row.deleted_at ? row.payload : null;
}
function sanitizeMemberLedger() {
  const previous = state,
    harvests = previous.sample ? [] : previous.harvests || [];
  state = {
    v: 4,
    sample: false,
    updatedAt: previous.updatedAt || 0,
    estate: estateSyncState.active?.estates?.name || "My coconut estate",
    cur: "Rs",
    freePer: 0,
    shares: 1,
    shareName: "Share",
    transRate: 0,
    rejInLoaded: false,
    harvests: harvests.map((harvest) => ({
      id: String(harvest.id),
      date: String(harvest.date || ""),
      total: Number(harvest.total) || 0,
    })),
    otherIncome: [],
    monthPayouts: {},
    reviewedMonths: [],
    deductionPresets: [],
  };
  norm();
}
function sanitizeAnalyticsLedger() {
  const previous = state;
  state = {
    v: 4,
    sample: false,
    updatedAt: previous.updatedAt || 0,
    estate: estateSyncState.active?.estates?.name || "My coconut estate",
    cur: typeof previous.cur === "string" && previous.cur.trim() ? previous.cur.slice(0, 6) : "Rs",
    freePer: Number(previous.freePer) || 0,
    shares: Math.max(1, Math.round(Number(previous.shares) || 1)),
    shareName: "Share",
    transRate: Number(previous.transRate) || 0,
    rejInLoaded: !!previous.rejInLoaded,
    harvests: (previous.sample ? [] : previous.harvests || []).map((harvest) => {
    const ded = {};
    CATS.forEach((category) => {
      const value = harvest.ded && harvest.ded[category];
      ded[category] = category === "transport" && (value == null || value === "") ? null : Number(value) || 0;
    });
    return {
      id: String(harvest.id),
      date: String(harvest.date || ""),
      total: Number(harvest.total) || 0,
      rejected: Number(harvest.rejected) || 0,
      home: Number(harvest.home) || 0,
      loaded: Number(harvest.loaded) || 0,
      free: harvest.free == null ? null : Number(harvest.free) || 0,
      price: Number(harvest.price) || 0,
      ded,
      customDeds: (Array.isArray(harvest.customDeds) ? harvest.customDeds : []).map((item) => ({
        name: "Custom deduction",
        amount: Number(item && item.amount) || 0,
        kind: item && item.kind ? item.kind : null,
      })),
      shareDeds: (Array.isArray(harvest.shareDeds) ? harvest.shareDeds : []).map((amount) => Number(amount) || 0),
      shareAdds: (Array.isArray(harvest.shareAdds) ? harvest.shareAdds : []).map((amount) => Number(amount) || 0),
      payments: (Array.isArray(harvest.payments) ? harvest.payments : []).map((payment) => ({
        date: String((payment && payment.date) || ""),
        amount: Number(payment && payment.amount) || 0,
      })),
      otherNote: "",
      buyer: "",
      contact: "",
      by: "",
      note: "",
    };
    }),
    otherIncome: (previous.otherIncome || []).map((income) => ({
      id: String(income.id),
      date: String(income.date || ""),
      amount: Number(income.amount) || 0,
      note: "Other income",
    })),
    monthPayouts: {},
    reviewedMonths: [],
    deductionPresets: [],
  };
  norm();
}
function stateFromEstateRecords(rows) {
  const next = sample();
  next.sample = false;
  next.harvests = [];
  next.otherIncome = [];
  next.monthPayouts = {};
  next.reviewedMonths = [];
  next.deductionPresets = [];
  rows.forEach((row) => applyEstateRecord(next, row.record_type, row.record_id, estatePayload(row)));
  state = next;
  norm();
  lastLocalSnapshot = JSON.stringify(state);
  persist(false);
}
function saveEstateSyncStore(estateId, next) {
  ESTATE_SYNC.saveStore(estateId, next);
}
function prepareMemberAccess(estateId, role, features) {
  if (!MEMBER_ROLES.includes(role)) return role + ":" + features.slice().sort().join(",");
  const scope = role + ":" + features.slice().sort().join(","),
    saved = ESTATE_SYNC.storeFor(estateId),
    before = stableJson(state),
    hasLocalName = !!LS.get(ME);
  if (features.length === 1 && features[0] === "months") sanitizeMemberLedger();
  else sanitizeAnalyticsLedger();
  LS.remove(ME);
  if (stableJson(state) !== before || hasLocalName) persist(false);
  if (!saved.accessScope || saved.accessScope !== scope)
    saveEstateSyncStore(estateId, { base: {}, conflicts: [], accessScope: "" });
  return scope;
}
function scheduleEstateSync() {
  if (!ESTATE_SYNC || !activeEstateId || !ESTATE_SYNC.publicStatus().signedIn) return;
  clearTimeout(estateSyncTimer);
  estateSyncTimer = setTimeout(() => syncEstateNow(false), 1200);
}
async function syncEstateNow(showToast) {
  if (!ESTATE_SYNC || !activeEstateId || estateSyncRunning || !ESTATE_SYNC.publicStatus().signedIn) return;
  estateSyncRunning = true;
  estateSyncState.busy = true;
  estateSyncState.error = "";
  setSync("busy", "sync_busy");
  if (route === "data") render();
  try {
    const estateId = activeEstateId,
      storageKey = stateStorageKey,
      estates = await ESTATE_SYNC.listEstates(),
      membership = estates.find((item) => item.estate_id === estateId);
    if (!membership) {
      estateSyncState.estates = estates;
      estateSyncState.active = null;
      estateSyncState.features = [];
      estateSyncState.roleFeatures = [];
      await useLocalLedger();
      return;
    }
    const previousScope = estateSyncState.active
      ? estateSyncState.active.role + ":" + estateSyncState.features.slice().sort().join(",")
      : "";
    estateSyncState.estates = estates;
    estateSyncState.active = membership;
    const role = membership.role,
      features = ["owner", "manager"].includes(role) ? MEMBER_FEATURES.slice() : await ESTATE_SYNC.getFeatures(estateId);
    if (!Array.isArray(features) || features.some((feature) => !MEMBER_FEATURES.includes(feature)))
      throw new Error("The estate service returned invalid feature permissions.");
    estateSyncState.features = checkedEstateFeatures(features);
    estateSyncState.roleFeatures = role === "owner" ? await ESTATE_SYNC.listRoleFeatures(estateId) : [];
    accessReady = true;
    const scope = role + ":" + estateSyncState.features.join(",");
    if (previousScope && previousScope !== scope) invalidateAllViews();
    header();
    if (!canViewEstateRoute(route)) go(defaultEstateRoute());

    prepareMemberAccess(estateId, role, estateSyncState.features);
    const monthOnlyMember =
      MEMBER_ROLES.includes(role) &&
      estateSyncState.features.length === 1 &&
      estateSyncState.features[0] === "months";

    const remoteRows = await ESTATE_SYNC.listRecords(estateId),
      remote = new Map(
        remoteRows.map((row) => [
          row.record_type + ":" + row.record_id,
          { revision: Number(row.revision), payload: estatePayload(row) },
        ]),
      );
    if (activeEstateId !== estateId || stateStorageKey !== storageKey) return;
    const currentStore = ESTATE_SYNC.storeFor(estateId);
    const scopeChanged = !!currentStore.accessScope && currentStore.accessScope !== scope,
      firstReadOnlySync = role !== "owner" && !currentStore.accessScope;
    if (scopeChanged || firstReadOnlySync) {
      stateFromEstateRecords(remoteRows);
      if (monthOnlyMember) sanitizeMemberLedger();
      const nextBase = {};
      remoteRows.forEach((row) => {
        nextBase[row.record_type + ":" + row.record_id] = {
          revision: Number(row.revision),
          payload: estatePayload(row),
        };
      });
      saveEstateSyncStore(estateId, {
        base: nextBase,
        conflicts: [],
        accessScope: scope,
      });
      header();
      setSync("ok", "sync_ok");
      render();
      if (showToast) toast(t("sync_ok"));
      return;
    }

    const base = currentStore.base || {},
      conflictMap = new Map((currentStore.conflicts || []).map((item) => [item.key, item])),
      local = estateRecords(state),
      apply = [],
      changes = [];
    const keys = new Set([...Object.keys(base), ...local.keys(), ...remote.keys(), ...conflictMap.keys()]);
    for (const key of keys) {
      const previous = base[key],
        localRecord = local.get(key),
        localPayload = localRecord ? localRecord.payload : null,
        remoteRecord = remote.get(key),
        remotePayload = remoteRecord ? remoteRecord.payload : null,
        baseRevision = previous ? Number(previous.revision) : 0,
        remoteRevision = remoteRecord ? remoteRecord.revision : 0,
        localChanged = stableJson(localPayload) !== stableJson(previous ? previous.payload : null),
        remoteChanged = remoteRevision !== baseRevision;
      if (conflictMap.has(key)) {
        conflictMap.set(key, {
          ...conflictMap.get(key),
          localPayload,
          remotePayload,
          remoteRevision,
        });
        continue;
      }
      if (localChanged && remoteChanged && stableJson(localPayload) !== stableJson(remotePayload)) {
        const [recordType, ...idParts] = key.split(":");
        conflictMap.set(key, {
          key,
          recordType,
          recordId: idParts.join(":"),
          localPayload,
          remotePayload,
          remoteRevision,
        });
      } else if (localChanged && stableJson(localPayload) !== stableJson(remotePayload)) {
        const [recordType, ...idParts] = key.split(":");
        changes.push({
          record_type: recordType,
          record_id: idParts.join(":"),
          expected_revision: remoteRevision,
          payload: localPayload,
        });
      } else if (!localChanged && remoteChanged) {
        const [recordType, ...idParts] = key.split(":");
        apply.push({ recordType, recordId: idParts.join(":"), payload: remotePayload });
      }
    }
    if (role !== "owner" && changes.length) {
      stateFromEstateRecords(remoteRows);
      if (monthOnlyMember) sanitizeMemberLedger();
      const nextBase = {};
      remoteRows.forEach((row) => {
        nextBase[row.record_type + ":" + row.record_id] = {
          revision: Number(row.revision),
          payload: estatePayload(row),
        };
      });
      saveEstateSyncStore(estateId, { base: nextBase, conflicts: [], accessScope: scope });
      render();
      setSync("ok", "sync_ok");
      return;
    }
    if (apply.length) {
      apply.forEach((item) => applyEstateRecord(state, item.recordType, item.recordId, item.payload));
      state.updatedAt = Date.now();
      LS.set(storageKey, JSON.stringify(state));
      lastLocalSnapshot = JSON.stringify(state);
      mirror();
    }
    if (changes.length) {
      const result = await ESTATE_SYNC.submitChanges(estateId, changes);
      if (!result.ok) {
        (result.conflicts || []).forEach((row) => {
          const key = row.record_type + ":" + row.record_id,
            change = changes.find((item) => item.record_type + ":" + item.record_id === key);
          if (change) {
            conflictMap.set(key, {
              key,
              recordType: row.record_type,
              recordId: row.record_id,
              localPayload: change.payload,
              remotePayload: row.deleted ? null : row.payload,
              remoteRevision: Number(row.revision) || 0,
            });
          }
        });
      }
    }
    const latestRows = changes.length ? await ESTATE_SYNC.listRecords(estateId) : remoteRows;
    const nextBase = {};
    latestRows.forEach((row) => {
      nextBase[row.record_type + ":" + row.record_id] = {
        revision: Number(row.revision),
        payload: estatePayload(row),
      };
    });
    saveEstateSyncStore(estateId, {
      base: nextBase,
      conflicts: Array.from(conflictMap.values()),
      accessScope: scope,
    });
    estateSyncState.error = "";
    header();
    setSync("ok", "sync_ok");
    if (route === "data") {
      await refreshEstatePanel();
      render();
    } else if (apply.length) render();
    if (showToast) toast(t("sync_ok"));
  } catch (error) {
    estateSyncState.error = estateErrorText(error);
    accessReady = false;
    invalidateAllViews();
    header();
    go(canViewEstateRoute(route) ? route : "months");
    setSync("", "sync_fail");
    if (route === "data") render();
    if (showToast) toast(estateSyncState.error);
  } finally {
    estateSyncRunning = false;
    estateSyncState.busy = false;
  }
}
async function activateEstate(estateId, migrateLocal = true) {
  if (!estateId) return;
  const oldKey = stateStorageKey,
    targetKey = ESTATE_LOCAL_PREFIX + estateId,
    existingText = LS.get(targetKey);
  if (oldKey !== targetKey) LS.set(oldKey, JSON.stringify(state));
  estateSyncState.invite = null;
  let nextState;
  if (existingText) {
    try {
      nextState = JSON.parse(existingText);
    } catch (error) {
      throw new Error("Saved records for this estate could not be read; the current ledger was left unchanged.");
    }
  } else {
    const sourceState = oldKey === KEY ? state : JSON.parse(LS.get(KEY) || "null") || sample(),
      hasRecords =
        !state.sample &&
        ((state.harvests || []).length > 0 ||
          (state.otherIncome || []).length > 0 ||
          Object.keys(state.monthPayouts || {}).length > 0);
    const copyLocal =
      migrateLocal &&
      oldKey === KEY &&
      hasRecords &&
      (await confirmBox(t("sync_create_estate"), t("sync_local_migration"), t("sync_set_active")));
    nextState = copyLocal
      ? JSON.parse(JSON.stringify(sourceState))
      : {
          ...sourceState,
          sample: false,
          updatedAt: Date.now(),
          harvests: [],
          otherIncome: [],
          monthPayouts: {},
          reviewedMonths: [],
          deductionPresets: [],
        };
    nextState.sample = false;
  }
  if (NBX) {
    try {
      const native = JSON.parse(NB.loadState() || "null");
      if (
        native &&
        native.state &&
        Array.isArray(native.state.harvests) &&
        native.activeEstateId === estateId &&
        (!existingText || (native.state.updatedAt || 0) > (nextState.updatedAt || 0))
      )
        nextState = native.state;
    } catch (error) {}
  }
  activeEstateId = estateId;
  accessReady = false;
  estateSyncState.active = null;
  estateSyncState.features = [];
  invalidateAllViews();
  header();
  if (route !== "months") go("months");
  stateStorageKey = targetKey;
  LS.set(ESTATE_ACTIVE_KEY, estateId);
  const userId = ESTATE_SYNC.publicStatus().user?.id;
  if (userId) LS.set(ESTATE_ACTIVE_USER_KEY, userId);
  else LS.remove(ESTATE_ACTIVE_USER_KEY);
  state = nextState;
  norm();
  lastLocalSnapshot = JSON.stringify(state);
  persist(false);
  await syncEstateNow(false);
  await refreshEstatePanel();
  render();
}
async function useLocalLedger() {
  if (activeEstateId) LS.set(stateStorageKey, JSON.stringify(state));
  activeEstateId = "";
  accessReady = true;
  estateSyncState.active = null;
  estateSyncState.features = [];
  estateSyncState.roleFeatures = [];
  invalidateAllViews();
  stateStorageKey = KEY;
  localStorage.removeItem(ESTATE_ACTIVE_KEY);
  localStorage.removeItem(ESTATE_ACTIVE_USER_KEY);
  try {
    state = JSON.parse(LS.get(KEY) || "null") || sample();
  } catch (error) {
    throw new Error("The on-device ledger could not be reopened.");
  }
  norm();
  lastLocalSnapshot = JSON.stringify(state);
  mirror();
  render();
  initCloud();
}
async function refreshEstatePanel() {
  if (!ESTATE_SYNC || !ESTATE_SYNC.publicStatus().signedIn) return;
  const previousScope = estateSyncState.active
    ? estateSyncState.active.role + ":" + estateSyncState.features.slice().sort().join(",")
    : "";
  estateSyncState.estates = await ESTATE_SYNC.listEstates();
  const active = estateSyncState.estates.find((item) => item.estate_id === activeEstateId);
  estateSyncState.active = active || null;
  const features = active
    ? ["owner", "manager"].includes(active.role)
      ? MEMBER_FEATURES.slice()
      : await ESTATE_SYNC.getFeatures(activeEstateId)
    : [];
  estateSyncState.features = active ? checkedEstateFeatures(features) : [];
  estateSyncState.roleFeatures =
    active && active.role === "owner" ? await ESTATE_SYNC.listRoleFeatures(activeEstateId) : [];
  const nextScope = active ? active.role + ":" + estateSyncState.features.slice().sort().join(",") : "";
  if (previousScope && previousScope !== nextScope) invalidateAllViews();
  if (active) prepareMemberAccess(activeEstateId, active.role, estateSyncState.features);
  estateSyncState.requests = active && active.role === "owner" ? await ESTATE_SYNC.listRequests(activeEstateId) : [];
  estateSyncState.invites = active && active.role === "owner" ? await ESTATE_SYNC.listInvites(activeEstateId) : [];
  if (
    estateSyncState.invite &&
    !estateSyncState.invites.some((invite) => invite.invite_id === estateSyncState.invite.invite_id)
  )
    estateSyncState.invite = null;
  estateSyncState.members =
    active && ["owner", "manager"].includes(active.role) ? await ESTATE_SYNC.listMembers(activeEstateId) : [];
  accessReady = true;
  header();
  if (!canViewEstateRoute(route)) go(defaultEstateRoute());
  else if (previousScope && previousScope !== nextScope) render();
}
function recordLabel(type, id) {
  const local = estateRecords(state).get(type + ":" + id);
  if (local && local.payload)
    return esc(local.payload.buyer || local.payload.note || local.payload.estate || local.payload.date || id);
  return esc(id);
}
function estateSyncCard() {
  if (!ESTATE_SYNC) return "";
  const config = ESTATE_SYNC.getConfig(),
    status = ESTATE_SYNC.publicStatus(),
    roles = ["manager", ...MEMBER_ROLES],
    visibleRoles = (role) => (role === "manager" ? MEMBER_ROLES : roles),
    featureEditor = (role) => {
      const enabled = new Set(
        estateSyncState.roleFeatures
          .filter((item) => item.role === role && item.enabled)
          .map((item) => item.feature_key),
      );
      return `<div class="card"><h3>${t("sync_role_" + role)}</h3><div class="fields">
        ${MEMBER_FEATURES.map(
          (feature) => `<label class="fld"><span><input type="checkbox" data-role-feature="${role}" value="${feature}" ${
            enabled.has(feature) || feature === "months" ? "checked" : ""
          } ${feature === "months" ? "disabled" : ""}> ${t(FEATURE_LABELS[feature])}</span></label>`,
        ).join("")}
        <button class="btn small" data-save-role-features="${role}">${t("sync_save_features")}</button></div></div>`;
    };
  return `<div class="card estate-sync">
    <h2>${t("estate_sync_title")}</h2><p class="hint">${t("estate_sync_hint")}</p>
    ${config.url && !status.signedIn ? `<p>${t("sync_not_signed_in")}</p><div class="fields">
      <label class="fld"><span>${t("sync_email")}</span><input id="estateSyncEmail" type="email" autocomplete="email"></label>
      <label class="fld"><span>${t("sync_password")}</span><input id="estateSyncPassword" type="password" autocomplete="current-password"></label>
      <div class="btnrow"><button class="btn primary" id="estateSyncSignIn">${t("sync_signin")}</button><button class="btn" id="estateSyncSignUp">${t("sync_signup")}</button></div>
      </div>` : ""}
    ${status.signedIn ? `<p>${t("sync_signed_in", esc(status.user.email || ""))}</p>
      <div class="btnrow"><button class="btn" id="estateSyncSignOut">${t("sync_signout")}</button><button class="btn" id="estateSyncLocal">${t("sync_device")}</button></div>
      <div class="fields" style="margin-top:12px">
        <label class="fld"><span>${t("sync_estate_name")}</span><input id="estateCreateName" type="text" maxlength="80"></label>
        <button class="btn" id="estateCreate">${t("sync_create_estate")}</button>
        <label class="fld"><span>${t("sync_invite_code")}</span><input id="estateJoinCode" type="text" inputmode="text" maxlength="64" autocomplete="off"></label>
        <label class="fld"><span>${t("sync_display_name")}</span><input id="estateJoinName" type="text" maxlength="60" value="${esc(state.estate || "")}"></label>
        <button class="btn" id="estateJoin">${t("sync_request_join")}</button>
      </div>
      ${estateSyncState.estates.length ? `<div class="fields" style="margin-top:12px">
        <label class="fld wide"><span>${t("sync_estates")}</span><select id="estateSelect">${estateSyncState.estates.map((item) => `<option value="${esc(item.estate_id)}" ${item.estate_id === activeEstateId ? "selected" : ""}>${esc(item.estates.name)} · ${t("sync_role_" + item.role)}</option>`).join("")}</select></label>
        <button class="btn" id="estateActivate">${t("sync_set_active")}</button>
      </div>` : `<p class="hint">${t("sync_no_estates")}</p>`}
      ${activeEstateId && estateSyncState.active ? `<div class="sync-estate-controls">
        <h3>${t("sync_active")}: ${esc(estateSyncState.active.estates.name)}</h3>
        <div class="btnrow"><button class="btn" id="estateSyncNow" ${estateSyncState.busy ? "disabled" : ""}>${t("sync_sync_now")}</button>
          ${estateSyncState.active.role === "owner" ? `<button class="btn" id="estateNewInvite">${t("sync_new_invite")}</button>` : ""}</div>
        ${estateSyncState.invite ? `<p>${t("sync_invite_created")}</p><p><code>${esc(estateSyncState.invite.invite_code)}</code></p><p class="hint">${t("sync_invite_expires", esc(new Date(estateSyncState.invite.expires_at).toLocaleString()))}</p>` : ""}
        ${estateSyncState.active.role === "owner" && estateSyncState.invites.length ? `<h3>${t("sync_invites")}</h3>${estateSyncState.invites.map((invite) => `<div class="fields member-row"><span>${esc(new Date(invite.expires_at).toLocaleString())}</span><button class="btn small danger" data-revoke-invite="${esc(invite.invite_id)}">${t("sync_revoke_invite")}</button></div>`).join("")}` : ""}
        ${estateSyncState.error ? `<p class="err">${esc(estateSyncState.error)}</p>` : ""}
        ${estateSyncState.active.role === "owner" ? `<h3>${t("sync_pending_requests")}</h3><p class="hint">${t("sync_approve_hint")}</p>
          ${estateSyncState.requests.map((request) => `<div class="card"><b>${esc(request.display_name)}</b><p class="hint">${esc(request.email || request.user_id)} · ${esc(new Date(request.requested_at).toLocaleString())}</p>
            <label class="fld"><span>${t("sync_approve")}</span><select data-request-role="${esc(request.id)}">${roles.map((role) => `<option value="${role}">${t("sync_role_" + role)}</option>`).join("")}</select></label>
            <div class="btnrow"><button class="btn primary" data-approve-request="${esc(request.id)}">${t("sync_approve")}</button><button class="btn danger" data-reject-request="${esc(request.id)}">${t("sync_reject")}</button></div></div>`).join("") || `<p class="hint">—</p>`}` : ""}
        <h3>${t("sync_members")}</h3>
        ${["owner", "manager"].includes(estateSyncState.active.role) ? `<p class="hint">${t("sync_member_readonly")}</p>` : ""}
        ${estateSyncState.members.map((member) => {
          const owner = estateSyncState.active.role === "owner",
            manager = estateSyncState.active.role === "manager",
            canManage = member.role !== "owner" && (owner || (manager && MEMBER_ROLES.includes(member.role))),
            options = visibleRoles(estateSyncState.active.role);
          return `<div class="card member-row"><div><b>${esc(member.display_name || member.email || member.user_id)}</b>
            <p class="hint">${esc(member.email || member.user_id)} · ${t("sync_role_" + member.role)} · ${
              member.access_status === "suspended" ? t("sync_suspended") : t("sync_member_active")
            }${member.global_banned ? " · " + t("sync_global_ban") : ""}</p></div>
            ${canManage ? `<div class="btnrow"><select data-member-role="${esc(member.user_id)}">${options.map((role) => `<option value="${role}" ${role === member.role ? "selected" : ""}>${t("sync_role_" + role)}</option>`).join("")}</select>
              <button class="btn small" data-member-status="${esc(member.user_id)}" data-status="${member.access_status === "suspended" ? "active" : "suspended"}">${t(member.access_status === "suspended" ? "sync_activate" : "sync_suspend")}</button>
              <button class="btn small danger" data-remove-member="${esc(member.user_id)}">${t("sync_remove_member")}</button>
              ${owner ? `<button class="btn small danger" data-global-account="${esc(member.user_id)}" data-account-action="${member.global_banned ? "unban" : "ban"}">${t(member.global_banned ? "sync_global_unban" : "sync_global_ban")}</button>
                <button class="btn small danger" data-global-account="${esc(member.user_id)}" data-account-action="delete">${t("sync_global_delete")}</button>` : ""}</div>` : ""}
          </div>`;
        }).join("")}
        ${estateSyncState.active.role === "owner" ? `<h3>${t("sync_feature_access")}</h3><p class="hint">${t("sync_feature_hint")}</p>${MEMBER_ROLES.map(featureEditor).join("")}` : ""}
        ${(() => {
          const conflicts = ESTATE_SYNC.storeFor(activeEstateId).conflicts || [];
          return conflicts.length && estateSyncState.active.role === "owner" ? `<h3>${t("sync_conflicts")}</h3><p class="hint">${t("sync_conflict_hint")}</p>${conflicts.map((item) => `<div class="card"><b>${esc(item.recordType)} · ${recordLabel(item.recordType, item.recordId)}</b>
            <div class="btnrow"><button class="btn" data-resolve-local="${esc(item.key)}">${t("sync_keep_local")}</button><button class="btn primary" data-resolve-cloud="${esc(item.key)}">${t("sync_use_cloud")}</button></div></div>`).join("")}` : "";
        })()}
      </div>` : ""}
    </div>` : ""}
  </div>`;
}
async function runEstateAction(action, successMessage) {
    try {
      await action();
      if (successMessage) toast(t(successMessage));
    } catch (error) {
      estateSyncState.error = estateErrorText(error);
      toast(estateSyncState.error);
    }
    if (route === "data") render();
}
async function initializeEstateSync() {
    if (!ESTATE_SYNC) return;
    const status = ESTATE_SYNC.publicStatus();
    if (!status.configured || !status.signedIn) {
      if (activeEstateId) await useLocalLedger();
      setSync("", "sync_device");
      return;
    }
    try {
      estateSyncState.estates = await ESTATE_SYNC.listEstates();
      const savedEstateId = LS.get(ESTATE_ACTIVE_KEY) || "",
        savedUserId = LS.get(ESTATE_ACTIVE_USER_KEY) || "",
        estateToRestore = ESTATE_SYNC.restoreEstateSelection(savedEstateId, savedUserId, estateSyncState.estates);
      if (!activeEstateId && estateToRestore) {
        await activateEstate(estateToRestore, false);
      } else if (activeEstateId) {
        estateSyncState.active = estateSyncState.estates.find((item) => item.estate_id === activeEstateId) || null;
        if (estateSyncState.active) {
          await refreshEstatePanel();
          await syncEstateNow(false);
        } else {
          await useLocalLedger();
          setSync("", "sync_device");
        }
      } else {
        estateSyncState.active = null;
        setSync("", "sync_device");
      }
      if (route === "data") render();
    } catch (error) {
      estateSyncState.error = estateErrorText(error);
      setSync("", "sync_fail");
      if (route === "data") render();
    }
}
async function resolveEstateConflict(key, useLocal) {
    if (!activeEstateId) return;
    const saved = ESTATE_SYNC.storeFor(activeEstateId),
      conflicts = saved.conflicts || [],
      conflict = conflicts.find((item) => item.key === key);
    if (!conflict) return;
    if (useLocal) {
      const result = await ESTATE_SYNC.submitChanges(activeEstateId, [
        {
          record_type: conflict.recordType,
          record_id: conflict.recordId,
          expected_revision: conflict.remoteRevision,
          payload: conflict.localPayload,
        },
      ]);
      if (!result.ok) throw new Error(t("sync_conflict_hint"));
      saveEstateSyncStore(activeEstateId, {
        ...saved,
        base: {
          ...saved.base,
          [key]: { revision: conflict.remoteRevision + 1, payload: conflict.localPayload },
        },
        conflicts: conflicts.filter((item) => item.key !== key),
      });
      await syncEstateNow(false);
    } else {
      applyEstateRecord(state, conflict.recordType, conflict.recordId, conflict.remotePayload);
      state.updatedAt = Date.now();
      LS.set(stateStorageKey, JSON.stringify(state));
      lastLocalSnapshot = JSON.stringify(state);
      mirror();
      saveEstateSyncStore(activeEstateId, {
        ...saved,
        base: {
          ...saved.base,
          [key]: { revision: conflict.remoteRevision, payload: conflict.remotePayload },
        },
        conflicts: conflicts.filter((item) => item.key !== key),
      });
      await syncEstateNow(false);
    }
}
/* ---------- sync to the owner's private store (only when opened inside Claude) ---------- */
let docRef = null,
  writing = false,
  queued = false,
  pushT = 0,
  syncCls = "",
  syncKey = "sync_device";
function setSync(cls, key) {
  syncCls = cls;
  syncKey = key;
  const c = $("#sync");
  c.className = "chip " + cls;
  c.lastElementChild.textContent = t(key);
}
async function initCloud() {
  if (activeEstateId) return;
  const localKey = stateStorageKey;
  if (!window.claude || typeof window.claude.use !== "function") return;
  let db = null;
  try {
    db = await window.claude.use("db");
  } catch (e) {}
  if (!db || activeEstateId || stateStorageKey !== localKey) return;
  try {
    docRef = db.doc("estate/main");
    const s = await docRef.get(),
      d = s.exists ? s.data() : null;
    if (activeEstateId || stateStorageKey !== localKey) {
      docRef = null;
      return;
    }
    if (d && d.json && (d.updatedAt || 0) > (state.updatedAt || 0)) {
      const inc = JSON.parse(d.json);
      if (inc && Array.isArray(inc.harvests)) {
        state = inc;
        norm();
        persist(false);
        render();
        toast(t("t_loaded"));
      }
    } else if (!state.sample && (!d || (d.updatedAt || 0) < state.updatedAt)) {
      pushCloud();
    }
    setSync("ok", "sync_ok");
  } catch (e) {
    docRef = null;
    setSync("", "sync_device");
  }
}
function pushCloud() {
  if (!docRef || state.sample || activeEstateId) return;
  clearTimeout(pushT);
  pushT = setTimeout(async function run() {
    if (activeEstateId) return;
    if (writing) {
      queued = true;
      return;
    }
    writing = true;
    setSync("busy", "sync_busy");
    try {
      await docRef.set({
        updatedAt: state.updatedAt,
        json: JSON.stringify(state),
      });
      setSync("ok", "sync_ok");
    } catch (e) {
      setSync("", "sync_fail");
    }
    writing = false;
    if (queued) {
      queued = false;
      run();
    }
  }, 700);
}

/* ---------- helpers ---------- */
const NF0 = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }),
  NF2 = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });
const N = (v) => NF0.format(Math.round(v));
const money = (v) => (v < 0 ? "−" : "") + esc(state.cur) + " " + N(Math.abs(v));
const price = (v) => esc(state.cur) + " " + NF2.format(Math.round(v * 100) / 100);
const short = (v) => {
  const a = Math.abs(v);
  return a >= 1e6
    ? (v / 1e6).toFixed(1) + "M"
    : a >= 1e4
      ? Math.round(v / 1e3) + "k"
      : a >= 1e3
        ? (v / 1e3).toFixed(1) + "k"
        : String(Math.round(v));
};
const pd = (s) => {
  const [a, b, c] = s.split("-").map(Number);
  return Date.UTC(a, b - 1, c);
};
const DAY = 864e5;
const iso = (ms) => new Date(ms).toISOString().slice(0, 10);
const fd = (s, y) => {
  const d = new Date(typeof s === "number" ? s : pd(s));
  return d.getUTCDate() + " " + MONS[lang][d.getUTCMonth()] + (y === false ? "" : " " + d.getUTCFullYear());
};
const incomeMonthLabel = (s) => {
  const m = String(s || "").match(/^(\d{4})-(\d{2})/);
  return m ? MONLS[lang][Number(m[2]) - 1] + " " + m[1] : fd(s);
};
const todayMs = () => {
  const d = new Date();
  return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
};
const sum = (a) => a.reduce((x, y) => x + y, 0),
  mean = (a) => (a.length ? sum(a) / a.length : 0);
const sd = (a) => {
  if (a.length < 2) return 0;
  const m = mean(a);
  return Math.sqrt(sum(a.map((x) => (x - m) * (x - m))) / (a.length - 1));
};
const ewma = (a, al) => a.reduce((s, x, i) => (i ? al * x + (1 - al) * s : x), 0);
const autoFree = (g) => (state.freePer > 0 ? Math.floor(g / state.freePer) : 0);
const freeRule = () => t("free_rule", N(state.freePer));
const shareLab = () => (state.shareName === "child" ? t("share_child") : t("share_custom", state.shareName));
const shareNameAt = (i) =>
  state.shareName === "child"
    ? i === 0
      ? t("daughter")
      : i === 1
        ? t("son")
        : t("share_child_n", i + 1)
    : t("share_custom_n", state.shareName, i + 1);
const catName = (k, h) => t("cat_" + k) + (k === "other" && h && h.otherNote ? ": " + h.otherNote : "");
/* Income = Loaded × price. Home use comes off the whole harvest first; what is left and not loaded is Rejected:
   rejected = harvested − home use − loaded. The buyer's free coconuts (1 per 100 loaded) are shown but do not reduce income.
   Transport cart = harvested × rate unless typed in. */
const blank = (v) => v == null || v === "";
const dedVal = (h, c) => (c === "transport" && blank(h.ded[c]) ? (+h.total || 0) * state.transRate : +h.ded[c] || 0);
const ROUNDING_KIND = "rounding";
const customDedEntries = (h) =>
  Array.isArray(h && h.customDeds)
    ? h.customDeds
        .map((d) => {
          const amount = Number(d && d.amount);
          const kind = d && d.kind === ROUNDING_KIND ? ROUNDING_KIND : "";
          return {
            name: kind
              ? t("round_adj")
              : String((d && d.name) || "")
                  .trim()
                  .slice(0, 60),
            amount: Number.isFinite(amount) ? Math.max(0, amount) : 0,
            ...(kind ? { kind } : {}),
          };
        })
        .filter((d) => d.name)
    : [];
const roundingDedAmount = (h) =>
  sum(
    customDedEntries(h)
      .filter((d) => d.kind === ROUNDING_KIND)
      .map((d) => d.amount),
  );
const customDedTotal = (h) => sum(customDedEntries(h).map((d) => d.amount));
const shareDedEntries = (h) =>
  Array.from({ length: Math.max(1, Math.round(state.shares) || 1) }, (_, i) => {
    const amount = Number(h && Array.isArray(h.shareDeds) ? h.shareDeds[i] : 0);
    return Number.isFinite(amount) ? Math.max(0, amount) : 0;
  });
const shareAddEntries = (h) =>
  Array.from({ length: Math.max(1, Math.round(state.shares) || 1) }, (_, i) => {
    const amount = Number(h && Array.isArray(h.shareAdds) ? h.shareAdds[i] : 0);
    return Number.isFinite(amount) ? Math.max(0, amount) : 0;
  });
function customDedSummary(hs) {
  const rows = new Map();
  hs.forEach((h) =>
    customDedEntries(h).forEach((d) => {
      const key = d.name.toLowerCase(),
        row = rows.get(key) || { name: d.name, amount: 0 };
      row.amount += d.amount;
      rows.set(key, row);
    }),
  );
  return Array.from(rows.values()).filter((d) => d.amount > 0);
}
function calc() {
  const hs = state.harvests.slice().sort((a, b) => pd(a.date) - pd(b.date));
  return hs.map((h, i) => {
    const home = +h.home || 0,
      loadedSet = blank(h.loaded) ? null : +h.loaded || 0,
      loaded = loadedSet == null ? Math.max(0, h.total - home - (+h.rejected || 0)) : loadedSet,
      rejected = Math.max(0, h.total - home - loaded),
      taken = loaded,
      freeSet = blank(h.free) ? null : +h.free || 0,
      free = Math.min(loaded, freeSet == null ? autoFree(loaded) : freeSet),
      paid = loaded,
      inc = paid * h.price,
      dv = {};
    CATS.forEach((c) => (dv[c] = dedVal(h, c)));
    const customDeds = customDedEntries(h),
      shareDeds = shareDedEntries(h),
      shareAdds = shareAddEntries(h),
      payments = Array.isArray(h.payments) ? h.payments : [],
      received = sum(
        payments.map((payment) => {
          const amount = Number(payment && payment.amount);
          return Number.isFinite(amount) && amount > 0 ? amount : 0;
        }),
      ),
      ded = sum(CATS.map((c) => dv[c])) + sum(customDeds.map((d) => d.amount)),
      net = inc - ded,
      rest = 0;
    return Object.assign({}, h, {
      rejected,
      home,
      loaded,
      loadedSet,
      taken,
      free,
      freeSet,
      paid,
      rest,
      dv,
      customDeds,
      shareDeds,
      shareAdds,
      payments,
      inc,
      received,
      due: Math.max(0, inc - received),
      credit: Math.max(0, received - inc),
      dedT: ded,
      net,
      share: net / state.shares,
      shareNet: shareDeds.map((d, j) => net / state.shares - d + shareAdds[j]),
      gap: i ? Math.round((pd(h.date) - pd(hs[i - 1].date)) / DAY) : null,
    });
  });
}
function monthly(hs, incomes) {
  const m = new Map();
  const bucket = (key) => {
    if (!m.has(key)) m.set(key, { list: [], incomes: [] });
    return m.get(key);
  };
  hs.forEach((h) => {
    bucket(h.date.slice(0, 7)).list.push(h);
  });
  (incomes || state.otherIncome).forEach((income) => {
    bucket(income.date.slice(0, 7)).incomes.push(income);
  });
  return Array.from(m, ([k, group]) => {
    const l = group.list,
      extra = group.incomes,
      paid = sum(l.map((h) => h.paid)),
      received = sum(l.map((h) => h.received || 0)),
      due = sum(l.map((h) => h.due || 0)),
      credit = sum(l.map((h) => h.credit || 0)),
      harvestInc = sum(l.map((h) => h.inc)),
      inc = harvestInc + sum(extra.map((income) => income.amount)),
      ded = sum(l.map((h) => h.dedT)),
      net = inc - ded;
    const shareDeds = Array.from({ length: state.shares }, (_, i) => sum(l.map((h) => (h.shareDeds || [])[i] || 0))),
      shareAdds = Array.from({ length: state.shares }, (_, i) => sum(l.map((h) => (h.shareAdds || [])[i] || 0)));
    return {
      key: k,
      label: MONLS[lang][+k.slice(5) - 1] + " " + k.slice(0, 4),
      list: l,
      incomes: extra,
      total: sum(l.map((h) => h.total)),
      loaded: sum(l.map((h) => h.loaded)),
      paid,
      received,
      due,
      credit,
      free: sum(l.map((h) => h.free)),
      rej: sum(l.map((h) => h.rejected)),
      home: sum(l.map((h) => h.home)),
      inc,
      ded,
      net,
      share: net / state.shares,
      shareDeds,
      shareAdds,
      shareNet: shareDeds.map((d, i) => net / state.shares - d + shareAdds[i]),
      price: paid ? harvestInc / paid : 0,
    };
  }).sort((a, b) => a.key.localeCompare(b.key));
}

/* ---------- forecast models ----------
   Three small models: coconuts per day, price, and days between harvests.
   Each one is chosen by testing it on YOUR past harvests ("backtest"): pretend it is the day of an old
   harvest, predict it using only the records before it, and measure the error. The setting with the
   smallest average error wins, unless a simpler setting is within one standard error of it. This keeps
   the model from copying noise (overfitting) or ignoring real patterns (underfitting).
   Public knowledge is a starting point only, used when it predicts your own past harvests better:
   - Sri Lanka's national coconut output is usually highest around March to June and lowest around
     September to December (Central Bank of Sri Lanka bulletins, 2022 to 2024 monthly figures).
   - When supply is low, prices usually rise. */
const SEASON = { amp: 0.1, peak: 4.5 }; // national pattern: ±10%, peak in mid April
const monthPos = (ms) => {
  const d = new Date(ms);
  return d.getUTCMonth() + 1 + (d.getUTCDate() - 1) / 31;
};
const seasonF = (ms, amp) => 1 + amp * Math.cos((2 * Math.PI * (monthPos(ms) - SEASON.peak)) / 12);
const priceSeasonF = (ms, amp) => 1 - 0.5 * (seasonF(ms, amp) - 1); // less supply, higher price
const quant = (a, q) => {
  if (!a.length) return 0;
  const s = a.slice().sort((x, y) => x - y),
    i = (s.length - 1) * q,
    lo = Math.floor(i);
  return s[lo] + (s[Math.min(lo + 1, s.length - 1)] - s[lo]) * (i - lo);
};
const median = (a) => quant(a, 0.5);
/* Pick a config by its backtest error. Configs are listed from simplest to most complex. Following the
   "one standard error" rule, the simplest config whose error is within one standard error of the best
   wins: a more complex model has to be clearly better, not just luckier on a few harvests. */
function pickBest(configs, score) {
  const rs = configs.map((c) => ({ c, r: score(c) })).filter((x) => isFinite(x.r.mape));
  if (!rs.length) return null;
  const best = rs.reduce((a, b) => (b.r.mape < a.r.mape ? b : a)),
    ae = best.r.errs.map(Math.abs),
    se = ae.length > 1 ? sd(ae) / Math.sqrt(ae.length) : 0;
  return rs.find((x) => x.r.mape <= best.r.mape + se);
}
/* Relative errors (actual / predicted - 1) give the "likely" range; never narrower than ±floor. */
function bands(errs, floor) {
  if (errs.length >= 5)
    return {
      lo: Math.min(-floor, quant(errs, 0.1)),
      hi: Math.max(floor, quant(errs, 0.9)),
    };
  const s = Math.max(floor, errs.length ? Math.sqrt(mean(errs.map((e) => e * e))) * 1.3 : floor * 1.5);
  return { lo: -s, hi: s };
}

function intervalSeasonF(fromMs, toMs, amp) {
  const days = Math.max(1, Math.ceil((toMs - fromMs) / DAY)),
    stride = Math.max(1, Math.ceil(days / 400));
  let total = 0;
  for (let offset = 0; offset < days; offset += stride) {
    const span = Math.min(stride, days - offset);
    total += seasonF(fromMs + (offset + span / 2) * DAY, amp) * span;
  }
  return total / days;
}
function robustLevel(samples, targetMs, halfLifeDays) {
  const weighted = samples
    .map((sample) => ({
      value: sample.value,
      weight: Math.pow(0.5, Math.max(0, targetMs - sample.end) / DAY / halfLifeDays) * (sample.support || 1),
    }))
    .filter((sample) => Number.isFinite(sample.value) && sample.weight > 0);
  if (!weighted.length) return 0;
  const weightedMedian = (rows) => {
    const sorted = rows.slice().sort((a, b) => a.value - b.value),
      halfway = sum(sorted.map((row) => row.weight)) / 2;
    let seen = 0;
    for (const row of sorted) {
      seen += row.weight;
      if (seen >= halfway) return row.value;
    }
    return sorted[sorted.length - 1].value;
  };
  const center = weightedMedian(weighted),
    deviations = weighted.map((row) => ({ value: Math.abs(row.value - center), weight: row.weight })),
    mad = weightedMedian(deviations),
    radius = mad > 0 ? 3 * 1.4826 * mad : Math.max(1, Math.abs(center) * 1.5),
    totalWeight = sum(weighted.map((row) => row.weight));
  return (
    sum(weighted.map((row) => Math.min(center + radius, Math.max(0, center - radius, row.value)) * row.weight)) /
    totalWeight
  );
}

/* Yield is an interval total, so missing harvest records must not become zero-yield months. */
function yieldModel(hs) {
  const pts = [];
  for (let i = 1; i < hs.length; i++) {
    const end = pd(hs[i].date),
      days = hs[i].gap;
    if (days > 0) pts.push({ total: hs[i].total, days, start: end - days * DAY, end });
  }
  const levelAt = (c, upto, targetMs) =>
    robustLevel(
      pts.slice(0, upto).map((point) => ({
        value: point.total / (point.days * intervalSeasonF(point.start, point.end, c.amp)),
        end: point.end,
        support: Math.sqrt(Math.min(point.days, 90) / 30),
      })),
      targetMs,
      c.halfLifeDays,
    );
  const configs = [];
  [0, SEASON.amp / 2, SEASON.amp].forEach((amp) =>
    [365, 180, 90].forEach((halfLifeDays) => configs.push({ amp, halfLifeDays })),
  );
  const score = (c) => {
    const errs = [];
    for (let i = 3; i < pts.length; i++) {
      const target = pts[i],
        prediction = levelAt(c, i, target.start) * target.days * intervalSeasonF(target.start, target.end, c.amp);
      if (prediction > 0) errs.push(target.total / prediction - 1);
    }
    return {
      errs,
      mape: errs.length >= 3 ? mean(errs.map(Math.abs)) : Infinity,
    };
  };
  const best = pickBest(configs, score) || {
    c: { amp: 0, halfLifeDays: 180 },
    r: { errs: [], mape: NaN },
  };
  return {
    c: best.c,
    tested: best.r.errs.length,
    mape: best.r.mape,
    band: bands(best.r.errs, 0.08),
    at: (fromMs, toMs) =>
      levelAt(best.c, pts.length, fromMs) *
      Math.max(0, (toMs - fromMs) / DAY) *
      intervalSeasonF(fromMs, toMs, best.c.amp),
  };
}

/* Price forecasts use elapsed calendar time, not the number of records entered. */
function priceModel(hs) {
  const ps = hs.map((h) => ({ p: h.price, ms: pd(h.date) })),
    periodsBetween = (from, to) => Math.max(0.1, (to - from) / (30 * DAY));
  const fit = (c, upto) => {
    const xs = ps.slice(0, upto).map((x) => x.p / priceSeasonF(x.ms, c.amp));
    if (c.kind === "naive") return { L: xs[xs.length - 1], T: 0 };
    if (c.kind === "level")
      return {
        L: robustLevel(
          xs.map((value, i) => ({ value, end: ps[i].ms })),
          ps[upto - 1].ms,
          c.halfLifeDays,
        ),
        T: 0,
      };
    let L = xs[0],
      T = xs.length > 1 ? (xs[1] - xs[0]) / periodsBetween(ps[0].ms, ps[1].ms) : 0;
    for (let i = 1; i < xs.length; i++) {
      const periods = periodsBetween(ps[i - 1].ms, ps[i].ms),
        f = L + T * periods,
        L2 = c.a * xs[i] + (1 - c.a) * f;
      T = c.b * ((L2 - L) / periods) + (1 - c.b) * Math.pow(c.phi, periods) * T;
      L = L2;
    }
    return { L, T };
  };
  const ahead = (c, m, steps) => {
    if (c.kind !== "trend" || steps <= 0) return m.L;
    const damp = (c.phi * (1 - Math.pow(c.phi, steps))) / (1 - c.phi);
    return m.L + m.T * damp;
  };
  const configs = [
    { kind: "naive", amp: 0 },
    { kind: "level", halfLifeDays: 730, amp: 0 },
    { kind: "level", halfLifeDays: 270, amp: 0 },
    { kind: "level", halfLifeDays: 90, amp: 0 },
    { kind: "trend", a: 0.5, b: 0.3, phi: 0.85, amp: 0 },
    { kind: "trend", a: 0.5, b: 0.3, phi: 0.85, amp: SEASON.amp },
  ];
  const score = (c) => {
    const errs = [];
    for (let i = 3; i < ps.length; i++) {
      const m = fit(c, i),
        steps = periodsBetween(ps[i - 1].ms, ps[i].ms),
        prediction = ahead(c, m, steps) * priceSeasonF(ps[i].ms, c.amp);
      if (prediction > 0) errs.push(ps[i].p / prediction - 1);
    }
    return {
      errs,
      mape: errs.length >= 3 ? mean(errs.map(Math.abs)) : Infinity,
    };
  };
  const best = pickBest(configs, score) || {
    c: { kind: "level", halfLifeDays: 270, amp: 0 },
    r: { errs: [], mape: NaN },
  };
  const m = fit(best.c, ps.length),
    lastMs = ps[ps.length - 1].ms,
    band = bands(best.r.errs, 0.04);
  return {
    c: best.c,
    tested: best.r.errs.length,
    mape: best.r.mape,
    at: (ms) => {
      const steps = Math.max(0, (ms - lastMs) / (30 * DAY)),
        p = Math.max(0, ahead(best.c, m, steps) * priceSeasonF(ms, best.c.amp)),
        w = Math.sqrt(Math.max(1, steps));
      return {
        p,
        lo: Math.max(0, p * (1 + band.lo * w)),
        hi: p * (1 + band.hi * w),
      };
    },
  };
}

/* Days between harvests: the middle value of recent gaps, or a smoothed value. */
function gapModel(hs) {
  const gs = hs
    .slice(1)
    .map((h) => h.gap)
    .filter((g) => g > 0);
  const configs = [
    { kind: "median", k: 6 },
    { kind: "ewma", a: 0.35 },
    { kind: "ewma", a: 0.6 },
  ];
  const pred = (c, xs) => (c.kind === "median" ? median(xs.slice(-c.k)) : ewma(xs, c.a));
  const score = (c) => {
    const errs = [];
    for (let i = 2; i < gs.length; i++) errs.push(gs[i] / pred(c, gs.slice(0, i)) - 1);
    return {
      errs,
      mape: errs.length >= 3 ? mean(errs.map(Math.abs)) : Infinity,
    };
  };
  const best = pickBest(configs, score) || {
    c: configs[0],
    r: { errs: [], mape: NaN },
  };
  const recent = gs.slice(-8);
  return {
    c: best.c,
    tested: best.r.errs.length,
    mape: best.r.mape,
    gap: Math.max(1, Math.round(pred(best.c, gs))),
    lo: Math.round(quant(recent, 0.2)),
    hi: Math.round(quant(recent, 0.8)),
    min: Math.min.apply(0, gs),
    max: Math.max.apply(0, gs),
  };
}

function forecast(hs) {
  const n = hs.length;
  if (n < 3 || hs.slice(1).filter((h) => h.gap > 0).length < 2) return null;
  const G = gapModel(hs),
    Y = yieldModel(hs),
    P = priceModel(hs);
  const loadRate = ewma(
      hs.slice(-6).map((h) => (h.total ? h.loaded / h.total : 0)),
      0.4,
    ),
    dedT =
      sum(CATS.map((c) => mean(hs.slice(-6).map((h) => h.dv[c])))) + mean(hs.slice(-6).map((h) => customDedTotal(h))),
    shareDedT = Array.from({ length: state.shares }, (_, i) =>
      mean(hs.slice(-6).map((h) => (h.shareDeds || [])[i] || 0)),
    ),
    shareAddT = Array.from({ length: state.shares }, (_, i) =>
      mean(hs.slice(-6).map((h) => (h.shareAdds || [])[i] || 0)),
    ),
    transNow = mean(hs.slice(-6).map((h) => h.dv.transport)),
    last = pd(hs[n - 1].date);
  const step = (from, to, k) => {
    const nuts = Y.at(from, to),
      pr = P.at(to),
      w = Math.sqrt(k),
      loaded = nuts * loadRate,
      ded = dedT - transNow + nuts * state.transRate,
      net = loaded * pr.p - ded;
    return {
      k,
      date: to,
      nuts,
      nutsLo: Math.max(0, nuts * (1 + Y.band.lo * w)),
      nutsHi: nuts * (1 + Y.band.hi * w),
      loaded,
      paid: loaded,
      price: pr.p,
      pLo: pr.lo,
      pHi: pr.hi,
      inc: loaded * pr.p,
      dedT: ded,
      net,
      share: net / state.shares,
      shareDeds: shareDedT,
      shareAdds: shareAddT,
      shareNet: shareDedT.map((d, i) => net / state.shares - d + shareAddT[i]),
    };
  };
  const now = todayMs(),
    gapMs = G.gap * DAY,
    elapsedGaps = Math.max(0, Math.floor((now - last) / gapMs)),
    steps = [];
  for (let k = elapsedGaps + 1, from = last + elapsedGaps * gapMs; k <= elapsedGaps + 3; k++, from += gapMs)
    steps.push(step(from, from + gapMs, k));
  /* the next 12 months from today */
  const yearEnd = now + 365 * DAY,
    year = [];
  for (
    let offset = 0, from = last + elapsedGaps * gapMs;
    from + gapMs <= yearEnd && offset < 60;
    offset++, from += gapMs
  )
    year.push(step(from, from + gapMs, Math.min(elapsedGaps + offset + 1, 6)));
  /* next calendar month */
  const d = new Date(),
    nmStart = Date.UTC(d.getFullYear(), d.getMonth() + 1, 1),
    nmEnd = Date.UTC(d.getFullYear(), d.getMonth() + 2, 1),
    nmPrice = P.at((nmStart + nmEnd) / 2),
    nmHarv = year.filter((x) => x.date >= nmStart && x.date < nmEnd);
  const tested = Math.min(Y.tested, P.tested, G.tested);
  const errs = [P.mape, Y.mape, G.mape].filter(isFinite);
  const worst = errs.length ? Math.max.apply(0, errs) : 1;
  const conf = tested < 3 ? 1 : worst < 0.06 ? 3 : worst < 0.12 ? 2 : 1;
  const gaps = hs
      .slice(1)
      .map((h) => h.gap)
      .filter((gap) => gap > 0),
    typicalGap = median(gaps),
    longGap = gaps.some((gap) => gap > typicalGap * 1.8);
  return {
    n,
    gap: G.gap,
    gapLo: G.lo,
    gapHi: G.hi,
    G,
    Y,
    P,
    rate: Y.at(last, last + DAY),
    paidRate: loadRate,
    steps,
    year,
    nm: { start: nmStart, price: nmPrice, harvests: nmHarv },
    conf,
    tested,
    longGap,
  };
}

/* ---------- charts ---------- */
function niceStep(raw) {
  const p = Math.pow(10, Math.floor(Math.log10(raw || 1))),
    m = raw / p;
  return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 2.5 ? 2.5 : m <= 5 ? 5 : 10) * p;
}
const tips = new Map();
const widthOf = new Map();
function frame(el, h, w) {
  const W = w || Math.max(280, widthOf.get(el) || el.clientWidth || 600);
  return { W, H: h || 220, L: 42, R: 10, T: 12, B: 26 };
}
function xLabels(f, labels, cx) {
  const every = Math.ceil((labels.length * (lang === "si" ? 54 : 44)) / (f.W - f.L - f.R));
  return labels
    .map((l, i) =>
      (labels.length - 1 - i) % every ? "" : `<text x="${cx(i)}" y="${f.H - 8}" text-anchor="middle">${esc(l)}</text>`,
    )
    .join("");
}
function barChart(el, data, opt) {
  if (!el) return;
  opt = opt || {};
  const f = frame(el, opt.h, opt.w),
    n = data.length,
    pw = f.W - f.L - f.R,
    ph = f.H - f.T - f.B,
    band = pw / n,
    bw = Math.max(6, Math.min(30, band * 0.6));
  const tops = data.map((d) => sum(d.segs.filter((s) => s.v > 0).map((s) => s.v))),
    bots = data.map((d) => sum(d.segs.filter((s) => s.v < 0).map((s) => s.v)));
  const mx = Math.max.apply(0, tops.concat(1)),
    mn = Math.min.apply(0, bots.concat(0)),
    st = niceStep((mx - mn) / 4),
    hi = Math.ceil(mx / st) * st,
    lo = Math.floor(mn / st) * st;
  const y = (v) => f.T + ph * (1 - (v - lo) / (hi - lo)),
    cx = (i) => f.L + band * (i + 0.5);
  let g = "";
  for (let v = lo; v <= hi + 1e-9; v += st)
    g += `<line class="${Math.abs(v) < 1e-9 ? "base" : "gridl"}" x1="${f.L}" x2="${f.W - f.R}" y1="${y(v)}" y2="${y(v)}"/><text x="${f.L - 6}" y="${y(v) + 4}" text-anchor="end">${short(v)}</text>`;
  let bars = "",
    hits = "";
  data.forEach((d, i) => {
    let up = 0,
      dn = 0;
    const x = cx(i) - bw / 2,
      last = d.segs.filter((s) => s.v > 0).length;
    let c = 0;
    d.segs.forEach((s) => {
      if (!s.v) return;
      const dl = `style="animation-delay:${i * 35}ms"`;
      if (s.v > 0) {
        c++;
        const y1 = y(up + s.v),
          hh = Math.max(1.5, y(up) - y1 - (c > 1 ? 2 : 0)),
          r = c === last ? Math.min(4, bw / 2, hh) : 0;
        bars += `<path class="grow ${s.cls}" ${dl} d="M${x},${y1 + hh}V${y1 + r}q0,${-r} ${r},${-r}h${bw - 2 * r}q${r},0 ${r},${r}V${y1 + hh}z"/>`;
        up += s.v;
      } else {
        const y0 = y(dn),
          hh = Math.max(1, y(dn + s.v) - y0),
          r = Math.min(4, bw / 2, hh);
        bars += `<path class="grow down ${s.cls}" ${dl} d="M${x},${y0}V${y0 + hh - r}q0,${r} ${r},${r}h${bw - 2 * r}q${r},0 ${r},${-r}V${y0}z"/>`;
        dn += s.v;
      }
    });
    hits += `<rect class="hit" data-i="${i}" x="${f.L + band * i}" y="${f.T}" width="${band}" height="${ph}" rx="6"/>`;
  });
  el.innerHTML = `<svg viewBox="0 0 ${f.W} ${f.H}" role="img" aria-label="${esc(opt.label || "")}">${g}${bars}${xLabels(
    f,
    data.map((d) => d.label),
    cx,
  )}${hits}</svg>`;
  tips.set(
    el,
    data.map((d) => d.tip),
  );
}
function lineChart(el, pts, fc, opt) {
  if (!el) return;
  opt = opt || {};
  fc = fc || [];
  const f = frame(el, opt.h, opt.w),
    all = pts.concat(fc),
    n = all.length,
    pw = f.W - f.L - f.R,
    ph = f.H - f.T - f.B;
  const vals = pts
      .map((p) => p.v)
      .concat(
        fc.map((p) => p.lo),
        fc.map((p) => p.hi),
      ),
    mn = Math.min.apply(0, vals),
    mx = Math.max.apply(0, vals);
  const st = niceStep((mx - mn || mx || 1) / 3),
    lo = Math.max(0, Math.floor((mn - st * 0.2) / st) * st),
    hi = Math.ceil((mx + st * 0.1) / st) * st || 1;
  const cx = (i) => (n > 1 ? f.L + 10 + ((pw - 20) * i) / (n - 1) : f.L + pw / 2),
    y = (v) => f.T + ph * (1 - (v - lo) / (hi - lo));
  let g = "";
  for (let v = lo; v <= hi + 1e-9; v += st)
    g += `<line class="gridl" x1="${f.L}" x2="${f.W - f.R}" y1="${y(v)}" y2="${y(v)}"/><text x="${f.L - 6}" y="${y(v) + 4}" text-anchor="end">${short(v)}</text>`;
  const P = pts.map((p, i) => `${cx(i)},${y(p.v)}`),
    m = pts.length;
  let s = "";
  if (m) {
    s += `<defs><linearGradient id="ar" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="var(--c1)" stop-opacity=".3"/><stop offset="1" stop-color="var(--c1)" stop-opacity="0"/></linearGradient></defs>`;
    s += `<path class="area" d="M${P.join("L")}L${cx(m - 1)},${y(lo)}L${cx(0)},${y(lo)}z"/><path class="ln" pathLength="1" d="M${P.join("L")}"/>`;
  }
  if (fc.length && m) {
    const a = [`${cx(m - 1)},${y(pts[m - 1].v)}`],
      u = a.slice(),
      d = a.slice();
    fc.forEach((p, j) => {
      a.push(`${cx(m + j)},${y(p.v)}`);
      u.push(`${cx(m + j)},${y(p.hi)}`);
      d.push(`${cx(m + j)},${y(p.lo)}`);
    });
    s += `<path class="band" d="M${u.join("L")}L${d.reverse().join("L")}z"/><path class="fc" d="M${a.join("L")}"/>`;
  }
  all.forEach((p, i) => {
    s += `<circle class="dot${i >= m ? " f" : ""}" cx="${cx(i)}" cy="${y(p.v)}" r="${i === m - 1 ? 5 : 3.5}"/>`;
  });
  const bw = n > 1 ? (pw - 20) / (n - 1) : pw;
  let hits = "";
  all.forEach((p, i) => {
    hits += `<rect class="hit" data-i="${i}" x="${cx(i) - bw / 2}" y="${f.T}" width="${bw}" height="${ph}" rx="6"/>`;
  });
  el.innerHTML = `<svg viewBox="0 0 ${f.W} ${f.H}" role="img" aria-label="${esc(opt.label || "")}">${g}${s}${xLabels(
    f,
    all.map((p) => p.label),
    cx,
  )}${hits}</svg>`;
  tips.set(
    el,
    all.map((p) => p.tip),
  );
}
function spark(el, vals) {
  if (!el || vals.length < 2) {
    if (el) el.innerHTML = "";
    return;
  }
  const W = widthOf.get(el) || el.clientWidth || 300,
    H = 56,
    mn = Math.min.apply(0, vals),
    mx = Math.max.apply(0, vals),
    sp = mx - mn || 1;
  const pt = vals.map((v, i) => [6 + ((W - 12) * i) / (vals.length - 1), 6 + (H - 12) * (1 - (v - mn) / sp)]),
    e = pt[pt.length - 1];
  el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t("price_chart_h"))}"><polyline class="sp" pathLength="1" points="${pt.map((p) => p.join(",")).join(" ")}"/><circle cx="${e[0]}" cy="${e[1]}" r="5"/></svg>`;
}
const tipEl = $("#tip");
function tipMove(e) {
  const r = e.target.closest && e.target.closest(".hit");
  if (!r) {
    tipEl.classList.remove("on");
    return;
  }
  const arr = tips.get(r.closest(".chart"));
  if (!arr) return;
  tipEl.innerHTML = arr[+r.dataset.i] || "";
  tipEl.classList.add("on");
  const w = tipEl.offsetWidth,
    h = tipEl.offsetHeight;
  let x = e.clientX + 14,
    y = e.clientY - h - 12;
  if (x + w > innerWidth - 8) x = e.clientX - w - 14;
  if (x < 8) x = 8;
  if (y < 8) y = e.clientY + 16;
  tipEl.style.left = x + "px";
  tipEl.style.top = y + "px";
}
document.addEventListener("pointermove", tipMove);
document.addEventListener("pointerdown", tipMove);
document.addEventListener("scroll", () => tipEl.classList.remove("on"), true);

/* ---------- updates (inside the Android app only) ---------- */
const UPD = !!(NB && typeof NB.getShellInfo === "function");
let SH = {},
  UST = null;
function readShell() {
  if (!UPD) return;
  try {
    SH = JSON.parse(NB.getShellInfo() || "{}");
  } catch (e) {
    SH = {};
  }
  try {
    UST = SH.lastStatus ? JSON.parse(SH.lastStatus) : null;
  } catch (e) {
    UST = null;
  }
}
function syncNativeReminders() {
  if (!NB || typeof NB.scheduleReminders !== "function") return;
  const fc = state.sample ? null : forecast(calc()),
    date = fc ? iso(fc.steps[0].date) : "";
  NB.scheduleReminders(
    date,
    t("harvest_reminder_title"),
    t("harvest_reminder_two_days", date ? fd(date) : ""),
    t("harvest_reminder_title"),
    t("harvest_reminder_one_day", date ? fd(date) : ""),
    t("backup_reminder_title"),
    t("backup_reminder_body"),
  );
}
window.onNotificationPermission = (enabled) => {
  readShell();
  if (route === "data") render();
  toast(t(enabled ? "reminders_enabled" : "reminders_disabled"));
};
const fdt = (ms) => {
  const d = new Date(ms);
  return (
    fd(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())) +
    " " +
    String(d.getHours()).padStart(2, "0") +
    ":" +
    String(d.getMinutes()).padStart(2, "0")
  );
};
const apkBanner = () =>
  UPD && SH.apkName
    ? `<div class="banner"><p>${t("upd_banner", esc(SH.apkName))}</p><button class="btn small primary" data-upd="install">${t("upd_install")}</button></div>`
    : "";
function updStatusHtml() {
  const s = UST || {},
    busy = s.state === "downloading" || s.state === "opened",
    bt = (k, l, pr) => ` <button class="btn small${pr ? " primary" : ""}" data-upd="${k}">${t(l)}</button>`,
    out = [];
  if (!SH.updateUrl) out.push(t("upd_none"));
  else if (s.state === "checking") out.push(t("upd_checking"));
  else if (s.state === "downloading") out.push(t("upd_dl"));
  else if (s.state === "opened") out.push(t("upd_opened"));
  else if (s.state === "error")
    out.push(
      t(
        {
          nolink: "upd_none",
          net: "upd_err_net",
          sig: "upd_err_sig",
          file: "upd_err_file",
        }[s.code] || "upd_err_bad",
      ),
    );
  else if (!SH.pendingPage && !SH.apkName && SH.lastCheck) out.push(t("upd_ok", fdt(SH.lastCheck)));
  if (SH.pendingPage) out.push(t("upd_ready", esc(SH.pendingPage)) + bt("restart", "upd_restart"));
  if (SH.apkName && !busy) out.push(t("upd_apk", esc(SH.apkName)) + bt("install", "upd_install", 1));
  return out.join("<br>");
}
/* Seven taps on the version line reveal update controls and the estate sync connection editor. */
let devTaps = 0,
  devOpen = false;
const devTools = () =>
  devOpen
    ? `<div class="devtools"><label class="fld">${t("upd_link")}<input id="u-link" type="url" inputmode="url" autocomplete="off" spellcheck="false" value="${esc(SH.updateUrl || "")}" placeholder="https://raw.githubusercontent.com/…/update.json"></label>
    <div class="btnrow" style="margin-top:10px"><button class="btn" data-upd="save">${t("upd_save")}</button><button class="btn primary" data-upd="check">${t("upd_check")}</button></div>
    ${ESTATE_SYNC ? `<h3>${t("dev_sync_settings")}</h3><p class="hint">${t("sync_connection_public")}</p>
    <label class="fld">${t("supabase_url")}<input id="devSyncUrl" type="url" autocomplete="off" value="${esc(ESTATE_SYNC.getConfig().url)}"></label>
    <label class="fld">${t("supabase_key")}<input id="devSyncKey" type="text" autocomplete="off" spellcheck="false" value="${esc(ESTATE_SYNC.getConfig().anonKey)}"></label>
    <div class="btnrow" style="margin-top:10px"><button class="btn primary" data-dev-sync="save">${t("sync_save_config")}</button><button class="btn" data-dev-sync="reset">${t("sync_reset_config")}</button></div>` : ""}</div>`
    : "";
const updCard = () =>
  UPD
    ? `<div class="card" id="updCard"><h2>${t("upd_h")}</h2><p class="hint">${t("upd_hint")}</p>
    <p class="num upd-ver" data-devtap style="margin:0;font-weight:600">${t("upd_cur", VER, esc(SH.versionName || ""))}</p>
    <p class="updst" id="updSt" aria-live="polite">${updStatusHtml()}</p>${devTools()}</div>`
    : "";
window.onUpdateStatus = (j) => {
  let st;
  try {
    st = JSON.parse(j);
  } catch (e) {
    return;
  }
  readShell();
  UST = st;
  const el = $("#updSt");
  if (el) el.innerHTML = updStatusHtml();
  if (!st.manual && st.state === "apk" && route !== "data") render();
};

/* ---------- views ---------- */
const ROUTES = ["overview", "months", "insights", "forecast", "data"];
let route = "overview",
  range = "all",
  buyerQuery = "",
  forecastScenario = { date: "", nuts: "", price: "" },
  drawFns = [];
const kpi = (lab, val, foot) =>
  `<div class="card kpi"><div class="lab">${lab}</div><div class="val num">${val}</div>${foot ? `<div class="foot">${foot}</div>` : ""}</div>`;
const cnt = (v, pre) => `${pre ? `<small>${esc(pre)}</small>` : ""}<span data-count="${v}">${N(v)}</span>`;
function delta(a, b) {
  if (!b) return "";
  const p = ((a - b) / b) * 100;
  if (Math.abs(p) < 0.05) return `<span class="delta">${t("no_change")}</span>`;
  return `<span class="delta ${p > 0 ? "up" : "down"}">${p > 0 ? "▲" : "▼"} ${Math.abs(p).toFixed(1)}%</span>`;
}
const banner = () =>
  apkBanner() +
  (state.sample
    ? `<div class="banner"><p><b>${t("sample_b")}</b> ${t("sample_p")}</p><button class="btn small" data-clear>${t("sample_btn")}</button></div>`
    : "");
const emptyState = () =>
  `<div class="card empty"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="16" cy="18" r="10"/><path d="M16 8c0-3 2-5 5-5M16 8c0-2-2-4-5-4"/></svg><h2>${t("empty_h")}</h2><p>${t("empty_p")}</p><button class="btn primary" data-add>${t("add_harvest")}</button><button class="btn" data-add-income>${t("add_income")}</button></div>`;
const LEG = () =>
  `<div class="legend"><span><i class="k1"></i>${t("loaded")}</span><span><i class="k3"></i>${t("rejected")}</span><span><i class="k4"></i>${t("home")}</span></div>`;
function flowRows(h) {
  const rows = CATS.map((c) => [catName(c, h), h.dv[c]])
      .concat(customDedEntries(h).map((d) => [d.name, d.amount]))
      .filter((r) => r[1] > 0)
      .sort((a, b) => b[1] - a[1]),
    base = Math.max(h.inc, h.dedT, 1);
  return (
    `<div class="flow"><div class="row in"><span>${t("income_row", N(h.paid), price(h.price))}</span><div class="bar"><i style="width:${(h.inc / base) * 100}%"></i></div><span class="v num">${money(h.inc)}</span></div>` +
    rows
      .map(
        (r, i) =>
          `<div class="row"><span>${esc(r[0])}</span><div class="bar"><i style="width:${(r[1] / base) * 100}%;animation-delay:${i * 50}ms"></i></div><span class="v num">− ${N(r[1])}<span class="pct">${h.inc ? Math.round((r[1] / h.inc) * 100) : 0}%</span></span></div>`,
      )
      .join("") +
    `<div class="row net"><span>${t("balance")}</span><div class="bar"><i style="width:${(Math.max(0, h.net) / base) * 100}%"></i></div><span class="v num ${h.net < 0 ? "neg-t" : ""}">${money(h.net)}</span></div>` +
    (state.shares > 1 || h.shareDeds.some((d) => d > 0) || h.shareAdds.some((a) => a > 0)
      ? `<div class="row share"><span>${esc(shareLab())} (÷ ${state.shares})</span><div class="bar"><i style="width:${(Math.max(0, h.share) / base) * 100}%"></i></div><span class="v num ${h.net < 0 ? "neg-t" : ""}">${money(h.share)}</span></div>${h.shareDeds
          .map((d, i) => {
            const add = h.shareAdds[i] || 0;
            return d > 0 || add > 0
              ? `<div class="row share"><span>${esc(t("share_result", esc(shareNameAt(i)), money(h.share), money(d), money(add), money(h.shareNet[i])))}</span><div class="bar"></div><span class="v num">${money(h.shareNet[i])}</span></div>`
              : "";
          })
          .join("")}`
      : "") +
    `</div>`
  );
}
function nutsData(hs) {
  return hs.map((h) => ({
    label: fd(h.date, false),
    segs: [
      { v: h.loaded, cls: "s1" },
      { v: h.rejected, cls: "s3" },
      { v: h.home, cls: "s4" },
    ],
    tip: `<b>${fd(h.date)}</b>${t("harvested")} ${N(h.total)}<br>${t("loaded")} ${N(h.loaded)}<br>${t("rejected")} ${N(h.rejected)}<br>${t("home")} ${N(h.home)}<br>${t("free")} ${N(h.free)}`,
  }));
}
function priceData(hs) {
  return hs.map((h) => ({
    label: fd(h.date, false),
    v: h.price,
    tip: `<b>${fd(h.date)}</b>${price(h.price)} ${t("per_coconut")}`,
  }));
}

function vOverview(hs) {
  if (!hs.length) return banner() + emptyState();
  const last = hs[hs.length - 1],
    prev = hs[hs.length - 2],
    cut = pd(last.date) - 365 * DAY,
    yr = hs.filter((h) => pd(h.date) > cut),
    extraIncome = state.otherIncome.filter((income) => pd(income.date) > cut),
    harvestInc = sum(yr.map((h) => h.inc)),
    fc = forecast(hs);
  const tot = sum(yr.map((h) => h.total)),
    paid = sum(yr.map((h) => h.paid)),
    inc = harvestInc + sum(extraIncome.map((income) => income.amount)),
    net = sum(yr.map((h) => h.net)) + sum(extraIncome.map((income) => income.amount)),
    shareNets = Array.from(
      { length: state.shares },
      (_, i) =>
        sum(yr.map((h) => h.net / state.shares - ((h.shareDeds || [])[i] || 0) + ((h.shareAdds || [])[i] || 0))) +
        sum(extraIncome.map((income) => income.amount)) / state.shares,
    ),
    prs = yr.map((h) => h.price);
  const since = Math.round((todayMs() - pd(last.date)) / DAY);
  let hero;
  if (fc) {
    const s = fc.steps[0],
      left = Math.round((s.date - todayMs()) / DAY),
      C = 2 * Math.PI * 52,
      pr = Math.max(0, Math.min(1, since / fc.gap));
    hero = `<div class="card"><h2>${t("next_harvest")}</h2><p class="hint">${t("next_hint", fc.gapLo, fc.gapHi)}</p>
    <div class="hero"><div class="ring"><svg viewBox="0 0 120 120"><circle class="track" cx="60" cy="60" r="52"/><circle class="prog" cx="60" cy="60" r="52" stroke-dasharray="${C}" stroke-dashoffset="${C}" data-off="${C * (1 - pr)}"/></svg>
    <div class="mid"><b class="num">${Math.abs(left)}</b><span>${left > 0 ? t("days_go") : left === 0 ? t("due_today") : t("days_over")}</span></div></div>
    <div class="txt"><div class="big">${t("around", fd(s.date))}</div><div style="color:var(--ink-2);font-size:13px">${t("day_of", Math.max(0, since), fc.gap)}</div>
    <div class="facts"><div><b class="num">≈ ${price(Math.round(s.price))}</b>${t("exp_price")}</div><div><b class="num">≈ ${N(s.loaded)}</b>${t("loaded")}</div>${s.shareNet.map((v, i) => `<div><b class="num">≈ ${money(v)}</b>${esc(shareNameAt(i))}</div>`).join("")}</div>
    <button class="btn small" data-go="forecast" style="margin-top:12px">${t("see_fc")}</button></div></div></div>`;
  } else hero = `<div class="card"><h2>${t("next_harvest")}</h2><p class="hint">${t("need3")}</p></div>`;
  const parts = [
    ["k1", t("loaded"), last.loaded],
    ["k3", t("rejected"), last.rejected],
    ["k4", t("home"), last.home],
  ];
  drawFns.push(() => {
    spark(
      $("#c-spark"),
      hs.slice(-12).map((h) => h.price),
    );
    barChart($("#c-nuts"), nutsData(hs.slice(-12)), {
      label: t("per_harvest_h"),
    });
  });
  return (
    banner() +
    `<div class="grid stag">
  <div class="grid heroes">
    <div class="card pricehero"><div class="lab">${t("price_lab")} · ${fd(last.date)}</div>
      <div class="pval num"><small>${esc(state.cur)}</small><span data-count="${last.price}">${N(last.price)}</span><span class="per">${t("per_coconut")}</span></div>
      <div class="cmp">${prev ? `${delta(last.price, prev.price)} <span>${t("from_prev", price(prev.price))}</span>` : t("first_price")}</div>
      <div class="spark" id="c-spark"></div>
      <div class="mini num"><div><b>${price(paid ? harvestInc / paid : last.price)}</b>${t("avg12")}</div><div><b>${price(Math.max.apply(0, prs))}</b>${t("highest")}</div><div><b>${price(Math.min.apply(0, prs))}</b>${t("lowest")}</div>${fc ? `<div><b>≈ ${price(Math.round(fc.steps[0].price))}</b>${t("exp_next")}</div>` : ""}</div></div>
    <div class="card tothero"><div class="lab">${t("loaded_lab")} · ${fd(last.date)}</div>
      <div class="pval num"><span data-count="${last.loaded}">${N(last.loaded)}</span>${prev ? delta(last.loaded, prev.loaded) : ""}<span class="per">${t("harv_n", N(last.total))}</span></div>
      <div class="split" role="img" aria-label="${esc(t("split_aria"))}">${parts.map((p, i) => (p[2] > 0 ? `<i class="${p[0]}" style="flex:${p[2]};animation-delay:${i * 80}ms"></i>` : "")).join("")}</div>
      <div class="splitleg num">${parts.map((p) => `<div><i class="${p[0]}"></i><span><b>${N(p[2])}</b>${p[1]}</span></div>`).join("")}${state.freePer > 0 ? `<div><i class="k2"></i><span><b>${N(last.free)}</b>${t("free")} (${freeRule()})</span></div>` : ""}</div></div>
  </div>
  <div class="grid kpis sm">
    ${kpi(t("loaded"), cnt(sum(yr.map((h) => h.loaded))), t("free") + " " + N(sum(yr.map((h) => h.free))))}
    ${kpi(t("k_harv12"), cnt(tot), t("k_harv_foot", yr.length, N(sum(yr.map((h) => h.rejected))), N(sum(yr.map((h) => h.home)))))}
    ${kpi(t("income"), cnt(inc, state.cur), t("deducted", money(inc - net)))}
    ${kpi(t("balance"), cnt(net, state.cur), shareNets.map((v, i) => `${esc(shareNameAt(i))} ${money(v)}`).join(" · "))}
  </div>
  <div class="grid two">
    <div class="card"><h2>${t("latest_money")}</h2><p class="hint">${last.buyer ? t("bought_by", esc(last.buyer)) + " " : ""}${t("latest_hint")}</p>${flowRows(last)}${extraIncome.length ? `<details class="dd"><summary>${t("other_income")}</summary><ul class="num">${extraIncome.map((income) => `<li><span>${incomeMonthLabel(income.date)} · ${esc(income.note)}</span><b>${money(income.amount)}</b></li>`).join("")}</ul></details>` : ""}</div>
    ${hero}
  </div>
  <div class="card"><h2>${t("per_harvest_h")}</h2><p class="hint">${t("per_harvest_hint", Math.min(12, hs.length))}</p>${LEG()}<div class="chart" id="c-nuts"></div></div>
  </div>`
  );
}
function vMemberMonths() {
  const rows = state.harvests
      .filter((harvest) => harvest && typeof harvest.date === "string")
      .slice()
      .sort((a, b) => a.date.localeCompare(b.date))
      .reverse(),
    totals = new Map();
  rows.forEach((harvest) => {
    const month = harvest.date.slice(0, 7);
    totals.set(month, (totals.get(month) || 0) + (Number(harvest.total) || 0));
  });
  return (
    `<div class="grid stag"><p class="hint">${t("sync_member_readonly")}</p>` +
    (rows.length
      ? Array.from(totals, ([month, total]) => {
          const monthRows = rows.filter((harvest) => harvest.date.slice(0, 7) === month);
          return `<div class="card"><h2>${esc(month)}</h2><p><b>${N(total)}</b> ${t("sync_month_count")}</p>
            ${monthRows.map((harvest) => `<div class="fields member-row"><span>${fd(harvest.date)}</span><b>${N(harvest.total)}</b></div>`).join("")}</div>`;
        }).join("")
      : `<div class="card empty">${t("empty_h")}</div>`) +
    `</div>`
  );
}
function vMonths(hs) {
  if (!accessReady || MEMBER_ROLES.includes(estateSyncState.active?.role)) return vMemberMonths();
  if (!hs.length && !state.otherIncome.length) return banner() + emptyState();
  const F = (l, v, c) => `<div class="f ${c || ""}"><span>${l}</span><b class="num">${v}</b></div>`;
  const rows = monthly(hs)
    .reverse()
    .map((m) => {
      const list = buyerQuery
        ? m.list.filter((h) =>
            [h.buyer, h.contact].some((value) =>
              String(value || "")
                .toLowerCase()
                .includes(buyerQuery.toLowerCase()),
            ),
          )
        : m.list;
      if (buyerQuery && !list.length) return "";
      const reviewed = state.reviewedMonths.includes(m.key),
        payout = state.monthPayouts[m.key] || [];
      return (
        `<div class="mhead"><h2>${m.label}</h2><button class="btn small" data-mpdf="${m.key}">${t("btn_mpdf")}</button>
    <button class="btn small" data-review-month="${m.key}">${t(reviewed ? "reopen_month" : "mark_reviewed")}</button>${reviewed ? `<span class="chip">${t("month_reviewed")}</span>` : ""}
    <div class="msum num">${m.list.length ? `<b>${price(m.price)}</b> ${t("per_coconut")} · <b>${N(m.loaded)}</b> ${t("bought_s")} · ${N(m.total)} ${t("harvested")} · ` : ""}${t("total_income")} <b>${money(m.inc)}</b> · ${t("deductions")} <b>${money(m.ded)}</b> · ${t("balance")} <b>${money(m.net)}</b> · ${t("amount_received")} <b>${money(m.received)}</b> · ${t("amount_due")} <b>${money(m.due)}</b>${m.credit ? ` · ${t("credit")} <b>${money(m.credit)}</b>` : ""}${state.shares > 1 ? ` · ${m.shareNet.map((v, i) => `${esc(shareNameAt(i))}: <b>${money(v)}</b>`).join(" · ")}` : ` · ${esc(shareNameAt(0))}: <b>${money(m.shareNet[0])}</b>`}</div>
    ${reviewed ? `<p class="hint">${t("review_editable_hint")}</p>` : ""}</div>
  ${
    !buyerQuery
      ? `<details class="card payout-box"><summary>${t("share_payouts")}</summary><div class="fields payout-fields">
    ${m.shareNet
      .map((share, i) => {
        const paid = Number(payout[i]) || 0;
        return `<label class="fld"><span>${esc(shareNameAt(i))} · ${t("paid_to_date")} (${esc(state.cur)})</span><input type="number" inputmode="decimal" min="0" step="0.01" data-payout-month="${m.key}" data-payout-index="${i}" value="${paid || ""}">
        <small>${t("balance")}: ${money(share)} · ${t("remaining")}: ${money(Math.max(0, share - paid))}</small></label>`;
      })
      .join("")}
    <button class="btn small" data-save-payout="${m.key}">${t("save_payouts")}</button></div></details>`
      : ""
  }
  <div class="rows">` +
        list
          .slice()
          .reverse()
          .map((h, i) => {
            const dl = CATS.filter((c) => h.dv[c] > 0)
              .map((c) => [catName(c, h), h.dv[c]])
              .concat(customDedEntries(h).map((d) => [d.name, d.amount]))
              .filter((d) => d[1] > 0);
            return `<div class="card hrow" style="animation-delay:${Math.min(i, 10) * 30}ms">
    <div class="when"><b>${fd(h.date)}</b>${h.gap != null ? `<span class="chip">${t("days_after", h.gap)}</span>` : `<span class="chip">${t("first_rec")}</span>`}<span style="flex:1"></span><button class="btn small" data-edit="${esc(h.id)}">${t("edit")}</button></div>
    <div class="hgrid">${F(t("price"), price(h.price), "key")}${F(t("loaded"), N(h.loaded), "key")}${F(t("harvested"), N(h.total))}${F(t("free"), N(h.free))}${F(t("rejected"), N(h.rejected))}${F(t("home"), N(h.home))}
      ${F(t("income"), money(h.inc))}${F(t("deductions"), "− " + N(h.dedT))}${F(t("amount_received"), money(h.received))}${F(t("amount_due"), money(h.due))}${h.credit ? F(t("credit"), money(h.credit)) : ""}<div class="f"><span>${t("balance")}</span><b class="num ${h.net < 0 ? "neg-t" : "pos-t"}">${money(h.net)}</b></div></div>
    ${
      h.payments.length
        ? `<details class="dd"><summary>${t("payments_title")}</summary><ul class="num">${h.payments
            .slice()
            .sort((a, b) => a.date.localeCompare(b.date))
            .map(
              (payment) =>
                `<li><span>${fd(payment.date)}${payment.note ? " · " + esc(payment.note) : ""}</span><b>${money(Number(payment.amount) || 0)}</b></li>`,
            )
            .join("")}</ul></details>`
        : ""
    }
    ${dl.length ? `<details class="dd"><summary>${t("ded_break")}</summary><ul class="num">${dl.map((d) => `<li><span>${esc(d[0])}</span><b>${N(d[1])}</b></li>`).join("")}</ul></details>` : ""}
    ${h.shareDeds.some((d) => d > 0) || h.shareAdds.some((a) => a > 0) ? `<details class="dd"><summary>${t("share_after_ded")}</summary><ul class="num">${h.shareDeds.map((d, j) => `<li><span>${esc(t("share_result", esc(shareNameAt(j)), money(h.share), money(d), money(h.shareAdds[j]), money(h.shareNet[j])))}</span><b>${money(h.shareNet[j])}</b></li>`).join("")}</ul></details>` : ""}
    <div class="who"><span>${t("buyer")}: <b>${h.buyer ? esc(h.buyer) : t("not_rec")}</b></span>${h.contact ? `<span>${t("contact")}: <a href="tel:${esc(String(h.contact).replace(/[^\d+]/g, ""))}">${esc(h.contact)}</a></span>` : ""}<span>${t("entered_by")}: <b>${h.by ? esc(h.by) : t("not_rec")}</b></span></div>
    ${h.note ? `<p class="note">${esc(h.note)}</p>` : ""}</div>`;
          })
          .join("") +
        (!buyerQuery
          ? m.incomes
              .slice()
              .sort((a, b) => b.date.localeCompare(a.date))
              .map(
                (income) => `<div class="card hrow">
    <div class="when"><b>${incomeMonthLabel(income.date)}</b><span class="chip">${t("other_income")}</span><span style="flex:1"></span><button class="btn small" data-edit-income="${esc(income.id)}">${t("edit")}</button></div>
    <div class="hgrid">${F(t("income_amount"), money(income.amount), "key")}${F(t("income_note"), esc(income.note))}</div>
  </div>`,
              )
              .join("")
          : "") +
        `</div>`
      );
    })
    .join("");
  return (
    banner() +
    `<div class="btnrow" style="margin-bottom:14px"><button class="btn primary" data-add-income>${t("add_income")}</button></div>
    <div class="card buyer-search"><div class="fields"><label class="fld wide"><span>${t("buyer_search")}</span><input id="buyerSearchInput" type="search" value="${esc(buyerQuery)}"></label></div>
      <div class="btnrow"><button class="btn" id="buyerSearch">${t("search_buyer")}</button>${buyerQuery ? `<button class="btn" id="clearBuyerSearch">${t("clear_search")}</button>` : ""}</div>
      ${buyerQuery ? `<p class="hint">${t("buyer_search_hint")}</p>` : ""}</div>
    ${buyerQuery && !rows ? `<div class="card empty">${t("buyer_none")}</div>` : rows}`
  );
}
function vInsights(all) {
  if (!all.length) return banner() + emptyState();
  const lastMs = pd(all[all.length - 1].date),
    hs = range === "all" ? all : all.filter((h) => pd(h.date) > lastMs - +range * 30.5 * DAY),
    extraIncome =
      range === "all"
        ? state.otherIncome
        : state.otherIncome.filter((income) => pd(income.date) > lastMs - +range * 30.5 * DAY);
  const tot = sum(hs.map((h) => h.total)),
    rej = sum(hs.map((h) => h.rejected)),
    paid = sum(hs.map((h) => h.paid)),
    harvestInc = sum(hs.map((h) => h.inc)),
    inc = harvestInc + sum(extraIncome.map((income) => income.amount)),
    ded = sum(hs.map((h) => h.dedT)),
    net = inc - ded;
  const gaps = hs.map((h) => h.gap).filter((g) => g > 0);
  const cats = CATS.map((c) => [t("cat_" + c), sum(hs.map((h) => h.dv[c]))])
      .concat(customDedSummary(hs).map((d) => [d.name, d.amount]))
      .filter((c) => c[1] > 0)
      .sort((a, b) => b[1] - a[1]),
    base = Math.max(inc, ded, 1);
  const best = hs.slice().sort((a, b) => b.net - a.net)[0],
    ms = monthly(hs, extraIncome).reverse();
  drawFns.push(() => {
    lineChart($("#i-price"), priceData(hs), [], { label: t("price_chart_h") });
    barChart($("#i-nuts"), nutsData(hs), { label: t("per_harvest_h") });
    barChart(
      $("#i-net"),
      hs.map((h) => ({
        label: fd(h.date, false),
        segs: [{ v: h.net, cls: h.net < 0 ? "neg" : "s1" }],
        tip: `<b>${fd(h.date)}</b>${t("income")} ${money(h.inc)}<br>${t("deductions")} ${money(h.dedT)}<br>${t("balance")} ${money(h.net)}${state.shares > 1 ? `<br>${esc(shareLab())} ${money(h.share)}` : ""}`,
      })),
      { label: t("bal_per_h"), h: 200 },
    );
  });
  return (
    banner() +
    `<div class="grid stag">
  <div class="seg" role="group" style="justify-self:start">${[
    ["all", t("all_rec")],
    ["12", t("m12")],
    ["6", t("m6")],
  ]
    .map((r) => `<button data-range="${r[0]}" aria-pressed="${range === r[0]}">${r[1]}</button>`)
    .join("")}</div>
  <div class="grid kpis sm">
    ${kpi(t("avg_price"), cnt(paid ? harvestInc / paid : 0, state.cur), t("per_paid"))}
    ${kpi(t("loaded"), cnt(sum(hs.map((h) => h.loaded))), t("n_harv", N(tot)))}
    ${kpi(t("rej_rate"), `${tot ? ((rej / tot) * 100).toFixed(1) : 0}%`, t("of_picked", N(rej), N(tot)))}
    ${kpi(t("gap_days"), gaps.length ? cnt(mean(gaps)) : "–", gaps.length ? t("short_long", Math.min.apply(0, gaps), Math.max.apply(0, gaps)) : t("need2"))}
  </div>
  <div class="grid two">
    <div class="card"><h2>${t("price_chart_h")}</h2><p class="hint">${t("price_chart_hint")}</p><div class="chart" id="i-price"></div></div>
    <div class="card"><h2>${t("per_harvest_h")}</h2><p class="hint">${t("picked_across", N(tot), hs.length)}</p>${LEG()}<div class="chart" id="i-nuts"></div></div>
  </div>
  <div class="card"><h2>${t("mbm")}</h2><p class="hint">${t("mbm_hint")}</p><div class="tbl"><table class="num">
    <thead><tr><th>${t("th_month")}</th><th>${t("price")}</th><th>${t("harvested")}</th><th>${t("th_loaded")}</th><th>${t("th_free")}</th><th>${t("th_rej")}</th><th>${t("th_home")}</th><th>${t("income")}</th><th>${t("deductions")}</th><th>${t("balance")}</th>${state.shares > 1 ? `<th>${esc(shareLab())}</th>` : ""}</tr></thead>
    <tbody>${ms.map((m) => `<tr><td>${m.label}</td><td class="pr">${price(m.price)}</td><td>${N(m.total)}</td><td>${N(m.loaded)}</td><td>${N(m.free)}</td><td>${N(m.rej)}</td><td>${N(m.home)}</td><td>${N(m.inc)}</td><td>${N(m.ded)}</td><td class="${m.net < 0 ? "neg-t" : ""}"><b>${N(m.net)}</b></td>${state.shares > 1 ? `<td>${N(m.share)}</td>` : ""}</tr>`).join("")}</tbody></table></div></div>
  <div class="grid two">
    <div class="card"><h2>${t("where_goes")}</h2><p class="hint">${t("where_hint", money(inc))}</p><div class="flow">
      ${cats.map((c, i) => `<div class="row"><span>${esc(c[0])}</span><div class="bar"><i style="width:${(c[1] / base) * 100}%;animation-delay:${i * 50}ms"></i></div><span class="v num">${N(c[1])}<span class="pct">${inc ? Math.round((c[1] / inc) * 100) : 0}%</span></span></div>`).join("")}
      <div class="row net"><span>${t("balance")}</span><div class="bar"><i style="width:${(Math.max(0, net) / base) * 100}%"></i></div><span class="v num ${net < 0 ? "neg-t" : ""}">${money(net)}<span class="pct">${inc ? Math.round((net / inc) * 100) : 0}%</span></span></div>
      ${state.shares > 1 ? `<div class="row share"><span>${esc(shareLab())} (÷ ${state.shares})</span><div class="bar"><i style="width:${(Math.max(0, net / state.shares) / base) * 100}%"></i></div><span class="v num">${money(net / state.shares)}</span></div>` : ""}</div></div>
    <div class="card"><h2>${t("bal_per_h")}</h2><p class="hint">${best ? t("best", fd(best.date), money(best.net)) : ""}</p><div class="chart" id="i-net"></div></div>
  </div></div>`
  );
}
function vForecast(hs) {
  const fc = forecast(hs);
  if (!fc)
    return (
      banner() +
      `<div class="card empty"><h2>${t("fc_none_h")}</h2><p>${t("fc_none_p", hs.length)}</p><button class="btn primary" data-add>${t("add_harvest")}</button></div>`
    );
  const s = fc.steps[0],
    scenarioDate = forecastScenario.date || iso(s.date),
    scenarioMs = pd(scenarioDate),
    lastHarvestMs = pd(hs[hs.length - 1].date),
    modelNuts = scenarioDate === iso(s.date) ? s.nuts : fc.Y.at(lastHarvestMs, scenarioMs),
    scenarioNuts = forecastScenario.nuts === "" ? modelNuts : Number(forecastScenario.nuts),
    modelPrice = fc.P.at(scenarioMs),
    scenarioPrice = forecastScenario.price === "" ? modelPrice.p : Number(forecastScenario.price),
    scenarioLoaded = scenarioNuts * fc.paidRate,
    scenarioDed = s.dedT - s.nuts * state.transRate + scenarioNuts * state.transRate,
    scenarioNet = scenarioLoaded * scenarioPrice - scenarioDed,
    scenarioShareNet = s.shareDeds.map((deduction, i) => scenarioNet / state.shares - deduction + s.shareAdds[i]),
    nmName = MONLS[lang][new Date(fc.nm.start).getUTCMonth()] + " " + new Date(fc.nm.start).getUTCFullYear(),
    nmH = fc.nm.harvests,
    pct = (x) => (isFinite(x) ? "±" + (x * 100).toFixed(1) + "%" : "–");
  const mTxt = nmH.length
    ? t(
        "nm_yes",
        N(sum(nmH.map((x) => x.nuts))),
        price(Math.round(fc.nm.price.p)),
        nmH.map((x) => fd(x.date, false)).join(", "),
      )
    : t("nm_no", nmName, fd(s.date));
  const yr = fc.year,
    yrNuts = sum(yr.map((x) => x.nuts)),
    yrLo = sum(yr.map((x) => x.nutsLo)),
    yrHi = sum(yr.map((x) => x.nutsHi)),
    yrInc = sum(yr.map((x) => x.inc)),
    yrNet = sum(yr.map((x) => x.net));
  const ampUsed = fc.Y.c.amp,
    ampShow = ampUsed || SEASON.amp;
  const mName = { naive: "m_naive", level: "m_level", trend: "m_trend" },
    pMeth = t(mName[fc.P.c.kind]) + (fc.P.c.amp ? " + " + t("m_season") : ""),
    yMeth = t("m_rate") + (ampUsed ? " + " + t("m_season") : ""),
    gMeth = t(fc.G.c.kind === "median" ? "m_median" : "m_smooth");
  const recent = hs.slice(-9);
  drawFns.push(() => {
    lineChart(
      $("#fc-price"),
      priceData(recent),
      fc.steps.map((x) => ({
        label: fd(x.date, false),
        v: x.price,
        lo: x.pLo,
        hi: x.pHi,
        tip: `<b>${t("forecast_w")}, ${fd(x.date)}</b>${t("about", price(Math.round(x.price)))}<br>${t("likely", price(Math.round(x.pLo)), price(Math.round(x.pHi)))}`,
      })),
      { label: t("fc_price_h") },
    );
    barChart(
      $("#fc-nuts"),
      recent
        .map((h) => ({
          label: fd(h.date, false),
          segs: [{ v: h.total, cls: "s1" }],
          tip: `<b>${fd(h.date)}</b>${t("harvested")} ${N(h.total)}`,
        }))
        .concat(
          fc.steps.map((x) => ({
            label: fd(x.date, false),
            segs: [{ v: x.nuts, cls: "ghost" }],
            tip: `<b>${t("forecast_w")}, ${fd(x.date)}</b>${t("about", N(x.nuts))}<br>${t("likely", N(x.nutsLo), N(x.nutsHi))}`,
          })),
        ),
      { label: t("fc_harv_h") },
    );
    lineChart(
      $("#fc-season"),
      MONS[lang].map((m, i) => {
        const v = seasonF(Date.UTC(2026, i, 15), ampShow) * 100;
        return {
          label: m,
          v,
          tip: `<b>${MONLS[lang][i]}</b>${t("fm_season_tip", Math.round(v))}`,
        };
      }),
      [],
      { label: t("fm_season_h"), h: 180 },
    );
  });
  return (
    banner() +
    `<div class="grid stag">
  <div class="grid kpis">
    ${kpi(t("fm_nm_price"), "≈ " + cnt(fc.nm.price.p, state.cur), nmName + " · " + t("likely", N(fc.nm.price.lo), N(fc.nm.price.hi)))}
    ${kpi(t("exp_coconuts"), "≈ " + cnt(s.nuts), t("n_loaded", N(s.loaded)) + " · " + t("likely", N(s.nutsLo), N(s.nutsHi)))}
    ${kpi(t("next_date"), fd(s.date, false), t("fm_every", fc.gap))}
    ${kpi(t("exp_bal"), "≈ " + cnt(s.net, state.cur), s.shareNet.map((v, i) => `${esc(shareNameAt(i))} ≈ ${money(v)}`).join(" · "))}
  </div>
  <div class="card"><h2>${t("scenario_h")}</h2><p class="hint">${t("scenario_hint")}</p>
    <div class="fields">
      <label class="fld"><span>${t("scenario_date")}</span><input id="fcScenarioDate" type="date" min="${iso(lastHarvestMs + DAY)}" value="${esc(scenarioDate)}"></label>
      <label class="fld"><span>${t("scenario_nuts")}</span><input id="fcScenarioNuts" type="number" inputmode="numeric" min="1" step="1" placeholder="${N(modelNuts)}" value="${esc(forecastScenario.nuts)}"></label>
      <label class="fld"><span>${t("scenario_price")} (${esc(state.cur)})</span><input id="fcScenarioPrice" type="number" inputmode="decimal" min="0.01" step="0.01" placeholder="${price(modelPrice.p)}" value="${esc(forecastScenario.price)}"></label>
    </div>
    <div class="btnrow" style="margin-top:12px"><button class="btn primary" id="fcScenarioRun">${t("scenario_run")}</button><button class="btn" id="fcScenarioReset">${t("scenario_reset")}</button></div>
    <div class="grid kpis sm" style="margin-top:14px">
      ${kpi(t("scenario_estimate"), fd(scenarioMs, false), t("scenario_loaded") + ": " + N(scenarioLoaded))}
      ${kpi(t("scenario_income"), money(scenarioLoaded * scenarioPrice), t("scenario_deductions") + ": " + money(scenarioDed))}
      ${kpi(t("scenario_balance"), money(scenarioNet), scenarioShareNet.map((value, i) => t("scenario_share", esc(shareNameAt(i))) + ": " + money(value)).join(" · "))}
    </div>
  </div>
  ${fc.longGap ? `<p class="hint">${t("fm_gap_note")}</p>` : ""}
  <div class="card"><h2>${t("next_month", nmName)}</h2><p style="margin:4px 0 0">${mTxt}</p></div>
  <div class="grid two">
    <div class="card"><h2>${t("fc_price_h")}</h2><p class="hint">${t("fc_price_hint")}</p><div class="legend"><span><i></i>${t("paid_so_far")}</span><span><i class="d"></i>${t("fc_range")}</span></div><div class="chart" id="fc-price"></div></div>
    <div class="card"><h2>${t("fc_harv_h")}</h2><p class="hint">${t("fc_rate", fc.rate.toFixed(1))}</p><div class="legend"><span><i></i>${t("harvested")}</span><span><i class="g"></i>${t("forecast_w")}</span></div><div class="chart" id="fc-nuts"></div></div>
  </div>
  <div class="card"><h2>${t("next3")}</h2><p class="hint">${t("next3_hint", (fc.paidRate * 100).toFixed(0))}</p><div class="fc-list">
    ${fc.steps.map((x) => `<div class="fc-item"><h3>${t("around", fd(x.date))}</h3><p class="num">≈ ${price(Math.round(x.price))} ${t("per_coconut")}</p><p class="num">${t("n_paid_for", N(x.nuts), N(x.loaded))}</p><p class="num">≈ ${money(x.net)} · ${t("balance")}</p>${x.shareNet.map((v, i) => `<p class="num"><b style="color:var(--ink)">≈ ${money(v)} · ${esc(shareNameAt(i))}</b></p>`).join("")}</div>`).join("")}</div></div>
  <div class="grid two">
    <div class="card"><h2>${t("fm_year_h")}</h2><p style="margin:4px 0 0">${t("fm_year_p", yr.length, N(yrNuts), N(yrLo), N(yrHi), money(yrInc), money(yrNet))}</p>${Array.from({ length: state.shares }, (_, i) => `<p class="hint" style="margin:8px 0 0">${esc(shareNameAt(i))} ≈ ${money(sum(yr.map((x) => x.shareNet[i])))}</p>`).join("")}</div>
    <div class="card"><h2>${t("fm_cycle_h")}</h2><p style="margin:4px 0 0">${t("fm_cycle_p", fc.gap, fc.G.lo, fc.G.hi, fc.G.min, fc.G.max)}</p></div>
  </div>
  <div class="grid two">
    <div class="card"><h2>${t("fm_season_h")}</h2><p class="hint">${t(ampUsed ? "fm_season_used" : "fm_season_flat")}</p><div class="chart" id="fc-season"></div></div>
    <div class="card"><h2>${t("fm_bio_h")}</h2><p style="margin:4px 0 0;color:var(--ink-2)">${t("fm_bio_p")}</p></div>
  </div>
  <div class="card"><h2 style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">${t("trust_h")} <span class="meter"><i class="on"></i><i class="${fc.conf > 1 ? "on" : ""}"></i><i class="${fc.conf > 2 ? "on" : ""}"></i></span><span class="chip">${t("conf" + fc.conf)}</span></h2>
    <p style="margin:6px 0 0;color:var(--ink-2);max-width:70ch">${fc.tested >= 3 ? t("fm_acc_p", pct(fc.P.mape), pct(fc.Y.mape), pct(fc.G.mape)) + " " + t("fm_acc_n", fc.tested) : t("fm_acc_few")}</p>
    <p class="hint" style="margin:8px 0 0">${t("fm_methods", pMeth, yMeth, gMeth)}</p></div>
  <div class="card"><h2>${t("fm_market_h")}</h2><p style="margin:4px 0 0;color:var(--ink-2);max-width:70ch">${t("fm_market_p")}</p><p class="hint" style="margin:8px 0 0">${t("fm_sources")}</p></div>
  </div>`
  );
}
function legal() {
  const yr = new Date().getFullYear(),
    years = yr > FIRST_YEAR ? FIRST_YEAR + "–" + yr : String(FIRST_YEAR),
    owner = COMPANY.trim() || "Coconut Ledger";
  return `<footer class="legal">
    <div class="legal-mark">${esc(owner)}<sup>™</sup></div>
    <p>© ${years} ${esc(owner)}. ${t("rights")}</p>
    <p class="num">${t("version", VER)}${UPD && SH.versionName ? " · Android " + esc(SH.versionName) : ""}</p>
    <p class="legal-made">${t("made")}</p>
  </footer>`;
}
function remindersCard() {
  if (!UPD || typeof NB.scheduleReminders !== "function" || typeof NB.requestNotificationPermission !== "function")
    return "";
  const enabled = !!SH.notificationsEnabled;
  return `<div class="card"><h2>${t("reminders_title")}</h2><p class="hint">${t("reminders_hint")}</p>
    <p>${t(enabled ? "reminders_enabled" : "reminders_disabled")}</p>
    <button class="btn${enabled ? "" : " primary"}" id="enableReminders" ${enabled ? "disabled" : ""}>${t("enable_reminders")}</button></div>`;
}
function vData() {
  return (
    banner() +
    `<div class="grid datagrid stag">
  ${estateSyncCard()}
  <div class="card"><h2>${t("bk_h")}</h2><p class="hint">${t("bk_hint")}</p>
    <div class="btnrow"><button class="btn primary" data-exp="share">${t("btn_share")}</button><button class="btn" data-pdf>${t("btn_pdf")}</button><button class="btn" data-exp="csv">${t("btn_csv")}</button><button class="btn" data-exp="json">${t("btn_json")}</button><button class="btn" data-exp="copy">${t("btn_copy")}</button><a class="btn" href="https://drive.google.com/drive/my-drive" target="_blank" rel="noopener">${t("open_drive")}</a></div>
    <p class="hint" style="margin:10px 0 0">${t("bk_note")}</p>
    ${((ms) => (ms.length ? `<div class="btnrow" style="margin-top:12px;align-items:center"><label class="fld" style="flex:1 1 180px">${t("rep_pick")}<select id="mpick">${ms.map((m) => `<option value="${m.key}">${m.label}</option>`).join("")}</select></label><button class="btn" data-mpick style="align-self:flex-end">${t("rep_open")}</button></div>` : ""))(monthly(calc()).reverse())}</div>
  ${remindersCard()}
  ${updCard()}
  <div class="card"><h2>${t("set_h")}</h2><p class="hint">${t("set_hint")}</p><div class="fields">
    <label class="fld">${t("estate_name")}<input id="s-name" type="text" maxlength="40" value="${esc(state.estate)}"></label>
    <label class="fld">${t("cur_lab")}<input id="s-cur" type="text" maxlength="6" value="${esc(state.cur)}"></label>
    <label class="fld wide">${t("free_every")}<input id="s-free" type="number" inputmode="numeric" min="0" step="1" value="${esc(state.freePer)}"></label>
    <label class="fld">${t("div_by")}<input id="s-shares" type="number" inputmode="numeric" min="1" step="1" value="${esc(state.shares)}"></label>
    <label class="fld">${t("share_to")}<input id="s-sname" type="text" maxlength="20" value="${esc(state.shareName)}"></label>
    <label class="fld wide">${t("trans_rate")} (${esc(state.cur)})<input id="s-trans" type="number" inputmode="decimal" min="0" step="0.01" value="${esc(state.transRate)}"></label></div>
    <div class="btnrow" style="margin-top:12px"><button class="btn primary" id="s-save">${t("save_details")}</button></div></div>
  <div class="card" style="grid-column:1/-1"><h2>${t("imp_h")}</h2><p class="hint">${t("imp_hint")}</p>
    <p style="margin:0 0 10px"><code>date, harvested, rejected, home use, price, harvesting, cart, transport, church, my money, fertilizer, power, other, buyer name, buyer contact, entered by, note, other note, free to buyer, loaded, custom deductions JSON, per-share deductions JSON, record type, income amount, income note, income ID, per-share additions JSON, buyer payments JSON</code></p>
    <p class="hint">${t("imp_ex")}</p>
    <textarea class="box" id="imp" rows="5" placeholder="${esc(t("imp_ph"))}" aria-label="${esc(t("imp_h"))}"></textarea>
    <div class="btnrow" style="margin-top:10px"><button class="btn" id="backupCheck">${t("check_backup")}</button><button class="btn primary" id="impGo">${t("imp_go")}</button><label class="btn">${t("choose_file")}<input type="file" id="impFile" accept=".csv,.json,.txt,text/csv,text/comma-separated-values,application/json,text/plain" hidden></label></div>
    <p class="err" id="impErr"></p></div>
  <div class="card" style="grid-column:1/-1"><h2>${t("wipe_h")}</h2><p class="hint">${t("wipe_hint")}</p><button class="btn danger" data-wipe>${t("wipe_btn")}</button></div>
  ${legal()}
  </div>`
  );
}
function applyStatic() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-t]").forEach((e) => (e.textContent = t(e.dataset.t)));
  document.querySelectorAll("[data-tp]").forEach((e) => (e.placeholder = t(e.dataset.tp)));
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  document.querySelectorAll(".curlab").forEach((e) => (e.textContent = state.cur));
  setSync(syncCls, syncKey);
}
/* ---------- pages kept in memory ----------
   Each tab is built once and kept. Switching tabs only puts the kept page back on screen, so it is
   instant. Saving a record, changing a setting or the language clears the kept pages; the page on
   screen is rebuilt at once and the others when they are next opened.
   At start-up the loading screen builds every tab while its animation plays. */
const pages = {};
let rendered = false;
const VIEWS = {
  overview: vOverview,
  months: vMonths,
  insights: vInsights,
  forecast: vForecast,
  data: vData,
};
function invalidate() {
  for (const k in pages) {
    if (k !== route && pages[k].parentNode) pages[k].remove();
    delete pages[k];
  }
  tips.clear();
}
function invalidateAllViews() {
  for (const k in pages) {
    if (pages[k].parentNode) pages[k].remove();
    delete pages[k];
  }
  tips.clear();
}
/* Every kept page stays in the document. Pages not on screen use content-visibility: hidden, so the
   browser keeps their layout ready and skips drawing them; showing one again is quick. */
function showPage(el) {
  for (const k in pages) if (pages[k] !== el) pages[k].classList.remove("on");
  [...view.children].forEach((c) => c !== el && c.classList.remove("on"));
  el.classList.add("on");
}
function header() {
  applyStatic();
  $("#estateName").textContent = state.estate;
  $("#viewSub").textContent = t("sub_" + route);
  document
    .querySelectorAll(".rail [data-go]")
    .forEach((b) => {
      b.hidden = !canViewEstateRoute(b.dataset.go);
      if (b.dataset.go === route) b.setAttribute("aria-current", "page");
      else b.removeAttribute("aria-current");
    });
}
/* Builds tab r and puts it on screen (it must be on screen so the charts can measure their width). */
function build(r, intro) {
  drawFns = [];
  const el = document.createElement("div");
  el.className = "view" + (intro ? "" : " calm");
  el.innerHTML = VIEWS[r](calc());
  if (pages[r] && pages[r].parentNode) pages[r].replaceWith(el);
  else view.appendChild(el);
  [...view.children].forEach((c) => !Object.values(pages).includes(c) && c !== el && c.remove());
  showPage(el);
  draw(el);
  if (!intro) el.querySelectorAll(".prog").forEach((c) => (c.style.strokeDashoffset = c.dataset.off));
  pages[r] = el;
  return el;
}
function slideIn(el, dir) {
  if (!dir || still() || !el.animate) return;
  const from = dir === "fade" ? "none" : `translateX(${dir === "back" ? -18 : 18}px)`;
  el.animate(
    [
      { opacity: 0, transform: from },
      { opacity: 1, transform: "none" },
    ],
    {
      duration: dir === "fade" ? 200 : 220,
      easing: "cubic-bezier(.2,.8,.2,1)",
    },
  );
}
function render(o) {
  o = o || {};
  invalidate();
  header();
  const el = build(route, false);
  moveInd();
  slideIn(el, o.dir);
}
function draw(root) {
  widthOf.clear();
  (root || view).querySelectorAll(".chart,.spark").forEach((el) => widthOf.set(el, el.clientWidth));
  drawFns.forEach((f) => {
    try {
      f();
    } catch (e) {
      console.error(e);
    }
  });
}
function countUp() {
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  document.querySelectorAll("#view .view.on [data-count]").forEach((el) => {
    const to = +el.dataset.count;
    if (still || !isFinite(to)) return;
    const t0 = performance.now(),
      dur = 800;
    (function step(now) {
      const k = Math.min(1, (now - t0) / dur),
        e = 1 - Math.pow(1 - k, 3);
      el.textContent = N(to * e);
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  });
}
/* The dark/light switch uses the browser's view transition where it has one; otherwise a plain colour fade.
   Only transform, opacity and clip-path animate. */
const still = () => matchMedia("(prefers-reduced-motion:reduce)").matches;
function vt(kinds, run, fallback) {
  const h = document.documentElement;
  if (!document.startViewTransition || still()) {
    fallback();
    return null;
  }
  kinds.forEach((k) => h.classList.add(k));
  let tr;
  try {
    tr = document.startViewTransition(run);
  } catch (e) {
    kinds.forEach((k) => h.classList.remove(k));
    fallback();
    return null;
  }
  tr.finished.finally(() => kinds.forEach((k) => h.classList.remove(k)));
  return tr;
}
let indReady = false;
function moveInd() {
  const b = document.querySelector('.rail [data-go="' + route + '"]'),
    ind = document.querySelector(".rail-ind");
  if (!b || !ind || !b.offsetWidth) return;
  const phone = getComputedStyle(b).flexDirection === "column",
    w = phone ? Math.min(b.offsetWidth - 8, 64) : b.offsetWidth,
    h = phone ? b.offsetHeight - 4 : b.offsetHeight;
  if (!indReady) ind.style.transition = "none";
  ind.style.width = w + "px";
  ind.style.height = h + "px";
  ind.style.transform = `translate(${b.offsetLeft + (b.offsetWidth - w) / 2}px,${b.offsetTop + (b.offsetHeight - h) / 2}px)`;
  if (!indReady) {
    ind.offsetWidth;
    ind.style.transition = "";
    indReady = true;
  }
}
function go(r) {
  if (ROUTES.indexOf(r) < 0) r = "overview";
  if (!canViewEstateRoute(r)) r = defaultEstateRoute();
  if (r === route && pages[r] && pages[r].classList.contains("on")) return scrollTo(0, 0);
  const dir = r === route ? "" : ROUTES.indexOf(r) > ROUTES.indexOf(route) ? "fwd" : "back";
  route = r;
  if (location.hash !== "#" + r) {
    try {
      history.replaceState(null, "", "#" + r);
    } catch (e) {}
  }
  header();
  moveInd();
  let el = pages[r];
  if (el) showPage(el);
  else el = build(r, false);
  scrollTo(0, 0);
  slideIn(el, dir);
}
function toggleSkin(ev) {
  const next = document.documentElement.getAttribute("data-skin") === "light" ? "neon" : "light",
    bt = $("#skinBtn").getBoundingClientRect();
  const x = ev && ev.clientX ? ev.clientX : bt.left + bt.width / 2,
    y = ev && ev.clientY ? ev.clientY : bt.top + bt.height / 2,
    r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const tr = vt(
    ["theme-vt"],
    () => setSkin(next),
    () => {
      const h = document.documentElement;
      h.classList.add("theming");
      setSkin(next);
      setTimeout(() => h.classList.remove("theming"), 500);
    },
  );
  if (tr)
    tr.ready
      .then(() =>
        document.documentElement.animate(
          {
            clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`],
          },
          {
            duration: 560,
            easing: "cubic-bezier(.65,0,.35,1)",
            pseudoElement: "::view-transition-new(root)",
          },
        ),
      )
      .catch(() => {});
}
addEventListener("hashchange", () => {
  const r = location.hash.slice(1);
  if (ROUTES.indexOf(r) >= 0 && r !== route) go(r);
});
let rz,
  lastW = innerWidth;
addEventListener("resize", () => {
  moveInd();
  clearTimeout(rz);
  rz = setTimeout(() => {
    if (Math.abs(innerWidth - lastW) > 2 && rendered) {
      lastW = innerWidth;
      render();
    }
  }, 150);
});

/* ---------- dialogs ---------- */
function toast(m, duration = 2600) {
  const el = $("#toast");
  el.textContent = m;
  el.classList.add("on");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove("on"), duration);
}
const dlg = $("#dlg"),
  ask = $("#ask"),
  incomeDlg = $("#incomeDlg");
let editId = null,
  incomeEditId = null,
  roundingAdjustment = 0;
function openD(d) {
  if (d.showModal) d.showModal();
  else d.setAttribute("open", "");
}
function closeD(d) {
  if (d.close) d.close();
  else d.removeAttribute("open");
}
function confirmBox(title, text, yes) {
  return new Promise((res) => {
    $("#askT").textContent = title;
    $("#askP").textContent = text;
    $("#askYes").textContent = yes;
    $("#askYes").onclick = () => {
      closeD(ask);
      res(true);
    };
    $("#askNo").onclick = () => {
      closeD(ask);
      res(false);
    };
    openD(ask);
  });
}
window.handleBack = () => {
  if (document.body.classList.contains("rep")) {
    closeReport();
    return true;
  }
  if (ask.open) {
    closeD(ask);
    return true;
  }
  if (dlg.open) {
    closeD(dlg);
    return true;
  }
  if (route !== "overview") {
    go("overview");
    return true;
  }
  return false;
};
$("#dedFields").innerHTML = CATS.map(
  (c) =>
    `<label class="fld"><span data-t="cat_${c}"></span><input id="d-${c}" type="number" inputmode="decimal" min="0" step="1" placeholder="0"></label>`,
).join("");
function readCustomDedFields() {
  const box = $("#customDedFields");
  return Array.from(box.querySelectorAll("[data-custom-name]"))
    .map((nameInput) => {
      const amountInput = nameInput.closest(".custom-ded-row").querySelector("[data-custom-amount]"),
        amount = amountInput.value.trim() === "" ? 0 : parseFloat(amountInput.value);
      return { name: nameInput.value.trim(), amount: isFinite(amount) ? amount : 0 };
    })
    .filter((d) => d.name || d.amount !== 0);
}
function renderCustomDedFields(rows) {
  $("#customDedFields").innerHTML = (rows || [])
    .filter((d) => d.kind !== ROUNDING_KIND)
    .map(
      (d) => `<div class="custom-ded-row">
        <label class="fld"><span>${t("custom_name")}</span><input type="text" data-custom-name maxlength="60" value="${esc(d.name || "")}"></label>
        <label class="fld"><span>${t("custom_amount", esc(state.cur))}</span><input type="number" inputmode="decimal" data-custom-amount min="0" step="1" value="${esc(d.amount || "")}"></label>
        <button type="button" class="btn small custom-remove" data-remove-custom>${t("remove_custom_ded")}</button>
      </div>`,
    )
    .join("");
}
function paymentRow(payment) {
  payment = payment || {};
  return `<div class="payment-row" data-payment-row data-payment-id="${esc(payment.id || "")}">
    <label class="fld"><span>${t("payment_date")}</span><input type="date" data-payment-date value="${esc(payment.date || "")}"></label>
    <label class="fld"><span>${t("payment_amount")} (${esc(state.cur)})</span><input type="number" inputmode="decimal" min="0.01" step="0.01" data-payment-amount value="${esc(payment.amount || "")}"></label>
    <label class="fld"><span>${t("payment_note")}</span><input type="text" maxlength="80" data-payment-note value="${esc(payment.note || "")}"></label>
    <button type="button" class="btn small custom-remove" data-remove-payment>${t("remove_payment")}</button>
  </div>`;
}
function renderPaymentFields(payments) {
  $("#paymentFields").innerHTML = (payments || []).map(paymentRow).join("");
}
function readPaymentFields() {
  const rows = Array.from($("#paymentFields").querySelectorAll("[data-payment-row]"));
  const payments = [];
  for (const row of rows) {
    const date = row.querySelector("[data-payment-date]").value,
      amountText = row.querySelector("[data-payment-amount]").value.trim(),
      note = row.querySelector("[data-payment-note]").value.trim();
    if (!date && !amountText && !note) continue;
    const amount = Number(amountText);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(amount) || amount <= 0) return null;
    payments.push({ id: row.dataset.paymentId || uid(), date, amount, note });
  }
  return payments;
}
function renderPresetOptions(selectedId) {
  $("#presetSelect").innerHTML =
    `<option value="">${t("choose_preset")}</option>` +
    state.deductionPresets
      .map(
        (preset) =>
          `<option value="${esc(preset.id)}" ${preset.id === selectedId ? "selected" : ""}>${esc(preset.name)}</option>`,
      )
      .join("");
}
function readShareDedFields() {
  return Array.from($("#shareDedFields").querySelectorAll("[data-share-ded]"), (input) => {
    const amount = input.value.trim() === "" ? 0 : parseFloat(input.value);
    return isFinite(amount) ? amount : 0;
  });
}
function readShareAddFields() {
  return Array.from($("#shareAddFields").querySelectorAll("[data-share-add]"), (input) => {
    const amount = input.value.trim() === "" ? 0 : parseFloat(input.value);
    return isFinite(amount) ? amount : 0;
  });
}
function renderShareDedFields(rows) {
  $("#shareDedFields").innerHTML = Array.from({ length: Math.max(1, state.shares) }, (_, i) => {
    const name = shareNameAt(i),
      amount = rows && rows[i] ? rows[i] : "";
    return `<label class="fld"><span>${t("share_ded_amount", esc(name))}</span><input type="number" inputmode="decimal" data-share-ded min="0" step="1" value="${esc(amount || "")}"></label>`;
  }).join("");
}
function renderShareAddFields(rows) {
  $("#shareAddFields").innerHTML = Array.from({ length: Math.max(1, state.shares) }, (_, i) => {
    const name = shareNameAt(i),
      amount = rows && rows[i] ? rows[i] : "";
    return `<label class="fld"><span>${t("share_add_amount", esc(name))}</span><input type="number" inputmode="decimal" data-share-add min="0" step="1" value="${esc(amount || "")}"></label>`;
  }).join("");
}
const dedInputValue = (h, c) => {
  const amount = h && h.ded[c];
  return c === "transport" ? (blank(amount) ? "" : amount) : amount || "";
};
const val = (id) => {
  const v = parseFloat($("#" + id).value);
  return isFinite(v) ? v : 0;
};
function roundingBaseDeduction() {
  const autoT = val("f-total") * state.transRate;
  return (
    sum(CATS.map((c) => (c === "transport" && $("#d-transport").value.trim() === "" ? autoT : val("d-" + c)))) +
    sum(readCustomDedFields().map((d) => d.amount))
  );
}
function updateRoundingInfo(c) {
  const input = $("#f-ded-target"),
    value = input.value.trim(),
    target = value === "" ? NaN : Number(value);
  if (value === "") $("#roundingInfo").textContent = t("round_help", money(c.ded));
  else if (!Number.isFinite(target) || target < c.baseDed)
    $("#roundingInfo").textContent = t("round_invalid", money(c.baseDed));
  else $("#roundingInfo").textContent = t("round_preview", money(target - c.baseDed), money(target));
}
function liveCalc() {
  const total = val("f-total"),
    home = val("f-home"),
    loaded = val("f-loaded"),
    rej = Math.max(0, total - home - loaded),
    auto = autoFree(loaded),
    fv = $("#f-free").value.trim(),
    free = fv === "" ? auto : val("f-free"),
    inc = loaded * val("f-price"),
    autoT = total * state.transRate,
    baseDed = roundingBaseDeduction(),
    ded = baseDed + roundingAdjustment,
    net = inc - ded;
  return { taken: loaded, rej, autoT, auto, free, paid: loaded, inc, baseDed, ded, net };
}
function live() {
  const c = liveCalc();
  updateRoundingInfo(c);
  $("#f-free").placeholder = t("auto", N(c.auto));
  $("#d-transport").placeholder = t("auto", N(c.autoT));
  $("#l-paid").textContent = N(c.rej);
  $("#l-inc").textContent = money(c.inc);
  const n = $("#l-net");
  n.textContent = money(c.net);
  n.className = "num " + (c.net < 0 ? "neg-t" : "");
  $("#l-share").textContent = money(c.net / state.shares);
  const shareDeds = readShareDedFields(),
    shareAdds = readShareAddFields();
  $("#shareDedLive").innerHTML = shareDeds
    .map((ded, i) => {
      const share = c.net / state.shares,
        added = shareAdds[i] || 0,
        after = share - ded + added;
      return `<li>${esc(t("share_result", esc(shareNameAt(i)), money(share), money(ded), money(added), money(after)))}</li>`;
    })
    .join("");
}
$("#hform").addEventListener("input", live);
$("#applyRounding").addEventListener("click", () => {
  const value = $("#f-ded-target").value.trim(),
    target = value === "" ? NaN : Number(value),
    current = liveCalc();
  if (!Number.isFinite(target) || target < current.baseDed) {
    updateRoundingInfo(current);
    return;
  }
  roundingAdjustment = target - current.baseDed;
  live();
  toast(t("round_applied", money(roundingAdjustment), money(liveCalc().ded)));
});
/* the harvest whose charges "Use previous charges" copies: the latest one other than the one being edited */
function prevOf(id) {
  const l = calc().filter((h) => h.id !== id);
  if (!l.length) return null;
  const cur = id && state.harvests.find((h) => h.id === id);
  if (cur) {
    const before = l.filter((h) => pd(h.date) < pd(cur.date));
    if (before.length) return before[before.length - 1];
  }
  return l[l.length - 1];
}
function openForm(id) {
  editId = id || null;
  const h = id && state.harvests.find((x) => x.id === id),
    prev = !h && !state.sample ? calc().pop() : null,
    me = LS.get(ME) || "";
  roundingAdjustment = h ? roundingDedAmount(h) : 0;
  applyStatic();
  $("#dlgTitle").textContent = t(h ? "f_edit" : "f_add");
  $("#delBtn").style.display = h ? "" : "none";
  $("#f-err").textContent = "";
  $("#freeLab").textContent = state.freePer > 0 ? t("f_free", freeRule()) : t("free");
  $("#l-shareLab").textContent = shareLab();
  $("#f-date").value = h ? h.date : iso(todayMs());
  $("#f-total").value = h ? h.total : "";
  $("#f-home").value = h && h.home ? h.home : "";
  $("#f-free").value = h && !blank(h.free) ? h.free : "";
  $("#f-loaded").value = h ? (calc().find((x) => x.id === h.id) || {}).loaded || "" : "";
  $("#f-price").value = h ? h.price : "";
  $("#f-note").value = h ? h.note || "" : "";
  $("#f-othernote").value = h ? h.otherNote || "" : "";
  $("#f-buyer").value = h ? h.buyer || "" : prev ? prev.buyer || "" : "";
  $("#f-contact").value = h ? h.contact || "" : prev ? prev.contact || "" : "";
  $("#f-by").value = h ? h.by || "" : me;
  renderPaymentFields(h ? h.payments : []);
  renderPresetOptions();
  CATS.forEach((c) => ($("#d-" + c).value = dedInputValue(h, c)));
  renderCustomDedFields(h ? customDedEntries(h) : []);
  renderShareDedFields(h ? shareDedEntries(h) : []);
  renderShareAddFields(h ? shareAddEntries(h) : []);
  $("#f-ded-target").value = h ? roundingBaseDeduction() + roundingAdjustment : "";
  $("#copyLast").style.display = prevOf(editId) ? "" : "none";
  live();
  openD(dlg);
}
$("#copyLast").onclick = () => {
  const l = prevOf(editId);
  if (!l) return toast(t("t_noprev"));
  CATS.forEach((c) => ($("#d-" + c).value = dedInputValue(l, c)));
  renderCustomDedFields(customDedEntries(l));
  renderShareDedFields(shareDedEntries(l));
  renderShareAddFields(shareAddEntries(l));
  roundingAdjustment = roundingDedAmount(l);
  $("#f-ded-target").value = roundingBaseDeduction() + roundingAdjustment;
  $("#f-othernote").value = l.otherNote || "";
  live();
};
$("#hform").addEventListener("submit", (e) => {
  e.preventDefault();
  const date = $("#f-date").value,
    total = val("f-total"),
    home = val("f-home"),
    pr = val("f-price"),
    err = $("#f-err"),
    fv = $("#f-free").value.trim(),
    lv = $("#f-loaded").value.trim();
  const customDeds = readCustomDedFields();
  const shareDeds = readShareDedFields(),
    shareAdds = readShareAddFields();
  const payments = readPaymentFields();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return (err.textContent = t("e_date"));
  if (pr <= 0) return (err.textContent = t("e_price"));
  if (total <= 0) return (err.textContent = t("e_total"));
  if (lv === "" || val("f-loaded") <= 0) return (err.textContent = t("e_loadreq"));
  if (val("f-loaded") + home > total) return (err.textContent = t("e_loaded"));
  if (fv !== "" && val("f-free") > liveCalc().taken) return (err.textContent = t("e_free"));
  if (customDeds.some((d) => d.amount < 0)) return (err.textContent = t("e_custom_amount"));
  if (customDeds.some((d) => d.amount > 0 && !d.name)) return (err.textContent = t("e_custom_name"));
  if (shareDeds.some((d) => d < 0)) return (err.textContent = t("e_custom_amount"));
  if (shareAdds.some((a) => a < 0)) return (err.textContent = t("e_custom_amount"));
  if (!payments) return (err.textContent = t("payment_invalid"));
  if (state.harvests.some((h) => h.date === date && h.id !== editId) && !state.sample)
    return (err.textContent = t("e_dup"));
  if (state.sample) {
    state.harvests = [];
    state.sample = false;
    editId = null;
  }
  const ded = {};
  CATS.forEach((c) => (ded[c] = c === "transport" && $("#d-transport").value.trim() === "" ? null : val("d-" + c)));
  const by = $("#f-by").value.trim();
  if (by) LS.set(ME, by);
  const rec = {
    id: editId || uid(),
    date,
    total: Math.round(total),
    rejected: Math.max(0, Math.round(total - home - val("f-loaded"))),
    home: Math.round(home),
    loaded: Math.round(val("f-loaded")),
    free: fv === "" ? null : Math.round(val("f-free")),
    price: pr,
    ded,
    customDeds: customDedEntries({
      customDeds: customDeds.concat(
        roundingAdjustment > 0 ? [{ name: t("round_adj"), amount: roundingAdjustment, kind: ROUNDING_KIND }] : [],
      ),
    }),
    shareDeds,
    shareAdds,
    payments,
    otherNote: $("#f-othernote").value.trim(),
    buyer: $("#f-buyer").value.trim(),
    contact: $("#f-contact").value.trim(),
    by,
    note: $("#f-note").value.trim(),
  };
  const i = state.harvests.findIndex((h) => h.id === rec.id);
  if (i >= 0) state.harvests[i] = rec;
  else state.harvests.push(rec);
  if (!persist()) return;
  closeD(dlg);
  render();
  toast(t("t_saved"));
});
$("#delBtn").onclick = async () => {
  if (!editId) return;
  closeD(dlg);
  if (await confirmBox(t("c_del_h"), t("c_del_p"), t("delete"))) {
    state.harvests = state.harvests.filter((h) => h.id !== editId);
    if (!persist()) return;
    render();
    toast(t("t_deleted"));
  }
};
function openIncomeForm(id) {
  const entry = id && state.otherIncome.find((income) => income.id === id);
  incomeEditId = entry ? entry.id : null;
  applyStatic();
  $("#incomeDlgTitle").textContent = t(entry ? "edit_income" : "other_income");
  $("#incomeDel").textContent = t("delete");
  $("#incomeDel").style.display = entry ? "" : "none";
  $("#incomeErr").textContent = "";
  $("#incomeDate").value = entry ? entry.date.slice(0, 7) : iso(todayMs()).slice(0, 7);
  $("#incomeAmount").value = entry ? entry.amount : "";
  $("#incomeNote").value = entry ? entry.note : "";
  openD(incomeDlg);
}
$("#incomeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const month = $("#incomeDate").value,
    amount = Number($("#incomeAmount").value),
    note = $("#incomeNote").value.trim(),
    error = $("#incomeErr");
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) {
    error.textContent = t("e_date");
    return;
  }
  if (!Number.isFinite(amount) || amount <= 0 || !note) {
    error.textContent = t("income_required");
    return;
  }
  if (state.sample) {
    state.harvests = [];
    state.sample = false;
  }
  const entry = { id: incomeEditId || uid(), date: month + "-01", amount, note },
    index = state.otherIncome.findIndex((income) => income.id === entry.id);
  if (index >= 0) state.otherIncome[index] = entry;
  else state.otherIncome.push(entry);
  if (!persist()) return;
  closeD(incomeDlg);
  render();
  toast(t("income_saved"));
});
$("#incomeDel").onclick = async () => {
  if (!incomeEditId) return;
  closeD(incomeDlg);
  if (await confirmBox(t("c_del_income_h"), t("c_del_income_p"), t("delete"))) {
    state.otherIncome = state.otherIncome.filter((income) => income.id !== incomeEditId);
    if (!persist()) return;
    render();
    toast(t("income_deleted"));
  }
};

/* ---------- share, save, import ---------- */
const q = (s) => {
  let value = String(s == null ? "" : s);
  if (/^[\s\u0000-\u001f]*[=+\-@]/.test(value)) value = "'" + value;
  return '"' + value.replace(/"/g, '""') + '"';
};
function toCSV() {
  const header =
      "date,harvested,rejected,home_use,price," +
      CATS.join(",") +
      ",buyer_name,buyer_contact,entered_by,note,other_note,free_to_buyer,loaded,custom_deductions,share_deductions,record_type,income_amount,income_note,income_id,share_additions,buyer_payments",
    harvestRows = calc().map((h) =>
      [h.date, h.total, h.rejected, h.home, h.price]
        .concat(
          CATS.map((c) => h.dv[c] || 0),
          [
            q(h.buyer),
            q(h.contact),
            q(h.by),
            q(h.note),
            q(h.otherNote),
            h.freeSet == null ? "" : h.freeSet,
            h.loaded,
            q(JSON.stringify(h.customDeds)),
            q(JSON.stringify(h.shareDeds)),
            "harvest",
            "",
            "",
            "",
            q(JSON.stringify(h.shareAdds)),
            q(JSON.stringify(h.payments)),
          ],
        )
        .join(","),
    ),
    incomeRows = state.otherIncome.map((income) => {
      const row = Array(22).fill("");
      row[0] = income.date;
      return row.concat("income", income.amount, q(income.note), q(income.id), "", "").join(",");
    });
  return "﻿" + [header].concat(harvestRows, incomeRows).join("\n");
}
window.onNativeResult = (ok) => toast(t(ok ? "t_file" : "t_nofile"));
async function saveFile(name, text, quiet) {
  if (NB) {
    NB.saveFile(name, text);
    return true;
  }
  try {
    if (window.claude && window.claude.use) {
      const d = await window.claude.use("downloads");
      if (d) {
        await d.save({ filename: name, data: text });
        if (!quiet) toast(t("t_file"));
        return true;
      }
    }
  } catch (e) {
    if (e && e.code === "declined") return false;
  }
  try {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    if (!quiet) toast(t("t_file"));
    return true;
  } catch (e) {
    toast(t("t_nofile"));
    return false;
  }
}
async function shareFile(name, text) {
  if (NB) {
    NB.shareFile(name, text);
    return;
  }
  try {
    const f = new File([text], name, { type: "text/csv" });
    if (navigator.canShare && navigator.canShare({ files: [f] })) {
      await navigator.share({ files: [f], title: name });
      return;
    }
  } catch (e) {
    if (e && e.name === "AbortError") return;
  }
  if (await saveFile(name, text, true)) toast(t("t_savedl"));
}
function parseDate(s) {
  s = s.trim();
  let m = s.match(/^(\d{4})[-\/.](\d{1,2})[-\/.](\d{1,2})$/);
  if (m) return m[1] + "-" + m[2].padStart(2, "0") + "-" + m[3].padStart(2, "0");
  m = s.match(/^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{4})$/);
  if (m) return m[3] + "-" + m[2].padStart(2, "0") + "-" + m[1].padStart(2, "0");
  return null;
}
function validIsoDate(date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parsed = new Date(date + "T00:00:00Z");
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date;
}
function validateFullBackup(backup) {
  if (!backup || typeof backup !== "object" || Array.isArray(backup) || !Array.isArray(backup.harvests))
    throw t("i_notbk");
  if (backup.cur != null && (typeof backup.cur !== "string" || backup.cur.length > 6)) throw t("i_bad");
  const otherIncome = backup.otherIncome == null ? [] : backup.otherIncome,
    monthPayouts = backup.monthPayouts == null ? {} : backup.monthPayouts,
    reviewedMonths = backup.reviewedMonths == null ? [] : backup.reviewedMonths,
    deductionPresets = backup.deductionPresets == null ? [] : backup.deductionPresets,
    validMonth = (month) => /^\d{4}-(0[1-9]|1[0-2])$/.test(month);
  if (
    !Array.isArray(otherIncome) ||
    !monthPayouts ||
    typeof monthPayouts !== "object" ||
    Array.isArray(monthPayouts) ||
    !Array.isArray(reviewedMonths) ||
    !Array.isArray(deductionPresets)
  )
    throw t("i_bad");
  for (const harvest of backup.harvests) {
    if (
      !harvest ||
      typeof harvest !== "object" ||
      !validIsoDate(harvest.date) ||
      !Number.isFinite(Number(harvest.total)) ||
      Number(harvest.total) <= 0 ||
      !Number.isFinite(Number(harvest.price)) ||
      Number(harvest.price) < 0 ||
      !harvest.ded ||
      typeof harvest.ded !== "object" ||
      Array.isArray(harvest.ded)
    )
      throw t("i_bad");
    if (harvest.payments != null) {
      if (!Array.isArray(harvest.payments)) throw t("i_bad");
      for (const payment of harvest.payments) {
        if (
          !payment ||
          !validIsoDate(payment.date) ||
          !Number.isFinite(Number(payment.amount)) ||
          Number(payment.amount) <= 0
        )
          throw t("i_bad");
      }
      for (const [month, amounts] of Object.entries(monthPayouts)) {
        if (
          !validMonth(month) ||
          !Array.isArray(amounts) ||
          amounts.some((amount) => !Number.isFinite(Number(amount)) || Number(amount) < 0)
        )
          throw t("i_bad");
      }
      if (reviewedMonths.some((month) => !validMonth(month))) throw t("i_bad");
      for (const preset of deductionPresets) {
        if (
          !preset ||
          typeof preset !== "object" ||
          typeof preset.name !== "string" ||
          !preset.name.trim() ||
          !preset.ded ||
          typeof preset.ded !== "object" ||
          Array.isArray(preset.ded) ||
          (preset.customDeds != null &&
            (!Array.isArray(preset.customDeds) ||
              preset.customDeds.some(
                (deduction) =>
                  !deduction ||
                  !String(deduction.name || "").trim() ||
                  !Number.isFinite(Number(deduction.amount)) ||
                  Number(deduction.amount) < 0,
              ))) ||
          (preset.shareDeds != null &&
            (!Array.isArray(preset.shareDeds) ||
              preset.shareDeds.some((amount) => !Number.isFinite(Number(amount)) || Number(amount) < 0))) ||
          !Number.isFinite(Number(preset.roundingAdjustment || 0)) ||
          Number(preset.roundingAdjustment || 0) < 0
        )
          throw t("i_bad");
        if (
          CATS.some(
            (category) =>
              !blank(preset.ded[category]) &&
              (!Number.isFinite(Number(preset.ded[category])) || Number(preset.ded[category]) < 0),
          )
        )
          throw t("i_bad");
        preset.id = String(preset.id || uid());
      }
    }
  }
  for (const income of otherIncome) {
    if (
      !income ||
      !validIsoDate(income.date) ||
      !Number.isFinite(Number(income.amount)) ||
      Number(income.amount) <= 0 ||
      typeof income.note !== "string"
    )
      throw t("i_bad");
  }
  return {
    replace: Object.assign(backup, { sample: false, otherIncome, monthPayouts, reviewedMonths, deductionPresets }),
    count: backup.harvests.length + otherIncome.length,
  };
}
function splitRow(line) {
  const d = line.includes("\t") ? "\t" : line.includes(";") && !line.includes(",") ? ";" : ",",
    out = [];
  let cur = "",
    inq = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inq) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i++;
        } else inq = false;
      } else cur += ch;
    } else if (ch === '"') inq = true;
    else if (ch === d) {
      out.push(cur.trim());
      cur = "";
    } else cur += ch;
  }
  out.push(cur.trim());
  return out;
}
function importText(txt) {
  txt = txt.replace(/^﻿/, "").trim();
  if (!txt) throw t("i_none");
  if (txt[0] === "{") {
    let o;
    try {
      o = JSON.parse(txt);
    } catch (e) {
      throw t("i_bad");
    }
    return validateFullBackup(o);
  }
  const out = [],
    otherIncome = [];
  txt.split(/\r?\n/).forEach((line, ln) => {
    if (!line.trim()) return;
    const c = splitRow(line),
      date = parseDate(c[0] || "");
    if (!date) {
      if (ln === 0) return;
      throw t("i_date", ln + 1, c[0]);
    }
    if (!validIsoDate(date)) throw t("i_date", ln + 1, c[0]);
    const n = (i) => {
      const v = parseFloat((c[i] || "").replace(/[^\d.\-]/g, ""));
      return isFinite(v) ? v : 0;
    };
    const recordType = (c[22] || "harvest").toLowerCase();
    if (recordType === "income") {
      if (n(23) <= 0) throw t("i_income", ln + 1);
      otherIncome.push({
        id: c[25] || uid(),
        date,
        amount: n(23),
        note: c[24] || "",
      });
      return;
    }
    if (recordType !== "harvest") throw t("i_bad");
    if (n(1) <= 0) throw t("i_count", ln + 1);
    if (n(2) + n(3) > n(1)) throw t("i_sum", ln + 1);
    let customDeds = [];
    if ((c[20] || "").trim()) {
      try {
        const parsed = JSON.parse(c[20]);
        if (!Array.isArray(parsed)) throw new Error("Custom deductions must be an array.");
        customDeds = customDedEntries({ customDeds: parsed });
      } catch (e) {
        throw t("i_bad");
      }
    }
    let shareDeds = [];
    if ((c[21] || "").trim()) {
      try {
        const parsed = JSON.parse(c[21]);
        if (!Array.isArray(parsed) || parsed.some((amount) => !Number.isFinite(Number(amount)) || Number(amount) < 0))
          throw new Error("Per-share deductions must be non-negative amounts.");
        shareDeds = parsed.map(Number);
      } catch (e) {
        throw t("i_bad");
      }
    }
    let shareAdds = [];
    if ((c[26] || "").trim()) {
      try {
        const parsed = JSON.parse(c[26]);
        if (!Array.isArray(parsed) || parsed.some((amount) => !Number.isFinite(Number(amount)) || Number(amount) < 0))
          throw new Error("Per-share additions must be non-negative amounts.");
        shareAdds = parsed.map(Number);
      } catch (e) {
        throw t("i_bad");
      }
    }
    let payments = [];
    if ((c[27] || "").trim()) {
      try {
        const parsed = JSON.parse(c[27]);
        if (
          !Array.isArray(parsed) ||
          parsed.some(
            (payment) =>
              !payment ||
              !validIsoDate(payment.date) ||
              !Number.isFinite(Number(payment.amount)) ||
              Number(payment.amount) <= 0,
          )
        )
          throw new Error("Buyer payments must have valid dates and positive amounts.");
        payments = parsed.map((payment) => ({
          id: String(payment.id || uid()),
          date: payment.date,
          amount: Number(payment.amount),
          note: String(payment.note || ""),
        }));
      } catch (e) {
        throw t("i_bad");
      }
    }
    const ded = {};
    CATS.forEach((k, i) => (ded[k] = k === "transport" && (c[5 + i] || "") === "" ? null : n(5 + i)));
    out.push({
      id: uid(),
      date,
      total: Math.round(n(1)),
      rejected: Math.round(n(2)),
      home: Math.round(n(3)),
      free: (c[18] || "") === "" ? null : Math.round(n(18)),
      loaded: (c[19] || "") === "" ? null : Math.round(n(19)),
      price: n(4),
      ded,
      customDeds,
      shareDeds,
      shareAdds,
      payments,
      buyer: c[13] || "",
      contact: c[14] || "",
      by: c[15] || "",
      note: c[16] || "",
      otherNote: c[17] || "",
    });
  });
  if (!out.length && !otherIncome.length) throw t("i_rows");
  return { rows: out, otherIncome, count: out.length + otherIncome.length };
}
function doImport(txt) {
  const er = $("#impErr");
  if (er) er.textContent = "";
  let r;
  try {
    r = importText(txt);
  } catch (e) {
    const m = typeof e === "string" ? e : t("i_fail");
    if (er) er.textContent = m;
    else toast(m);
    return;
  }
  if (r.replace) {
    state = r.replace;
    norm();
  } else {
    if (state.sample) {
      state.harvests = [];
      state.otherIncome = [];
      state.monthPayouts = {};
      state.reviewedMonths = [];
      state.sample = false;
    }
    r.rows.forEach((x) => {
      const i = state.harvests.findIndex((h) => h.date === x.date);
      if (i >= 0) {
        x.id = state.harvests[i].id;
        state.harvests[i] = x;
      } else state.harvests.push(x);
    });
    (r.otherIncome || []).forEach((income) => {
      const i = state.otherIncome.findIndex((entry) => entry.id === income.id);
      if (i >= 0) state.otherIncome[i] = income;
      else state.otherIncome.push(income);
    });
  }
  if (!persist()) return;
  go("months");
  toast(t("t_imported", r.count));
}

/* ---------- PDF report: a print-ready page; the print screen saves it as PDF ---------- */
function openReport() {
  const hs = calc();
  if (!hs.length && !state.otherIncome.length) return toast(t("empty_h"));
  const fc = forecast(hs),
    ms = monthly(hs).reverse(),
    dates = hs
      .map((h) => h.date)
      .concat(state.otherIncome.map((income) => income.date))
      .sort(),
    last = hs[hs.length - 1],
    S = (f) => sum(hs.map(f));
  const tot = S((h) => h.total),
    loaded = S((h) => h.loaded),
    paid = S((h) => h.paid),
    received = S((h) => h.received),
    due = S((h) => h.due),
    credit = S((h) => h.credit),
    harvestInc = S((h) => h.inc),
    inc = harvestInc + sum(state.otherIncome.map((income) => income.amount)),
    ded = S((h) => h.dedT),
    net = inc - ded,
    base = Math.max(inc, ded, 1);
  const customCats = customDedSummary(hs),
    cats = CATS.map((c) => [t("cat_" + c), S((h) => h.dv[c])])
      .concat(customCats.map((d) => [d.name, d.amount]))
      .filter((c) => c[1] > 0)
      .sort((a, b) => b[1] - a[1]);
  const shareDeds = Array.from({ length: state.shares }, (_, i) => sum(hs.map((h) => (h.shareDeds || [])[i] || 0))),
    shareAdds = Array.from({ length: state.shares }, (_, i) => sum(hs.map((h) => (h.shareAdds || [])[i] || 0))),
    shareNets = shareDeds.map((d, i) => net / state.shares - d + shareAdds[i]);
  const T = (l, v) => `<div class="rt"><span>${l}</span><b>${v}</b></div>`,
    sh = state.shares > 1;
  $("#report").innerHTML =
    `<div class="rbar noprint"><button class="btn primary" id="repPrint">${t("rep_save")}</button><button class="btn" id="repClose">${t("rep_close")}</button><span>${t("rep_hint")}</span></div>
  <div class="page"><div class="rhead"><div><h1>${esc(state.estate)}</h1><p>${t("rep_title")} · ${fd(dates[0])} – ${fd(dates[dates.length - 1])} · ${t("n_harvests", hs.length)}</p></div><p class="rmeta">${t("rep_made", fd(todayMs()))}<br>${t("version", VER)}</p></div>
  <div class="rk num">${last ? T(t("rep_latest"), price(last.price)) : ""}${T(t("avg_price"), price(paid ? harvestInc / paid : 0))}${T(t("loaded"), N(loaded))}${T(t("harvested"), N(tot))}
    ${T(t("free"), N(S((h) => h.free)))}${T(t("rejected"), N(S((h) => h.rejected)))}${T(t("home"), N(S((h) => h.home)))}
    ${T(t("income"), money(inc))}${T(t("amount_received"), money(received))}${T(t("amount_due"), money(due))}${T(t("credit"), money(credit))}${T(t("deductions"), money(ded))}${T(t("balance"), money(net))}${shareNets.map((v, i) => T(esc(shareNameAt(i)), money(v))).join("")}</div>
  ${hs.length ? `<div class="card"><h2>${t("price_chart_h")}</h2><div class="chart" id="r-price"></div></div><div class="card"><h2>${t("per_harvest_h")}</h2>${LEG()}<div class="chart" id="r-nuts"></div></div>` : ""}
  <div class="card"><h2>${t("mbm")}</h2><div class="tbl"><table class="num"><thead><tr><th>${t("th_month")}</th><th>${t("price")}</th><th>${t("harvested")}</th><th>${t("th_loaded")}</th><th>${t("th_free")}</th><th>${t("th_rej")}</th><th>${t("th_home")}</th><th>${t("income")}</th><th>${t("deductions")}</th><th>${t("balance")}</th>${shareNets.map((_, i) => `<th>${esc(shareNameAt(i))}</th>`).join("")}</tr></thead>
    <tbody>${ms.map((m) => `<tr><td>${m.label}</td><td class="pr">${price(m.price)}</td><td>${N(m.total)}</td><td>${N(m.loaded)}</td><td>${N(m.free)}</td><td>${N(m.rej)}</td><td>${N(m.home)}</td><td>${N(m.inc)}</td><td>${N(m.ded)}</td><td><b>${N(m.net)}</b></td>${m.shareNet.map((v) => `<td>${N(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>
  <div class="card"><h2>${t("where_goes")}</h2><div class="flow">${cats.map((c) => `<div class="row"><span>${esc(c[0])}</span><div class="bar"><i style="width:${(c[1] / base) * 100}%"></i></div><span class="v num">${N(c[1])}<span class="pct">${inc ? Math.round((c[1] / inc) * 100) : 0}%</span></span></div>`).join("")}
    <div class="row net"><span>${t("balance")}</span><div class="bar"><i style="width:${(Math.max(0, net) / base) * 100}%"></i></div><span class="v num">${money(net)}<span class="pct">${inc ? Math.round((net / inc) * 100) : 0}%</span></span></div>
    ${sh ? `<div class="row share"><span>${esc(shareLab())} (÷ ${state.shares})</span><div class="bar"><i style="width:${(Math.max(0, net / state.shares) / base) * 100}%"></i></div><span class="v num">${money(net / state.shares)}</span></div>` : ""}</div></div>
  <div class="card"><h2>${t("share_after_ded")}</h2><div class="tbl"><table class="num"><thead><tr><th>${t("rep_item")}</th><th>${esc(shareLab())}</th><th>${t("share_deductions")}</th><th>${t("share_additions")}</th><th>${t("balance")}</th></tr></thead><tbody>${shareDeds.map((d, i) => `<tr><td>${esc(shareNameAt(i))}</td><td>${money(net / state.shares)}</td><td>− ${N(d)}</td><td>+ ${N(shareAdds[i])}</td><td><b>${money(shareNets[i])}</b></td></tr>`).join("")}</tbody></table></div></div>
  <div class="card"><h2>${t("rep_dedm")}</h2><div class="tbl"><table class="num"><thead><tr><th>${t("th_month")}</th>${CATS.map((c) => `<th>${t("cat_" + c)}</th>`).join("")}${customCats.map((d) => `<th>${esc(d.name)}</th>`).join("")}<th>${t("th_total")}</th></tr></thead>
    <tbody>${ms
      .map((m) => {
        const o = agg(m.list);
        return `<tr><td>${m.label}</td>${CATS.map((c) => `<td>${N(o.dv[c])}</td>`).join("")}${customCats.map((d) => `<td>${N((o.customDeds.find((x) => x.name.toLowerCase() === d.name.toLowerCase()) || {}).amount || 0)}</td>`).join("")}<td><b>${N(o.dedT)}</b></td></tr>`;
      })
      .join("")}</tbody></table></div></div>
  ${hs.length ? `<div class="card"><h2>${t("bal_per_h")}</h2><div class="chart" id="r-net"></div></div>` : ""}
  <div class="card"><h2>${t("rep_all")}</h2><div class="tbl"><table class="num"><thead><tr><th>${t("f_date")}</th><th>${t("price")}</th><th>${t("harvested")}</th><th>${t("th_loaded")}</th><th>${t("th_rej")}</th><th>${t("th_home")}</th><th>${t("th_free")}</th><th>${t("income")}</th><th>${t("amount_received")}</th><th>${t("amount_due")}</th><th>${t("credit")}</th><th>${t("deductions")}</th><th>${t("balance")}</th>${shareNets.map((_, i) => `<th>${esc(shareNameAt(i))}</th>`).join("")}<th>${t("buyer")}</th></tr></thead>
    <tbody>${hs
      .slice()
      .reverse()
      .map(
        (h) =>
          `<tr><td>${fd(h.date)}</td><td class="pr">${price(h.price)}</td><td>${N(h.total)}</td><td>${N(h.loaded)}</td><td>${N(h.rejected)}</td><td>${N(h.home)}</td><td>${N(h.free)}</td><td>${N(h.inc)}</td><td>${N(h.received)}</td><td>${N(h.due)}</td><td>${N(h.credit)}</td><td>${N(h.dedT)}</td><td><b>${N(h.net)}</b></td>${h.shareNet.map((v) => `<td>${N(v)}</td>`).join("")}<td>${esc(h.buyer || "")}</td></tr>`,
      )
      .join("")}</tbody></table></div></div>
  ${
    hs.some((h) => h.payments.length)
      ? `  <div class="card"><h2>${t("payments_title")}</h2><div class="tbl"><table class="num"><thead><tr><th>${t("f_date")}</th><th>${t("buyer")}</th><th>${t("payment_date")}</th><th>${t("payment_amount")}</th><th>${t("payment_note")}</th></tr></thead><tbody>${hs
          .flatMap((h) =>
            h.payments
              .slice()
              .sort((a, b) => a.date.localeCompare(b.date))
              .map(
                (payment) =>
                  `<tr><td>${fd(h.date)}</td><td>${esc(h.buyer || "")}</td><td>${fd(payment.date)}</td><td>${money(Number(payment.amount) || 0)}</td><td>${esc(payment.note || "")}</td></tr>`,
              ),
          )
          .join("")}</tbody></table></div></div>`
      : ""
  }
  ${
    state.otherIncome.length
      ? `<div class="card"><h2>${t("rep_income")}</h2><div class="tbl"><table class="num"><thead><tr><th>${t("income_month")}</th><th>${t("income_note")}</th><th>${t("income_amount")}</th></tr></thead><tbody>${state.otherIncome
          .slice()
          .sort((a, b) => a.date.localeCompare(b.date))
          .map(
            (income) =>
              `<tr><td>${incomeMonthLabel(income.date)}</td><td>${esc(income.note)}</td><td>${money(income.amount)}</td></tr>`,
          )
          .join("")}</tbody></table></div></div>`
      : ""
  }
  ${fc ? `<div class="card"><h2>${t("next3")}</h2><p class="hint">${t("rep_fc_note")}</p><div class="fc-list">${fc.steps.map((x) => `<div class="fc-item"><h3>${t("around", fd(x.date))}</h3><p class="num">≈ ${price(Math.round(x.price))} ${t("per_coconut")}</p><p class="num">≈ ${N(x.nuts)} ${t("harvested")} · ${t("n_loaded", N(x.loaded)).replace("≈ ", "")}</p><p class="num">≈ ${money(x.net)} · ${t("balance")}</p></div>`).join("")}</div></div>` : ""}
  </div>`;
  repName = "coconut-report-" + iso(todayMs());
  document.body.classList.add("rep");
  $("#report").scrollTop = 0;
  if (hs.length) {
    lineChart($("#r-price"), priceData(hs), [], {
      label: t("price_chart_h"),
      w: 720,
      h: 230,
    });
    barChart($("#r-nuts"), nutsData(hs), {
      label: t("per_harvest_h"),
      w: 720,
      h: 230,
    });
    barChart(
      $("#r-net"),
      hs.map((h) => ({
        label: fd(h.date, false),
        segs: [{ v: h.net, cls: h.net < 0 ? "neg" : "s1" }],
        tip: "",
      })),
      { label: t("bal_per_h"), w: 720, h: 200 },
    );
  }
}
/* ---------- monthly report: one month as a statement, with the full deduction breakdown ---------- */
let repName = "coconut-report";
function agg(l, otherIncome) {
  otherIncome = otherIncome || [];
  const S = (f) => sum(l.map(f)),
    dv = {};
  CATS.forEach((c) => (dv[c] = S((h) => h.dv[c])));
  const loaded = S((h) => h.loaded),
    harvestInc = S((h) => h.inc),
    received = S((h) => h.received || 0),
    due = S((h) => h.due || 0),
    credit = S((h) => h.credit || 0),
    dedT = S((h) => h.dedT),
    inc = harvestInc + sum(otherIncome.map((income) => income.amount));
  const shareDeds = Array.from({ length: state.shares }, (_, i) => S((h) => (h.shareDeds || [])[i] || 0)),
    shareAdds = Array.from({ length: state.shares }, (_, i) => S((h) => (h.shareAdds || [])[i] || 0)),
    net = inc - dedT,
    share = net / state.shares;
  return {
    total: S((h) => h.total),
    loaded,
    rejected: S((h) => h.rejected),
    home: S((h) => h.home),
    free: S((h) => h.free),
    inc,
    harvestInc,
    received,
    due,
    credit,
    otherIncome,
    dv,
    customDeds: customDedSummary(l),
    dedT,
    net,
    share,
    shareDeds,
    shareAdds,
    shareNet: shareDeds.map((d, i) => share - d + shareAdds[i]),
    price: loaded ? harvestInc / loaded : 0,
    otherNote: l
      .map((h) => h.otherNote)
      .filter(Boolean)
      .join("; "),
    transAuto: l.every((h) => blank(h.ded.transport)),
  };
}
function cocoTable(o) {
  const R = (l, v, c) => `<tr class="${c || ""}"><td>${l}</td><td>${v}</td></tr>`;
  return `<table class="st two num"><tbody>${R(t("harvested"), N(o.total))}${R(t("home"), "− " + N(o.home))}${R(t("rejected"), "− " + N(o.rejected))}${R(t("loaded_lab"), N(o.loaded), "tot")}${state.freePer > 0 ? R(t("free") + " (" + freeRule() + ")", N(o.free), "shr") : ""}</tbody></table>`;
}
function moneyTable(o) {
  const pc = (v) => (o.inc ? ((v / o.inc) * 100).toFixed(1) + "%" : "–"),
    bar = (v) =>
      `<span class="pb"><i style="width:${o.inc ? Math.min(100, Math.max(0, (v / o.inc) * 100)) : 0}%"></i></span>`;
  return `<table class="st num"><thead><tr><th>${t("rep_item")}</th><th>${t("rep_note")}</th><th>${t("rep_amount", esc(state.cur))}</th><th>${t("rep_pct")}</th></tr></thead><tbody>
  <tr class="sub"><td>${t("income")}</td><td>${N(o.loaded)} × ${price(o.price)}</td><td>${N(o.harvestInc)}</td><td>${o.inc ? pc(o.harvestInc) : "–"}</td></tr>
  ${o.otherIncome.length ? `<tr><td>${t("other_income")}</td><td>${o.otherIncome.map((income) => esc(income.note)).join("; ")}</td><td>${N(sum(o.otherIncome.map((income) => income.amount)))}</td><td>${pc(sum(o.otherIncome.map((income) => income.amount)))}</td></tr>` : ""}
  <tr><td>${t("amount_received")}</td><td>${t("payments_title")}</td><td>${N(o.received)}</td><td>–</td></tr>
  <tr><td>${t("amount_due")}</td><td>${t("payment_due_note")}</td><td>${N(o.due)}</td><td>–</td></tr>
  ${o.credit ? `<tr><td>${t("credit")}</td><td>${t("payments_title")}</td><td>${N(o.credit)}</td><td>–</td></tr>` : ""}
  ${CATS.map((c) => `<tr><td>${t("cat_" + c)}</td><td>${c === "transport" && o.transAuto ? t("per_harv_x", N(o.total), price(state.transRate)) : c === "other" ? esc(o.otherNote) : ""}</td><td>${o.dv[c] ? "− " + N(o.dv[c]) : "0"}</td><td>${bar(o.dv[c])}${pc(o.dv[c])}</td></tr>`).join("")}
  ${o.customDeds.map((d) => `<tr><td>${esc(d.name)}</td><td></td><td>− ${N(d.amount)}</td><td>${bar(d.amount)}${pc(d.amount)}</td></tr>`).join("")}
  <tr class="sub"><td>${t("rep_totded")}</td><td></td><td>− ${N(o.dedT)}</td><td>${pc(o.dedT)}</td></tr>
  <tr class="tot"><td>${t("balance")}</td><td></td><td>${money(o.net)}</td><td>${pc(o.net)}</td></tr>
  ${o.shareDeds.map((d, i) => `<tr class="shr"><td>${esc(shareNameAt(i))}</td><td>${money(o.share)} − ${money(d)} + ${money(o.shareAdds[i])}</td><td>${money(o.shareNet[i])}</td><td>${pc(o.shareNet[i])}</td></tr>`).join("")}</tbody></table>`;
}
function openMonthReport(key) {
  const ms = monthly(calc()),
    i = ms.findIndex((m) => m.key === key);
  if (i < 0) return toast(t("empty_h"));
  const m = ms[i],
    pm = ms[i - 1],
    o = agg(m.list, m.incomes),
    po = pm && agg(pm.list, pm.incomes),
    multi = m.list.length > 1;
  const T = (l, v) => `<div class="rt"><span>${l}</span><b>${v}</b></div>`;
  const det = (h) =>
    `<p class="rdet">${t("f_date")}: <b>${fd(h.date)}</b>${h.gap != null ? ` (${t("days_after", h.gap)})` : ""} · ${t("buyer")}: <b>${h.buyer ? esc(h.buyer) : t("not_rec")}</b>${h.contact ? ` · ${t("contact")}: <b>${esc(h.contact)}</b>` : ""} · ${t("entered_by")}: <b>${h.by ? esc(h.by) : t("not_rec")}</b>${h.note ? `<br>${esc(h.note)}` : ""}${
      h.payments.length
        ? `<br>${t("payments_title")}: ${h.payments
            .slice()
            .sort((a, b) => a.date.localeCompare(b.date))
            .map(
              (payment) =>
                `${fd(payment.date)} ${money(Number(payment.amount) || 0)}${payment.note ? " (" + esc(payment.note) + ")" : ""}`,
            )
            .join("; ")}`
        : ""
    }</p>`;
  const detIncome = (income) =>
    `<p class="rdet">${t("income_month")}: <b>${incomeMonthLabel(income.date)}</b> · ${t("other_income")}: <b>${money(income.amount)}</b><br>${esc(income.note)}</p>`;
  const block = (x, includeCoconuts) =>
    `${includeCoconuts ? `<div class="card"><h2>${t("rep_coco")}</h2>${cocoTable(x)}</div>` : ""}<div class="card"><h2>${t("rep_money")}</h2>${moneyTable(x)}</div>`;
  $("#report").innerHTML =
    `<div class="rbar noprint"><button class="btn primary" id="repPrint">${t("rep_save")}</button><button class="btn" id="repClose">${t("rep_close")}</button><span>${t("rep_hint")}</span></div>
  <div class="page"><div class="rhead"><div><h1>${esc(state.estate)}</h1><p>${t("rep_month")} · <b>${m.label}</b> · ${m.list.length ? t("n_harvests", m.list.length) : t("income_records", m.incomes.length)}</p></div><p class="rmeta">${t("rep_made", fd(todayMs()))}<br>${t("version", VER)}</p></div>
  <h3 class="sec">${t("rep_sum")}</h3>
  <div class="rk num">${m.list.length ? `${T(t("price_lab"), price(o.price))}${T(t("loaded"), N(o.loaded))}${T(t("harvested"), N(o.total))}${T(t("rejected"), N(o.rejected))}` : ""}
    ${T(t("income"), money(o.inc))}${T(t("amount_received"), money(o.received))}${T(t("amount_due"), money(o.due))}${T(t("credit"), money(o.credit))}${T(t("deductions"), money(o.dedT))}${T(t("balance"), money(o.net))}${o.shareNet.map((v, i) => T(esc(shareNameAt(i)), money(v))).join("")}</div>
  ${po ? `<div class="card rcmp"><b>${t("rep_cmp", pm.label)}</b><span>${t("price")} ${delta(o.price, po.price)}</span><span>${t("loaded")} ${delta(o.loaded, po.loaded)}</span><span>${t("income")} ${delta(o.inc, po.inc)}</span><span>${t("balance")} ${delta(o.net, po.net)}</span></div>` : ""}
  ${m.list.length === 0 ? `${m.incomes.map(detIncome).join("")}${block(o, false)}` : multi ? `<h3 class="sec">${t("rep_mtotal")}</h3>${block(o, true)}` + m.list.map((h) => `<h3 class="sec">${t("rep_harv_on", fd(h.date))}</h3>${det(h)}${block(agg([h]), true)}`).join("") : `<h3 class="sec">${t("rep_details")}</h3>${det(m.list[0])}${block(o, true)}`}
  <p class="rfoot">Coconut Estate Ledger · ${t("version", VER)} · ${t("rep_made", fd(todayMs()))}</p>
  </div>`;
  repName = "coconut-report-" + key;
  document.body.classList.add("rep");
  $("#report").scrollTop = 0;
}
function closeReport() {
  document.body.classList.remove("rep");
  $("#report").innerHTML = "";
}
function printReport() {
  const name = repName;
  if (NB && NB.printPage) {
    NB.printPage(name);
    return;
  }
  try {
    window.print();
  } catch (e) {}
}

/* ---------- events ---------- */
function setSkin(s) {
  if (s === "light") document.documentElement.setAttribute("data-skin", "light");
  else document.documentElement.removeAttribute("data-skin");
  LS.set("coconut-ledger-skin", s);
  mirror();
}
/* Seven taps on the version line in Data > App updates show the developer options. */
let devTimer = 0;
document.addEventListener("click", (e) => {
  const v = e.target.closest && e.target.closest("[data-devtap]");
  if (!v || devOpen) return;
  clearTimeout(devTimer);
  devTimer = setTimeout(() => (devTaps = 0), 3000);
  if (++devTaps >= 7) {
    devOpen = true;
    const c = $("#updCard");
    if (c) c.insertAdjacentHTML("beforeend", devTools());
    toast(t("dev_on"));
  }
});
document.addEventListener("click", async (e) => {
  const b = e.target.closest("button,[data-go]");
  if (!b) return;
  if (b.dataset.go) return go(b.dataset.go);
  if (b.dataset.lang) {
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    LS.set("coconut-ledger-lang", lang);
    mirror();
    syncNativeReminders();
    return render({ dir: still() ? "" : "fade" });
  }
  if (b.id === "skinBtn") return toggleSkin(e);
  if (b.id === "estateSyncSignIn")
    return runEstateAction(async () => {
      await ESTATE_SYNC.signIn($("#estateSyncEmail").value, $("#estateSyncPassword").value);
      estateSyncState.error = "";
      await initializeEstateSync();
    }, "sync_login_success");
  if (b.id === "estateSyncSignUp")
    return runEstateAction(async () => {
      await ESTATE_SYNC.signUp($("#estateSyncEmail").value, $("#estateSyncPassword").value);
      if (!ESTATE_SYNC.publicStatus().signedIn) {
        estateSyncState.error = "";
        toast(t("sync_email_confirm"));
      } else {
        await initializeEstateSync();
      }
    });
  if (b.id === "estateSyncSignOut")
    return runEstateAction(async () => {
      let logoutError;
      try {
        await ESTATE_SYNC.signOut();
      } catch (error) {
        logoutError = error;
      }
      estateSyncState = { estates: [], active: null, requests: [], invites: [], members: [], invite: null, error: "", busy: false };
      await useLocalLedger();
      setSync("", "sync_device");
      if (logoutError) throw logoutError;
    });
  if (b.id === "estateSyncLocal") return runEstateAction(useLocalLedger);
  if (b.id === "estateCreate")
    return runEstateAction(async () => {
      const name = $("#estateCreateName").value.trim();
      if (!name) throw new Error(t("sync_estate_name"));
      const estateId = await ESTATE_SYNC.createEstate(name);
      await refreshEstatePanel();
      await activateEstate(String(estateId));
    });
  if (b.id === "estateJoin")
    return runEstateAction(async () => {
      const result = await ESTATE_SYNC.requestAccess($("#estateJoinCode").value.trim(), $("#estateJoinName").value.trim());
      toast(t("sync_pending_owner") + " " + (result.estate_name || ""));
    });
  if (b.id === "estateActivate") return runEstateAction(() => activateEstate($("#estateSelect").value));
  if (b.id === "estateSyncNow") return runEstateAction(() => syncEstateNow(true));
  if (b.id === "estateNewInvite")
    return runEstateAction(async () => {
      estateSyncState.invite = await ESTATE_SYNC.createInvite(activeEstateId);
      if (!estateSyncState.invite) throw new Error("The server did not return an invitation.");
      await refreshEstatePanel();
    }, "sync_invite_created");
  if (b.dataset.revokeInvite)
    return runEstateAction(async () => {
      if (!(await confirmBox(t("sync_revoke_invite"), t("sync_revoke_invite_confirm"), t("sync_revoke_invite")))) return;
      await ESTATE_SYNC.revokeInvite(b.dataset.revokeInvite);
      if (estateSyncState.invite && estateSyncState.invite.invite_id === b.dataset.revokeInvite)
        estateSyncState.invite = null;
      await refreshEstatePanel();
    });
  if (b.dataset.approveRequest)
    return runEstateAction(async () => {
      const roleControl = Array.from(document.querySelectorAll("[data-request-role]")).find(
        (control) => control.dataset.requestRole === b.dataset.approveRequest,
      );
      if (!roleControl) throw new Error(t("sync_role_denied"));
      const role = roleControl.value;
      await ESTATE_SYNC.reviewRequest(b.dataset.approveRequest, true, role);
      await refreshEstatePanel();
    });
  if (b.dataset.rejectRequest)
    return runEstateAction(async () => {
      await ESTATE_SYNC.reviewRequest(b.dataset.rejectRequest, false, "viewer");
      await refreshEstatePanel();
    });
  if (b.dataset.removeMember)
    return runEstateAction(async () => {
      if (
        !(await confirmBox(
          t("sync_remove_member"),
          t("sync_remove_member_confirm"),
          t("sync_remove_member"),
        ))
      )
        return;
      await ESTATE_SYNC.removeMember(activeEstateId, b.dataset.removeMember);
      await refreshEstatePanel();
    });
  if (b.dataset.memberStatus)
    return runEstateAction(async () => {
      await ESTATE_SYNC.setMemberStatus(activeEstateId, b.dataset.memberStatus, b.dataset.status);
      await refreshEstatePanel();
    });
  if (b.dataset.globalAccount)
    return runEstateAction(async () => {
      const action = b.dataset.accountAction,
        message =
          action === "delete"
            ? t("sync_global_delete_confirm")
            : action === "ban"
              ? t("sync_global_ban_confirm")
              : t("sync_global_unban_confirm");
      if (!(await confirmBox(t("sync_global_account"), message, t("sync_global_account")))) return;
      try {
        await ESTATE_SYNC.manageAccount(action, activeEstateId, b.dataset.globalAccount);
      } catch (error) {
        const message = estateErrorText(error);
        throw new Error(/404|function.*not found/i.test(message) ? t("sync_global_action_failed") : message);
      }
      await refreshEstatePanel();
    });
  if (b.dataset.saveRoleFeatures)
    return runEstateAction(async () => {
      const role = b.dataset.saveRoleFeatures,
        selected = Array.from(document.querySelectorAll(`[data-role-feature="${role}"]`))
          .filter((control) => control.checked)
          .map((control) => control.value);
      await ESTATE_SYNC.setRoleFeatures(activeEstateId, role, selected);
      await refreshEstatePanel();
    });
  if (b.dataset.resolveLocal)
    return runEstateAction(() => resolveEstateConflict(b.dataset.resolveLocal, true));
  if (b.dataset.resolveCloud)
    return runEstateAction(() => resolveEstateConflict(b.dataset.resolveCloud, false));
  if (b.id === "fcScenarioRun") {
    const date = $("#fcScenarioDate").value,
      nuts = $("#fcScenarioNuts").value.trim(),
      priceValue = $("#fcScenarioPrice").value.trim(),
      last = calc().slice(-1)[0];
    if (!last || !validIsoDate(date) || pd(date) <= pd(last.date)) return toast(t("scenario_bad_date"));
    if (nuts && (!Number.isSafeInteger(Number(nuts)) || Number(nuts) <= 0)) return toast(t("scenario_bad_nuts"));
    if (priceValue && (!Number.isFinite(Number(priceValue)) || Number(priceValue) <= 0))
      return toast(t("scenario_bad_price"));
    forecastScenario = { date, nuts, price: priceValue };
    return render();
  }
  if (b.id === "fcScenarioReset") {
    forecastScenario = { date: "", nuts: "", price: "" };
    return render();
  }
  if (b.id === "addPayment") {
    $("#paymentFields").insertAdjacentHTML("beforeend", paymentRow({ date: iso(todayMs()) }));
    return;
  }
  if (b.hasAttribute("data-remove-payment")) {
    b.closest("[data-payment-row]").remove();
    return;
  }
  if (b.id === "addCustomDed") {
    renderCustomDedFields(readCustomDedFields().concat({ name: "", amount: "" }));
    return;
  }
  if (b.hasAttribute("data-remove-custom")) {
    b.closest(".custom-ded-row").remove();
    live();
    return;
  }
  if (b.id === "savePreset") {
    const name = $("#presetName").value.trim();
    if (!name) return toast(t("preset_name_required"));
    const old = state.deductionPresets.find((preset) => preset.name.toLowerCase() === name.toLowerCase());
    const preset = {
      id: old ? old.id : uid(),
      name,
      ded: Object.fromEntries(
        CATS.map((category) => [
          category,
          category === "transport" && $("#d-transport").value.trim() === "" ? null : val("d-" + category),
        ]),
      ),
      customDeds: readCustomDedFields(),
      shareDeds: readShareDedFields(),
      roundingAdjustment,
    };
    if (old) state.deductionPresets[state.deductionPresets.indexOf(old)] = preset;
    else state.deductionPresets.push(preset);
    if (!persist()) return;
    renderPresetOptions(preset.id);
    toast(t("preset_saved"));
    return;
  }
  if (b.id === "applyPreset") {
    const preset = state.deductionPresets.find((item) => item.id === $("#presetSelect").value);
    if (!preset) return toast(t("preset_required"));
    CATS.forEach((category) => {
      const amount = preset.ded && preset.ded[category];
      $("#d-" + category).value = category === "transport" && blank(amount) ? "" : amount || "";
    });
    renderCustomDedFields(preset.customDeds || []);
    renderShareDedFields(preset.shareDeds || []);
    roundingAdjustment = Math.max(0, Number(preset.roundingAdjustment) || 0);
    $("#f-ded-target").value = roundingBaseDeduction() + roundingAdjustment || "";
    live();
    return toast(t("preset_applied"));
  }
  if (b.id === "deletePreset") {
    const id = $("#presetSelect").value;
    if (!id) return toast(t("preset_required"));
    state.deductionPresets = state.deductionPresets.filter((preset) => preset.id !== id);
    if (!persist()) return;
    renderPresetOptions();
    return toast(t("preset_deleted"));
  }
  if (b.dataset.devSync)
    return runEstateAction(async () => {
      if (b.dataset.devSync === "reset") ESTATE_SYNC.resetConfig();
      else if (b.dataset.devSync === "save")
        ESTATE_SYNC.setConfig({ url: $("#devSyncUrl").value, anonKey: $("#devSyncKey").value });
      else return;
      estateSyncState.error = "";
      await initializeEstateSync();
    }, "sync_config_saved");
  if (b.dataset.upd && UPD) {
    const k = b.dataset.upd,
      inp = $("#u-link");
    if (k === "save" || (k === "check" && inp && inp.value.trim() !== (SH.updateUrl || ""))) {
      if (NB.setUpdateUrl(inp ? inp.value : "") !== "ok") return toast(t("upd_badlink"));
      readShell();
      if (k === "save") {
        const el = $("#updSt");
        if (el) el.innerHTML = updStatusHtml();
        return toast(t("upd_saved"));
      }
    }
    if (k === "check") return NB.checkForUpdates();
    if (k === "install") return NB.installUpdate();
    if (k === "restart") return NB.restart();
    return;
  }
  if (b.hasAttribute("data-pdf")) return openReport();
  if (b.dataset.mpdf) return openMonthReport(b.dataset.mpdf);
  if (b.hasAttribute("data-mpick")) return openMonthReport($("#mpick").value);
  if (b.id === "repPrint") return printReport();
  if (b.id === "repClose") return closeReport();
  if (b.id === "buyerSearch") {
    buyerQuery = $("#buyerSearchInput").value.trim();
    return render();
  }
  if (b.id === "clearBuyerSearch") {
    buyerQuery = "";
    return render();
  }
  if (b.dataset.reviewMonth) {
    const key = b.dataset.reviewMonth,
      index = state.reviewedMonths.indexOf(key);
    if (index >= 0) state.reviewedMonths.splice(index, 1);
    else state.reviewedMonths.push(key);
    if (!persist()) return render();
    return render();
  }
  if (b.dataset.savePayout) {
    const key = b.dataset.savePayout,
      inputs = Array.from(document.querySelectorAll(`[data-payout-month="${key}"]`)),
      amounts = inputs.map((input) => (input.value.trim() === "" ? 0 : Number(input.value)));
    if (amounts.some((amount) => !Number.isFinite(amount) || amount < 0)) return toast(t("e_custom_amount"));
    state.monthPayouts[key] = amounts;
    if (!persist()) return;
    render();
    return toast(t("payouts_saved"));
  }
  if (b.hasAttribute("data-add-income")) return openIncomeForm();
  if (b.dataset.editIncome) return openIncomeForm(b.dataset.editIncome);
  if (b.hasAttribute("data-close-income")) return closeD(incomeDlg);
  if (b.hasAttribute("data-add")) return openForm();
  if (b.dataset.edit) return openForm(b.dataset.edit);
  if (b.hasAttribute("data-close")) return closeD(dlg);
  if (b.dataset.range) {
    range = b.dataset.range;
    return render();
  }
  if (b.hasAttribute("data-clear")) {
    if (await confirmBox(t("c_clear_h"), t("c_clear_p"), t("clear"))) {
      state.harvests = [];
      state.otherIncome = [];
      state.monthPayouts = {};
      state.reviewedMonths = [];
      state.sample = false;
      if (!persist()) return;
      render();
    }
    return;
  }
  if (b.hasAttribute("data-wipe")) {
    if (await confirmBox(t("c_wipe_h"), t("c_wipe_p"), t("delete_all"))) {
      state.harvests = [];
      state.otherIncome = [];
      state.monthPayouts = {};
      state.reviewedMonths = [];
      state.deductionPresets = [];
      state.sample = false;
      if (!persist()) return;
      go("overview");
    }
    return;
  }
  if (b.dataset.exp === "share") return shareFile("coconut-harvests-" + iso(todayMs()) + ".csv", toCSV());
  if (b.dataset.exp === "json") return saveFile("coconut-backup-" + iso(todayMs()) + ".json", JSON.stringify(state));
  if (b.dataset.exp === "csv") return saveFile("coconut-harvests-" + iso(todayMs()) + ".csv", toCSV());
  if (b.dataset.exp === "copy") {
    try {
      await navigator.clipboard.writeText(JSON.stringify(state));
      toast(t("t_copied"));
    } catch (x) {
      $("#imp").value = JSON.stringify(state);
      toast(t("t_copyblock"));
    }
    return;
  }
  if (b.id === "s-save") {
    state.estate = $("#s-name").value.trim() || "My coconut estate";
    state.cur = $("#s-cur").value.trim() || "Rs";
    state.freePer = Math.max(0, Math.round(val("s-free")));
    state.shares = Math.max(1, Math.round(val("s-shares")) || 1);
    state.shareName = $("#s-sname").value.trim() || "share";
    state.transRate = Math.max(0, val("s-trans"));
    if (!persist()) return;
    render();
    return toast(t("t_details"));
  }
  if (b.id === "impGo") return doImport($("#imp").value);
  if (b.id === "backupCheck") {
    const text = $("#imp").value.trim();
    if (!text.startsWith("{")) {
      $("#impErr").textContent = t("backup_invalid");
      return;
    }
    try {
      const backup = importText(text);
      if (!backup.replace) throw t("backup_invalid");
      $("#impErr").textContent = t("backup_valid", backup.count);
    } catch (error) {
      $("#impErr").textContent = typeof error === "string" ? error : t("i_fail");
    }
    return;
  }
  if (b.id === "enableReminders" && UPD && NB.requestNotificationPermission) {
    NB.requestNotificationPermission();
    return;
  }
});
document.addEventListener("change", (e) => {
  if (e.target.id === "impFile" && e.target.files[0]) {
    const r = new FileReader();
    r.onload = () => doImport(String(r.result));
    r.readAsText(e.target.files[0]);
    e.target.value = "";
    return;
  }
  if (e.target.matches("[data-member-role]"))
    runEstateAction(async () => {
      await ESTATE_SYNC.changeRole(activeEstateId, e.target.dataset.memberRole, e.target.value);
      await refreshEstatePanel();
    });
});

if (LS.get("coconut-ledger-skin") === "light") setSkin("light");
route = activeEstateId ? "months" : ROUTES.indexOf(location.hash.slice(1)) >= 0 ? location.hash.slice(1) : "overview";
readShell();
/* Start-up: the loading screen plays while every tab is built and kept in memory. */
(async function boot() {
  const loader = $("#loader"),
    bar = $("#ldBar"),
    t0 = performance.now(),
    order = ROUTES.filter((r) => r !== route && canViewEstateRoute(r)),
    tick = () => new Promise((res) => setTimeout(res, 0));
  header();
  for (let i = 0; i < order.length; i++) {
    await tick();
    try {
      build(order[i], false);
    } catch (e) {
      console.error(e);
    }
    if (bar) bar.style.transform = `scaleX(${(i + 1) / (order.length + 1)})`;
  }
  if (loader && !still()) await new Promise((res) => setTimeout(res, Math.max(0, 2150 - (performance.now() - t0))));
  header();
  const el = build(route, true);
  rendered = true;
  moveInd();
  if (bar) bar.style.transform = "scaleX(1)";
  countUp();
  requestAnimationFrame(() =>
    requestAnimationFrame(() =>
      el.querySelectorAll(".prog").forEach((c) => (c.style.strokeDashoffset = c.dataset.off)),
    ),
  );
  /* once the opening animation is over, the page behaves like every other kept page */
  setTimeout(() => el.classList.add("calm"), 1800);
  if (loader) {
    loader.classList.add("bye");
    setTimeout(() => loader.remove(), 450);
  }
  initCloud();
  initializeEstateSync();
  setInterval(() => {
    if (document.visibilityState === "visible") syncEstateNow(false);
  }, 30000);
  mirror();
  syncNativeReminders();
  showPendingNote();
})();
/* An update applied while the app was in the background is announced when the person comes back. */
let pendingNote = "",
  pendingNoteDuration = 2600;
function showPendingNote() {
  const applied = SH.justApplied;
  pendingNoteDuration = applied === SECURITY_NOTICE_VERSION ? 8000 : 2600;
  pendingNote = applied
    ? applied === SECURITY_NOTICE_VERSION
      ? t("upd_security_applied", applied)
      : t("upd_applied", applied)
    : "";
  if (pendingNote && document.visibilityState !== "hidden") {
    toast(pendingNote, pendingNoteDuration);
    pendingNote = "";
  }
}
window.onAppResume = () => {
  if (pendingNote) {
    setTimeout(() => toast(pendingNote, pendingNoteDuration), 250);
    pendingNote = "";
  }
};
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    window.onAppResume();
    syncEstateNow(false);
  }
});
/* The Android app asks this before swapping in a new version in the background. */
window.canReload = () => {
  if (dlg.open || ask.open || document.body.classList.contains("rep")) return false;
  const a = document.activeElement;
  if (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) return false;
  const imp = $("#imp");
  return !(imp && imp.value.trim());
};

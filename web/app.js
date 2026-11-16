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
    deducted: "{0} deducted",
    balance: "Balance left",
    deductions: "Deductions",
    share_child: "Each child gets",
    share_custom: "Each {0} gets",
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
    fc_price_hint: "Follows the recent price trend, with the trend fading the further out it goes.",
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
    bk_note: "The CSV holds your harvests. The full backup also holds your settings.",
    imp_h: "Import records",
    imp_hint:
      "Choose a CSV or backup file from the phone, Drive or Gmail, or paste rows below. One harvest per line, in this order:",
    imp_ex: "Dates can be 2026-11-02 or 02/11/2026. Empty charges count as zero. Free coconuts are worked out for you.",
    imp_ph: "Paste rows or backup text here",
    imp_go: "Import pasted rows",
    choose_file: "Choose file",
    wipe_h: "Start over",
    wipe_hint: "Removes every harvest from this app. Save a backup first.",
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
    t_imported: "Imported {0} harvests",
    t_savedl: "File saved. Upload it to Drive from your Files app.",
    t_noprev: "No earlier harvest to copy from",
    c_del_h: "Delete this harvest?",
    c_del_p: "This removes the record for good.",
    c_clear_h: "Clear the sample records?",
    c_clear_p: "The app will be empty and ready for your own harvests.",
    c_wipe_h: "Delete all records?",
    c_wipe_p: "Every harvest will be removed from this app. This cannot be undone.",
    i_none: "Nothing to import. Paste rows or choose a file.",
    i_bad: "That backup text is damaged and cannot be read.",
    i_notbk: "That file is not a backup from this app.",
    i_date: 'Line {0}: "{1}" is not a date. Use 2026-11-02 or 02/11/2026.',
    i_count: "Line {0}: the harvested count is missing.",
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
    upd_banner: "Android app version {0} is ready to install.",
    upd_saved: "Link saved",
    upd_badlink: "The link must start with https://",
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
    deducted: "{0} අඩු කළා",
    balance: "ඉතිරි මුදල",
    deductions: "අඩු කිරීම්",
    share_child: "එක් දරුවෙකුට",
    share_custom: "එක් {0} කොටසකට",
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
    fc_price_hint: "මෑත මිල ගමන අනුව. ඈතට යන තරමට ඒ ගමන අඩුවෙන් සලකයි.",
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
    bk_note: "CSV ගොනුවේ ඇත්තේ අස්වනු දත්තයි. සම්පූර්ණ උපස්ථයේ සැකසුම්ද ඇත.",
    imp_h: "දත්ත ඇතුළත් කිරීම",
    imp_hint:
      "දුරකථනයෙන්, Drive හෝ Gmail වෙතින් CSV හෝ උපස්ථ ගොනුවක් තෝරන්න, නැත්නම් පහත පේළි අලවන්න. එක් පේළියකට එක් අස්වැන්නක්, මේ පිළිවෙළට:",
    imp_ex: "දිනය 2026-11-02 හෝ 02/11/2026 ලෙස. හිස් වියදම් බිංදුව ලෙස ගැනේ. නොමිලේ දුන් පොල් ගණන යෙදුම ගණනය කරයි.",
    imp_ph: "පේළි හෝ උපස්ථ පෙළ මෙහි අලවන්න",
    imp_go: "අලවපු පේළි ඇතුළත් කරන්න",
    choose_file: "ගොනුවක් තෝරන්න",
    wipe_h: "මුල සිට පටන් ගන්න",
    wipe_hint: "යෙදුමේ සියලු අස්වනු මකා දමයි. මුලින් උපස්ථයක් සුරකින්න.",
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
    t_imported: "අස්වනු {0}ක් ඇතුළත් කළා",
    t_savedl: "ගොනුව සුරැකුණා. Files යෙදුමෙන් Drive වෙත උඩුගත කරන්න.",
    t_noprev: "පිටපත් කිරීමට පෙර අස්වැන්නක් නැත",
    c_del_h: "මේ අස්වැන්න මකන්නද?",
    c_del_p: "මෙය සදහටම මැකී යයි.",
    c_clear_h: "ආදර්ශ දත්ත ඉවත් කරන්නද?",
    c_clear_p: "යෙදුම හිස් වී ඔබේ දත්ත සඳහා සූදානම් වේ.",
    c_wipe_h: "සියලු දත්ත මකන්නද?",
    c_wipe_p: "සියලු අස්වනු මැකී යයි. මෙය ආපසු ගත නොහැක.",
    i_none: "ඇතුළත් කිරීමට කිසිවක් නැත. පේළි අලවන්න හෝ ගොනුවක් තෝරන්න.",
    i_bad: "ඒ උපස්ථ පෙළ හානි වී ඇත, කියවිය නොහැක.",
    i_notbk: "ඒ ගොනුව මේ යෙදුමේ උපස්ථයක් නොවේ.",
    i_date: '{0} වන පේළිය: "{1}" දිනයක් නොවේ. 2026-11-02 හෝ 02/11/2026 ලෙස දෙන්න.',
    i_count: "{0} වන පේළිය: කැඩූ පොල් ගණන නැත.",
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
    upd_banner: "Android යෙදුම් සංස්කරණය {0} ස්ථාපනයට සූදානම්.",
    upd_saved: "සබැඳිය සුරැකුණා",
    upd_badlink: "සබැඳිය https:// වලින් පටන් ගත යුතුයි.",
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

const VER = "1.7.0";
/* Your company, shown at the bottom of the Data tab. Leave it empty to show the app name instead. */
const COMPANY = "";
const FIRST_YEAR = 2026;
const MIN_SHELL = 6; /* the oldest Android app (version code) this page works with */
const CATS = ["harvest", "cart", "transport", "church", "personal", "fertilizer", "power", "other"];
const KEY = "coconut-ledger-v1",
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
  };
}
let state;
try {
  state = JSON.parse(localStorage.getItem(KEY));
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
if (!state || !Array.isArray(state.harvests)) state = sample();
function mirror() {
  if (!NBX) return;
  try {
    NB.saveState(
      JSON.stringify({
        state: state.sample ? null : state,
        ui: { lang, skin: LS.get("coconut-ledger-skin") || "neon", me: LS.get(ME) || "" },
      }),
    );
  } catch (e) {}
}
function norm() {
  if (state.freePer == null || !isFinite(state.freePer)) state.freePer = 100;
  if (!(state.shares >= 1)) state.shares = 2;
  if (!state.shareName) state.shareName = "child";
  if (!state.cur) state.cur = "Rs";
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
function persist(touch) {
  if (touch !== false) {
    state.updatedAt = Date.now();
  }
  LS.set(KEY, JSON.stringify(state));
  mirror();
  if (touch !== false) pushCloud();
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
  if (!window.claude || typeof window.claude.use !== "function") return;
  let db = null;
  try {
    db = await window.claude.use("db");
  } catch (e) {}
  if (!db) return;
  try {
    docRef = db.doc("estate/main");
    const s = await docRef.get(),
      d = s.exists ? s.data() : null;
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
  if (!docRef || state.sample) return;
  clearTimeout(pushT);
  pushT = setTimeout(async function run() {
    if (writing) {
      queued = true;
      return;
    }
    writing = true;
    setSync("busy", "sync_busy");
    try {
      await docRef.set({ updatedAt: state.updatedAt, json: JSON.stringify(state) });
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
const money = (v) => (v < 0 ? "−" : "") + state.cur + " " + N(Math.abs(v));
const price = (v) => state.cur + " " + NF2.format(Math.round(v * 100) / 100);
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
const catName = (k, h) => t("cat_" + k) + (k === "other" && h && h.otherNote ? ": " + h.otherNote : "");
/* Income = Loaded × price. Home use comes off the whole harvest first; what is left and not loaded is Rejected:
   rejected = harvested − home use − loaded. The buyer's free coconuts (1 per 100 loaded) are shown but do not reduce income.
   Transport cart = harvested × rate unless typed in. */
const blank = (v) => v == null || v === "";
const dedVal = (h, c) => (c === "transport" && blank(h.ded[c]) ? (+h.total || 0) * state.transRate : +h.ded[c] || 0);
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
    const ded = sum(CATS.map((c) => dv[c])),
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
      inc,
      dedT: ded,
      net,
      share: net / state.shares,
      gap: i ? Math.round((pd(h.date) - pd(hs[i - 1].date)) / DAY) : null,
    });
  });
}
function monthly(hs) {
  const m = new Map();
  hs.forEach((h) => {
    const k = h.date.slice(0, 7);
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(h);
  });
  return Array.from(m, ([k, l]) => {
    const paid = sum(l.map((h) => h.paid)),
      inc = sum(l.map((h) => h.inc)),
      net = sum(l.map((h) => h.net));
    return {
      key: k,
      label: MONLS[lang][+k.slice(5) - 1] + " " + k.slice(0, 4),
      list: l,
      total: sum(l.map((h) => h.total)),
      loaded: sum(l.map((h) => h.loaded)),
      paid,
      free: sum(l.map((h) => h.free)),
      rej: sum(l.map((h) => h.rejected)),
      home: sum(l.map((h) => h.home)),
      inc,
      ded: inc - net,
      net,
      share: net / state.shares,
      price: paid ? inc / paid : mean(l.map((h) => h.price)),
    };
  });
}

/* ---------- forecast ---------- */
function forecast(hs) {
  const n = hs.length;
  if (n < 3) return null;
  const gaps = hs
      .slice(1)
      .map((h) => h.gap)
      .filter((g) => g > 0),
    g6 = gaps.slice(-6);
  if (!g6.length) return null;
  const gap = Math.max(1, Math.round(ewma(g6, 0.35)));
  const rates = hs
    .slice(1)
    .filter((h) => h.gap > 0)
    .map((h) => h.total / h.gap)
    .slice(-6);
  const rate = ewma(rates, 0.4),
    nuts = rate * gap;
  const cv = mean(rates) ? sd(rates) / mean(rates) : 0,
    nutsPm = Math.max(0.05, cv) * nuts;
  const paidRate = ewma(
      hs.slice(-6).map((h) => (h.total ? h.paid / h.total : 0)),
      0.4,
    ),
    loadRate = ewma(
      hs.slice(-6).map((h) => (h.total ? h.loaded / h.total : 0)),
      0.4,
    );
  // Holt's damped trend on price
  const pr = hs.map((h) => h.price),
    al = 0.5,
    be = 0.3,
    phi = 0.85;
  let Lv = pr[0],
    T = pr[1] - pr[0],
    errs = [];
  for (let i = 1; i < n; i++) {
    const f = Lv + phi * T;
    errs.push(pr[i] - f);
    const L2 = al * pr[i] + (1 - al) * f;
    T = be * (L2 - Lv) + (1 - be) * phi * T;
    Lv = L2;
  }
  const rmse = Math.sqrt(mean(errs.map((e) => e * e)));
  const dedT = sum(CATS.map((c) => mean(hs.slice(-6).map((h) => h.dv[c])))),
    last = pd(hs[n - 1].date),
    steps = [];
  let ph = 0;
  for (let k = 1; k <= 3; k++) {
    ph += Math.pow(phi, k);
    const p = Math.max(0, Lv + ph * T),
      pm = Math.max(rmse, p * 0.03) * Math.sqrt(k),
      paid = nuts * paidRate,
      net = paid * p - dedT;
    steps.push({
      k,
      date: last + k * gap * DAY,
      nuts,
      nutsLo: Math.max(0, nuts - nutsPm),
      nutsHi: nuts + nutsPm,
      paid,
      loaded: nuts * loadRate,
      price: p,
      pLo: Math.max(0, p - pm),
      pHi: p + pm,
      inc: paid * p,
      dedT,
      net,
      share: net / state.shares,
    });
  }
  const conf = n >= 9 && cv < 0.2 ? 3 : n >= 6 ? 2 : 1;
  return { gap, gapLo: Math.min.apply(0, g6), gapHi: Math.max.apply(0, g6), rate, paidRate, steps, conf, n };
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
      t({ nolink: "upd_none", net: "upd_err_net", sig: "upd_err_sig", file: "upd_err_file" }[s.code] || "upd_err_bad"),
    );
  else if (!SH.pendingPage && !SH.apkName && SH.lastCheck) out.push(t("upd_ok", fdt(SH.lastCheck)));
  if (SH.pendingPage) out.push(t("upd_ready", esc(SH.pendingPage)) + bt("restart", "upd_restart"));
  if (SH.apkName && !busy) out.push(t("upd_apk", esc(SH.apkName)) + bt("install", "upd_install", 1));
  return out.join("<br>");
}
/* Everyone sees only the version and what the updater is doing. Tapping the version line 7 times shows the
   developer options (update link and Check for updates), used to try a test release on one phone. */
let devTaps = 0,
  devOpen = false;
const devTools = () =>
  devOpen
    ? `<div class="devtools"><label class="fld">${t("upd_link")}<input id="u-link" type="url" inputmode="url" autocomplete="off" spellcheck="false" value="${esc(SH.updateUrl || "")}" placeholder="https://raw.githubusercontent.com/…/update.json"></label>
    <div class="btnrow" style="margin-top:10px"><button class="btn" data-upd="save">${t("upd_save")}</button><button class="btn primary" data-upd="check">${t("upd_check")}</button></div></div>`
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
  `<div class="card empty"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="16" cy="18" r="10"/><path d="M16 8c0-3 2-5 5-5M16 8c0-2-2-4-5-4"/></svg><h2>${t("empty_h")}</h2><p>${t("empty_p")}</p><button class="btn primary" data-add>${t("add_harvest")}</button></div>`;
const LEG = () =>
  `<div class="legend"><span><i class="k1"></i>${t("loaded")}</span><span><i class="k3"></i>${t("rejected")}</span><span><i class="k4"></i>${t("home")}</span></div>`;
function flowRows(h) {
  const rows = CATS.map((c) => [catName(c, h), h.dv[c]])
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
    (state.shares > 1
      ? `<div class="row share"><span>${esc(shareLab())} (÷ ${state.shares})</span><div class="bar"><i style="width:${(Math.max(0, h.share) / base) * 100}%"></i></div><span class="v num ${h.net < 0 ? "neg-t" : ""}">${money(h.share)}</span></div>`
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
    fc = forecast(hs);
  const tot = sum(yr.map((h) => h.total)),
    paid = sum(yr.map((h) => h.paid)),
    inc = sum(yr.map((h) => h.inc)),
    net = sum(yr.map((h) => h.net)),
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
    <div class="facts"><div><b class="num">≈ ${price(Math.round(s.price))}</b>${t("exp_price")}</div><div><b class="num">≈ ${N(s.loaded)}</b>${t("loaded")}</div><div><b class="num">≈ ${money(s.share)}</b>${esc(shareLab())}</div></div>
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
    barChart($("#c-nuts"), nutsData(hs.slice(-12)), { label: t("per_harvest_h") });
  });
  return (
    banner() +
    `<div class="grid stag">
  <div class="grid heroes">
    <div class="card pricehero"><div class="lab">${t("price_lab")} · ${fd(last.date)}</div>
      <div class="pval num"><small>${esc(state.cur)}</small><span data-count="${last.price}">${N(last.price)}</span><span class="per">${t("per_coconut")}</span></div>
      <div class="cmp">${prev ? `${delta(last.price, prev.price)} <span>${t("from_prev", price(prev.price))}</span>` : t("first_price")}</div>
      <div class="spark" id="c-spark"></div>
      <div class="mini num"><div><b>${price(paid ? inc / paid : last.price)}</b>${t("avg12")}</div><div><b>${price(Math.max.apply(0, prs))}</b>${t("highest")}</div><div><b>${price(Math.min.apply(0, prs))}</b>${t("lowest")}</div>${fc ? `<div><b>≈ ${price(Math.round(fc.steps[0].price))}</b>${t("exp_next")}</div>` : ""}</div></div>
    <div class="card tothero"><div class="lab">${t("loaded_lab")} · ${fd(last.date)}</div>
      <div class="pval num"><span data-count="${last.loaded}">${N(last.loaded)}</span>${prev ? delta(last.loaded, prev.loaded) : ""}<span class="per">${t("harv_n", N(last.total))}</span></div>
      <div class="split" role="img" aria-label="${esc(t("split_aria"))}">${parts.map((p, i) => (p[2] > 0 ? `<i class="${p[0]}" style="flex:${p[2]};animation-delay:${i * 80}ms"></i>` : "")).join("")}</div>
      <div class="splitleg num">${parts.map((p) => `<div><i class="${p[0]}"></i><span><b>${N(p[2])}</b>${p[1]}</span></div>`).join("")}${state.freePer > 0 ? `<div><i class="k2"></i><span><b>${N(last.free)}</b>${t("free")} (${freeRule()})</span></div>` : ""}</div></div>
  </div>
  <div class="grid kpis sm">
    ${kpi(t("loaded"), cnt(sum(yr.map((h) => h.loaded))), t("free") + " " + N(sum(yr.map((h) => h.free))))}
    ${kpi(t("k_harv12"), cnt(tot), t("k_harv_foot", yr.length, N(sum(yr.map((h) => h.rejected))), N(sum(yr.map((h) => h.home)))))}
    ${kpi(t("income"), cnt(inc, state.cur), t("deducted", money(inc - net)))}
    ${kpi(t("balance"), cnt(net, state.cur), state.shares > 1 ? `${esc(shareLab())} ${money(net / state.shares)}` : "")}
  </div>
  <div class="grid two">
    <div class="card"><h2>${t("latest_money")}</h2><p class="hint">${last.buyer ? t("bought_by", esc(last.buyer)) + " " : ""}${t("latest_hint")}</p>${flowRows(last)}</div>
    ${hero}
  </div>
  <div class="card"><h2>${t("per_harvest_h")}</h2><p class="hint">${t("per_harvest_hint", Math.min(12, hs.length))}</p>${LEG()}<div class="chart" id="c-nuts"></div></div>
  </div>`
  );
}
function vMonths(hs) {
  if (!hs.length) return banner() + emptyState();
  const F = (l, v, c) => `<div class="f ${c || ""}"><span>${l}</span><b class="num">${v}</b></div>`;
  return (
    banner() +
    monthly(hs)
      .reverse()
      .map(
        (m) =>
          `<div class="mhead"><h2>${m.label}</h2><button class="btn small" data-mpdf="${m.key}">${t("btn_mpdf")}</button><div class="msum num"><b>${price(m.price)}</b> ${t("per_coconut")} · <b>${N(m.loaded)}</b> ${t("bought_s")} · ${N(m.total)} ${t("harvested")} · ${t("balance")} <b>${money(m.net)}</b>${state.shares > 1 ? ` · ${esc(shareLab())} <b>${money(m.share)}</b>` : ""}</div></div>
  <div class="rows">` +
          m.list
            .slice()
            .reverse()
            .map((h, i) => {
              const dl = CATS.filter((c) => h.dv[c] > 0);
              return `<div class="card hrow" style="animation-delay:${Math.min(i, 10) * 30}ms">
    <div class="when"><b>${fd(h.date)}</b>${h.gap != null ? `<span class="chip">${t("days_after", h.gap)}</span>` : `<span class="chip">${t("first_rec")}</span>`}<span style="flex:1"></span><button class="btn small" data-edit="${esc(h.id)}">${t("edit")}</button></div>
    <div class="hgrid">${F(t("price"), price(h.price), "key")}${F(t("loaded"), N(h.loaded), "key")}${F(t("harvested"), N(h.total))}${F(t("free"), N(h.free))}${F(t("rejected"), N(h.rejected))}${F(t("home"), N(h.home))}
      ${F(t("income"), money(h.inc))}${F(t("deductions"), "− " + N(h.dedT))}<div class="f"><span>${t("balance")}</span><b class="num ${h.net < 0 ? "neg-t" : "pos-t"}">${money(h.net)}</b></div>${state.shares > 1 ? F(esc(shareLab()), money(h.share)) : ""}</div>
    ${dl.length ? `<details class="dd"><summary>${t("ded_break")}</summary><ul class="num">${dl.map((c) => `<li><span>${esc(catName(c, h))}</span><b>${N(h.dv[c])}</b></li>`).join("")}</ul></details>` : ""}
    <div class="who"><span>${t("buyer")}: <b>${h.buyer ? esc(h.buyer) : t("not_rec")}</b></span>${h.contact ? `<span>${t("contact")}: <a href="tel:${esc(String(h.contact).replace(/[^\d+]/g, ""))}">${esc(h.contact)}</a></span>` : ""}<span>${t("entered_by")}: <b>${h.by ? esc(h.by) : t("not_rec")}</b></span></div>
    ${h.note ? `<p class="note">${esc(h.note)}</p>` : ""}</div>`;
            })
            .join("") +
          `</div>`,
      )
      .join("")
  );
}
function vInsights(all) {
  if (!all.length) return banner() + emptyState();
  const lastMs = pd(all[all.length - 1].date),
    hs = range === "all" ? all : all.filter((h) => pd(h.date) > lastMs - +range * 30.5 * DAY);
  const tot = sum(hs.map((h) => h.total)),
    rej = sum(hs.map((h) => h.rejected)),
    paid = sum(hs.map((h) => h.paid)),
    inc = sum(hs.map((h) => h.inc)),
    ded = sum(hs.map((h) => h.dedT)),
    net = inc - ded;
  const gaps = hs.map((h) => h.gap).filter((g) => g > 0);
  const cats = CATS.map((c) => [t("cat_" + c), sum(hs.map((h) => h.dv[c]))])
      .filter((c) => c[1] > 0)
      .sort((a, b) => b[1] - a[1]),
    base = Math.max(inc, ded, 1);
  const best = hs.slice().sort((a, b) => b.net - a.net)[0],
    ms = monthly(hs).reverse();
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
    ${kpi(t("avg_price"), cnt(paid ? inc / paid : 0, state.cur), t("per_paid"))}
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
      ${cats.map((c, i) => `<div class="row"><span>${c[0]}</span><div class="bar"><i style="width:${(c[1] / base) * 100}%;animation-delay:${i * 50}ms"></i></div><span class="v num">${N(c[1])}<span class="pct">${inc ? Math.round((c[1] / inc) * 100) : 0}%</span></span></div>`).join("")}
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
    d = new Date(),
    nm = new Date(Date.UTC(d.getFullYear(), d.getMonth() + 1, 1)),
    ne = Date.UTC(d.getFullYear(), d.getMonth() + 2, 1);
  const inM = fc.steps.filter((x) => x.date >= nm.getTime() && x.date < ne),
    mName = MONLS[lang][nm.getUTCMonth()] + " " + nm.getUTCFullYear();
  const mTxt = inM.length
    ? t(
        "nm_yes",
        N(sum(inM.map((x) => x.nuts))),
        price(Math.round(inM[0].price)),
        inM.map((x) => fd(x.date, false)).join(", "),
      )
    : t("nm_no", mName, fd(s.date));
  const recent = hs.slice(-9);
  drawFns.push(() => {
    lineChart(
      $("#f-price"),
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
      $("#f-nuts"),
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
  });
  return (
    banner() +
    `<div class="grid stag">
  <div class="grid kpis">
    ${kpi(t("exp_price_k"), "≈ " + cnt(s.price, state.cur), t("likely", N(s.pLo), N(s.pHi)))}
    ${kpi(t("exp_coconuts"), "≈ " + cnt(s.nuts), t("n_loaded", N(s.loaded)) + " · " + t("likely", N(s.nutsLo), N(s.nutsHi)))}
    ${kpi(t("next_date"), fd(s.date, false), t("usually", fc.gapLo, fc.gapHi))}
    ${kpi(t("exp_bal"), "≈ " + cnt(s.net, state.cur), state.shares > 1 ? `${esc(shareLab())} ≈ ${money(s.share)}` : t("after_charges", money(s.dedT)))}
  </div>
  <div class="card"><h2>${t("next_month", mName)}</h2><p style="margin:4px 0 0">${mTxt}</p></div>
  <div class="grid two">
    <div class="card"><h2>${t("fc_price_h")}</h2><p class="hint">${t("fc_price_hint")}</p><div class="legend"><span><i></i>${t("paid_so_far")}</span><span><i class="d"></i>${t("fc_range")}</span></div><div class="chart" id="f-price"></div></div>
    <div class="card"><h2>${t("fc_harv_h")}</h2><p class="hint">${t("fc_rate", fc.rate.toFixed(1))}</p><div class="legend"><span><i></i>${t("harvested")}</span><span><i class="g"></i>${t("forecast_w")}</span></div><div class="chart" id="f-nuts"></div></div>
  </div>
  <div class="card"><h2>${t("next3")}</h2><p class="hint">${t("next3_hint", (fc.paidRate * 100).toFixed(0))}</p><div class="fc-list">
    ${fc.steps.map((x) => `<div class="fc-item"><h3>${t("around", fd(x.date))}</h3><p class="num">≈ ${price(Math.round(x.price))} ${t("per_coconut")}</p><p class="num">${t("n_paid_for", N(x.nuts), N(x.paid))}</p><p class="num">≈ ${money(x.net)} · ${t("balance")}</p>${state.shares > 1 ? `<p class="num"><b style="color:var(--ink)">≈ ${money(x.share)} · ${esc(shareLab())}</b></p>` : ""}</div>`).join("")}</div></div>
  <div class="card"><h2 style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">${t("trust_h")} <span class="meter"><i class="on"></i><i class="${fc.conf > 1 ? "on" : ""}"></i><i class="${fc.conf > 2 ? "on" : ""}"></i></span><span class="chip">${t("conf" + fc.conf)}</span></h2>
    <p style="margin:6px 0 0;color:var(--ink-2);max-width:65ch">${t("trust_p", fc.n)}</p></div>
  </div>`
  );
}
function legal() {
  const yr = new Date().getFullYear(),
    years = yr > FIRST_YEAR ? FIRST_YEAR + "–" + yr : String(FIRST_YEAR),
    owner = COMPANY.trim() || "Coconut Ledger";
  return `<footer class="legal">
    <div class="legal-mark">Coconut Ledger<sup>™</sup></div>
    <p>© ${years} ${esc(owner)}. ${t("rights")}</p>
    <p class="num">${t("version", VER)}${UPD && SH.versionName ? " · Android " + esc(SH.versionName) : ""}</p>
    <p class="legal-made">${t("made")}</p>
  </footer>`;
}
function vData() {
  return (
    banner() +
    `<div class="grid datagrid stag">
  <div class="card"><h2>${t("bk_h")}</h2><p class="hint">${t("bk_hint")}</p>
    <div class="btnrow"><button class="btn primary" data-exp="share">${t("btn_share")}</button><button class="btn" data-pdf>${t("btn_pdf")}</button><button class="btn" data-exp="csv">${t("btn_csv")}</button><button class="btn" data-exp="json">${t("btn_json")}</button><button class="btn" data-exp="copy">${t("btn_copy")}</button><a class="btn" href="https://drive.google.com/drive/my-drive" target="_blank" rel="noopener">${t("open_drive")}</a></div>
    <p class="hint" style="margin:10px 0 0">${t("bk_note")}</p>
    ${((ms) => (ms.length ? `<div class="btnrow" style="margin-top:12px;align-items:center"><label class="fld" style="flex:1 1 180px">${t("rep_pick")}<select id="mpick">${ms.map((m) => `<option value="${m.key}">${m.label}</option>`).join("")}</select></label><button class="btn" data-mpick style="align-self:flex-end">${t("rep_open")}</button></div>` : ""))(monthly(calc()).reverse())}</div>
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
    <p style="margin:0 0 10px"><code>date, harvested, rejected, home use, price, harvesting, cart, transport, church, my money, fertilizer, power, other, buyer name, buyer contact, entered by, note, other note, free to buyer, loaded</code></p>
    <p class="hint">${t("imp_ex")}</p>
    <textarea class="box" id="imp" rows="5" placeholder="${esc(t("imp_ph"))}" aria-label="${esc(t("imp_h"))}"></textarea>
    <div class="btnrow" style="margin-top:10px"><button class="btn primary" id="impGo">${t("imp_go")}</button><label class="btn">${t("choose_file")}<input type="file" id="impFile" accept=".csv,.json,.txt,text/csv,text/comma-separated-values,application/json,text/plain" hidden></label></div>
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
let rendered = false;
function render(o) {
  o = o || {};
  const first = !rendered;
  rendered = true;
  const hs = calc();
  drawFns = [];
  tips.clear();
  applyStatic();
  $("#estateName").textContent = state.estate;
  $("#viewSub").textContent = t("sub_" + route);
  document
    .querySelectorAll(".rail [data-go]")
    .forEach((b) =>
      b.dataset.go === route ? b.setAttribute("aria-current", "page") : b.removeAttribute("aria-current"),
    );
  view.innerHTML = `<div class="view${first ? "" : " calm" + (o.dir ? " dir-" + o.dir : "")}">${{ overview: vOverview, months: vMonths, insights: vInsights, forecast: vForecast, data: vData }[route](hs)}</div>`;
  draw();
  moveInd();
  if (first) {
    countUp();
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        document.querySelectorAll(".prog").forEach((c) => (c.style.strokeDashoffset = c.dataset.off)),
      ),
    );
  } else document.querySelectorAll(".prog").forEach((c) => (c.style.strokeDashoffset = c.dataset.off));
}
function draw() {
  widthOf.clear();
  document.querySelectorAll(".chart,.spark").forEach((el) => widthOf.set(el, el.clientWidth));
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
  document.querySelectorAll("[data-count]").forEach((el) => {
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
/* Smooth changes. Uses the browser's view transitions where it has them (snapshots move on the graphics chip, so they stay smooth),
   otherwise a plain slide. Only transform and opacity animate. */
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
let goToken = 0;
function go(r) {
  if (ROUTES.indexOf(r) < 0) r = "overview";
  const dir = r === route ? "" : ROUTES.indexOf(r) > ROUTES.indexOf(route) ? "fwd" : "back",
    tk = ++goToken;
  route = r;
  if (location.hash !== "#" + r) {
    try {
      history.replaceState(null, "", "#" + r);
    } catch (e) {}
  }
  document
    .querySelectorAll(".rail [data-go]")
    .forEach((b) =>
      b.dataset.go === route ? b.setAttribute("aria-current", "page") : b.removeAttribute("aria-current"),
    );
  moveInd();
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      if (tk !== goToken) return;
      render({ dir: still() ? "" : dir });
      scrollTo(0, 0);
    }),
  );
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
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 560, easing: "cubic-bezier(.65,0,.35,1)", pseudoElement: "::view-transition-new(root)" },
        ),
      )
      .catch(() => {});
}
addEventListener("hashchange", () => {
  const r = location.hash.slice(1);
  if (ROUTES.indexOf(r) >= 0 && r !== route) go(r);
});
let rz;
addEventListener("resize", () => {
  moveInd();
  clearTimeout(rz);
  rz = setTimeout(draw, 150);
});

/* ---------- dialogs ---------- */
function toast(m) {
  const el = $("#toast");
  el.textContent = m;
  el.classList.add("on");
  clearTimeout(toast.t);
  toast.t = setTimeout(() => el.classList.remove("on"), 2600);
}
const dlg = $("#dlg"),
  ask = $("#ask");
let editId = null;
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
const val = (id) => {
  const v = parseFloat($("#" + id).value);
  return isFinite(v) ? v : 0;
};
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
    net =
      inc - sum(CATS.map((c) => (c === "transport" && $("#d-transport").value.trim() === "" ? autoT : val("d-" + c))));
  return { taken: loaded, rej, autoT, auto, free, paid: loaded, inc, net };
}
function live() {
  const c = liveCalc();
  $("#f-free").placeholder = t("auto", N(c.auto));
  $("#d-transport").placeholder = t("auto", N(c.autoT));
  $("#l-paid").textContent = N(c.rej);
  $("#l-inc").textContent = money(c.inc);
  const n = $("#l-net");
  n.textContent = money(c.net);
  n.className = "num " + (c.net < 0 ? "neg-t" : "");
  $("#l-share").textContent = money(c.net / state.shares);
}
$("#hform").addEventListener("input", live);
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
  CATS.forEach((c) => ($("#d-" + c).value = h && h.ded[c] ? h.ded[c] : ""));
  $("#copyLast").style.display = prevOf(editId) ? "" : "none";
  live();
  openD(dlg);
}
$("#copyLast").onclick = () => {
  const l = prevOf(editId);
  if (!l) return toast(t("t_noprev"));
  CATS.forEach((c) => ($("#d-" + c).value = blank(l.ded[c]) ? "" : l.ded[c] || ""));
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
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return (err.textContent = t("e_date"));
  if (pr <= 0) return (err.textContent = t("e_price"));
  if (total <= 0) return (err.textContent = t("e_total"));
  if (lv === "" || val("f-loaded") <= 0) return (err.textContent = t("e_loadreq"));
  if (val("f-loaded") + home > total) return (err.textContent = t("e_loaded"));
  if (fv !== "" && val("f-free") > liveCalc().taken) return (err.textContent = t("e_free"));
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
    otherNote: $("#f-othernote").value.trim(),
    buyer: $("#f-buyer").value.trim(),
    contact: $("#f-contact").value.trim(),
    by,
    note: $("#f-note").value.trim(),
  };
  const i = state.harvests.findIndex((h) => h.id === rec.id);
  if (i >= 0) state.harvests[i] = rec;
  else state.harvests.push(rec);
  persist();
  closeD(dlg);
  render();
  toast(t("t_saved"));
});
$("#delBtn").onclick = async () => {
  if (!editId) return;
  closeD(dlg);
  if (await confirmBox(t("c_del_h"), t("c_del_p"), t("delete"))) {
    state.harvests = state.harvests.filter((h) => h.id !== editId);
    persist();
    render();
    toast(t("t_deleted"));
  }
};

/* ---------- share, save, import ---------- */
const q = (s) => '"' + String(s || "").replace(/"/g, '""') + '"';
function toCSV() {
  return (
    "﻿" +
    [
      "date,harvested,rejected,home_use,price," +
        CATS.join(",") +
        ",buyer_name,buyer_contact,entered_by,note,other_note,free_to_buyer,loaded",
    ]
      .concat(
        calc().map((h) =>
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
              ],
            )
            .join(","),
        ),
      )
      .join("\n")
  );
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
    if (!o || !Array.isArray(o.harvests)) throw t("i_notbk");
    return { replace: Object.assign(o, { sample: false }), count: o.harvests.length };
  }
  const out = [];
  txt.split(/\r?\n/).forEach((line, ln) => {
    if (!line.trim()) return;
    const c = splitRow(line),
      date = parseDate(c[0] || "");
    if (!date) {
      if (ln === 0) return;
      throw t("i_date", ln + 1, c[0]);
    }
    const n = (i) => {
      const v = parseFloat((c[i] || "").replace(/[^\d.\-]/g, ""));
      return isFinite(v) ? v : 0;
    };
    if (n(1) <= 0) throw t("i_count", ln + 1);
    if (n(2) + n(3) > n(1)) throw t("i_sum", ln + 1);
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
      buyer: c[13] || "",
      contact: c[14] || "",
      by: c[15] || "",
      note: c[16] || "",
      otherNote: c[17] || "",
    });
  });
  if (!out.length) throw t("i_rows");
  return { rows: out, count: out.length };
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
      state.sample = false;
    }
    r.rows.forEach((x) => {
      const i = state.harvests.findIndex((h) => h.date === x.date);
      if (i >= 0) {
        x.id = state.harvests[i].id;
        state.harvests[i] = x;
      } else state.harvests.push(x);
    });
  }
  persist();
  go("months");
  toast(t("t_imported", r.count));
}

/* ---------- PDF report: a print-ready page; the print screen saves it as PDF ---------- */
function openReport() {
  const hs = calc();
  if (!hs.length) return toast(t("empty_h"));
  const fc = forecast(hs),
    ms = monthly(hs).reverse(),
    first = hs[0],
    last = hs[hs.length - 1],
    S = (f) => sum(hs.map(f));
  const tot = S((h) => h.total),
    loaded = S((h) => h.loaded),
    paid = S((h) => h.paid),
    inc = S((h) => h.inc),
    ded = S((h) => h.dedT),
    net = inc - ded,
    base = Math.max(inc, ded, 1);
  const cats = CATS.map((c) => [t("cat_" + c), S((h) => h.dv[c])])
    .filter((c) => c[1] > 0)
    .sort((a, b) => b[1] - a[1]);
  const T = (l, v) => `<div class="rt"><span>${l}</span><b>${v}</b></div>`,
    sh = state.shares > 1;
  $("#report").innerHTML =
    `<div class="rbar noprint"><button class="btn primary" id="repPrint">${t("rep_save")}</button><button class="btn" id="repClose">${t("rep_close")}</button><span>${t("rep_hint")}</span></div>
  <div class="page"><div class="rhead"><div><h1>${esc(state.estate)}</h1><p>${t("rep_title")} · ${fd(first.date)} – ${fd(last.date)} · ${t("n_harvests", hs.length)}</p></div><p class="rmeta">${t("rep_made", fd(todayMs()))}<br>${t("version", VER)}</p></div>
  <div class="rk num">${T(t("rep_latest"), price(last.price))}${T(t("avg_price"), price(paid ? inc / paid : 0))}${T(t("loaded"), N(loaded))}${T(t("harvested"), N(tot))}
    ${T(t("free"), N(S((h) => h.free)))}${T(t("rejected"), N(S((h) => h.rejected)))}${T(t("home"), N(S((h) => h.home)))}
    ${T(t("income"), money(inc))}${T(t("deductions"), money(ded))}${T(t("balance"), money(net))}${sh ? T(esc(shareLab()), money(net / state.shares)) : ""}</div>
  <div class="card"><h2>${t("price_chart_h")}</h2><div class="chart" id="r-price"></div></div>
  <div class="card"><h2>${t("per_harvest_h")}</h2>${LEG()}<div class="chart" id="r-nuts"></div></div>
  <div class="card"><h2>${t("mbm")}</h2><div class="tbl"><table class="num"><thead><tr><th>${t("th_month")}</th><th>${t("price")}</th><th>${t("harvested")}</th><th>${t("th_loaded")}</th><th>${t("th_free")}</th><th>${t("th_rej")}</th><th>${t("th_home")}</th><th>${t("income")}</th><th>${t("deductions")}</th><th>${t("balance")}</th>${sh ? `<th>${esc(shareLab())}</th>` : ""}</tr></thead>
    <tbody>${ms.map((m) => `<tr><td>${m.label}</td><td class="pr">${price(m.price)}</td><td>${N(m.total)}</td><td>${N(m.loaded)}</td><td>${N(m.free)}</td><td>${N(m.rej)}</td><td>${N(m.home)}</td><td>${N(m.inc)}</td><td>${N(m.ded)}</td><td><b>${N(m.net)}</b></td>${sh ? `<td>${N(m.share)}</td>` : ""}</tr>`).join("")}</tbody></table></div></div>
  <div class="card"><h2>${t("where_goes")}</h2><div class="flow">${cats.map((c) => `<div class="row"><span>${c[0]}</span><div class="bar"><i style="width:${(c[1] / base) * 100}%"></i></div><span class="v num">${N(c[1])}<span class="pct">${inc ? Math.round((c[1] / inc) * 100) : 0}%</span></span></div>`).join("")}
    <div class="row net"><span>${t("balance")}</span><div class="bar"><i style="width:${(Math.max(0, net) / base) * 100}%"></i></div><span class="v num">${money(net)}<span class="pct">${inc ? Math.round((net / inc) * 100) : 0}%</span></span></div>
    ${sh ? `<div class="row share"><span>${esc(shareLab())} (÷ ${state.shares})</span><div class="bar"><i style="width:${(Math.max(0, net / state.shares) / base) * 100}%"></i></div><span class="v num">${money(net / state.shares)}</span></div>` : ""}</div></div>
  <div class="card"><h2>${t("rep_dedm")}</h2><div class="tbl"><table class="num"><thead><tr><th>${t("th_month")}</th>${CATS.map((c) => `<th>${t("cat_" + c)}</th>`).join("")}<th>${t("th_total")}</th></tr></thead>
    <tbody>${ms
      .map((m) => {
        const o = agg(m.list);
        return `<tr><td>${m.label}</td>${CATS.map((c) => `<td>${N(o.dv[c])}</td>`).join("")}<td><b>${N(o.dedT)}</b></td></tr>`;
      })
      .join("")}</tbody></table></div></div>
  <div class="card"><h2>${t("bal_per_h")}</h2><div class="chart" id="r-net"></div></div>
  <div class="card"><h2>${t("rep_all")}</h2><div class="tbl"><table class="num"><thead><tr><th>${t("f_date")}</th><th>${t("price")}</th><th>${t("harvested")}</th><th>${t("th_loaded")}</th><th>${t("th_rej")}</th><th>${t("th_home")}</th><th>${t("th_free")}</th><th>${t("income")}</th><th>${t("deductions")}</th><th>${t("balance")}</th><th>${t("buyer")}</th></tr></thead>
    <tbody>${hs
      .slice()
      .reverse()
      .map(
        (h) =>
          `<tr><td>${fd(h.date)}</td><td class="pr">${price(h.price)}</td><td>${N(h.total)}</td><td>${N(h.loaded)}</td><td>${N(h.rejected)}</td><td>${N(h.home)}</td><td>${N(h.free)}</td><td>${N(h.inc)}</td><td>${N(h.dedT)}</td><td><b>${N(h.net)}</b></td><td>${esc(h.buyer || "")}</td></tr>`,
      )
      .join("")}</tbody></table></div></div>
  ${fc ? `<div class="card"><h2>${t("next3")}</h2><p class="hint">${t("rep_fc_note")}</p><div class="fc-list">${fc.steps.map((x) => `<div class="fc-item"><h3>${t("around", fd(x.date))}</h3><p class="num">≈ ${price(Math.round(x.price))} ${t("per_coconut")}</p><p class="num">≈ ${N(x.nuts)} ${t("harvested")} · ${t("n_loaded", N(x.loaded)).replace("≈ ", "")}</p><p class="num">≈ ${money(x.net)} · ${t("balance")}</p></div>`).join("")}</div></div>` : ""}
  </div>`;
  repName = "coconut-report-" + iso(todayMs());
  document.body.classList.add("rep");
  $("#report").scrollTop = 0;
  lineChart($("#r-price"), priceData(hs), [], { label: t("price_chart_h"), w: 720, h: 230 });
  barChart($("#r-nuts"), nutsData(hs), { label: t("per_harvest_h"), w: 720, h: 230 });
  barChart(
    $("#r-net"),
    hs.map((h) => ({ label: fd(h.date, false), segs: [{ v: h.net, cls: h.net < 0 ? "neg" : "s1" }], tip: "" })),
    { label: t("bal_per_h"), w: 720, h: 200 },
  );
}
/* ---------- monthly report: one month as a statement, with the full deduction breakdown ---------- */
let repName = "coconut-report";
function agg(l) {
  const S = (f) => sum(l.map(f)),
    dv = {};
  CATS.forEach((c) => (dv[c] = S((h) => h.dv[c])));
  const loaded = S((h) => h.loaded),
    inc = S((h) => h.inc),
    dedT = S((h) => h.dedT);
  return {
    total: S((h) => h.total),
    loaded,
    rejected: S((h) => h.rejected),
    home: S((h) => h.home),
    free: S((h) => h.free),
    inc,
    dv,
    dedT,
    net: inc - dedT,
    share: (inc - dedT) / state.shares,
    price: loaded ? inc / loaded : mean(l.map((h) => h.price)),
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
  <tr class="sub"><td>${t("income")}</td><td>${N(o.loaded)} × ${price(o.price)}</td><td>${N(o.inc)}</td><td>100%</td></tr>
  ${CATS.map((c) => `<tr><td>${t("cat_" + c)}</td><td>${c === "transport" && o.transAuto ? t("per_harv_x", N(o.total), price(state.transRate)) : c === "other" ? esc(o.otherNote) : ""}</td><td>${o.dv[c] ? "− " + N(o.dv[c]) : "0"}</td><td>${bar(o.dv[c])}${pc(o.dv[c])}</td></tr>`).join("")}
  <tr class="sub"><td>${t("rep_totded")}</td><td></td><td>− ${N(o.dedT)}</td><td>${pc(o.dedT)}</td></tr>
  <tr class="tot"><td>${t("balance")}</td><td></td><td>${money(o.net)}</td><td>${pc(o.net)}</td></tr>
  ${state.shares > 1 ? `<tr class="shr"><td>${esc(shareLab())} (÷ ${state.shares})</td><td></td><td>${money(o.share)}</td><td></td></tr>` : ""}</tbody></table>`;
}
function openMonthReport(key) {
  const ms = monthly(calc()),
    i = ms.findIndex((m) => m.key === key);
  if (i < 0) return toast(t("empty_h"));
  const m = ms[i],
    pm = ms[i - 1],
    o = agg(m.list),
    po = pm && agg(pm.list),
    multi = m.list.length > 1,
    sh = state.shares > 1;
  const T = (l, v) => `<div class="rt"><span>${l}</span><b>${v}</b></div>`;
  const det = (h) =>
    `<p class="rdet">${t("f_date")}: <b>${fd(h.date)}</b>${h.gap != null ? ` (${t("days_after", h.gap)})` : ""} · ${t("buyer")}: <b>${h.buyer ? esc(h.buyer) : t("not_rec")}</b>${h.contact ? ` · ${t("contact")}: <b>${esc(h.contact)}</b>` : ""} · ${t("entered_by")}: <b>${h.by ? esc(h.by) : t("not_rec")}</b>${h.note ? `<br>${esc(h.note)}` : ""}</p>`;
  const block = (x) =>
    `<div class="card"><h2>${t("rep_coco")}</h2>${cocoTable(x)}</div><div class="card"><h2>${t("rep_money")}</h2>${moneyTable(x)}</div>`;
  $("#report").innerHTML =
    `<div class="rbar noprint"><button class="btn primary" id="repPrint">${t("rep_save")}</button><button class="btn" id="repClose">${t("rep_close")}</button><span>${t("rep_hint")}</span></div>
  <div class="page"><div class="rhead"><div><h1>${esc(state.estate)}</h1><p>${t("rep_month")} · <b>${m.label}</b> · ${m.list.length === 1 && lang === "en" ? "1 harvest" : t("n_harvests", m.list.length)}</p></div><p class="rmeta">${t("rep_made", fd(todayMs()))}<br>${t("version", VER)}</p></div>
  <h3 class="sec">${t("rep_sum")}</h3>
  <div class="rk num">${T(t("price_lab"), price(o.price))}${T(t("loaded"), N(o.loaded))}${T(t("harvested"), N(o.total))}${T(t("rejected"), N(o.rejected))}
    ${T(t("income"), money(o.inc))}${T(t("deductions"), money(o.dedT))}${T(t("balance"), money(o.net))}${sh ? T(esc(shareLab()), money(o.share)) : T(t("home"), N(o.home))}</div>
  ${po ? `<div class="card rcmp"><b>${t("rep_cmp", pm.label)}</b><span>${t("price")} ${delta(o.price, po.price)}</span><span>${t("loaded")} ${delta(o.loaded, po.loaded)}</span><span>${t("income")} ${delta(o.inc, po.inc)}</span><span>${t("balance")} ${delta(o.net, po.net)}</span></div>` : ""}
  ${multi ? `<h3 class="sec">${t("rep_mtotal")}</h3>${block(o)}` + m.list.map((h) => `<h3 class="sec">${t("rep_harv_on", fd(h.date))}</h3>${det(h)}${block(agg([h]))}`).join("") : `<h3 class="sec">${t("rep_details")}</h3>${det(m.list[0])}${block(o)}`}
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
    return render({ dir: still() ? "" : "fade" });
  }
  if (b.id === "skinBtn") return toggleSkin(e);
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
      state.sample = false;
      persist();
      render();
    }
    return;
  }
  if (b.hasAttribute("data-wipe")) {
    if (await confirmBox(t("c_wipe_h"), t("c_wipe_p"), t("delete_all"))) {
      state.harvests = [];
      state.sample = false;
      persist();
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
    persist();
    render();
    return toast(t("t_details"));
  }
  if (b.id === "impGo") return doImport($("#imp").value);
});
document.addEventListener("change", (e) => {
  if (e.target.id === "impFile" && e.target.files[0]) {
    const r = new FileReader();
    r.onload = () => doImport(String(r.result));
    r.readAsText(e.target.files[0]);
    e.target.value = "";
  }
});

if (LS.get("coconut-ledger-skin") === "light") setSkin("light");
route = ROUTES.indexOf(location.hash.slice(1)) >= 0 ? location.hash.slice(1) : "overview";
readShell();
render();
initCloud();
mirror();
/* An update applied while the app was in the background is announced when the person comes back. */
let pendingNote = SH.justApplied ? t("upd_applied", SH.justApplied) : "";
if (pendingNote && document.visibilityState !== "hidden") {
  toast(pendingNote);
  pendingNote = "";
}
window.onAppResume = () => {
  if (pendingNote) {
    setTimeout(() => toast(pendingNote), 250);
    pendingNote = "";
  }
};
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") window.onAppResume();
});
/* The Android app asks this before swapping in a new version in the background. */
window.canReload = () => {
  if (dlg.open || ask.open || document.body.classList.contains("rep")) return false;
  const a = document.activeElement;
  if (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) return false;
  const imp = $("#imp");
  return !(imp && imp.value.trim());
};

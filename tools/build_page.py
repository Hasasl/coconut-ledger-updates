"""
Coconut Ledger: build the single-file page the phones run.

    python tools/build_page.py

You edit files in web/ (index.html, styles.css, sync.js, app.js). The phone app needs them as ONE file, because an
update downloads exactly one index.html. This script:
  1. puts styles.css, sync.js, bug-report.js and app.js inside a copy of index.html,
  2. leaves out the online Google Fonts lines (the phone app works offline and uses its built-in fonts),
  3. writes the result to android/app/src/main/assets/index.html (used when you build the Android app).
make_release.py uses the same function for the published index.html.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WEB = ROOT / "web"
ASSET = ROOT / "android" / "app" / "src" / "main" / "assets" / "index.html"

VER_RE = re.compile(r'const\s+VER\s*=\s*"([\d.]+)"')
MIN_SHELL_RE = re.compile(r"const\s+MIN_SHELL\s*=\s*(\d+)")


def build():
    """Returns (page_text, version, min_shell)."""
    html = (WEB / "index.html").read_text(encoding="utf-8")
    css = (WEB / "styles.css").read_text(encoding="utf-8")
    js = (WEB / "app.js").read_text(encoding="utf-8")
    sync_js = (WEB / "sync.js").read_text(encoding="utf-8")
    bug_report_js = (WEB / "bug-report.js").read_text(encoding="utf-8")
    for name, script_text in (("app.js", js), ("sync.js", sync_js), ("bug-report.js", bug_report_js)):
        if "</script" in script_text.lower():
            raise SystemExit(f"{name} contains the text </script, which would break the page. Write it as <\\/script instead.")

    link = re.search(r'<link\b[^>]*href="styles\.css"[^>]*>', html)
    sync_script = re.search(r'<script\b[^>]*src="sync\.js"[^>]*>\s*</script>', html)
    bug_report_script = re.search(r'<script\b[^>]*src="bug-report\.js"[^>]*>\s*</script>', html)
    script = re.search(r'<script\b[^>]*src="app\.js"[^>]*>\s*</script>', html)
    if (
        not link
        or not sync_script
        or not bug_report_script
        or not script
        or sync_script.start() > bug_report_script.start()
        or bug_report_script.start() > script.start()
    ):
        raise SystemExit('web/index.html must keep styles.css and load sync.js, bug-report.js, then app.js')
    html = html[: link.start()] + "<style>\n" + css + "</style>" + html[link.end():]
    sync_script = re.search(r'<script\b[^>]*src="sync\.js"[^>]*>\s*</script>', html)
    html = html[: sync_script.start()] + "<script>\n" + sync_js + "</script>" + html[sync_script.end():]
    bug_report_script = re.search(r'<script\b[^>]*src="bug-report\.js"[^>]*>\s*</script>', html)
    html = (
        html[: bug_report_script.start()]
        + "<script>\n"
        + bug_report_js
        + "</script>"
        + html[bug_report_script.end():]
    )
    script = re.search(r'<script\b[^>]*src="app\.js"[^>]*>\s*</script>', html)
    html = html[: script.start()] + "<script>\n" + js + "</script>" + html[script.end():]

    # Online fonts: fine in a browser, but the phone app works offline.
    html = re.sub(r'\s*<link\b[^>]*fonts\.googleapis\.com[^>]*>', "", html, flags=re.S)

    ver = VER_RE.search(js)
    if not ver:
        raise SystemExit('Cannot find const VER = "..." in web/app.js')
    ms = MIN_SHELL_RE.search(js)
    return html, ver.group(1), int(ms.group(1)) if ms else 6


def main():
    page, ver, _ = build()
    ASSET.parent.mkdir(parents=True, exist_ok=True)
    ASSET.write_bytes(page.encode("utf-8"))
    print(f"Built page version {ver} into {ASSET.relative_to(ROOT)}")


if __name__ == "__main__":
    sys.exit(main())

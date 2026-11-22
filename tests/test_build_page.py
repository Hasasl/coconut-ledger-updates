import json
import unittest

from tools.build_page import APK_INFO, build


class SharedVersionTests(unittest.TestCase):
    def test_built_page_uses_the_android_release_version(self):
        info = json.loads(APK_INFO.read_text(encoding="utf-8"))
        page, version, _ = build()

        self.assertEqual(version, info["versionName"])
        self.assertIn(f'const VER = "{version}";', page)


if __name__ == "__main__":
    unittest.main()

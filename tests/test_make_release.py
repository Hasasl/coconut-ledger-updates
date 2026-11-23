import os
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from tools.make_release import is_newer_different, parse_apk_metadata, read_signing_password


class ReleasePasswordTests(unittest.TestCase):
    def test_signing_password_can_be_provided_by_ci_environment(self):
        with patch.dict(os.environ, {"UPDATE_SIGNING_PASSWORD": "test-password"}):
            with patch("tools.make_release.getpass.getpass") as prompt:
                self.assertEqual(read_signing_password(), "test-password")
                prompt.assert_not_called()


class ReleaseArtifactTests(unittest.TestCase):
    def test_only_new_different_apks_are_considered_release_candidates(self):
        with tempfile.TemporaryDirectory() as directory:
            current = Path(directory) / "current.apk"
            candidate = Path(directory) / "candidate.apk"
            current.write_bytes(b"current")
            candidate.write_bytes(b"newer")
            os.utime(current, (100, 100))
            os.utime(candidate, (200, 200))
            self.assertTrue(is_newer_different(candidate, current))

            candidate.write_bytes(b"current")
            os.utime(candidate, (300, 300))
            self.assertFalse(is_newer_different(candidate, current))

            candidate.write_bytes(b"older")
            os.utime(candidate, (50, 50))
            self.assertFalse(is_newer_different(candidate, current))

    def test_reads_package_and_shared_version_from_aapt_metadata(self):
        metadata = parse_apk_metadata(
            "package: name='com.estateledger.coconut' versionCode='16' versionName='1.10.0' platformBuildVersionName='14'\n"
        )
        self.assertEqual(
            metadata,
            {"app": "com.estateledger.coconut", "versionCode": 16, "versionName": "1.10.0"},
        )

    def test_rejects_apk_metadata_without_package_version(self):
        with self.assertRaisesRegex(ValueError, "could not read package metadata"):
            parse_apk_metadata("not an APK")


if __name__ == "__main__":
    unittest.main()

import os
import unittest
from unittest.mock import patch

from tools.make_release import read_signing_password


class ReleasePasswordTests(unittest.TestCase):
    def test_signing_password_can_be_provided_by_ci_environment(self):
        with patch.dict(os.environ, {"UPDATE_SIGNING_PASSWORD": "test-password"}):
            with patch("tools.make_release.getpass.getpass") as prompt:
                self.assertEqual(read_signing_password(), "test-password")
                prompt.assert_not_called()


if __name__ == "__main__":
    unittest.main()

#!/usr/bin/env python3
"""Bundle the Arduino component reviewer into one HTML file.

Run from any directory:
    python3 tools/build_single_file.py [output.html]

The generated file inlines the local stylesheet and script. Component images,
Google Fonts, and Hugeicons are loaded from hosted URLs.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE_HTML = ROOT / "index.html"
CSS_PATH = ROOT / "css" / "style.css"
JS_PATH = ROOT / "js" / "script.js"
DEFAULT_OUTPUT = ROOT / "arduino-components-reviewer.html"
IMAGE_BASE_URL = (
    "https://raw.githubusercontent.com/ToolDroidYT/IT10-Arduino-Components/"
    "refs/heads/main/images/"
)


def hosted_image_url(relative_path: str) -> str:
    """Use the filename with the configured hosted images directory."""
    return IMAGE_BASE_URL + Path(relative_path).name


def build() -> str:
    html = SOURCE_HTML.read_text(encoding="utf-8")
    css = CSS_PATH.read_text(encoding="utf-8")
    js = JS_PATH.read_text(encoding="utf-8")

    # Replace local component image paths before inlining the script.
    image_pattern = re.compile(r"(?P<quote>['\"])(?P<path>\.\./images/[^'\"]+)\1")
    js, image_count = image_pattern.subn(
        lambda match: match.group("quote")
        + hosted_image_url(match.group("path"))
        + match.group("quote"),
        js,
    )
    if image_count == 0:
        raise RuntimeError("No component image paths were found in the reviewer script")

    html = re.sub(
        r'<link\s+rel="stylesheet"\s+href="css/style\.css"\s*/?>',
        lambda _: f"<style>\n{css}\n</style>",
        html,
        count=1,
    )
    html = re.sub(
        r'<script\s+src="js/script\.js"\s*>\s*</script>',
        lambda _: f"<script>\n{js}\n</script>",
        html,
        count=1,
    )
    return html


def main() -> int:
    output = Path(sys.argv[1]).expanduser() if len(sys.argv) > 1 else DEFAULT_OUTPUT
    if not output.is_absolute():
        output = Path.cwd() / output
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(build(), encoding="utf-8")
    print(f"Created {output} (CSS and JavaScript embedded; images hosted remotely)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

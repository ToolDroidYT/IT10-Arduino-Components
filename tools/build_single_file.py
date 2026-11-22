#!/usr/bin/env python3
"""Bundle the Arduino component reviewer into one HTML file.

Run from any directory:
    python3 tools/build_single_file.py [output.html]

The generated file inlines the local stylesheet, script, and component images.
Google Fonts and Hugeicons remain externally hosted, as in the source page.
"""

from __future__ import annotations

import base64
import mimetypes
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE_HTML = ROOT / "review" / "index.html"
CSS_PATH = ROOT / "review" / "css" / "style.css"
JS_PATH = ROOT / "review" / "js" / "script.js"
DEFAULT_OUTPUT = ROOT / "review" / "arduino-components-reviewer.html"


def image_data_uri(relative_path: str) -> str:
    """Resolve component paths, which are relative to review/index.html."""
    image_path = (SOURCE_HTML.parent / relative_path).resolve()
    if not image_path.is_relative_to(ROOT):
        raise ValueError(f"Image path escapes the project directory: {relative_path}")
    if not image_path.is_file():
        raise FileNotFoundError(f"Image referenced by reviewer was not found: {image_path}")

    mime_type = mimetypes.guess_type(image_path.name)[0] or "application/octet-stream"
    encoded = base64.b64encode(image_path.read_bytes()).decode("ascii")
    return f"data:{mime_type};base64,{encoded}"


def build() -> str:
    html = SOURCE_HTML.read_text(encoding="utf-8")
    css = CSS_PATH.read_text(encoding="utf-8")
    js = JS_PATH.read_text(encoding="utf-8")

    # Resolve component images before inlining the script. JSON-style escaping
    # is not needed because these paths are quoted JS strings without escapes.
    image_pattern = re.compile(r"(?P<quote>['\"])(?P<path>\.\./images/[^'\"]+)\1")
    js, image_count = image_pattern.subn(
        lambda match: match.group("quote")
        + image_data_uri(match.group("path"))
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
    print(f"Created {output} (images, CSS, and JavaScript embedded)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

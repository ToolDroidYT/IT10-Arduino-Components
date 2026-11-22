#!/usr/bin/env python3
"""Download component reference images, resuming by skipping valid files.

Run from the component-pack root (the folder containing image_sources.json):
    python -m venv .venv
    .venv/bin/pip install requests pillow
    .venv/bin/python scripts/download_images.py

Options:
    --force       Re-download files even when a valid local copy exists.
    --delay SEC   Delay between requests (default: 0.15 seconds).

The downloader writes images to high_quality_images/ and records every result
in download_report.csv. Existing files are skipped only when Pillow can open
and verify them. Missing or corrupt files are downloaded again.
"""
from __future__ import annotations

import argparse
import csv
import json
import sys
import time
from io import BytesIO
from pathlib import Path

import requests
from PIL import Image, ImageOps, UnidentifiedImageError

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "image_sources.json"
OUTPUT = ROOT / "high_quality_images"
REPORT = ROOT / "download_report.csv"
MAX_IMAGE_BYTES = 25 * 1024 * 1024


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--force",
        action="store_true",
        help="redownload images even when valid files already exist",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=0.15,
        metavar="SEC",
        help="delay between image requests (default: 0.15)",
    )
    args = parser.parse_args()
    if args.delay < 0:
        parser.error("--delay must be zero or greater")
    return args


def is_valid_image(path: Path) -> bool:
    """Return True only when an existing file is a readable image."""
    if not path.is_file() or path.stat().st_size == 0:
        return False
    try:
        with Image.open(path) as image:
            image.verify()
        return True
    except (OSError, UnidentifiedImageError, Image.DecompressionBombError):
        return False


def load_image(data: bytes) -> Image.Image:
    """Decode, orient, and normalize downloaded image data."""
    with Image.open(BytesIO(data)) as source:
        source.load()
        return ImageOps.exif_transpose(source).convert("RGB")


def save_image(image: Image.Image, destination: Path, item: dict) -> None:
    """Apply an optional horizontal crop and atomically write a JPEG."""
    result = image.copy()
    try:
        if "crop_x_fraction" in item:
            left, right = item["crop_x_fraction"]
            if not (0 <= left < right <= 1):
                raise ValueError(f"Invalid crop_x_fraction: {item['crop_x_fraction']}")
            width, height = result.size
            result = result.crop((int(left * width), 0, int(right * width), height))

        destination.parent.mkdir(parents=True, exist_ok=True)
        temporary = destination.with_name(destination.name + ".part")
        try:
            result.save(
                temporary,
                format="JPEG",
                quality=94,
                optimize=True,
                progressive=True,
            )
            temporary.replace(destination)
        finally:
            temporary.unlink(missing_ok=True)
    finally:
        result.close()


def main() -> int:
    args = parse_args()
    if not MANIFEST.is_file():
        print(f"[ERROR] Manifest not found: {MANIFEST}", file=sys.stderr)
        print("Place this script in scripts/ inside the component-pack folder.", file=sys.stderr)
        return 2

    try:
        items = json.loads(MANIFEST.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        print(f"[ERROR] Cannot read manifest: {exc}", file=sys.stderr)
        return 2

    if not isinstance(items, list):
        print("[ERROR] image_sources.json must contain a JSON array.", file=sys.stderr)
        return 2

    OUTPUT.mkdir(parents=True, exist_ok=True)
    session = requests.Session()
    session.headers.update({
        "User-Agent": (
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
            "Chrome/120 Safari/537.36"
        ),
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    })

    # Reuse each downloaded source URL during this run, even if the manifest
    # references it for more than one output file.
    image_cache: dict[str, Image.Image] = {}
    rows: list[dict[str, str]] = []

    try:
        for item in items:
            number = item.get("number", "?")
            name = item.get("name", "Unnamed component")
            filename = item.get("filename")
            url = item.get("image_url")

            if not filename or not url:
                detail = "Manifest item is missing filename or image_url"
                rows.append({
                    "number": str(number), "name": str(name),
                    "file": str(filename or ""), "status": "failed",
                    "details": detail,
                })
                print(f"[FAIL] {number}: {detail}", file=sys.stderr)
                continue

            destination = OUTPUT / Path(filename).name
            relative_path = str(destination.relative_to(ROOT))

            if not args.force and is_valid_image(destination):
                size = destination.stat().st_size
                with Image.open(destination) as existing:
                    dimensions = f"{existing.width}x{existing.height}"
                detail = f"Already exists; {dimensions}; {size} bytes"
                rows.append({
                    "number": str(number), "name": str(name),
                    "file": relative_path, "status": "skipped_existing",
                    "details": detail,
                })
                print(f"[SKIP] {int(number):02d} {name} — already downloaded")
                continue

            try:
                if url not in image_cache:
                    response = session.get(
                        url,
                        headers={"Referer": item.get("source_page", "")},
                        timeout=(15, 45),
                    )
                    response.raise_for_status()
                    data = response.content
                    if not data:
                        raise ValueError("The server returned an empty response")
                    if len(data) > MAX_IMAGE_BYTES:
                        raise ValueError(f"Image too large ({len(data)} bytes)")
                    image_cache[url] = load_image(data)
                    response.close()

                original = image_cache[url]
                save_image(original, destination, item)
                size = destination.stat().st_size
                detail = f"{original.width}x{original.height}; {size} bytes"
                rows.append({
                    "number": str(number), "name": str(name),
                    "file": relative_path, "status": "downloaded",
                    "details": detail,
                })
                print(f"[OK] {int(number):02d} {name} -> {destination.name}")

            except (requests.RequestException, OSError, ValueError, UnidentifiedImageError) as exc:
                rows.append({
                    "number": str(number), "name": str(name),
                    "file": relative_path, "status": "failed",
                    "details": str(exc),
                })
                print(f"[FAIL] {number} {name}: {exc}", file=sys.stderr)

            if args.delay:
                time.sleep(args.delay)
    finally:
        for image in image_cache.values():
            image.close()
        session.close()

    with REPORT.open("w", newline="", encoding="utf-8") as report_file:
        writer = csv.DictWriter(
            report_file,
            fieldnames=["number", "name", "file", "status", "details"],
        )
        writer.writeheader()
        writer.writerows(rows)

    downloaded = sum(row["status"] == "downloaded" for row in rows)
    skipped = sum(row["status"] == "skipped_existing" for row in rows)
    failed = sum(row["status"] == "failed" for row in rows)
    print(
        f"\nFinished: {downloaded} downloaded, {skipped} skipped, "
        f"{failed} failed. Report: {REPORT}"
    )

    if failed:
        print("Check download_report.csv and image_sources.csv for failed sources.")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

#!/usr/bin/env python3
"""Download the reference images listed in image_sources.json.

Run from this folder after installing requests and Pillow:
  python -m venv .venv
  .venv/bin/pip install requests pillow
  .venv/bin/python scripts/download_images.py

The downloader uses vendor-hosted image URLs. Some hosts may block automated
requests or require cookies; failures are reported in download_report.csv.
"""
from __future__ import annotations
import csv, json, mimetypes, re, sys, time
from pathlib import Path
from urllib.parse import urlparse
import requests
from PIL import Image, ImageOps
from io import BytesIO

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "image_sources.json"
OUTPUT = ROOT / "high_quality_images"
OUTPUT.mkdir(exist_ok=True)
SESSION = requests.Session()
SESSION.headers.update({
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
})

items = json.loads(MANIFEST.read_text(encoding="utf-8"))
cache: dict[str, tuple[Image.Image, str]] = {}
rows=[]

def safe_ext(image: Image.Image, url: str) -> str:
    fmt=(image.format or "JPEG").lower()
    return {"jpeg":"jpg","jpg":"jpg","png":"png","webp":"webp","gif":"gif","bmp":"bmp"}.get(fmt, Path(urlparse(url).path).suffix.lstrip(".") or "jpg")

for item in items:
    url=item["image_url"]
    filename=item["filename"]
    dest=OUTPUT/filename
    try:
        if url not in cache:
            response=SESSION.get(url,headers={"Referer":item.get("source_page","")},timeout=(15,45),stream=True)
            response.raise_for_status()
            content_type=response.headers.get("Content-Type","").lower()
            data=response.content
            if len(data)>25*1024*1024:
                raise ValueError(f"Image too large ({len(data)} bytes)")
            image=Image.open(BytesIO(data))
            image.load()
            image=ImageOps.exif_transpose(image).convert("RGB")
            cache[url]=(image, safe_ext(image,url))
        original, ext=cache[url]
        result=original.copy()
        if "crop_x_fraction" in item:
            left,right=item["crop_x_fraction"]
            width,height=result.size
            result=result.crop((int(left*width),0,int(right*width),height))
        result.save(dest,format="JPEG",quality=94,optimize=True,progressive=True)
        rows.append({"number":item["number"],"name":item["name"],"file":str(dest.relative_to(ROOT)),"status":"downloaded","details":f"{original.width}x{original.height}; {len(dest.read_bytes())} bytes"})
        print(f"[OK] {item['number']:02d} {item['name']} -> {dest.name}")
    except Exception as exc:
        rows.append({"number":item["number"],"name":item["name"],"file":filename,"status":"failed","details":str(exc)})
        print(f"[FAIL] {item['number']:02d} {item['name']}: {exc}",file=sys.stderr)
    time.sleep(0.15)

report=ROOT/"download_report.csv"
with report.open("w",newline="",encoding="utf-8") as f:
    w=csv.DictWriter(f,fieldnames=["number","name","file","status","details"])
    w.writeheader();w.writerows(rows)
failures=sum(x["status"]!="downloaded" for x in rows)
print(f"\nFinished: {len(rows)-failures}/{len(rows)} downloaded. Report: {report}")
if failures:
    print("Some hosts may require browser download or block automated requests. See image_sources.csv for source pages.")
    raise SystemExit(1)

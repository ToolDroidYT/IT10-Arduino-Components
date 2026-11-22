# Arduino Starter Kit — Image Reference Pack

This archive contains:

- `previews/`: the 42 small preview images embedded in the uploaded HTML guide. These are **not high-resolution**; their source dimensions are approximately 176 × 106 pixels.
- `image_sources.json` and `image_sources.csv`: direct high-resolution image URLs, source pages, match notes, and license checks for all 42 items.
- `scripts/download_images.py`: downloader that retrieves source images on your computer and writes them to `high_quality_images/`. It crops the five individual LED references from a five-color LED source image.
- `Arduino_Component_Descriptions.md`: all 42 component descriptions from the supplied guide, with linked image references.

## Download the full-size image files

Run on a machine with internet access:

```bash
python -m venv .venv
.venv/bin/pip install requests pillow
.venv/bin/python scripts/download_images.py
```

The script writes a `download_report.csv`. Some product-image hosts may block automated downloads or require browser cookies. In that case, use the `source_page` URLs in `image_sources.csv` to obtain the image manually.

## Matching and license notes

The image choices are reference matches for the component type/model in the guide. Exact manufacturer, PCB color, and clone layout can differ from the physical kit. Specific matches include the SG90, 28BYJ-48, ULN2003, 1602 I2C LCD, HC-SR04, DHT11, KY-023, L293D, and 74HC595.

Most selected pictures are hosted on product/vendor or marketplace pages. Their presence online does **not** grant permission to republish them. License information was not verified for those assets; check the linked source pages before redistribution. The UNO R3 reference image is licensed CC BY-SA 4.0 by Shoot stufz on Wikimedia Commons. Credit the author and follow the ShareAlike terms if using that image.

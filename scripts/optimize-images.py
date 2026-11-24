"""Resize hotel photos into responsive WebP files.
Reads images-original/<file>  ->  public/images/<name>-<width>.webp and image-manifest.json.
Run: python3 scripts/optimize-images.py  (pip install pillow). Add a photo = drop it in images-original/ and add a line to MAP."""
from PIL import Image, ImageOps
import json, os
SRC, OUT = "images-original", "public/images"
MAP = {  # short name : original file
    "deluxe-1": "WhatsApp_Image_2026-11-23_at_16_21_24__2_.jpeg",
    "deluxe-2": "WhatsApp_Image_2026-11-23_at_16_21_24__1_.jpeg",
    "exec-1": "WhatsApp_Image_2026-11-23_at_16_21_25.jpeg",
    "exec-2": "WhatsApp_Image_2026-11-23_at_16_21_21.jpeg",
    "exec-3": "WhatsApp_Image_2026-11-23_at_16_21_19.jpeg",
    "exec-4": "WhatsApp_Image_2026-11-23_at_16_21_18__1_.jpeg",
    "exec-5": "WhatsApp_Image_2026-11-23_at_16_21_25__1_.jpeg",
    "exec-6": "WhatsApp_Image_2026-11-23_at_16_21_25__2_.jpeg",
    "suite-1": "WhatsApp_Image_2026-11-23_at_16_21_22.jpeg",
    "suite-2": "WhatsApp_Image_2026-11-23_at_16_21_23__1_.jpeg",
    "suite-3": "WhatsApp_Image_2026-11-23_at_16_21_23.jpeg",
    "reception": "WhatsApp_Image_2026-11-23_at_16_21_24__3_.jpeg",
    "street-day": "WhatsApp_Image_2026-11-23_at_16_21_21__1_.jpeg",
    "street-night": "WhatsApp_Image_2026-11-23_at_16_21_18.jpeg",
    "street-rain": "WhatsApp_Image_2026-11-23_at_16_21_16__1_.jpeg",
    "mattress": "WhatsApp_Image_2026-11-23_at_16_21_16.jpeg",
}
m = {}
for n, f in MAP.items():
    im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, f))).convert("RGB")
    ws = [w for w in (480, 960, 1600) if w <= im.width]
    if im.width not in ws and im.width < 1600: ws.append(im.width)
    m[n] = sorted(set(ws))
    for w in m[n]:
        im.resize((w, round(im.height * w / im.width)), Image.LANCZOS).save(f"{OUT}/{n}-{w}.webp", "WEBP", quality=76, method=6)
json.dump(m, open("image-manifest.json", "w"), indent=1)

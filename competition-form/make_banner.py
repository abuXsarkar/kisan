#!/usr/bin/env python3
"""Replace the QR code on the Wildlife Photography Competition banner.

Usage:
    python3 make_banner.py "<FORM_URL>" [output.jpg]

The new QR is rendered black-on-white with a built-in quiet zone and pasted
onto the existing white card, centered on the original QR position so the
banner's layout, colours and "SCAN THE QR CODE TO SUBMIT" text are preserved.
"""
import sys
from PIL import Image
import qrcode
from qrcode.constants import ERROR_CORRECT_H

SRC = "/home/user/kisan/competition-form/banner-original-v2.jpeg"

# Centre of the original QR card in the 853x1280 banner, and the paste size.
CARD_CENTER = (782, 972)
PASTE_SIZE = 104  # px square; covers old modules, leaves the white card border

def build(url: str, out: str):
    qr = qrcode.QRCode(
        version=None,
        error_correction=ERROR_CORRECT_H,  # robust for print
        box_size=10,
        border=2,                            # quiet zone (blends with white card)
    )
    qr.add_data(url)
    qr.make(fit=True)
    qr_img = qr.make_image(fill_color="black", back_color="white").convert("RGB")
    qr_img = qr_img.resize((PASTE_SIZE, PASTE_SIZE), Image.NEAREST)

    banner = Image.open(SRC).convert("RGB")
    x = CARD_CENTER[0] - PASTE_SIZE // 2
    y = CARD_CENTER[1] - PASTE_SIZE // 2
    banner.paste(qr_img, (x, y))
    banner.save(out, quality=95)
    print(f"QR modules: version {qr.version}  |  encoded: {url}")
    print(f"Saved: {out}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit("Usage: python3 make_banner.py \"<FORM_URL>\" [output.jpg]")
    url = sys.argv[1]
    out = sys.argv[2] if len(sys.argv) > 2 else "/home/user/kisan/competition-form/banner-2026-updated.jpg"
    build(url, out)

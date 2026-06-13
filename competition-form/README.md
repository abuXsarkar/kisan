# Wildlife Photography Competition 2026 — Form + Banner QR

Assets to stand up the entry-submission form and refresh the banner QR for the
RGU / NSS Cell "Wildlife Photography Competition 2026".

## Files
| File | What it is |
|------|------------|
| `CreateForm.gs` | Run-once Google Apps Script that builds the entire Google Form (questions, validation, responses sheet) in your own Google account. |
| `make_banner.py` | Regenerates the banner with a fresh QR pointing at any URL. |
| `banner-original.jpeg` | The original banner (unmodified source). |
| `banner-2026-PREVIEW.jpg` | Preview with a placeholder QR (`forms.gle/RGUwild2026`) — shows exactly how the final will look. |

## Steps
1. **Build the form** — follow the instructions at the top of `CreateForm.gs`
   (paste into https://script.google.com → Run → authorize). It prints the
   public form link, edit link, and responses-sheet link.
2. **Add the photo upload box** — the one step no Google API can script: in the
   form editor add a single "File upload" question titled *Upload your
   photograph(s)*. (Details in `CreateForm.gs`.)
3. **Lock the QR** — share the public link (ideally the short `forms.gle/...`
   one). Regenerate the banner:
   ```bash
   python3 make_banner.py "https://forms.gle/XXXXXXXX" banner-2026-final.jpg
   ```
   The QR is placed on the existing white card so the layout/colours are
   untouched. It uses high error-correction (H) for reliable print scanning.

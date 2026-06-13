/**
 * Wildlife Photography Competition 2026 — Royal Global University (RGU)
 * One-click Google Form builder.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * HOW TO USE (about 2 minutes, all free, runs in YOUR Google account):
 *
 *   1. Go to  https://script.google.com  and click  "New project".
 *   2. Delete the sample code, paste THIS entire file in, and Save (Ctrl/Cmd+S).
 *   3. Press  Run  (the ▶ button) with `buildCompetitionForm` selected.
 *   4. Google asks you to authorize — click "Review permissions" → choose your
 *      account → "Advanced" → "Go to project (unsafe)" → "Allow".
 *      (It's "unsafe" only because it's your own unverified script — it just
 *       creates a Form + a responses Sheet in your Drive. Nothing leaves it.)
 *   5. When it finishes, open  View → Logs  (or Execution log). It prints:
 *         • the PUBLIC form link  (share / put behind the QR)
 *         • the EDIT link         (to tweak questions)
 *         • the RESPONSES Sheet link
 *
 *   6. ONE manual step the Google API cannot do — adding a photo upload box:
 *        - Open the EDIT link, find the placeholder note that says
 *          "⬆ ADD FILE-UPLOAD QUESTION HERE".
 *        - Click the "＋" (Add question) on the right toolbar.
 *        - Change the question type dropdown to  "File upload".
 *        - Title it:  Upload your photograph(s)
 *        - Turn ON "Required", set allowed types to "Image", max 5 files,
 *          max size 1GB (or your choice). Done.
 *        (Then you can delete the placeholder note item.)
 *
 *   7. Paste the PUBLIC form link back to me and I'll lock it into the QR code
 *      on the banner.
 * ─────────────────────────────────────────────────────────────────────────
 */
function buildCompetitionForm() {
  // ── Create the form ──────────────────────────────────────────────────────
  var form = FormApp.create('Wildlife Photography Competition 2026 — RGU');

  form.setTitle('Wildlife Photography Competition 2026')
      .setDescription(
        'On the occasion of Van Mahotsav 2026 — organized by the NSS Cell, ' +
        'The Assam Royal Global University, Guwahati.\n\n' +
        '“Capture the Wild. Inspire Conservation.”\n\n' +
        'Exclusively for the students of RGU.\n' +
        '• Entries open: 5th June 2026   • Entries close: 1st July 2026\n' +
        '• All photographs must be original and your own work.\n\n' +
        'Please sign in with your Google account so your photo upload is saved ' +
        'securely. Fill in your details below and upload your entry.'
      )
      .setCollectEmail(true)          // captures the submitter's email
      .setAllowResponseEdits(false)
      .setAcceptingResponses(true)
      .setProgressBar(true)
      .setConfirmationMessage(
        'Thank you! Your entry for the Wildlife Photography Competition 2026 ' +
        'has been received. Best of luck! — NSS Cell, RGU'
      );

  // ── Questions ─────────────────────────────────────────────────────────────
  form.addTextItem()
      .setTitle('Full name')
      .setRequired(true);

  form.addTextItem()
      .setTitle('RGU Enrollment / Roll number')
      .setRequired(true);

  form.addTextItem()
      .setTitle('Department / Programme & Year')
      .setHelpText('e.g. B.Sc. Zoology, 2nd Year')
      .setRequired(true);

  var phone = form.addTextItem()
      .setTitle('Mobile number')
      .setRequired(true);
  var phoneValidation = FormApp.createTextValidation()
      .setHelpText('Enter a valid 10-digit mobile number.')
      .requireTextMatchesPattern('[0-9]{10}')
      .build();
  phone.setValidation(phoneValidation);

  form.addTextItem()
      .setTitle('Photograph title')
      .setHelpText('A short title for your entry.')
      .setRequired(true);

  form.addMultipleChoiceItem()
      .setTitle('Category')
      .setChoiceValues([
        'Wildlife & Mammals',
        'Birds',
        'Macro & Insects',
        'Landscape & Habitat',
        'Conservation Story'
      ])
      .setRequired(true);

  form.addParagraphTextItem()
      .setTitle('Capture details (optional)')
      .setHelpText('Location, date, and camera/phone + settings if you wish to share.')
      .setRequired(false);

  // Placeholder marking where the manual File-upload question goes (step 6).
  form.addSectionHeaderItem()
      .setTitle('⬆ ADD FILE-UPLOAD QUESTION HERE')
      .setHelpText('Add a "File upload" question titled "Upload your photograph(s)" ' +
                   '(images only), then delete this note. The API cannot create ' +
                   'file-upload questions, so this one step is manual.');

  form.addCheckboxItem()
      .setTitle('Declaration')
      .setChoiceValues([
        'I declare that the submitted photograph(s) are original and my own work, ' +
        'and I consent to their use by RGU/NSS Cell for the competition.'
      ])
      .setRequired(true);

  // ── Responses spreadsheet ──────────────────────────────────────────────────
  var ss = SpreadsheetApp.create('Wildlife Photography Competition 2026 — Responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  // ── Output the links ───────────────────────────────────────────────────────
  var publicUrl = form.getPublishedUrl();
  var shortUrl  = form.shortenFormUrl(publicUrl);
  var editUrl   = form.getEditUrl();
  var sheetUrl  = ss.getUrl();

  Logger.log('==================================================================');
  Logger.log('  PUBLIC form link (use this behind the QR): ' + publicUrl);
  Logger.log('  SHORT public link                        : ' + shortUrl);
  Logger.log('  EDIT link (add the file-upload question)  : ' + editUrl);
  Logger.log('  RESPONSES sheet                           : ' + sheetUrl);
  Logger.log('==================================================================');

  return publicUrl;
}

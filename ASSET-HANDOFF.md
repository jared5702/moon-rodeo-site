# Asset handoff for Claude

The owner has asked Codex to create assets and deliver them into this site project. This file documents the shared-folder workflow; it does not establish a live connection to Claude or automatically reload a running session.

Read `ASSET-CHECKLIST.md` and `assets/asset-manifest.json` for status. New candidates go into `assets/incoming/`. Integrate approved assets only. Never infer approval from file existence.

## Current design decisions

- Fraunces 900 remains selected for page headlines, not the custom wordmark.
- The owner rejected programmatically drawn wordmarks. Preserve supplied raster lettering; do not retype or reconstruct it from a font.
- Transparent PNGs are the current wordmark deliverable. The owner will handle vector conversion. Do not embed a raster PNG in an SVG and call it vector.
- Option three of the earlier PNG concepts was selected as the direction. A star update and a later owner-supplied spurred version followed. The three most recent polished options remain unselected candidates.
- The elongated eight-point star is intended as a reusable brand element. Use sparingly, preserve proportions, and keep decorative instances hidden from assistive technology.
- Existing site code is not modified by this handoff.

## Filenames and integration

Use versioned names `mr-[area]-[subject]-[variant]-v01.ext` for new deliveries. The example image paths in index.html differ from the longer names in ASSETS.md; the manifest's delivered paths are authoritative once approved. Do not guess paths.

For photos, each manifest record should include desktop/mobile path, actual dimensions, focal point, alt text, native versus resampled status, and approval. Use picture sources for AVIF/WebP with JPG fallback. Set intrinsic dimensions and test text contrast over the real crop. Keep the primary hero eager-loaded; lazy-load appropriate later imagery.

## First task

Hero photograph: light terracotta set with a can and cratered cream moon prop, side lighting, negative space for the current headline. Await the owner's answer about using concept can artwork versus final approved packaging. Other flavors remain concept names until confirmed.

## Hero v05 — integrated
Desktop and mobile cool-gray illustrations are now wired into index.html. White stars, subtle pink clouds, no gate sign, no can in hand. AVIF/WebP/JPEG responsive exports plus PNG masters are in assets/img and assets/incoming. Headline panel and intro text now use cool neutrals.

# Moon Rodeo asset checklist

Shared working checklist for the owner, Codex (asset creation), and Claude (site implementation).

## Handoff workflow

- Assets arrive in `assets/incoming/`; `assets/asset-manifest.json` records status and intended placement.
- `review` means a candidate, not permission to replace the live site's selected asset.
- After owner selection, record `approved` and create web exports in `assets/img/` or `assets/brand/`. Claude can then wire the exact paths into the site.
- Read `ASSET-HANDOFF.md` before integration. This is a shared filesystem handoff, not automatic messaging or a background watcher.
- Work one asset group at a time: create → review → approve → export desktop/mobile variants → integrate → check at both sizes.
- Preserve earlier versions. Do not overwrite Claude's HTML, CSS, or JavaScript as part of asset delivery.

## 1. Photography — work in this order

- [x] 01 Hero approved: warm analogous illustration v03 (Solar Orange / Lunar Yellow / Rodeo Ink). Desktop 2880×1800 and mobile 1080×1920 delivered in assets/incoming as analogous-v03, with AVIF/WebP/JPG and PNG. Earlier versions superseded. Ready for Claude integration.
- [ ] 02 Lunar Lemon: sun-bleached wood, lemon half, yellow-dominant light scene.
- [ ] 03 Cosmic Lime: backlit cactus ribs, deep green, supports cream/lime text.
- [ ] 04 High Desert Grapefruit: compacted dirt, pebbles, low sun, supports ink text.
- [ ] 05 Stardust Unflavored: night sky, warm flash, moon prop, supports cream text.
- [ ] 06 Space Cherry: scratched copper, reflected light, cherries, supports ink text.
- [ ] 07 Story: low desert horizon, large dusk sky, supports yellow/cream text.
- [ ] 08 Statement hover: hands and cans at worn outdoor wood table; supports cream text with a scrim if needed.

Each of 01–07 needs desktop and mobile crops, focal points, alt text, and AVIF/WebP/JPG derivatives. Desktop target: 2880×1800 (16:10); mobile: 1080×1920 (9:16). Statement: 2400×1350 (16:9). Keep lower-left 40% and upper-left clear on desktop, bottom 40% clear on mobile. Do not bake text into photos. AVIF budgets: <350 KB desktop, <200 KB mobile. If generation produces smaller masters, record actual native size and any resampling; do not label an upscale native-resolution artwork.

## 2. Brand assets

- [x] Transparent wordmark candidates available and copied to incoming.
- [ ] Select final refined wordmark. Three latest refinements are review candidates.
- [ ] Export selected wordmark in ink and reversed cream. PNG is currently authorized; owner handles vector conversion separately.
- [x] Standalone eight-point star PNG available and copied to incoming.
- [ ] Confirm star as the final reusable ornament at small sizes.
- [ ] Corner stamp / lettermark, readable at 36px width.
- [ ] Static intro splash mark; animate only if requested, with reduced-motion fallback.
- [ ] Favicon set: ICO 32, icon.svg if vector master supplied, PNG 192/512, Apple touch icon 180.
- [ ] Social share: 1200×630 JPG using selected wordmark and hero.

## 3. Illustration

- [ ] Newsletter: etched saddlebag or envelope with rising moon, about 400×400 display, 2–3 inks.
- [ ] Confirm raster or vector delivery for the illustration before production; ASSETS.md requests SVG, but logo PNG preference does not automatically change this requirement.
- [ ] Optional moon/cactus spots. Star already available for review.

## 4. Fonts and interface icons

- [ ] Self-host Fraunces 900 (opsz 72 / SOFT 70 / WONK 1) with license.
- [ ] Self-host Oswald 600 with license, unless owner selects an alternative.
- [ ] Self-host DM Sans 400/500/700 with license.
- [ ] Audition condensed slab and brush accents if requested; Job Clarendon and Knewave are suggestions, not selected fonts.
- [ ] Add social icons after account URLs are supplied.
- [x] Existing hamburger and directional arrows can remain; no asset generation needed.

## 5. Content decisions

- [ ] Final flavor lineup and names.
- [ ] Story paragraph and hero intro line.
- [ ] Statement CTA destination.
- [ ] Mailing-list provider and consent wording.
- [ ] Social URLs and privacy URL.
- [ ] Flavor-page destinations.

## 6. Later / optional

- [ ] Five square product portraits, 2000×2000.
- [ ] 4:5 lifestyle portraits.
- [ ] Dirt, worn wood, copper, cactus, clay/pottery, cheese-moon texture library.

## Product cutouts integrated
- [x] Five separate transparent PNG cans integrated in corresponding homepage flavor sections. Flavor pages do not yet exist separately.
- [x] Owner-supplied wordmark SVG preserved in assets/incoming. Generated mockups use it as a visual reference, not a pixel-exact logo composite.

- [x] Ship hero v05 desktop/mobile: cool grayscale, white stars, faint pink clouds, no sign or can.

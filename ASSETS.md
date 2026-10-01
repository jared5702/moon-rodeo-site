# Moon Rodeo site: asset list

The homepage now follows the ju.st homepage layout section by section. Each group below starts with what ju.st actually uses (checked on 2026-09-30), then lists the Moon Rodeo asset needed to replace it.

Everything goes in `assets/`. Naming follows the brief: `mr-[area]-[subject]-[variant]-v01.[ext]`.

---

## 0. What ju.st's homepage uses, top to bottom

| # | ju.st section | What's in it | Moon Rodeo equivalent (built) |
|---|---|---|---|
| 1 | Intro splash | Full-screen brand yellow (`#FFB819`) with logo animation, about 1–2 s | Full-screen Solar Orange with "Moon Rodeo" text. It fades after 0.9 s, only shows once per session, and is skipped for reduced motion |
| 2 | Fixed chrome | Hamburger icon top-left, boxed stacked "J U / S T" stamp logo bottom-left (desktop). On mobile the logo moves top-left and the menu top-right | Same positions. The stamp is a plain text label until a real lettermark exists |
| 3 | Full-screen menu | Search field, then giant links (Products, Cookbook, Health, Find, About) in brand yellow with ↓ arrows | Giant Fraunces links in ink with orange ↓ arrows. No search, because the site has nothing to search yet |
| 4 | Sticky slide stack (`hp1`) | **5 full-bleed photos**, each 100vh, each sliding up over the last. Small intro text top-left, 119px headline + → bottom-left. Separate desktop (16:9) and mobile (9:16) crops | **7 slides**: hero, 5 flavors, story. Flat brand-color stand-ins with labeled placeholders |
| 5 | Statement link (`st1`) | "Need **eggs →** for your restaurant?" in huge type on light cream. Hovering the link fades in a photo behind it | "Want the first **cold can →** when it lands?" Hovering fades in a photo slot |
| 6 | Email capture (`cf2`) | Yellow section. Left: line-art envelope illustration (SVG) with JUST inside. Right: "Join the conversation." with email field, consent checkbox and "Subscribe →" | Same layout on orange. Illustration slot left, form on a cream panel right |
| 7 | Footer, top | Continues the yellow. 4 link columns (Products / Find / Learn / About) and TikTok, Instagram and LinkedIn icons | 3 columns (Flavors / Learn / Stay in orbit). Social slot left empty |
| 8 | Footer, bottom | Cream band with giant yellow "Made from plants", legal links, © line | Ink band with giant orange "Stay hydrated, cowboy." and © line |
| — | Also on ju.st | Cookie banner (bottom-right, black card), custom cursor layer, OG share image 1200×630, favicon / app icons | Not built: no cookies are set, and the cursor is a gimmick. OG image and icons are listed below |

---

## 1. Photography (highest priority)

ju.st's whole homepage depends on photography. It has 5 slide photos plus 1 hover photo, and each slide has a separate desktop and mobile crop. Examples: `just-egg-home-hero-v4.jpg` (desktop) and `just-egg-home-hero-mobile-v3.jpg` (mobile), `just-one-powder-black.jpg` and `just-one-powder-black_9x16.jpg`.

**Specs for every slide image**
- Desktop: **16:10 or 16:9, 2880×1800 px** master (renders at 1440×900 @2x). Keep the **lower-left 40%** clean for the headline and the **upper-left** for the intro line.
- Mobile: **9:16, 1080×1920 px** master. Keep the **bottom 40%** clean.
- Export AVIF + WebP + JPG fallback. Target under 350 KB for desktop AVIF and under 200 KB for mobile AVIF.
- Write down the focal point for each crop.
- No text in the image files.

| File (desktop / mobile) | Slide | Shot description | Headline text color it must support |
|---|---|---|---|
| `mr-home-01-hero-desktop` / `-mobile` | Hero, "Earth underfoot. Moon overhead." | **Brief shot 1**: can on a terracotta plinth beside a cratered cream moon prop, side-lit. ju.st equivalent: close-up of the product on a clean background | Ink, so it needs a light image |
| `mr-home-02-lemon-desktop` / `-mobile` | Lunar Lemon | Lemon can on sun-bleached worn wood, one lemon half, hard late-day light. Yellow-dominant frame | Ink |
| `mr-home-03-lime-desktop` / `-mobile` | Cosmic Lime | Lime can among backlit cactus ribs (brief shot 3 variant). Deep green frame | Lime / cream, so it needs a dark image |
| `mr-home-04-grapefruit-desktop` / `-mobile` | High Desert Grapefruit | Grapefruit can on compacted desert dirt with pebbles, low sun, long shadow | Ink |
| `mr-home-05-unflavored-desktop` / `-mobile` | Stardust Unflavored | Night scene: navy-black sky, warm direct flash on the can and a moon prop | Cream |
| `mr-home-06-cherry-desktop` / `-mobile` | Space Cherry | **Brief shot 5**: cold can against scratched copper with a reflected light pool, cherries as the one prop | Ink |
| `mr-home-07-story-desktop` / `-mobile` | "Out here. Way out there." | **Brief shot 4**: low desert horizon, big empty sky, dusk | Lunar Yellow / cream |
| `mr-home-08-statement-hover` (16:9, 2400×1350) | Statement hover reveal | **Brief shot 2**: hands and sparkling water around a worn outdoor wooden table. ju.st uses `folded_egg_ciabatta_crop_hz.jpg` | Cream text over it, so it needs a dark image or a scrim |

**Nice-to-have for later pages** (ju.st uses these on its product pages): 1:1 product shots of each can on its flavor color (2000×2000), 4:5 lifestyle portraits (brief shot 6: boots, dust and a tiny moon prop), and seamless material textures from the brief's texture library.

## 2. Brand marks (needed from the designer; not invented here)

| Asset | ju.st equivalent | Spec |
|---|---|---|
| Primary wordmark, "MOON RODEO" | Wordmark in menu / meta | SVG, one-color ink + reversed cream versions |
| **Stamp / lettermark** for the fixed corner badge | Boxed stacked "J U / S T" (36×58 px on screen) | SVG in a tall box, legible at 36 px wide. For example "MR" or "MOON / RODEO" stacked |
| Intro splash mark | Animated logo on the yellow splash | SVG, or Lottie JSON if animated. Max 1.2 s, and needs a static fallback |
| Favicon set | `favicon.ico`, `icon.png`, `apple-icon.png` | `favicon.ico` (32), `icon.svg`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` (180) |
| Social share image | `eat-just_meta.jpg` 1200×630 | `mr-og-default.jpg` 1200×630, wordmark + hero photo |

## 3. Illustrations

| Asset | ju.st equivalent | Spec |
|---|---|---|
| Newsletter illustration | `just_newsletter_signup.svg`: single-weight line drawing of an open envelope with the JUST logo inside | SVG, etched linework, 2–3 inks max (brief). Suggest a saddlebag or envelope with a moon rising out of it. It shows at about 400×400 |
| (Optional) Menu / footer spot art | none | Small etched moon, star or cactus SVGs if wanted |

## 4. Icons (built inline; only replace if the designer wants custom ones)

| Icon | ju.st | Current build |
|---|---|---|
| Hamburger / close | 2-line hamburger, X | CSS 2-bar → X |
| Right arrow (headlines, buttons) | Long thin → | Inline SVG symbol `#i-arrow-right` |
| Down arrow (menu) | Long ↓ in brand color | Inline SVG symbol `#i-arrow-down` |
| Search | Magnifier | Not used |
| Social: TikTok, Instagram, LinkedIn | 24 px monochrome | **Need the account URLs first**, then 24 px SVGs |

## 5. Fonts

ju.st: Sharp Grotesk Medium 25 (headlines), Sharp Grotesk Book 25, Neue Haas Grotesk Display Roman/Medium (body).

Moon Rodeo (per brief). These load from Google Fonts for now. Production needs **self-hosted WOFF2**:
- `Fraunces` variable, or a static 900 instance with opsz 72 / SOFT 70 / WONK 1, plus `OFL.txt`
- `Oswald-600.woff2` plus `OFL.txt`
- `DMSans-400/500/700.woff2` plus `OFL.txt`

## 6. Copy and content decisions needed

- Final flavor lineup and names. They're marked as "Concept name" on every slide right now.
- Story paragraph (the story slide currently says "Placeholder story copy").
- Hero intro line (currently "Sparkling water with a little wild, a little otherworldly streak.").
- Statement-link line and where it goes (currently goes to email signup). ju.st sends "eggs" to a foodservice page. If there will be a wholesale or retailer page, that's the natural target.
- Mailing-list provider and consent wording. Until then, the form says truthfully that nothing was sent.
- Social account URLs, and a privacy policy URL for the form.
- Whether each flavor slide should link to its own flavor page, like ju.st's slides do.

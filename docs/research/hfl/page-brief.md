# Henri Fitzwilliam-Lay — Clone Research Brief

Source: https://www.henrifitzwilliamlay.com/ (WordPress + Elementor, CDN: nimbus-cdn.uk)

## Route Map (source → local)

| Source | Local | Status |
|---|---|---|
| `/` | `src/app/page.tsx` | Home |
| `/interiors/` | `src/app/interiors/page.tsx` | Project index |
| `/interior/<slug>/` | `src/app/interior/[slug]/page.tsx` | 9 projects + 2 coming-soon |
| `/interior-design-studio/` | `src/app/who-we-are/page.tsx` | Studio page |
| `/products/` | `src/app/products/page.tsx` | Products |
| `/announcements/` | `src/app/announcements/page.tsx` | Press archive |
| `/enquire/` | `src/app/enquire/page.tsx` | Contact |
| `/home/terms-conditions/`, `/home/privacy/` | `src/app/terms/page.tsx`, `src/app/privacy/page.tsx` | Legal (simple) |

## Design Tokens

- Background cream: `rgb(242, 238, 231)` → `#F2EEE7`
- Maroon (text + dark sections + footer): `rgb(56, 24, 25)` → `#381819`
- White: `#FFFFFF` (header on hero, text on maroon)
- Fonts:
  - `futura-pt` (Adobe Typekit) → **Jost** (Google) — geometric sans, used everywhere
  - `Arizona Flare Light` (flared serif) → **Marcellus** (Google) — big numbers 01–05, quote marks
- Body 16px, nav ~13–14px uppercase, letter-spacing ~0.08–0.12em
- Quote text ~28–30px light
- Section labels (e.g. "WHO WE ARE", "INTERIORS") ~14px uppercase tracked wide

## Header

- Logo top-left: interlocked HFL monogram SVG (90×87 viewBox), cream on hero, maroon on light pages
- Desktop nav right: INTERIORS · WHO WE ARE · PRODUCTS · ANNOUNCEMENTS · ENQUIRE + Instagram glyph
- Active page link: underlined
- Header is absolutely positioned over hero (transparent); on light pages sits on cream
- Mobile: logo left, hamburger (2 lines) right → full-screen maroon overlay, centered links, X to close, Instagram icon at bottom

## Home (`/`)

1. **Hero slider** — full-viewport (100vh), 4 slides, each: portrait image (object-fit cover) + centered link
   - Slides: Sussex Home→sussex13, Bradby House→bradby02, Spring Terrace→springterrace03, Gassin→gassin01
   - Prev/Next arrow buttons mid-left/right (thin chevrons, white)
   - Slide title bottom-left, uppercase white, links to project
   - Auto-advance + fade transition
2. **Intro paragraph** — centered, max ~640px, futura, maroon, on cream. Padding ~180px top/bottom
3. **Image grid** — 2 columns, staggered heights (left col: staircase tall, right: bathroom shorter), gap ~28px, side margins ~60px; second row single left image (lamp scene)
4. **Quote section** — right-aligned column (~35% width): large " marks, 4-line quote in futura light ~30px maroon, then "HOUSE AND GARDEN" caption ~13px tracked
5. **INTERIORS maroon section** — full-bleed `#381819`; left: kitchen image (~48% width, flush left with ~60px margin); right: label "INTERIORS" + paragraph (white/cream text) + "Discover" link
6. **WHO WE ARE section** — cream; left: label + paragraph + "About the Studio" underlined link; right: storefront image (~48%)
7. **Footer** (maroon `#381819`, cream text): logo left; address + email/phone col; links col (Terms & Conditions, Privacy Policy, Instagram, Enquire); SUBSCRIBE FOR ANNOUNCEMENTS + email input (translucent white bg, underline style) + "By joining the mailing list, I agree to the Privacy Policy."; badges row (101 H&G, The List, BIID); bottom row: copyright left, "Site crafted by March" right

## Interiors (`/interiors`)

- 3-col grid (gap ~28px), 9 projects + 2 "Coming Soon" cards
- Card: portrait image (4:5-ish, object-fit cover) + name below, uppercase ~13px tracked, maroon
- Projects: WOW!House, Sussex Home, The Old Rectory, Gassin, Bradby House, Ferney Hall, Ladbroke Grove, Lansdowne Road, Spring Terrace, Egerton Crescent (coming soon), Ladbroke Square (coming soon)
- Coming-soon cards use custom "coming soon" images, no links

## Project detail (`/interior/[slug]`)

- Full-bleed hero image (~90vh, object-fit cover), header overlays
- Below: project name label + description paragraph (left-aligned, max ~600px)
- Gallery: 2-col image grid with varying aspect ratios, generous vertical rhythm (~64px gaps), margins ~60px
- Sussex Home has ~8 gallery images; each project has hero + several gallery images
- End: "YOU MAY LIKE" 3-col related projects + footer

## Who We Are (`/who-we-are` → source `/interior-design-studio/`)

1. Top: left label "WHO WE ARE" + 2 paragraphs; right: studio storefront image (Still1)
2. AWARDS & ACCOLADES: 2 lines
3. **ABOUT HENRI** maroon section: left portrait (henri-fitzwilliam-lay), right: label, quote intro (HG Top 100 2025), 2 bio paragraphs, MEET THE TEAM list (5 members)
4. HOW WE WORK: vertical center timeline, 5 steps (01–05), alternating image/text, maroon dots on thin line, scroll-reveal (text starts faded, turns maroon)
   - 01 GETTING TO KNOW YOU → getting-to-know-you.jpg (left img / right text)
   - 02 CONCEPT DEVELOPMENT: A CURATED VISION → still1.jpg (left text / right img)
   - 03 DESIGN REFINEMENT & SOURCING → still12.jpg (left img / right text)
   - 04 PROJECT EXECUTION → project-execution.jpg (left text / right img)
   - 05 A HOME THAT GROWS WITH YOU → a-home-that-grows-with-you.jpg (left img / right text)
5. GET IN TOUCH: form (first/last name, email, telephone, subject select, message, mailing-list checkbox, SEND ENQUIRY button) + 2 images right (get-in-touch-1, get-in-touch-2)
6. YOU MAY LIKE: Sussex Home, Lansdowne Road, Ferney Hall + "View Interiors" link

## Products (`/products`)

- Label "PRODUCTS" + 3 paragraphs (left, max ~500px)
- 3-col grid of 5 product images with caption names below each (uppercase 13px)
- GET IN TOUCH form (same as who-we-are)
- YOU MAY LIKE: WOW!House, Bradby House, Ferney Hall

## Announcements (`/announcements`)

- Featured item: image right (00008, ~40% width), title + "Read Article" left bottom-aligned
- Grid: 4-col of 16 items (image ~4:5 + uppercase title below)
- Titles link to article pages (out of scope → keep source URLs)

## Enquire (`/enquire`)

- Left column: ENQUIRE label + "We've Moved!" + address + office hours + registered office; then 2-col fields: First name/Last name, Email/Telephone, Subject (select), Message, mailing-list checkbox, SEND ENQUIRY
- Labels right of form (top-right area): TELEHONE [sic], EMAIL, PRESS, INSTAGRAM
- Right: embedded map (grayscale Google Map with maroon logo pin) — recreate as static styled map image? Use iframe with grayscale filter + custom pin overlay
- Note: source has typo "TELEHONE" — preserve as-is? (reproduce faithfully)

## Assets → local paths (public/sites/hfl/images/)

52 files downloaded (magic-byte verified, renamed to real types). Key mappings:
- sussex13.jpg (full 1200×1600), ladgrove12.jpg, ferney08.jpg, bradby02.jpg, springterrace03.jpg, gassin01.jpg, tor06.jpg, ladgrove02.jpg, lansdowne03.jpg, henri-wow-house11550-1.jpg
- coming-soon---egerton-crescent.jpg, coming-soon---ladbroke-square.jpg
- interiors-kitchen.webp (INTERIORS section), still4-door.webp (WHO WE ARE section)
- still1.jpg (studio top img), henri-fitzwilliam-lay.jpg (portrait), timeline: getting-to-know-you / still1(02 hands) / still12 / project-execution / a-home-that-grows-with-you
- get-in-touch-1.jpg, get-in-touch-2.jpg
- Products: img-0117 / img-0103 / img-0100 / img-0110 / img-0129
- Announcements: 00008 (featured) + 16 grid items (08-26cover, cover-sketch, feed41, misia-2, gassin11, top-100-mediapack-2025, rupert-bevan-stoll-collab, defining-style-cover, hfl, residence-magazine-cover, the-current-vol.5-legacy-edition, henir-1stdibs, hfl-projectoftheyear, layout-image, project-of-the-year-cover, bradby-insert-pdf)
- Badges: email-white-scaled….png (H&G 101), logo-thelist3x.png, logo-riid3x.png
- Logo: docs/logo.svg → inline React component (60KB of vector path data)

## Interactions

- Hero slider: fade transition, auto-advance ~5s, arrows
- Scroll reveals: sections fade/translate in (Elementor fadeInUp default)
- Timeline: text opacity 0.25→1 as scrolled into view
- Nav active underline; hover states subtle
- Forms: underline-only inputs, select dropdown, checkbox, maroon button with hover

## Font substitution note

futura-pt and Arizona Flare are licensed Adobe/commercial fonts; clone bundles Jost + Marcellus from Google Fonts (self-hosted via next/font) as metric-close substitutes.

# Henri Fitzwilliam-Lay — Website Clone

A high-fidelity recreation of [henrifitzwilliamlay.com](https://www.henrifitzwilliamlay.com/) built with the [AI Website Cloner Template](https://github.com/JCodesMore/ai-website-cloner-template) workflow: **Map → Observe → Build → Compare**.

## What's inside

- **Next.js 16** (App Router, React 19, TypeScript strict, Turbopack)
- **Tailwind CSS v4** with the source site's exact design tokens (cream `#F2EEE7`, maroon `#381819`)
- **Self-hosted Google Fonts** — Jost (substitute for Adobe futura-pt) and Marcellus (substitute for Arizona Flare Light)
- **9 routes**, all statically prerendered:
  - `/` — full-viewport hero slider (4 projects, autoplay + arrows), intro, staggered gallery, press quote, maroon Interiors band, Who We Are band
  - `/interiors` — 3-column project grid (9 projects + 2 coming soon)
  - `/interior/[slug]` — project pages with full-bleed hero, description, staggered gallery, related projects
  - `/who-we-are` — studio intro, About Henri band, 5-step scroll-reveal process timeline, enquiry form
  - `/products` — curated collection grid + enquiry form
  - `/announcements` — featured press item + 16-item magazine grid
  - `/enquire` — contact details, enquiry form, grayscale map with custom maroon pin
  - `/terms`, `/privacy` — legal pages
- All photography and brand assets served locally from `public/sites/hfl/images/`
- Scroll-reveal animations via IntersectionObserver, hover states, mobile hamburger with full-screen maroon overlay menu

## Getting started

```bash
npm install
npm run dev    # http://localhost:3000
```

## Checks

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript strict
npm run build      # production build (all 22 pages prerender)
npm run check      # lint + typecheck + build
```

## Structure

```
src/
  app/                      # Routes (/, interiors, interior/[slug], who-we-are, products, announcements, enquire, terms, privacy)
  components/sites/hfl/     # Site-specific components (header, footer, slider, timeline, forms, logo, data)
public/sites/hfl/images/    # 53 locally-served source images
docs/research/hfl/          # Page brief: route map, design tokens, asset mapping
docs/design-references/     # Source vs clone comparison screenshots
```

## Notes

- Built for learning/demonstration purposes; the original design, photography, and brand belong to Henri Fitzwilliam-Lay Ltd.
- Licensed fonts (futura-pt, Arizona Flare Light) are substituted with metric-close Google Fonts (Jost, Marcellus).
- Announcement article links point to the live source articles.

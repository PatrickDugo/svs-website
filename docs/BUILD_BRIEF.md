# Selasie Visual Studio — Website Build Brief

**For:** Claude Code · **Owner:** Patrick Selasie Dugo · **Updated:** 22 June 2026
**Read `CLAUDE.md` first.** This brief is the complete plan. Build on the existing `index.html` / `privacy.html` / `terms.html` design — refine and structure it; do not redesign the brand.

---

## 1. Project snapshot

| | |
|---|---|
| **What** | A premium, fast marketing landing page for a photography & videography studio in Accra, Ghana. |
| **Who** | Couples, event hosts, restaurants/brands, and corporate clients in Greater Accra. |
| **Job of the site** | Show the work beautifully → drive visitors to the **Pixieset galleries** and to **contact** (WhatsApp/email). |
| **Explicitly NOT** | An online store, a booking-with-payment system, or a self-hosted gallery. Pixieset handles delivery. |
| **Success** | A visitor lands, feels the studio is premium and trustworthy, and within seconds taps "View galleries" or contacts SVS. Loads fast, ranks for "photographer/videographer Accra", costs ~nothing to host. |

### Constraints (business context — keep in mind)
- Organic/direct marketing only this year; **no paid-ad pixels** unless asked.
- **No cloud infrastructure** — static hosting only.
- Premium **ivory/white + gold** aesthetic, **no pure black**.

---

## 2. Source of truth & assets

Treat the current files in this folder as the **visual + content reference**:
- `index.html` — finalized ivory landing page (all sections, copy, interactions). **Match this look.**
- `privacy.html`, `terms.html` — legal pages, content already written (Ghana Data Protection Act 2012 / governing law Ghana). Keep the substance; restyle to the system.
- `images/logo-dark.png` — dark logo, use on light backgrounds (transparent PNG 276×350).
- `images/logo-white.png` — white logo (for any dark element, e.g. lightbox UI if needed).

If you change stack, **port the design faithfully** rather than starting visually from scratch.

---

## 3. Technical approach — you decide, within these rules

**You choose the stack** (e.g. plain HTML/CSS/JS with no build, or a static framework such as Astro). Whatever you pick **must** satisfy:

1. **Static output**, deployable free to **Netlify drop** or GitHub Pages — no server, no DB.
2. **Performance:** Lighthouse ≥ 95 for Performance, Accessibility, Best Practices, SEO on mobile. Hero usable < 2s on 4G. No layout shift.
3. **SEO-correct:** server-rendered/static real HTML, per-page `<title>`/meta, Open Graph, and JSON-LD. Generate `sitemap.xml` + `robots.txt`.
4. **Non-developer maintainable:** Patrick must be able to **swap photos and edit text** without touching logic. Document exactly how in `README.md`. Prefer a single config/content file for the bits that change.
5. **Minimal dependencies:** Google Fonts is the only permitted external request. No analytics/trackers. No heavy JS frameworks shipped to the client unless they tree-shake to near-zero.
6. **Accessible:** WCAG 2.1 AA.

**Decision guidance:** if the simplest path (clean multi-file HTML/CSS/JS, shared partials via includes or a tiny build) meets all six, prefer it — Patrick is a solo non-developer. If you choose a framework, justify it in `README.md` and keep content editing trivial (e.g. Astro content collections / a `site.config` file). **State your choice and why at the top of `README.md`.**

---

## 4. Information architecture

```
/                 Landing (one page, anchored sections)
  #top  #about  #services  #work  #galleries  #pricing  #contact
/privacy          Privacy Policy
/terms            Terms of Use
sitemap.xml, robots.txt, favicon, og image
```

All primary CTAs (nav button, hero, gallery band, footer "Client Gallery") → `PIXIESET_URL`.
Secondary CTA ("Book a session") → `#contact`.

---

## 5. Design system

Extract these into tokens (CSS variables / theme config).

**Colour (warm, no black):**
`--bg:#f7f3ec` · `--cream:#fbf9f4` · `--panel:#f1ebdf` · `--surface:#ffffff` · `--ink:#2c2620` · `--soft:#857868` · `--line:#e7ded0` · `--gold:#b08d57` · `--gold-deep:#977a47` · lightbox dim `rgba(36,30,24,.92)`.

**Type:** Cormorant Garamond (display, 500/600; italic for accents) + Jost (body, 300/400/500). Display sizes use `clamp()` for fluid scaling. Body 16px/1.7, weight 300.

**Spacing & layout:** max content width ~1120px, side padding 26px; sections ~110px vertical (78px mobile). Hairline borders `--line`. Generous whitespace = premium.

**Motion:** tasteful, ~0.2–0.85s ease. Reveal-on-scroll, gold scroll-progress bar, animated counters, magnetic buttons (`@media (hover:hover)` only), hero intro stagger. Respect `prefers-reduced-motion` (disable non-essential motion).

**Components:** button (gold solid / ghost), eyebrow label, section heading (`.h2`), card, pill/price tag, nav (transparent → solid-blur on scroll), filter chip, portfolio tile, lightbox, testimonial slide + dots, cookie toast, footer.

---

## 6. Page spec — Landing (section by section)

Order and content mirror the current `index.html`:

1. **Loader** — centered dark logo, gentle pulse, fades on `load`.
2. **Scroll progress** — thin gold bar at the very top, tracks scroll.
3. **Nav (fixed)** — left: dark logo + "SELASIE VISUAL STUDIO"; right: About · Services · Work · Pricing + a gold **"View galleries"** button. Transparent over hero → solid ivory + blur after 40px. Scroll-spy highlights the current section. Mobile: hamburger → dropdown.
4. **Hero (full viewport)** — soft ivory radial background (with a slot to drop a hero photo later). Stacked, center: eyebrow **"Accra, Ghana"** → dark logo → `Selasie Visual Studio` (Cormorant) → gold rule → **"Elegance, Unbound"** → italic lead *"Refined photography & videography for the moments that matter."* → CTAs: **View the galleries** (gold → Pixieset) + **Book a session** (ghost → #contact). "scroll" hint, bobbing.
5. **Marquee strip** — quiet panel band, italic words: Weddings · Events · Brands · Portraits · Corporate · Film (looping).
6. **About** — two columns: copy ("Considered, unhurried imagery"; founded by Patrick Selasie Dugo, collaborative) + a logo panel (later swappable for a portrait).
7. **Stats** — warm panel, 4 animated counters: 150+ moments, 60+ clients, 48hr fastest delivery, 5★ rating. Mark "EDIT to real figures".
8. **Services** — 4 cards: Brand & Content *from GHS 1,500* · Corporate & Headshots *from GHS 2,500* · Events & Celebrations *from GHS 3,500* · Weddings *from GHS 8,000*. Note: "Coming soon — hybrid wedding films & 360° virtual tours".
9. **Portfolio (#work)** — filter chips (All/Weddings/Events/Corporate/Brand) + responsive 4:5 tile grid with `data-cat`, hover lift, click → **lightbox**. Tiles use warm gradient placeholders until photos are added. Note pointing to the photo-swap docs.
10. **Gallery funnel (#galleries)** — the conversion band. Light framed accent (gradient cream→panel), eyebrow "Client galleries", heading **"Your gallery awaits"**, supporting line, big gold **"Enter the galleries"** → Pixieset, small "Hosted securely on Pixieset".
11. **Testimonials** — auto-rotating quotes + dots (placeholders marked "EDIT").
12. **Pricing** — clean rows (service → "from GHS …") + terms line: *50% non-refundable deposit secures your date · balance before delivery · private gallery 30 days · full terms apply.*
13. **Contact (#contact)** — heading "Book your session", line about deposit, buttons: WhatsApp · Email · Instagram · TikTok.
14. **Footer** — dark logo, "Selasie Visual Studio", "Photography & Videography · Accra, Ghana", **legal links (Privacy · Terms · Client Gallery)**, fine print (sole proprietorship owned by Patrick Selasie Dugo; all images © SVS, no reuse without written permission), © year.
15. **Cookie toast** — light, dismissible, essential-cookie notice, links to Privacy. Persist dismissal via `localStorage` (try/catch).

---

## 7. Page spec — Privacy & Terms

Restyle the existing content to the design system (sticky slim bar with logo + "← Home", readable article column, gold accents, matching footer).
- **Privacy** covers: data collected, essential cookies, third parties (Pixieset, hosting, WhatsApp/IG/TikTok, Google Fonts), retention, rights under **Ghana Data Protection Act, 2012 (Act 843)**, contact.
- **Terms** covers: site is informational + a Pixieset gateway (no on-site payment), image **copyright/IP**, client-gallery note, booking summary (50% deposit etc., "the signed agreement takes precedence"), acceptable use, third-party links, disclaimer/limitation, **governing law = Ghana**, contact.
Keep "Last updated" dates. These are solid templates; add a note in `README.md` that Patrick may have a Ghanaian lawyer glance over them.

---

## 8. Configuration layer (single source)

Expose one obvious place (a `site.config`/`config.js`/front-matter data file) holding:
```
pixieset_url, email, whatsapp (+233554637307), instagram (selasievisualstudio),
tiktok (selasievisualstudio), domain (www.selasievisualstudio.com),
business_name, owner (Patrick Selasie Dugo), city (Accra, Ghana),
services[] (name, from_price), pricing_terms, stats[], testimonials[]
```
All CTAs, meta tags, JSON-LD, and footer pull from this. Changing the Pixieset URL or a price should be a **one-line edit**. Document it in `README.md`.

---

## 9. Photography & asset requirements

Build easy, documented **photo slots**:
- **Hero background** — 1 landscape image, ~2000px wide, < 400KB, subtle dark overlay kept for text legibility.
- **Portfolio** — 6–12 images, 4:5 portrait, ~1200px, < 300KB each, tagged by category (`wed/cor/evt/brd`).
- **About panel** — optional 1 portrait (4:5).
- **OG/social image** — 1200×630 (can be a branded logo-on-ivory card).
- **Favicon** — from the logo.

Provide an `images/` convention + a short "how to add/replace photos" section in `README.md`. Recommend exporting **sRGB JPEG**, optimizing at squoosh.app/tinypng. Use responsive `srcset`/`<picture>` and lazy-loading for everything below the fold. Never ship unoptimized full-res files.

---

## 10. SEO & metadata

- Per-page `<title>`, meta description, canonical, `theme-color`.
- Open Graph (type/title/description/url/image) + Twitter summary card.
- **JSON-LD `ProfessionalService`**: name, image, description, url, telephone `+233554637307`, founder "Patrick Selasie Dugo", address (Accra, GH), areaServed "Greater Accra, Ghana", priceRange "GHS", sameAs [Instagram, TikTok].
- `sitemap.xml`, `robots.txt`, semantic headings (one `<h1>` per page), descriptive `alt` text, meaningful link text.

---

## 11. Performance, accessibility, privacy

- **Perf:** inline critical CSS or keep CSS tiny; defer/async non-critical JS; preconnect to Google Fonts with `display=swap`; compress/lazy-load images; no render-blocking. Target Lighthouse ≥ 95 mobile.
- **A11y (WCAG 2.1 AA):** colour contrast (charcoal-on-ivory passes; check gold text sizes), full keyboard nav, visible focus states, `aria-label`s on icon buttons and nav, lightbox is focus-trapped + Esc-closable, `prefers-reduced-motion` honored, ≥44px tap targets.
- **Privacy:** no third-party analytics/trackers by default. Essential-only cookie for the notice. If Patrick later wants stats, suggest a privacy-friendly option (e.g. self-host none / Netlify analytics) and ask first.

---

## 12. Deployment & repo

- Output a **static build** publishable by dragging the build folder to **netlify.com/drop** (document the exact folder).
- Initialize **git**; sensible `.gitignore`; clear commit history by phase.
- `README.md`: stack choice + rationale, how to run/build/preview, how to change config, **how to add/replace photos and text**, and how to deploy (Netlify drop now; optional GitHub→Netlify CI and custom domain later).
- Keep `CLAUDE.md` and this brief in the repo.

---

## 13. Build plan (phases)

- **Phase 0 — Orient & scaffold.** Read current files + `CLAUDE.md`. Pick stack (note rationale in README). Scaffold repo, git init, fonts, base reset.
- **Phase 1 — Design system.** Tokens (colour/type/space/motion), shared layout (head/meta partial, nav, footer), component primitives. Wire the config layer.
- **Phase 2 — Landing.** Build sections 1–15 to match the ivory design, responsive + accessible, with photo slots and reveal/scroll-spy/counters/magnetic/lightbox/carousel/cookie interactions.
- **Phase 3 — Legal.** Privacy + Terms, styled to system, linked in footer.
- **Phase 4 — SEO & meta.** Per-page meta, OG, JSON-LD, sitemap, robots, favicon, OG image.
- **Phase 5 — Content slots & docs.** Finalize easy photo/text editing; write README "how to update" + image-optimization guidance.
- **Phase 6 — QA.** Lighthouse (all ≥95), axe/a11y pass, link check, responsive 320–1440px, cross-browser, reduced-motion. Fix.
- **Phase 7 — Deploy.** Produce build, deploy to Netlify, document. Leave a punch-list of items needing Patrick's input (below).

---

## 14. Definition of Done ✅

- [ ] Look matches the ivory/gold design; **no pure black** anywhere.
- [ ] Stack chosen, justified in `README.md`; static build deploys to Netlify.
- [ ] Every gallery CTA → `PIXIESET_URL`; "Book a session" → `#contact`; WhatsApp/IG/TikTok/email correct.
- [ ] Privacy + Terms built, restyled, linked in footer; cookie notice works.
- [ ] SEO meta + Open Graph + JSON-LD + sitemap + robots + favicon present.
- [ ] Lighthouse ≥ 95 (Perf/A11y/Best/SEO) on mobile; no CLS.
- [ ] WCAG 2.1 AA: keyboard, focus, contrast, reduced-motion, lightbox trap/Esc.
- [ ] Responsive 320–1440px; all interactions work; graceful with JS off where possible.
- [ ] Config + "how to add photos/text" documented; placeholders for testimonials/stats clearly marked.
- [ ] git history by phase; `CLAUDE.md` + brief in repo.

---

## 15. Guardrails — do NOT
No e-commerce / on-site payment / on-site galleries. No pure black. No ad/tracking pixels or third-party analytics unless asked. Don't invent testimonials, stats, or prices — mark placeholders. Don't alter brand colours, fonts, logo, or "Elegance, Unbound". Don't add cloud/backend.

---

## 16. Open items needing Patrick's input (leave as clearly-marked placeholders)
1. Real **Pixieset URL**.
2. Confirm **contact email** (`selasievisualstudio@gmail.com`?).
3. **6–12 portfolio photos** + 1 **hero** image (optimized).
4. **Real testimonials** (name/role + quote) and **real stat numbers**.
5. Optional **custom domain** (e.g. selasievisualstudio.com).
6. Optional: lawyer review of Privacy/Terms.

---

## 17. Kickoff prompt (paste into Claude Code, run inside this `Website` folder)

> You are building the Selasie Visual Studio marketing website. **First read `CLAUDE.md` and `BUILD_BRIEF.md` in full, and study the existing `index.html`, `privacy.html`, `terms.html`, and `images/` — they are the visual and content source of truth.**
>
> Goal: a premium, fast, **static** landing page (+ Privacy + Terms) in the existing **ivory/white + gold, no-black** design, whose single job is to funnel visitors to the SVS Pixieset galleries and to contact. Scope is landing + legal only — no e-commerce, no on-site galleries, no backend.
>
> **You choose the stack**, but it must meet the six rules in BUILD_BRIEF §3 (static, Lighthouse ≥95, SEO-correct, non-developer-maintainable, minimal deps, WCAG AA). State your choice and rationale at the top of `README.md`.
>
> Work in the phases in §13. Preserve all interactions (loader, scroll progress, reveals, scroll-spy, animated counters, magnetic buttons, filterable portfolio + lightbox, testimonial carousel, mobile menu, cookie consent). Put everything that changes (Pixieset URL, contacts, domain, services/prices, stats, testimonials) in **one config/content file** and document how to edit it and how to add/replace photos in `README.md`. Keep `+233554637307`, IG/TikTok `@selasievisualstudio`, and the "Elegance, Unbound" statement (with "Accra, Ghana" as the location, separate).
>
> When done, run a Lighthouse + accessibility + link + responsive QA pass against the Definition of Done (§14), then give me a build/deploy summary and the punch-list of items I still need to provide (§16). Ask me before doing anything outside this brief.

---
*End of brief. Build on the existing design; when unsure, choose the simplest option that satisfies the rules and ask before expanding scope.*

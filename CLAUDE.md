# CLAUDE.md — Selasie Visual Studio Website

Persistent guidance for Claude Code working in this repo. Read this first, then `docs/BUILD_BRIEF.md` for the full spec.

## What this is
A **premium marketing landing page** for Selasie Visual Studio (SVS), a photography & videography studio in Accra, Ghana, owned by **Patrick Selasie Dugo**. Its single job: present the work beautifully and **funnel visitors to the SVS Pixieset galleries** and to contact. **No payments or galleries are hosted on this site.**

Scope = **one landing page + Privacy + Terms.** Nothing more for now.

## Source of truth
The existing files in this folder are the **visual + content source of truth** — keep the look and copy:
- `index.html` — current ivory/gold landing page (all sections + interactions)
- `privacy.html`, `terms.html` — legal pages, already written
- `images/logo-dark.png` (dark logo for light backgrounds), `images/logo-white.png` (white logo) — transparent PNG, 276×350

Build on this design. Do **not** redesign the brand. Improve structure, semantics, responsiveness, accessibility and maintainability.

## Brand (do not change)
- **Palette (warm, NO pure black):** bg `#f7f3ec`, cream `#fbf9f4`, panel `#f1ebdf`, surface `#ffffff`, ink `#2c2620`, soft `#857868`, line `#e7ded0`, gold `#b08d57`, gold-deep `#977a47`. Lightbox dim uses warm `rgba(36,30,24,.92)` — never `#000`.
- **Type:** `Cormorant Garamond` (display/serif) + `Jost` (sans 300/400/500), via Google Fonts.
- **Voice:** refined, calm, confident. Tagline statement = **"Elegance, Unbound"**. **Accra, Ghana** is the location, NOT part of the statement.

## Config — set these in ONE place and wire everywhere
- `PIXIESET_URL` — the real Pixieset address (placeholder today: `https://selasievisualstudio.pixieset.com`). Every "View galleries / Enter the galleries / Client Gallery" CTA uses it.
- WhatsApp `+233554637307` → `https://wa.me/233554637307`
- Instagram `@selasievisualstudio`, TikTok `@selasievisualstudio`
- Email: `selasievisualstudio@gmail.com` (Patrick to confirm)
- Domain placeholder: `www.selasievisualstudio.com` (used in canonical, Open Graph, JSON-LD)

## Hard requirements
- **Static site**, deployable free to **Netlify drop** (or GitHub Pages). No backend, no database, no cloud infra.
- **You choose the stack** (plain HTML/CSS/JS or a static framework like Astro) — but it MUST: build to static files, hit Lighthouse ≥95 across the board, be SEO-correct (real HTML, meta, Open Graph, JSON-LD), be **easy for a non-developer to update photos & text**, and stay accessible (WCAG 2.1 AA). State your stack choice + rationale in `README.md`. If in doubt, prefer the simplest thing that meets these.
- Keep dependencies near-zero. Google Fonts is the only allowed external request. No analytics/trackers (privacy-first); keep the essential-only cookie notice.
- Preserve all interactions from `index.html`: loader, scroll-progress bar, scroll-reveal, scroll-spy nav, animated stat counters, magnetic buttons (only `@media (hover:hover)`), filterable portfolio + lightbox, testimonial carousel, mobile menu, cookie consent (wrap `localStorage` in try/catch).

## Guardrails — do NOT
- Do not add e-commerce, booking forms that take payment, or on-site galleries.
- Do not introduce pure black anywhere.
- Do not add paid-ad tracking pixels or third-party analytics without being asked.
- Do not invent testimonials, stats, or prices — use the placeholders and mark them clearly for Patrick to replace.
- Do not change brand colours, fonts, logo, or the "Elegance, Unbound" statement.

## Commands (fill in once stack is chosen)
- Dev: `<your dev command>`
- Build: `<your build command>` → static output
- Preview build: `<your preview command>`

## Definition of done
Matches the ivory design, all CTAs point to `PIXIESET_URL`, Privacy/Terms linked in footer, SEO + JSON-LD present, Lighthouse ≥95 (Perf/A11y/Best/SEO), responsive 320–1440px, photo/content slots documented in `README.md`, deploys cleanly to Netlify. See `BUILD_BRIEF.md` → "Definition of Done".

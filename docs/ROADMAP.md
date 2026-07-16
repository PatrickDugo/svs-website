# SVS Website — Roadmap
*Updated 13 July 2026 · Live: precious-brioche-db9ed2.netlify.app*

---

## 🔜 DO NOW — the Netlify-stage checklist (in order)

1. **Accept the admin invite.** Open the Netlify email in p.dugo28@gmail.com → Accept → set password → log in at `/admin`. (If the email expired: Netlify → precious-brioche-db9ed2 → Identity → Invite users → re-send.) Then Claude gives you the admin lesson.
2. **Buy the domain (~$11/year).** selasievisualstudio.com is available at Porkbun — it's already in your cart there. Pay, then in Netlify: Domain management → Add domain. Claude then updates the site's internal URLs (canonical, sitemap, social tags) to match.
3. **Google Search Console (free, after domain).** Verify the domain, submit sitemap.xml. This is what makes Google index you.
4. **Google Business Profile (free, biggest local-SEO lever).** business.google.com → "Selasie Visual Studio", category Photographer, Accra, +233 55 463 7307, website link, 10–15 best photos. Start asking happy clients for Google reviews.
5. **Point Instagram + TikTok bios** at the new domain.
6. **Replace placeholder content via /admin → Page text:** real stats (150+/60+/48hr are placeholders), real testimonials (marked "EDIT"), confirm prices.
7. **Rename the Netlify site** (optional, free): Project configuration → Change site name → e.g. selasievisualstudio.netlify.app — nicer until the domain connects.

## 🕐 LATER — improvements backlog

**Design / UX**
- ✅ DONE (13 Jul): dark-mode polish pass 1 · hero crossfade slideshow (drop 2–4 photos in photos/1-hero/ to control it) · interludes + gallery band now Patrick's own photos, site 100% Pixieset-free incl. CSP · custom 404 page · "Next gallery →" link.
- Deeper dark-mode pass + light-mode refinement (more deliberate gold accents) — still open.
- Gallery page: category filter chips on the portfolio, image counter on hover — still open.
- Micro-interactions: page transitions between index ↔ gallery, cursor-following "View" pill on cards, subtle grain/texture overlay.
- Mobile nav: full-screen menu with staggered link animation.

**Content / SEO**
- Rename photo files descriptively (bride-first-dance.jpg, not File 1.jpg) — file names become Google-readable descriptions.
- Write a short description for each gallery (in /admin → Galleries).
- Per-gallery social sharing images (og:image per gallery).
- About page expansion: portrait of Patrick, story, Person schema for name-search ("Patrick Selasie Dugo — Founder").
- Blog-style "Behind the shoot" pages (1/quarter) for compounding SEO.

**Performance**
- Image optimization pipeline: auto-generate WebP + responsive sizes at build (sharp in scan script) — biggest speed win.
- Lazy-load film strip images only when scrolled near.
- Lighthouse audit pass targeting ≥95 on mobile.

**Features**
- Wedding films / video section (YouTube embeds) when ready.
- Simple contact form (Netlify Forms, free) as alternative to WhatsApp.
- Instagram feed strip (via Behold or similar free tool).
- Client testimonial submission link.
- Analytics: privacy-friendly option (e.g. GoatCounter, free) — only if wanted.

**Housekeeping**
- ✅ DONE (13 Jul): legacy ivory backup + unused css/site.css + js/site.js removed (recoverable from git history) · README rewritten for the current system · no stray files.
- Two-factor authentication on GitHub, Netlify, and email accounts — Patrick's action.

# SVS Website — Status Report
*Selasie Visual Studio · Patrick Selasie Dugo · 13 July 2026*

---

## ✅ What exists today

**The website** — live at https://precious-brioche-db9ed2.netlify.app
- Premium editorial design: cinematic hero, parallax image interludes, staggered portfolio with 3D-tilt cards, draggable film strip, animated stats, testimonial carousel.
- **Light mode / dark mode** — toggle button (☀/☾) in the top navigation; remembers your choice; logo swaps automatically. Dark = espresso + gold; light = the original SVS ivory + gold.
- **Your own galleries** — gallery.html pages with masonry grid + full-screen lightbox (keyboard + swipe). No Pixieset anywhere: every "gallery" button and link now stays on YOUR site.
- Privacy + Terms pages (matching design), cookie notice, SEO meta + business schema, sitemap, robots, security headers, fully responsive 320px→4K, accessibility-minded.

**The admin** — yoursite/admin (Decap CMS, Pixieset-style)
- *Website Photos*: labelled slots (hero, about ×2, portfolio cards, film strip) with portrait/landscape choice.
- *Page text*: hero lines, about paragraphs, stats, services + prices, pricing terms, testimonials, contact lines.
- *Galleries*: create/edit galleries and their photos.
- Login: Netlify Identity, invite-only. **Pending: accept the invite email at p.dugo28@gmail.com.**

**The folder photo system** (NEW — your simplest workflow)
- `photos/` in your Website folder, with clearly marked paths (see `photos/README.md`):
  `1-hero/` · `2-about/` · `3-services/` · `4-film-strip/` · `galleries/<Category>/<Gallery Name>/`
- Drop photos in → publish → the site rebuilds itself: covers, categories, titles, portrait/landscape, and photo descriptions are all worked out automatically from folders and file names (`scripts/scan-photos.js`, runs on every Netlify build).

**Infrastructure**
- GitHub: github.com/PatrickDugo/svs-website (backup + version history of everything)
- Netlify: auto-deploys from GitHub on every change, free
- Cost so far: **GHS 0 / $0**

## ⚠️ Transitional note
Your current photos still *load from* Pixieset's image servers (as placeholders) so the site isn't empty. The moment you drop your own photo files into the `photos/` folders and we publish, they are replaced and the last trace of Pixieset disappears.

---

## 🧭 The way forward (in order)

1. **Photos in (this week).** Copy your photo folders from your laptop into `photos/galleries/<Category>/<Name>/`, plus one hero shot in `photos/1-hero/`. Compress big files at squoosh.app (~500KB each). Then publish: GitHub Desktop → Commit → Push (or ask Claude).
2. **Admin login.** Accept the Netlify invite email → set password → yoursite/admin works. Then a guided lesson on using it.
3. **Domain (~$11/year, when ready).** selasievisualstudio.com is available at Porkbun. Buy → connect in Netlify → Claude updates the site's internal URLs.
4. **Google (free, after domain).** Search Console (submit sitemap) + Google Business Profile (photos, reviews) + update Instagram/TikTok bio links.
5. **Monthly rhythm (2–3 hrs).** New gallery per shoot, new Business Profile photos, ask clients for reviews. That's the whole SEO engine.
6. **Later / optional.** Real testimonials + stats via admin, wedding films section, image optimization pass, lawyer glance at Privacy/Terms.

*Full history and session-handoff details: `CONTINUE_HERE.md`.*

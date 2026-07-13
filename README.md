# Selasie Visual Studio — Website

Self-hosted portfolio site for **Selasie Visual Studio** (Accra, Ghana), owned by Patrick Selasie Dugo.
Live: https://precious-brioche-db9ed2.netlify.app · Repo auto-deploys to Netlify on every push.

**Design:** dark editorial (espresso + gold) with a light/ivory mode toggle (☀/☾ in the nav).
All photos and galleries are hosted on this site — no third-party gallery service.

## How Patrick updates the site (no coding)

**Photos → folders.** Drop images into `photos/` (see `photos/README.md` for the map):
`1-hero/` (1–4 photos; 2+ becomes a crossfade slideshow) · `2-about/` · `3-services/` · `4-film-strip/` ·
`galleries/<Category>/<Gallery Name>/` (each folder = a gallery page; first 3 = homepage cards).
Then publish: GitHub Desktop → Commit → Push (or ask Claude). `scripts/scan-photos.js` runs on every
Netlify build and rebuilds the photo data automatically — titles, categories, portrait/landscape included.

**Words → admin.** `/admin` (Netlify Identity login) edits all page text: hero lines, about, stats,
services + prices, pricing terms, testimonials, contact — plus gallery descriptions. Publish = live in ~1 min.

Golden rule: **folders own the photos, admin owns the words.**

## Structure
```
index.html            Landing (self-contained styles + scripts, light/dark themes)
gallery.html          Gallery viewer (masonry + lightbox, reads data/galleries.json)
404.html              Branded not-found page
privacy.html / terms.html + css/legal.css
admin/                Decap CMS (config.yml defines what's editable)
data/                 photos.json · galleries.json · site.json (generated/edited content)
photos/               Patrick's drag-and-drop photo folders (source of truth for images)
scripts/scan-photos.js  Build-time folder scanner
netlify.toml          Runs the scanner on every deploy
_headers              Security headers (CSP lives in per-page <meta> tags)
images/               Logos
```

## Run / deploy
Preview locally: `python3 -m http.server` → http://localhost:8000 (open index.html).
Deploy: push to `main` — Netlify does the rest.

## Security
Static site (no server code) + strict CSP (self-only images/scripts), HSTS, no-sniff, no framing,
`noopener noreferrer` on external links. Keep 2FA on GitHub, Netlify, and email.

## Still to provide
Real testimonials & stats (via /admin) · confirm prices · custom domain (then update canonical/OG/sitemap URLs).
Roadmap: `ROADMAP.md` · Session handoff: `CONTINUE_HERE.md`

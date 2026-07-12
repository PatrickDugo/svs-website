# Selasie Visual Studio — Website

Premium **static** marketing site for Selasie Visual Studio (Accra, Ghana), owned by Patrick Selasie Dugo. Its job: present the work beautifully and **funnel visitors to the Pixieset galleries** and to contact. No payments or galleries are hosted here.

**Current design: dark editorial** (deep warm charcoal + gold). The previous ivory version is kept as `index-ivory-backup.html`.

## Stack (and why)
**Plain static HTML + CSS + JS — no build step.** Simplest approach that meets every requirement in `BUILD_BRIEF.md` §3: static files (deploy by dragging the folder to Netlify), SEO-correct (real HTML, meta, Open Graph, JSON-LD), fast, trivially editable by a non-developer, WCAG-minded. The landing page is fully **self-contained** — all styles and scripts live inside `index.html`.

## Structure
```
index.html                 Landing — self-contained (styles + scripts inside)
index-ivory-backup.html    The old ivory design (backup, not linked)
privacy.html               Privacy Policy (dark theme)
terms.html                 Terms of Use (dark theme)
css/legal.css              Legal-page styles (dark theme)
css/site.css, js/site.js   Used only by the ivory backup — safe to ignore
images/                    logo-dark.png, logo-white.png, your photos
og-image.png               Social share preview (1200x630)
sitemap.xml, robots.txt
CLAUDE.md, BUILD_BRIEF.md  Guidance + spec (note: brief describes the old ivory design)
```

## How to edit (no coding)
Everything that changes lives in **one CFG block** at the bottom of `index.html` (search for `CFG`):
- **Pixieset link** — every gallery button (nav, hero, gallery band, footer "Client Gallery") follows it. Currently `https://selasievisualstudio.mypixieset.com`.
- **WhatsApp / call number / Instagram / TikTok / email** — all booking-contact buttons follow these.
- The three **portfolio cards** deep-link to specific Pixieset galleries — search `GALLERY CARD` in `index.html` to swap an image or link.
- **Prices / services / testimonials / stats:** search `EDIT` in `index.html`.

## Admin panel — drag & drop photos (no code)
Once the site is live on Netlify, Patrick manages ALL page photos at **`yourdomain.com/admin`**:
log in → click a photo slot → drag & drop the new image → **Publish**. The live site updates itself in ~1 minute. Photos are stored in `images/uploads/`, and the page reads them from `data/photos.json`.

**One-time activation (after deploying to Netlify from GitHub):**
1. Netlify → Site configuration → **Identity** → Enable Identity.
2. Identity → Registration → set to **Invite only**.
3. Identity → Services → **Enable Git Gateway**.
4. Identity → Invite users → invite `selasievisualstudio@gmail.com` → accept the email invite, set a password.
5. Visit `/admin` and log in. Done forever.

## How to add / replace photos
1. Optimize first: export **sRGB JPEG**, compress at squoosh.app or tinypng.com.
   - Hero: ~2000px wide, < 400KB. Cards: 4:5 or 3:4 portrait, ~1200–1500px, < 300KB.
2. Either drop files into `images/` and point the card's `src` at them, or paste a direct Pixieset image URL (the cards currently use Pixieset-hosted images).

## Run / preview
No build needed. Open `index.html` in a browser, or serve locally:
`python3 -m http.server` then visit http://localhost:8000

## Deploy (free)
Drag this whole folder onto **https://app.netlify.com/drop** for an instant live link. Later: connect a Git repo to Netlify (or Cloudflare Pages) for auto-deploys and point a custom domain. Full roadmap: see the SVS Website & SEO Launch Plan.

## Security
The site is static (no database, no login, no forms) — there is nothing on the server to hack. On top of that, `_headers` ships strict security headers automatically on Netlify/Cloudflare Pages: clickjacking protection (no framing), a Content-Security-Policy that only allows scripts/styles/images from approved sources, HTTPS enforcement (HSTS), and no-sniff. All external links use `rel="noopener noreferrer"`. **The real keys to keep safe are your accounts:** turn on two-factor authentication for your hosting, domain registrar, Pixieset, and email.

## Devices
Fully responsive 320px → 4K: fluid type/spacing via `clamp()`, `100svh` hero for mobile browsers, hamburger menu under 880px, staggered grid collapses to a single column on phones, touch-drag film strip, hover/tilt effects only on mouse devices, `prefers-reduced-motion` respected.

## Still to provide (placeholders in the site)
Real testimonials & stat numbers · confirm prices · custom domain (then update `canonical`, Open Graph URLs, `sitemap.xml`) · optional lawyer review of Privacy/Terms.

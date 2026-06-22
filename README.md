# Selasie Visual Studio — Website

Premium **static** marketing landing page for Selasie Visual Studio (Accra, Ghana), owned by Patrick Selasie Dugo. Its job: present the work and **funnel visitors to the Pixieset galleries** and contact. No payments or galleries are hosted here.

## Stack (and why)
**Plain static HTML + CSS + JS — no build step.** This is the simplest approach that meets every requirement in `BUILD_BRIEF.md` §3: it builds to static files (deploy by dragging the folder to Netlify), is SEO-correct (real HTML, meta, Open Graph, JSON-LD), loads fast (one small CSS + one small deferred JS, fonts via Google Fonts), is trivially editable by a non-developer, ships almost no JS, and meets WCAG AA. A framework (Astro etc.) would add tooling for no real gain at this scope. If the site grows a blog/many pages later, revisit Astro then.

## Structure
```
index.html        Landing (all sections)
privacy.html      Privacy Policy
terms.html        Terms of Use
css/site.css      Landing styles + design tokens
css/legal.css     Legal-page styles
js/site.js        All interactions + the PIXIESET_URL config constant
images/           logo-dark.png, logo-white.png, your photos
og-image.png      Social share preview (1200x630)
sitemap.xml, robots.txt, favicon (logo-dark.png)
CLAUDE.md, BUILD_BRIEF.md   Guidance + full spec
```

## How to edit (no coding)
- **Pixieset link:** open `js/site.js`, change the one line `var PIXIESET_URL = "..."`. Every gallery button uses it. (The same URL is also hardcoded on the buttons in `index.html` so links work even with JavaScript off — update both, or just search the file for `pixieset`.)
- **Contacts:** in `index.html`, the Contact section — WhatsApp `wa.me/233554637307`, email, Instagram, TikTok.
- **Prices / services / testimonials / stats:** edit the matching text in `index.html` (search for the section name or `EDIT`).
- **Photos:** see below.

## How to add / replace photos
1. Optimize first: export **sRGB JPEG**, resize, compress at squoosh.app or tinypng.com.
   - Hero: ~2000px wide, < 400KB. Portfolio: 4:5 portrait, ~1200px, < 300KB each.
2. Drop files into `images/`.
3. **Hero:** in `css/site.css` set `.hero-bg{ background:url('../images/hero.jpg') center/cover; }`.
4. **Portfolio:** in `index.html`, add `style="background-image:url('images/your.jpg')"` to a `.tile`.

## Run / preview
No build needed. Open `index.html` in a browser, or serve locally:
`python3 -m http.server` then visit http://localhost:8000

## Deploy (free)
Drag this whole folder onto **https://app.netlify.com/drop** for an instant live link. Later: connect a Git repo to Netlify for auto-deploys, and point a custom domain.

## Still to provide (placeholders in the site)
Real Pixieset URL · confirm contact email · 6–12 portfolio photos + 1 hero · real testimonials & stat numbers · optional custom domain · optional lawyer review of Privacy/Terms.

See `BUILD_BRIEF.md` for the complete spec and `CLAUDE.md` for working rules.

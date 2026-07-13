# CONTINUE HERE — SVS Website session handoff
*If a new Claude session starts, read this first. Updated: 12 July 2026.*

## Current state
- Live site: https://precious-brioche-db9ed2.netlify.app (Netlify, auto-deploys from GitHub)
- GitHub repo: https://github.com/PatrickDugo/svs-website (owner: PatrickDugo)
- Local folder = this folder; it is the source of truth. Git history is current locally.
- Netlify Identity: ENABLED, invite-only. Git Gateway: ENABLED. Invite emailed to p.dugo28@gmail.com.
- Admin panel: /admin (Decap CMS). Photos data: data/photos.json (homepage) + data/galleries.json (full galleries).
- Galleries are now LOCAL (gallery.html?g=slug reads data/galleries.json). Pixieset kept only for client full-res downloads.

## Patrick's standing requests (do these in order)
1. DONE — all files pushed through commit "Fully own the site". Site is Pixieset-free (links); photos still load from Pixieset CDN as placeholders until Patrick adds local photos to photos/ folders.
   index.html, gallery.html (new), data/photos.json, data/galleries.json (new), admin/index.html (CSP fix), admin/config.yml (galleries collection), _headers (CSP moved to meta tags).
   Upload via GitHub web upload pages (/upload/main and /upload/main/<folder>) using Chrome, or GitHub connector if available.
2. **Admin that maps photos to places**: DONE in config — /admin has "Website Photos" (hero, about, portfolio cards, film strip — each slot labelled) and "Galleries" (create gallery → drag photos in). Photos uploaded via admin land in images/uploads/. Explain this to Patrick as the "specified folder with defined variables".
3. **Fix admin privilege issue** ("Email not confirmed / user not found"): Patrick must open the Netlify invite email sent to p.dugo28@gmail.com and click Accept + set password. If expired, re-invite from Netlify → project precious-brioche-db9ed2 → Identity → Invite users. The CMS CSP error was fixed by per-page meta CSP (admin/index.html allows unsafe-eval).
4. **Galleries display what he uploads locally**: DONE by design — gallery.html renders data/galleries.json; when he adds photos via /admin → Galleries, they appear on the site. Verify end-to-end after deploy.

## Remaining niceties (offer, not urgent)
- Replace Pixieset-hosted image URLs with locally uploaded images over time (Patrick will provide photos).
- Rename Netlify site subdomain (Site configuration → Change site name) e.g. selasievisualstudio.netlify.app.
- Custom domain purchase (see SVS_Launch_and_SEO_Plan.md) + Google Business Profile + Search Console (SEO plan).
- Teach-mode lesson on using /admin once login works.

## Key context
- Owner: Patrick Selasie Dugo, Selasie Visual Studio, Accra, Ghana. Contact +233554637307, selasievisualstudio@gmail.com.
- Design: dark editorial (espresso #0f0d0b + gold #d2a35d), Cormorant Garamond + Manrope, "Elegance, Unbound".
- Old ivory design backed up at index-ivory-backup.html. Never use pure black. Don't invent testimonials/stats/prices.

## ⚠️ UNPUSHED LOCAL WORK (committed locally, Patrick said do NOT push yet)
Commit "Roadmap batch 1" contains: hero crossfade slideshow, interlude/gallery-band images now Patrick's own,
Pixieset fully removed from CSP + all fallback markup, dark-mode polish (brighter dim text, card shadows),
404.html, gallery.html "Next gallery" link. Push when Patrick approves: index.html, gallery.html, 404.html (new), CONTINUE_HERE.md.
Already pushed separately: brighter service-card hover photos.

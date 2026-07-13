# 📸 YOUR PHOTOS GO HERE — Patrick's drag-and-drop folders

Drop photos into these folders. The website builds itself from them — no code, ever.

```
photos/
├── 1-hero/          ← ONE photo. The big opening image of the website.
├── 2-about/         ← Up to TWO photos. 1st = big "About" photo, 2nd = small floating photo.
├── 3-services/      ← FOUR photos, in order: 1=Brand, 2=Corporate, 3=Events, 4=Weddings.
│                      (name them 1.jpg, 2.jpg, 3.jpg, 4.jpg to control the order)
├── 4-film-strip/    ← 6–10 photos for the scrolling "Recent frames" strip.
└── galleries/
    └── <Category>/          ← folder name = the category shown on the site
        └── <Gallery Name>/  ← folder name = the gallery title shown on the site
            ├── cover.jpg    ← optional: the card cover. If missing, the first photo is used.
            └── ...photos    ← every photo in here appears in that gallery
```

## Rules of thumb
- File names become photo descriptions: `bride-first-dance.jpg` → "bride first dance" (good for Google).
- Portrait vs landscape is detected automatically from each photo.
- Keep photos under ~500KB each (compress at squoosh.app) so the site stays fast.
- The first 3 galleries become the homepage portfolio cards automatically.

## How changes go live
1. Drop photos into these folders on your laptop.
2. Open **GitHub Desktop** → it shows the new files → click **Commit to main** → **Push origin**.
3. Netlify rebuilds automatically (~1 minute) and the photos appear on the live site.

(Or tell Claude "publish my new photos" and it will be handled for you.)

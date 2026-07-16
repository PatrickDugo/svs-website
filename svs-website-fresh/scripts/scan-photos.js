#!/usr/bin/env node
/**
 * SVS photo scanner — runs automatically on every Netlify build.
 * Reads the photos/ folders (see photos/README.md) and regenerates
 * data/photos.json + data/galleries.json (+ service images in data/site.json).
 * Folders that are empty are simply skipped — existing data is kept.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const P = (...p) => path.join(ROOT, ...p);
const EXT = /\.(jpe?g|png|webp|avif)$/i;

const list = d => { try { return fs.readdirSync(d, { withFileTypes: true }); } catch (e) { return []; } };
const images = d => list(d).filter(e => e.isFile() && EXT.test(e.name)).map(e => e.name)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
const dirs = d => list(d).filter(e => e.isDirectory()).map(e => e.name).sort();
const nice = f => f.replace(EXT, '').replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const rel = (...p) => ['photos', ...p].join('/');
const readJSON = f => { try { return JSON.parse(fs.readFileSync(P(f), 'utf8')); } catch (e) { return null; } };
const writeJSON = (f, obj) => fs.writeFileSync(P(f), JSON.stringify(obj, null, 2) + '\n');

/* Minimal JPEG/PNG dimension sniffing (no dependencies) */
function dim(file) {
  try {
    const b = fs.readFileSync(file);
    if (b[0] === 0x89 && b[1] === 0x50) return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) }; // PNG
    if (b[0] === 0xff && b[1] === 0xd8) { // JPEG
      let i = 2;
      while (i < b.length - 9) {
        if (b[i] !== 0xff) { i++; continue; }
        const m = b[i + 1];
        if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc)
          return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
        i += 2 + b.readUInt16BE(i + 2);
      }
    }
  } catch (e) {}
  return null;
}
const orient = file => { const d = dim(file); return d ? (d.w >= d.h ? 'landscape' : 'portrait') : 'portrait'; };

let changed = [];

/* ── Homepage photos (data/photos.json) ── */
const photos = readJSON('data/photos.json') || {};

const hero = images(P('photos', '1-hero'));
if (hero.length) {
  photos.hero = { src: rel('1-hero', hero[0]), alt: nice(hero[0]) + ' — Selasie Visual Studio, Accra' };
  photos.hero_slides = hero.map(f => rel('1-hero', f));
  changed.push('hero (' + hero.length + ' slide' + (hero.length > 1 ? 's' : '') + ')');
}
const about = images(P('photos', '2-about'));
if (about.length) {
  photos.about_main = { src: rel('2-about', about[0]), alt: nice(about[0]) + ' — Selasie Visual Studio' };
  if (about[1]) photos.about_float = { src: rel('2-about', about[1]), alt: nice(about[1]) + ' — Selasie Visual Studio' };
  changed.push('about');
}
const strip = images(P('photos', '4-film-strip'));

/* ── Galleries (data/galleries.json): photos/galleries/<Category>/<Title>/ ── */
const galData = readJSON('data/galleries.json') || {};
const galleries = [];
for (const cat of dirs(P('photos', 'galleries'))) {
  for (const title of dirs(P('photos', 'galleries', cat))) {
    const files = images(P('photos', 'galleries', cat, title));
    if (!files.length) continue;
    const coverFile = files.find(f => /^cover\./i.test(f)) || files[0];
    galleries.push({
      slug: slug(title),
      title,
      category: cat,
      description: '',
      cover: rel('galleries', cat, title, coverFile),
      images: files.map(f => ({
        src: rel('galleries', cat, title, f),
        alt: nice(f) + ' — ' + title + ' by Selasie Visual Studio, Accra',
        orientation: orient(P('photos', 'galleries', cat, title, f))
      }))
    });
  }
}
if (galleries.length) {
  /* keep descriptions written in the admin for matching slugs */
  const old = (galData.galleries || []);
  galleries.forEach(g => {
    const prev = old.find(o => o.slug === g.slug);
    if (prev && prev.description) g.description = prev.description;
  });
  writeJSON('data/galleries.json', { galleries });
  changed.push(galleries.length + ' galleries');

  /* homepage portfolio cards = first 3 galleries */
  photos.portfolio = galleries.slice(0, 3).map(g => ({
    title: g.title, category: g.category, image: g.cover,
    alt: g.title + ' — ' + g.category + ' photography by Selasie Visual Studio, Accra',
    orientation: orient(P(g.cover)), link: 'gallery.html?g=' + g.slug
  }));
  changed.push('portfolio cards');
}

if (strip.length) {
  const firstSlug = galleries[0] ? 'gallery.html?g=' + galleries[0].slug : 'gallery.html';
  photos.strip = strip.map(f => ({
    image: rel('4-film-strip', f),
    alt: nice(f) + ' — Selasie Visual Studio',
    orientation: orient(P('photos', '4-film-strip', f)),
    link: firstSlug
  }));
  changed.push('film strip');
}
if (changed.length) writeJSON('data/photos.json', photos);

/* ── Service card hover images (data/site.json) ── */
const svcImgs = images(P('photos', '3-services'));
if (svcImgs.length) {
  const site = readJSON('data/site.json');
  if (site && Array.isArray(site.services)) {
    svcImgs.slice(0, site.services.length).forEach((f, i) => { site.services[i].image = rel('3-services', f); });
    writeJSON('data/site.json', site);
    changed.push('service images');
  }
}

console.log(changed.length ? '✓ Photo scan updated: ' + changed.join(', ') : '✓ Photo scan: no local photos found — keeping existing data.');

# TODO

Outstanding work for kickershomecreations.com. Organized by priority.

## 🔴 Launch blockers

- [ ] **Wire up the quote form** — `src/_includes/components/quote.njk` has
      `action="#"`, so submissions go nowhere. Connect a backend (Formspree /
      Web3Forms / Netlify Forms) so leads reach `kickerservices@outlook.com`.
      This is currently the only contact path on the site.
- [ ] **Replace SAMPLE testimonials with real ones** — `client.testimonials` in
      `src/_data/client.js` currently holds 3 ⚠️ SAMPLE reviews for design
      preview only, and they are LIVE on the public site. Swap in the client's
      real quotes/names before launch. (Empty the array to hide the section +
      its "Reviews" nav links again.)
- [x] **Replace placeholder FAQ items** — `faq.njk` is now data-driven from
      `client.faqs`; five real Q&As written (service area, free quotes, project
      types, timeline, getting started). Add a licensed/insured, warranty, or
      payment FAQ once those details are confirmed.

## 🟡 In progress / owner-supplied

- [x] **OG image** — `og_image.png` (1200×630) added and wired into `base.njk`
      (og:image, secure_url, twitter:image + width/height/type/alt tags).
- [x] **GA4** — measurement ID `G-31FDLEKWNL` set in `client.gaId`; analytics
      component restored and included in `base.njk` (renders only when gaId set).

## 🟢 Local SEO

- [ ] **Google Business Profile** — create the listing, then add it to the
      schema `sameAs` array in `base.njk` and link it from the footer. Biggest
      remaining local-ranking lever for a contractor.
- [x] **Verify the phone number** — confirmed correct by owner.

## 🔵 Polish

- [x] Fix dead `href="#"` logo links in `header.njk` / `footer.njk` → now `/`.
- [x] New favicon — 🛠️ emoji on a brand-green SVG tile (`favicons/favicon.svg`),
      `theme-color`/tile color set to brand green `#15514A`.
- [x] Improve image alt text — services carousel now has descriptive,
      per-image alt via `client.serviceImages` objects.
- [x] Serve WebP + lazy-load — all photos have `.webp` (jpg fallback via
      `<picture>`); below-fold images `loading="lazy"`, hero `fetchpriority="high"`.
- ~~Custom 404 page~~ — not needed for a static site (owner decision).

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

- [ ] **OG image** — create a 1200×630 image, add to `src/assets/images/`, and
      update the 3 image paths in `src/_includes/layouts/base.njk` (currently
      pointing at `hero_image.jpg`).
- [ ] **GA4** — create the property, add the `G-…` measurement ID, and restore
      an analytics include in `base.njk`.

## 🟢 Local SEO

- [ ] **Google Business Profile** — create the listing, then add it to the
      schema `sameAs` array in `base.njk` and link it from the footer. Biggest
      remaining local-ranking lever for a contractor.
- [ ] **Verify the phone number** — `(608)` is a Wisconsin area code, not
      Charleston/SC. Confirm `client.phone` in `src/_data/client.js` is correct.

## 🔵 Polish

- [ ] Fix dead `href="#"` logo links in `header.njk` / `footer.njk` → point to `/`.
- [ ] Brand the favicon theme colors (still template defaults: `#da532c` tile
      color, generic Safari pinned-tab).
- [ ] Improve generic image alt text (currently "Project by …").
- [ ] Serve WebP + lazy-load below-fold images for extra speed.
- [ ] Custom 404 page.

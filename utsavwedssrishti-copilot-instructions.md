# Copilot instructions: Utsav & Srishti wedding site

Paste this whole file into GitHub Copilot Chat (or save it as `.github/copilot-instructions.md` in the repo) and ask Copilot to complete the tasks in order.

## Project overview

- Repo: `utsavsharma27/utsavwedssrishti`, branch `main`
- Stack: Vite + React + Tailwind CSS v4 + Motion. Deploys to GitHub Pages through `.github/workflows/deploy.yml`.
- All guest-facing content lives in `src/data/site.config.js`. Only edit React components for layout or design changes.
- The build must use the repo name as the base path: `VITE_BASE_PATH=/utsavwedssrishti/ npm run build`.
- Live URL (after Pages is enabled): https://utsavsharma27.github.io/utsavwedssrishti/

## Rules for Copilot

1. Do not change the base path logic in `vite.config.js`.
2. Do not add real personal data (phone numbers, addresses beyond the venue listed below, ID numbers) anywhere in the repo.
3. Keep `navItems[].id` values in sync with section ids: `hero`, `invitation`, `countdown`, `lineup`, `venue`, `gallery`.
4. After every change, run `npm ci` (if needed) and `VITE_BASE_PATH=/utsavwedssrishti/ npm run build`. Fix any errors before committing.
5. Commit messages should be short and descriptive.

## Already done (verify, do not redo)

- **Couple:** Utsav and Srishti. Hashtag `#SrishtiMeinUtsav`.
- **Dates:** Haldi and Reception, both on 11 December 2026. Haldi from 11:00 AM onwards, Reception from 7:00 PM onwards.
- **Venue:** The Namah Grand (previously Ganeshwaram Hotel), Near Kidzee Play School, Kondli Market, Sector 149, Noida, Uttar Pradesh 201304. Maps link: https://maps.app.goo.gl/kyKHVdrF3FLKGzbR7
- **Theme:** `defaultTheme` is `"lotus"`. The lotus palette in `src/index.css` is cream page, maroon headings and buttons, pink accents, deep green band, and gold.
- **Hero art:** `src/components/Florals.jsx` exports `LotusCorner` (gold palm fronds, pink lotus on green pad). `Hero.jsx` uses four of them in the corners.
- **Monogram:** `src/components/Monogram.jsx` draws the U & S logo with a lotus crest. `Hero.jsx` shows it above the names.
- **Gallery:** eight cartoon illustrations are in `public/photos/01.jpg` to `08.jpg`. `site.config.js` lists them in `gallery.photos` with their captions as alt text.
- **Removed:** the original template's couple photos and the placeholder SVGs.

## Task 1: Fix mobile layout overlap (`src/components/Hero.jsx`)

On phones (about 390px wide), the bottom lotus corners overlap the bottom navigation bar and the music button.

- Hide the two **bottom** `LotusCorner` elements on small screens. Add `hidden md:block` to their class names. Keep the top two visible.
- Make the top two smaller on mobile: change `w-36 max-w-[42vw] md:w-56` to `w-24 max-w-[32vw] md:w-56`.
- Test at 390px width. The lotus art should not touch the nav bar or the music button.

## Task 2: Check the gallery on mobile (`src/components/Gallery.jsx`)

- Confirm the eight photos load and scroll. The images are 336×305 pixels, so each should display at its natural aspect ratio.
- If any image is blank, check that the file name in `site.config.js` matches the file in `public/photos/`.

## Task 3: Optional improvements (only if asked)

- Add the `Monogram` component to `src/components/Footer.jsx` as a small badge.
- Add a lotus-and-leaf border above the footer.
- Replace the placeholder music file: put the new file in `public/music/` and change `music.src` in `site.config.js`. Do not commit copyrighted tracks without permission.

## Task 4: Config check (`src/data/site.config.js`)

Make sure these values are correct:
- `siteUrl`: `https://utsavsharma27.github.io/utsavwedssrishti/`
- `weddingDateIso`: `2026-12-11T11:00:00+05:30`
- `displayDate`: `11 December 2026`
- `city`: `Noida, Uttar Pradesh`
- Each event's `mapsUrl` and the venue's `mapsUrl` use the Namah Grand Maps link.
- `venue.embedUrl` uses the venue name and Sector 149, Noida.

## Verification checklist

- [ ] `npm run build` completes with no errors.
- [ ] `dist/index.html` references `/utsavwedssrishti/assets/...`.
- [ ] Hero shows the U & S monogram, names, date, and "Open the invitation" button.
- [ ] Gallery shows eight illustrations.
- [ ] Event line-up shows only Haldi and Reception.
- [ ] Venue shows The Namah Grand with the correct address.
- [ ] No console errors in the browser.
- [ ] The page works at 390px and 1280px width.

## Deployment

1. Push to `main`.
2. In GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Check the **Actions** tab for a green check, then open the live URL above.

Note: the repository root must contain `package.json`, `index.html`, `src/`, `public/`, `vite.config.js`, and `.github/`. If they are inside a sub-folder, move them to the root before enabling Pages.

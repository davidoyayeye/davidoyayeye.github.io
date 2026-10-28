# DesignByTheDave Portfolio

Plain HTML, CSS and vanilla JavaScript. No build step, no dependencies (only the Inter font from Google Fonts, with system fallbacks).

## Structure
- `index.html` content and metadata
- `css/styles.css` all styling; colours for both themes are the CSS variables at the top
- `js/main.js` theme toggle, mobile menu, category carousel, project list and expand/collapse details, reveal animation
- `assets/favicon.svg`
- Category card covers are live HTML/CSS: edit the `CV` object in `js/main.js` (text) and the `.cv-*` rules in `css/styles.css` (colours, layout).
- `images/` YOUR EXISTING FOLDER from the current repo (BRAND, SOCIAL MEDIA, books, POSTER & FLYER). Keep it where it is; this site links to those same files.

## Run locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy to GitHub Pages (only when you approve)
1. Work on a branch: `git checkout -b new-design`
2. Copy `index.html`, `css/`, `js/`, `assets/` and this README into the repo root (beside your existing `images/`). Replace the old `index.html`.
3. Preview, then merge to `main`. In Settings > Pages, source = `main` / root.
4. Custom domain: add a `CNAME` file with the domain, then set it in Settings > Pages. Also update `og:image` in `index.html` to a full URL.

## Replace things
- Portrait: overwrite `assets/david-portrait.jpg` (already your photo).
- Projects: edit the `projects` array in `js/main.js` (title `t`, category `c`, label `l`, description `d`, images `i`). Categories are in object `C`.
- CV: add `assets/CV.pdf` and a link in the About section, e.g. `<a class="btn btn-ghost" href="assets/CV.pdf" download>Download CV</a>`.
- Links and contact details: search `index.html` for `mailto:`, `tel:` and the social URLs.

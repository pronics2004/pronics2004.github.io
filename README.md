# prasanna-sattigeri-site

Personal site, built with [Astro](https://astro.build). Static output, no client framework.

## Run

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
npm run preview  # serves dist/
```

## Where things live

| What | File |
|---|---|
| Name, title, links, Scholar numbers | `src/data/site.js` |
| Publications (home page uses `selected: true`; the CV lists all) | `src/data/publications.js` |
| Research threads, open source, collaborators, quotes and usage numbers | `src/data/research.js` |
| Home page | `src/pages/index.astro` |
| Granite Guardian case study | `src/pages/granite-guardian.astro` |
| CV page | `src/pages/cv.astro` |
| Two-page CV | `src/pages/cv/short.astro` |

## CV PDF

`public/Prasanna_Sattigeri_CV.pdf` and `public/Prasanna_Sattigeri_Short_CV.pdf` are prints of `/cv/` and `/cv/short/`.
After editing either page, open it in a browser, print to PDF (the pages have print styles), and replace the file.

## Deploying

Pushing to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/deploy.yml`).
The previous Jekyll site is kept on the `old-site` branch.

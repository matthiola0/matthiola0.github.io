# matthiola0.github.io

Personal website at [matthiola.dev](https://matthiola.dev).

Built with React (Create React App) and deployed to GitHub Pages from the `gh-pages` branch.

## Layout

- `github.io/` — React app source. All build/dev commands run from here.
- `CV_folder/Resume.pdf` — published resume, linked from the site's Resume page.

## Develop

```bash
cd github.io
npm install
npm start          # local dev at http://localhost:3000
npm test           # Jest
npm run lint       # ESLint
```

## Deploy

```bash
cd github.io
npm run deploy     # builds and pushes to gh-pages
```

GitHub Pages serves the `gh-pages` branch at the custom domain `matthiola.dev`. Pushing to `main` does not deploy — it is source backup only.

## Edit content

Most page content is data-driven; edit files in `github.io/src/data/`:

- `projects.js` — Projects page entries
- `routes.js` — Nav links (keep in sync with the `<Route>` list in `src/App.js`)
- `contact.js` — Social/contact icons
- `about.md` — About page markdown
- `resume/` — Resume page data (work, degrees, courses, skills)

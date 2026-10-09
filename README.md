# matthiola0.github.io

Personal website at [matthiola.dev](https://matthiola.dev).

Built with React (Create React App) and deployed to GitHub Pages from the `gh-pages` branch.

## Layout

- `github.io/` — React app source. All build/dev commands run from here.

## Develop

The public Daybook tour lives in `github.io/public/daybook/` and is served as static HTML at `/daybook/`. Use normal anchors to reach it from React pages. Its screenshots use demo data from the public `matthiola0/my-calendar` repository. Development dates describe project history, not company incorporation. Keep current capabilities separate from proposed integrations.

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

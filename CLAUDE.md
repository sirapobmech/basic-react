# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite HMR)
npm run build    # Build to dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint check
npm run deploy   # Build + push dist/ to gh-pages branch (manual deploy)
```

No test suite is configured.

### Docker

```bash
docker compose up --build   # Build image and serve on http://localhost:8080
```

Multi-stage Dockerfile: Node 22 Alpine builds to `dist/`, nginx Alpine serves it.

## Architecture

Single-page app with no router — navigation is pure React state in `App.jsx`. `activePage` (string key) determines which page component renders in `<main>`.

**Adding a new page:**
1. Create `src/pages/YourPage.jsx` — receives `onNavigate(id)` prop
2. Add entry to `navItems` array in `App.jsx` (with optional `section` group header)
3. Add entry to `pages` map in `App.jsx`

**Shared components** (`src/components/`):
- `CodeBlock` — syntax-highlighted code display with clipboard copy
- `QAItem` / `QASection` — collapsible Q&A accordion; `answer` is rendered as raw HTML via `dangerouslySetInnerHTML`

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys to GitHub Pages on every push to `main` using `peaceiris/actions-gh-pages`. The `base` in `vite.config.js` is set to `'/basic-react/'` to match the GitHub Pages subdirectory path.

Manual deploy: `npm run deploy` (uses `gh-pages` package to push `dist/` to `gh-pages` branch directly).

Live URL: `https://sirapobmech.github.io/basic-react/`

## Stack

React 19 · Vite 8 · Node 22 · ESModules · no TypeScript · no CSS framework (plain CSS in `src/App.css` and `src/index.css`)

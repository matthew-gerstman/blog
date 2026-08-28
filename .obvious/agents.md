# Agent Context — matthew-gerstman/blog

> **Canonical location for agent guidance.** The root-level `agents.md` is retained for
> backward compatibility but this file is the source of truth for Autobuild agents.
> If the two files ever conflict, this file wins.

This document is a condensed, agent-optimised version of the root `agents.md`.
Read this file first. Refer to `agents.md` at the repo root for exhaustive detail on
any topic not covered here.

---

## Quick Commands

```bash
npm install                   # Install dependencies
npm run dev                   # Dev server → http://localhost:3001
npm run build                 # Production build (runs word-count pre-hook)
npm run preview               # Preview prod build locally
npm run deploy                # Build + deploy to GitHub Pages
npm run lint                  # ESLint check
npm run lint:fix              # ESLint auto-fix
npm run format                # Prettier format
npm run format:check          # Prettier check
npm test                      # Vitest
npm run optimize-images       # Compress images with Sharp
npm run calculate-wordcounts  # Recompute wordCount in posts.ts
```

---

## Stack

| Layer | Choice |
|---|---|
| Runtime | React 18.3 + TypeScript 5.3 (strict) |
| Build | Vite 5.1, dev port 3001 |
| Routing | React Router 6.22 |
| Styling | CSS Modules (camelCase, enforced by Vite) |
| Testing | Vitest 1.3 + Testing Library (no app tests yet) |
| Lint/Format | ESLint 9 flat config + Prettier 3 |
| Hooks | Husky + lint-staged (pre-commit) |
| Deploy | gh-pages → GitHub Pages |

---

## Directory Map

```
src/
  components/   # ComponentName.tsx + ComponentName.module.css
  pages/        # Page-level components (one per route)
  data/         # Content as TypeScript (posts, projects, talks, resume)
    types/      # Type definitions for data structures
  hooks/        # useTheme, useKeyboard, useScrollProgress, useAnalytics
  utils/        # search, reading, debounce, stickyJobTitle
  demos/        # Interactive demos embedded in blog posts
  styles/       # global.css — CSS variables + theme definitions
  types/        # Shared non-data type definitions
  App.tsx       # Route definitions
  main.tsx      # Entry point
public/
  images/blog/      # Original images
  images/optimized/ # Sharp-optimized images
  CNAME             # Custom domain — do not delete
scripts/
  optimize-images.js      # Sharp image optimization
  calculate-wordcounts.js # Word count updater for posts.ts
.github/workflows/
  deploy.yml    # Prod deploy (push to main)
  preview.yml   # PR preview deploy
```

---

## Key Conventions

### Components
- One `.tsx` + one `.module.css` per component in `src/components/`
- Named exports only
- CSS Modules: `import styles from './Foo.module.css'` → `className={styles.bar}`
- No inline styles, no Tailwind, no styled-components

### Data / Content
- Posts in `src/data/posts.ts` as HTML strings; sequential numeric `id`
- `wordCount` is auto-calculated at build time via `prebuild` hook — do not set manually
  unless the post has empty content (external link)
- Images: add to `public/images/blog/`, run `npm run optimize-images`, use `<OptimizedImage>`

### Routing
- All routes in `src/App.tsx` `<Routes>`
- Legacy redirects: `/tech/*` → `/writing/*` (TechRedirect), `/:slug` catch-all (BlogPostRedirect)
- Check these before adding new routes

### TypeScript
- Strict mode — no `any`, no `as` at trust boundaries
- Explicit return types on exported functions
- Extend `src/data/types/` for content types; `src/types/` for shared types

### Hooks
- `use` prefix, single responsibility
- No `useEffect` for derived state — compute during render

### GitHub Pages
- `vite.config.js` generates `404.html` from `index.html` for SPA routing — do not remove
- `index.html` contains a GH Pages redirect handler script — do not remove

---

## Routing Table

| Path | Component |
|---|---|
| `/` | Resume |
| `/writing` | Home (post listing) |
| `/writing/:slug` | Article |
| `/talks` | Talks |
| `/talks/:talkId` | Talks (with modal) |
| `/resume` | Resume |
| `/about`, `/hello-there` | About |
| `/obvious` | Obvious AI page |
| `/tech/*` | Redirects to `/writing/*` |
| `/:slug` | BlogPostRedirect (catch-all) |

---

## CI / CD

| Workflow | File | Trigger | Action |
|---|---|---|---|
| Deploy | `deploy.yml` | Push to `main` | Build + deploy to GH Pages |
| Preview | `preview.yml` | PR open/update | PR preview deploy |

- PRs must pass both workflows before merge
- Merge method: **squash**

---

## Common Tasks

### Add a Blog Post
1. Append to `src/data/posts.ts` (next sequential `id`, HTML content string)
2. Add banner to `public/images/blog/`
3. Run `npm run optimize-images`
4. Word count auto-updates at build time

### Add a Component
1. `src/components/ComponentName.tsx` (named export)
2. `src/components/ComponentName.module.css`

### Add a Page
1. `src/pages/PageName.tsx`
2. Register route in `src/App.tsx`

### Add a Project
1. Append to `src/data/projects.ts` (unique string `id`)
2. Add images to `public/images/optimized/`

---

## Theme System

- Default: dark mode (no flash — inline script in `index.html` sets `[data-theme]` before render)
- Persisted in `localStorage`
- CSS variables: `[data-theme="dark"]` and `[data-theme="light"]` in `src/styles/global.css`
- Use `useTheme` hook to read/toggle

---

## Analytics

- Google Analytics: `G-SNX7NS4QMW`
- `useAnalytics` hook fires page views automatically on route change

---

## External Dependencies (CDN)

- Highlight.js 11.9.0 (tokyo-night-dark theme) — JS/Bash syntax highlighting
- Google Analytics gtag.js

---

> For exhaustive detail — data structure examples, edge cases, script internals —
> see `agents.md` at the repo root.


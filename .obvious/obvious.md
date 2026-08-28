# Repo guidance

## Codebase Map

See `.obvious/codebase-map.md`.

## Rules

<!-- synthesized from: agents.md, LINTING.md, README.md, MIGRATION_JSON_TO_TS.md, BANNER_ALIGNMENT.md (files found in SCAN) — agent-relevant rules only -->

- **Stack:** Vite 5 + React 18.3 + React Router 6 + TypeScript 5.3, CSS Modules. Single-page app, no backend, no database, no required secrets.
- **Package manager is npm.** `package-lock.json` is the tracked lockfile and both CI workflows run `npm ci`. Do not introduce a second lockfile.
- **Content lives in TypeScript, not JSON.** Posts, projects, talks, and resume data are `src/data/*.ts` modules (see `MIGRATION_JSON_TO_TS.md`). Add a blog post by appending to `src/data/posts.ts` with the next sequential `id`; `content` is an HTML string.
- **Images:** originals go in `public/images/blog/`; run `npm run optimize-images` to regenerate `public/images/optimized/` (gitignored, generated). Render through the `OptimizedImage` component.
- **Word counts are generated.** `npm run calculate-wordcounts` rewrites the `wordCount` field in `src/data/posts.ts`; it also runs automatically via the `prebuild` hook. Do not hand-edit `wordCount`.
- **Styling:** one `Component.module.css` per component, imported as `styles`. Global CSS variables and the light/dark theme live in `src/styles/global.css`.
- **Routing:** every route is declared in `src/App.tsx`. Legacy `/tech/*` paths redirect to `/writing/*`; the root catch-all `/:slug` attempts a blog-post redirect.
- **Formatting is enforced.** Prettier (single quotes, 2-space indent, 80 cols, semicolons, ES5 trailing commas) runs on staged files via Husky + lint-staged. Never bypass the pre-commit hook.
- **Tests** use Vitest + Testing Library and must be named `*.test.ts` / `*.test.tsx`. The repo currently ships zero test files.
- **Deployment** is GitHub Actions to GitHub Pages on push to `main`; every non-`main` branch gets a preview deploy under `previews/<branch>/`. `vite.config.js` copies `index.html` to `404.html` so client-side routing works on Pages.

## Local Verification

> **Warning:** Running full-repo typecheck, lint, or tests may OOM or timeout in the sandbox for large repos.
> Use the scoped commands below when verifying changes.

### Verified Commands

<!-- local-verification-summary:v1 -->

- **Typecheck command:** `npx tsc --noEmit` — not run in-sandbox (freezes this sandbox). CI-verified only; `tsconfig.json` sets `noEmit` and strict mode.
- **Lint command:** `npm run lint` — verified (exit 0; 14 pre-existing `no-explicit-any` warnings, 0 errors)
- **Test command:** not_discovered — `npx vitest run` executes but the repo contains no test files, so vitest exits 1 with "No test files found". Note that bare `npm test` starts vitest in **watch mode** and will hang a non-interactive shell; always use `npx vitest run`.
- **Scoped typecheck:** not_supported — `tsc` is project-scoped via `tsconfig.json`; per-file invocation drops the project config.
- **Scoped lint:** `npx eslint src/components/Header.tsx`
- **Scoped test:** `npx vitest run src/utils/search.test.ts`
- **Full-repo check safe:** yes — lint completes in seconds; the repo is a single small package.
- **Scoped alternatives discovered:** yes
<!-- /local-verification-summary -->

Also available: `npm run format:check` (Prettier). It currently reports two pre-existing offenders, `BANNER_ALIGNMENT.md` and `src/utils/search.ts`, on an untouched `main`.

### Scoped Workflow

Run these commands to verify changed files without triggering a full-repo scan:

1. **Lint changed files:** `npx eslint src/components/Header.tsx`
2. **Test changed files:** `npx vitest run src/utils/search.test.ts`

## Sandbox Snapshot

- **Snapshot ID:** `yhgfc5lyhpuguhwc7yi5:default`
- **Captured:** `2026-08-21T17:18:06.054Z`
- **Dev stack healthy:** yes

## Runbooks

[Populated by autobuild-runbooks skill when requested. See `.obvious/runbooks/` after that skill runs.]

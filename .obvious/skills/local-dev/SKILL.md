---
name: local-dev
version: 1.0.0
description: Bring this repo's local development environment up from scratch.
category: local-dev
triggers:
  - local dev setup
  - run repo locally
  - start dev server
  - bring up local stack
author: autobuild-setup
created: 2026-08-21
---

## Prerequisites

Verified in the sandbox on 2026-08-21:

- **Node.js** v20.20.2 (`node -v`). CI pins Node 18; both work.
- **npm** 10.8.2 (`npm -v`). This is the package manager — `package-lock.json` is the tracked lockfile and both GitHub Actions workflows run `npm ci`.
- No database, no backend service, no container runtime, no secrets are required. The app is a static SPA.
- `bun` 1.3.14 is installed in the sandbox but is **not** the repo's package manager. An untracked `bun.lock` may appear in a fresh checkout; delete it rather than committing it.

## Install

```bash
npm ci
```

If `npm ci` fails with `EACCES: permission denied, rmdir '.../node_modules/.bin'`, the pre-baked `node_modules` is root-owned. Fix ownership first, then reinstall:

```bash
sudo chown -R "$(id -u):$(id -g)" node_modules
npm ci
```

## Environment

No environment variables are required for local development. There is no `.env.example` and no runtime env validation.

The only optional variable is `VITE_BASE`, which CI sets on preview builds to rewrite the asset base path (`/blog/previews/<branch>/`). Leave it unset locally — `vite.config.js` defaults `base` to `/`.

**One generated file is mandatory before the dev server will serve anything.** `src/components/OptimizedImage.tsx` statically imports `public/images/optimized/manifest.json`, and that whole directory is gitignored as build output. On a fresh clone the import fails and Vite returns HTTP 500 for the app module, leaving a blank page. Generate it once:

```bash
npm run optimize-images   # ~13s, writes 70 images + manifest.json + manifest.ts
```

## Start

```bash
npm run dev
```

- Serves on **http://localhost:3001** — the port is pinned in `vite.config.js` (`server.port: 3001`), not the Vite 5173 default. `--host 0.0.0.0` also binds the network interface.
- Ready in roughly 250ms.
- Non-interactive shells should background it, e.g. `tmux new-session -d -s svc-3001 'npm run dev'`.

Health check:

```bash
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3001/   # expect 200
```

A 200 on `/` is not sufficient on its own — `index.html` is served even when the app module fails. Confirm the rendered DOM is non-empty, or watch the dev server log for `Internal server error`.

## Verify Primary User Flow

There is no authentication, no signup, and no user accounts — every surface is public, so no test user is needed.

The read flow, exercised end-to-end with Playwright/Chromium against `http://localhost:3001`:

1. Load `/` — the resume landing page renders; document title is `Matthew Gerstman`. Evidence: `fl_WwgSzmyQ`.
2. Navigate to `/writing` — the post grid renders with banner images, dates, read times, and word counts. Evidence: `fl_XITjKbL7`.
3. Click the first post card (`/writing/what-ive-been-working-on`) — the article page renders with the `What I've Been Working On` heading. Evidence: `fl_p4fljYHN`.
4. Press `Cmd+K` and type `react` — the global search modal opens and returns matching talks and projects. Evidence: `fl_wEFHCRba`.
5. Click the header theme toggle — the site switches theme. Evidence: `fl_4onYWv35`.

Observed during the run: zero failed network requests; two React `duplicate key` console warnings originating from `src/pages/Home.tsx` (pre-existing on `main`, non-blocking).

## Verified Commands

- Typecheck: `npx tsc --noEmit` — **not run here.** Running `tsc` freezes this sandbox; treat typecheck as CI-verified only.
- Lint: `npm run lint` — verified, exit 0 (14 pre-existing `no-explicit-any` warnings, 0 errors).
- Test: `npx vitest run` — runs, but the repo contains no test files, so it exits 1 with "No test files found". Do **not** use bare `npm test`: it starts vitest in watch mode and hangs a non-interactive shell.
- Format: `npm run format:check` — verified; reports two pre-existing offenders on untouched `main` (`BANNER_ALIGNMENT.md`, `src/utils/search.ts`).
- Scoped variants for changed files only — see the LOCAL-DEV § Capture proof phase.

## Sandbox Snapshot

- snapshotId: `yhgfc5lyhpuguhwc7yi5:default` — restoring this snapshot reproduces the verified-healthy state from install.

## Known Blockers / Workarounds

All of the below were hit during install and worked around; none remain open.

- **`missing_generated_file`** — blank page and a Vite 500 on a fresh clone, because `public/images/optimized/manifest.json` is gitignored build output that `OptimizedImage.tsx` imports at module scope. Workaround: run `npm run optimize-images` before `npm run dev`. This is the single most likely thing to trip up a new environment.
- **`permission_denied`** — `npm ci` could not remove the root-owned pre-baked `node_modules`. Workaround: `sudo chown -R "$(id -u):$(id -g)" node_modules` first.
- **`missing_capability`** — no browser was present in the sandbox. Workaround: Playwright plus Chromium were installed into a scratch directory outside the repo (`/home/user/pw`) so the repo's `package.json` stayed untouched.
- **No test coverage** — Vitest and Testing Library are configured, but zero `*.test.ts(x)` files exist, so there is no test signal to rely on when changing this repo.

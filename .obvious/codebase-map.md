# Codebase Map

| Directory           | Purpose                                                                              |
| ------------------- | ------------------------------------------------------------------------------------ |
| `src`               | React SPA source — `App.tsx` route table and `main.tsx` entrypoint                   |
| `src/components`    | Presentational and interactive components, each paired with a `.module.css`          |
| `src/pages`         | Route-level pages — resume, writing index, article, talks, about, obvious            |
| `src/data`          | Site content as TypeScript modules — posts, projects, talks, resume, and their types |
| `src/hooks`         | Custom hooks — theme, keyboard shortcuts, scroll progress, analytics                 |
| `src/utils`         | Pure helpers — search, reading time, debounce, sticky job title                      |
| `src/demos`         | Interactive demos embedded in blog posts                                             |
| `src/styles`        | Global stylesheet, CSS variables, light/dark theme definitions                       |
| `src/types`         | Shared TypeScript type declarations                                                  |
| `public`            | Static assets served as-is — favicons, webmanifest, CNAME, blog images               |
| `public/images`     | Blog image originals; `optimized/` is generated and gitignored                       |
| `scripts`           | Build-time Node scripts — image optimization and post word counts                    |
| `dist`              | Committed Vite build output for GitHub Pages                                         |
| `.github/workflows` | CI — Pages deploy on `main`, per-branch preview deploy                               |
| `.husky`            | Git hooks — pre-commit lint-staged                                                   |
| `.obvious`          | Autobuild agent contract — guidance, codebase map, config, skills                    |

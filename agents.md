# Agents Guide: Matthew Gerstman's Blog Repository

This document provides a comprehensive overview of the repository structure for AI agents working on this codebase.

## Quick Start Commands

### Local Development

```bash
npm install              # Install dependencies
npm run dev              # Start dev server on http://localhost:3001
```

### Build

```bash
npm run build            # Build for production (output to dist/)
npm run preview          # Preview production build locally
```

### Deploy

```bash
npm run deploy           # Build and deploy to GitHub Pages
```

### Testing & Code Quality

```bash
npm test                 # Run tests with Vitest
npm run lint             # Check code with ESLint
npm run lint:fix         # Fix ESLint issues automatically
npm run format           # Format code with Prettier
npm run format:check     # Check if code is formatted
```

### Utilities

```bash
npm run optimize-images  # Optimize images with Sharp
```

## Project Overview

This is a personal blog and portfolio website for Matthew Gerstman. It's a single-page application (SPA) built with:

- **React 18** with TypeScript
- **Vite** as the build tool
- **React Router** for client-side routing
- **CSS Modules** for styling
- Deployed to **GitHub Pages**

## Tech Stack

- **Runtime**: React 18.3.1 with React DOM
- **Language**: TypeScript 5.3.3
- **Build Tool**: Vite 5.1.0
- **Routing**: React Router DOM 6.22.0
- **Testing**: Vitest 1.3.0 with Testing Library
- **Linting**: ESLint 9.17.0 with Prettier integration
- **Code Quality**: Husky + lint-staged for pre-commit hooks
- **Deployment**: gh-pages package

## Directory Structure

```
blog/
├── src/                      # Source code
│   ├── components/           # React components (39 files)
│   ├── pages/                # Page-level components
│   ├── data/                 # Content data (posts, projects, talks, resume)
│   ├── hooks/                # Custom React hooks
│   ├── utils/                # Utility functions
│   ├── demos/                # Interactive demos for blog posts
│   ├── styles/               # Global styles
│   ├── types/                # TypeScript type definitions
│   ├── App.tsx               # Main App component with routing
│   ├── main.tsx              # Application entry point
│   └── vite-env.d.ts         # Vite environment types
├── public/                   # Static assets
│   ├── images/               # Blog images and assets
│   │   ├── blog/             # Blog post images
│   │   └── optimized/        # Optimized versions
│   ├── favicon-*.png         # Various favicon sizes
│   ├── favicon.ico           # Main favicon
│   ├── site.webmanifest      # PWA manifest
│   └── CNAME                 # Custom domain config
├── dist/                     # Build output (generated)
├── scripts/                  # Build and utility scripts
│   └── optimize-images.js    # Image optimization script
├── .github/                  # GitHub configuration
│   └── workflows/            # CI/CD workflows
├── .husky/                   # Git hooks
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## Source Code Organization

### Components (`src/components/`)

All components follow the pattern:

- `ComponentName.tsx` - Component logic
- `ComponentName.module.css` - Component styles

Key components:

- **Header.tsx** - Site header with navigation and theme toggle
- **SearchModal.tsx** - Global search (Cmd+K)
- **FindInPage.tsx** - In-page search (/) for articles
- **PostCard.tsx** - Blog post preview card
- **ProjectCard.tsx** / **ProjectModal.tsx** - Project display
- **JobCard.tsx** - Experience card for resume
- **OptimizedImage.tsx** - Image component with optimization
- **GradientText.tsx** - Styled gradient text
- **ProgressBar.tsx** - Reading progress indicator
- **BlogPostRedirect.tsx** / **TechRedirect.tsx** - Legacy URL redirects

### Pages (`src/pages/`)

Main pages:

- **Home.tsx** - Blog posts listing (`/writing`)
- **Article.tsx** - Individual blog post view (`/writing/:slug`)
- **Talks.tsx** - Talks and presentations (`/talks`)
- **Obvious.tsx** - Special page about Obvious AI (`/obvious`)
- **resume/** - Resume and about pages
  - **Resume.tsx** - Main resume page (`/`, `/resume`)
  - **About.tsx** - About/bio page (`/about`, `/hello-there`)

### Data (`src/data/`)

Content is stored as TypeScript files (not JSON):

- **posts.ts** - Blog posts data (262KB, 23+ posts)
- **projects.ts** - Portfolio projects (71KB)
- **talks.ts** - Conference talks and presentations (4KB)
- **resume.ts** - Work experience and education (5KB)
- **types/** - Type definitions for all data structures
  - **posts.types.ts** - Post data types
  - **resume.types.ts** - Resume data types
  - **manifest.types.ts** - Manifest types
  - **index.ts** - Type exports

### Hooks (`src/hooks/`)

Custom React hooks:

- **useTheme.ts** - Dark/light theme management with localStorage
- **useKeyboard.ts** - Keyboard shortcuts (Cmd+K for search, / for find)
- **useScrollProgress.ts** - Reading progress tracking
- **useAnalytics.ts** - Google Analytics page view tracking

### Utils (`src/utils/`)

Utility functions:

- **search.ts** - Search functionality for posts, projects, talks
- **reading.ts** - Reading time calculation
- **debounce.ts** - Debounce utility
- **stickyJobTitle.ts** - Sticky job title effect

### Demos (`src/demos/`)

Interactive code demos embedded in blog posts:

- **ThrottleDebounceDemo.tsx** - Visual demo of throttle vs debounce
- **throttle-debounce.ts** - Demo logic

### Styles (`src/styles/`)

- **global.css** - Global styles, CSS variables, theme definitions

## Routing Structure

The app uses React Router with these routes:

```
/                          → Resume page
/writing                   → Blog posts listing
/writing/:slug             → Individual blog post
/talks                     → Talks listing
/talks/:talkId             → Specific talk (with modal)
/resume                    → Resume page (same as /)
/about                     → About page
/hello-there               → About page (alias)
/obvious                   → Obvious AI page
/tech                      → Redirects to /writing
/tech/:slug                → Redirects to /writing/:slug
/:slug                     → Attempts blog post redirect (catch-all)
```

## Key Features

### Theme System

- Dark mode (default) and light mode
- Persisted in localStorage
- No flash on load (inline script in index.html)
- CSS variables in global.css

### Search (Cmd+K)

- Global search across posts, projects, and talks
- Fuzzy matching on titles, descriptions, tags
- Keyboard navigation
- Implemented in SearchModal.tsx

### Find in Page (/)

- Only active on article pages
- Highlights matches in article content
- Keyboard shortcut: `/`
- Implemented in FindInPage.tsx

### Reading Progress

- Progress bar at top of article pages
- Scroll-based progress tracking
- See ProgressBar.tsx and useScrollProgress.ts

### Image Optimization

- OptimizedImage component for lazy loading
- Script in scripts/optimize-images.js
- Original images in public/images/blog/
- Optimized images in public/images/optimized/

### Analytics

- Google Analytics (G-SNX7NS4QMW)
- Automatic page view tracking via useAnalytics hook

## Build and Deployment

### Development

```bash
npm run dev              # Start dev server on port 3001
```

### Build

```bash
npm run build            # Vite build to dist/
```

### Deployment

```bash
npm run deploy           # Build and deploy to gh-pages
```

### Other Scripts

```bash
npm test                 # Run Vitest tests
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Format with Prettier
npm run format:check     # Check Prettier formatting
npm run optimize-images  # Optimize images with Sharp
```

## Configuration Files

### Vite (`vite.config.js`)

- React plugin enabled
- Dev server on port 3001
- CSS Modules with camelCase naming
- Custom plugin to copy index.html → 404.html (for GitHub Pages SPA routing)

### TypeScript (`tsconfig.json`)

- Target: ES2020
- Strict mode enabled
- JSX: react-jsx (new JSX transform)
- Module resolution: bundler
- No emit (Vite handles compilation)

### ESLint (`eslint.config.js`)

- React plugin with recommended rules
- React Hooks plugin
- Prettier integration
- TypeScript ESLint

### Git Hooks (`.husky/`)

- Pre-commit: lint-staged runs on staged files
- Configured in `.lintstagedrc.json`

## Data Structure Examples

### Blog Post

```typescript
{
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // HTML string
  tags?: string[];
  banner?: string; // Image path
}
```

### Project

```typescript
{
  id: string;
  name: string;
  tagline: string;
  description: string; // HTML
  images?: string[];
  tags?: string[];
  date?: string;
  links?: Array<{title: string; url: string}>;
}
```

### Talk

```typescript
{
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  description: string; // HTML
  slidesUrl?: string;
  videoUrl?: string;
}
```

## Important Notes for Agents

### Adding Blog Posts

1. Add post data to `src/data/posts.ts`
2. Post ID should be next sequential number
3. Content is HTML string (can include React components if needed)
4. Add banner image to `public/images/blog/`
5. Run `npm run optimize-images` for banner optimization

### Adding Projects

1. Add project to `src/data/projects.ts`
2. Project ID should be unique string
3. Images go in `public/images/optimized/`

### Styling

- Use CSS Modules for component styles
- Import as: `import styles from './Component.module.css'`
- Access as: `className={styles.className}`
- Global styles and CSS variables in `src/styles/global.css`
- Theme colors defined via CSS variables (--color-primary, etc.)

### Theme Colors

Check `src/styles/global.css` for:

- `[data-theme="dark"]` variables
- `[data-theme="light"]` variables

### Testing

- Tests use Vitest + Testing Library
- Run with `npm test`
- Test files should be `*.test.tsx` or `*.test.ts`

### Legacy Redirects

- `/tech/*` redirects to `/writing/*` (see TechRedirect.tsx)
- Root-level `/:slug` tries to find matching blog post (see BlogPostRedirect.tsx)

### GitHub Pages Specific

- The vite.config.js includes a custom plugin that creates 404.html from index.html
- This enables client-side routing on GitHub Pages
- index.html includes redirect handler script for GitHub Pages SPA routing

## Common Tasks

### Adding a New Component

1. Create `ComponentName.tsx` in `src/components/`
2. Create `ComponentName.module.css` in `src/components/`
3. Export component as named export
4. Import and use in pages or other components

### Adding a New Page

1. Create page in `src/pages/`
2. Add route in `src/App.tsx`
3. Update this document if it's a major page

### Modifying Routing

- All routes defined in `src/App.tsx` in the `<Routes>` component
- Use React Router's `<Navigate>` for redirects
- Update ScrollToTop component if needed

### Working with Images

- Place original images in `public/images/blog/`
- Run `npm run optimize-images` to create optimized versions
- Use OptimizedImage component in React code
- Reference as `/images/blog/filename.ext` or `/images/optimized/filename.ext`

## Git Workflow

Current branch: **main**
Main branch (for PRs): **main**

The repository uses:

- Husky for git hooks
- lint-staged for pre-commit linting
- Conventional commits encouraged (but not enforced)

## External Dependencies

### CDN Resources

- Highlight.js (11.9.0) - Syntax highlighting for code blocks
  - Theme: tokyo-night-dark
  - Languages: JavaScript, Bash
- Google Analytics (gtag.js)

### Icon/Font Libraries

None - uses system fonts and custom CSS

## Performance Optimizations

- Lazy loading images with OptimizedImage component
- Sharp-based image optimization script
- CSS Modules for scoped styles (smaller bundles)
- Vite's code splitting and tree shaking
- Dark mode preference loaded before render (no flash)

## Accessibility

- Semantic HTML structure
- Theme toggle for dark/light modes
- Keyboard shortcuts (Cmd+K, /, Esc)
- Alt text support in OptimizedImage component

## Browser Support

Target: Modern browsers supporting ES2020

- Chrome, Firefox, Safari, Edge (recent versions)
- No IE11 support

## Contact and Social

Check `src/data/resume.ts` for contact information and social links.

---

Last updated: 2026-01-31
Repository: matthew-gerstman/blog (assumed from context)

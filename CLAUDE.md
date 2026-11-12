# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server (localhost:5173)
npm run build     # tsc -b (type-check) then vite build -> dist/
npm run lint      # ESLint (flat config in eslint.config.js)
npm run preview   # build + serve the built worker locally via wrangler dev
npm run deploy    # build + wrangler deploy to Cloudflare
```

There is no test suite. Verify changes with `npm run build` (catches type errors) and `npm run lint`.

## Architecture

Single-page personal portfolio: React 19 + TypeScript, built with Vite 8, hosted on Cloudflare Workers as static assets (`wrangler.jsonc` uses `not_found_handling: "single-page-application"`). Pushing to `main` auto-redeploys on Cloudflare.

- **React Compiler is enabled** (`babel-plugin-react-compiler` via `@rolldown/plugin-babel` in `vite.config.ts`). Don't add manual `useMemo`/`useCallback`/`React.memo` for performance; write plain components.
- **Content lives in `src/data/`** (`skills.ts`, `experience.ts`, `projects.ts`) as typed arrays. Most content edits (new job, project, skill) are data-only changes; components in `src/components/` just map over these arrays.
  - Skills: `SkillCategory` renders in one of three layouts in `SkillCard.tsx`: `featured` + `subcategories` (grid of subcategories), `subcategories` only (stacked), or flat `skills`. `SkillLevel` maps to a 4-dot indicator via `LEVEL_ORDER`.
  - Projects: images are paths under `public/assets/` (served at `/assets/...`; URL-encode spaces, e.g. `/assets/vr%20museum/...`). `ProjectSection` renders each project and opens `ImageLightbox`.
- **Page composition** is in `src/App.tsx`. It also runs a single `IntersectionObserver` that adds `.in-view` to `section:not(#hero), .skill-category, .project-entry, .timeline-item` for scroll-reveal animations. New elements that should animate in need one of those classes (or the selector must be updated).
- **Styling** is plain global CSS: design tokens (CSS custom properties) in `src/index.css`, all component styles in `src/App.css`. No CSS modules or CSS-in-JS.
- **Theming**: dark is the default. The light theme is applied via `[data-theme="light"]` on `<html>`. An inline script in `index.html` sets it from `localStorage.theme` before render (to avoid flashing), and the toggle in `Navbar.tsx` updates it. `App.css` also has some `@media (prefers-color-scheme: light)` blocks; keep them consistent with `[data-theme]` when changing theme styles.
- **CV**: a standalone, self-contained HTML/CSS page (print-oriented, not part of the React app) linked from the Navbar and Hero as `/cv`. Two identical copies exist, `cv.html` at the repo root and `public/cv.html` (the served one). Keep them in sync, or edit `public/cv.html`.
- Unused components still in the tree: `About.tsx`, `ProjectCard.tsx` and `ProjectModal.tsx` aren't imported anywhere.

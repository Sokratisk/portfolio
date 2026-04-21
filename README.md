# Portfolio

Personal portfolio site built with React, TypeScript, and Vite. Deployed on Cloudflare Pages at [skelemidis.com](https://skelemidis.com).

## Stack

- **React 19** + TypeScript
- **Vite 8** — build tool
- **Cloudflare Pages** — hosting via Wrangler

## Development

```bash
npm install
npm run dev        # start dev server at localhost:5173
npm run build      # type-check + production build
npm run lint       # ESLint
npm run preview    # build + run locally via Wrangler
```

## Deployment

Pushing to `main` triggers an automatic redeploy on Cloudflare Pages.

Manual deploy:

```bash
npm run deploy
```

## Adding a project

1. Add images under `src/assets/<project-name>/`
2. Import them in `src/data/projects.ts` and add an entry to the `projects` array
3. Recommended image size: **1200 × 750 px** (16:10 ratio)

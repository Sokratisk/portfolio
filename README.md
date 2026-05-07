# Sokratis Kelemidis — Portfolio

Personal portfolio site built with React, TypeScript, and Vite. Live at [skelemidis.com](https://skelemidis.com).

## Stack

| Layer | Technology |
|---|---|
| UI | React 19 + TypeScript |
| Build | Vite 8 + React Compiler (Babel) |
| Styling | CSS (custom properties, glassmorphism, dark-first) |
| Hosting | Cloudflare Workers via Wrangler |
| Font | Inter (Google Fonts) |

## Project Structure

```
src/
  components/     # Navbar, Hero, Skills, Experience, Projects, Contact, Footer
  data/           # skills.ts, projects.ts, experience.ts
  assets/         # profile image, project screenshots
public/assets/    # statically served images (favicon, profile, screenshots)
```

## Development

```bash
npm install
npm run dev       # dev server at localhost:5173
npm run build     # tsc + vite build
npm run lint      # ESLint
npm run preview   # build + serve locally via Wrangler
npm run deploy    # build + deploy to Cloudflare
```

## Deployment

Pushing to `main` triggers an automatic redeploy on Cloudflare Workers.

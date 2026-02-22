# Project Context

## Overview
Personal portfolio website — React SPA deployed to GitHub Pages.
**Live:** https://adrienvictor-e.github.io
**Repo:** `adrienvictor-e/adrienvictor-e.github.io` (renamed from `back2front`)

## Commands
- `yarn start` — dev server (port 3000)
- `yarn dev-check` — production build with CI=false (use this to verify before deploy)
- Push to `main` triggers GitHub Actions deploy (`.github/workflows/deploy-pages.yml`)

## Git / Deploy
- Remote uses SSH alias `github-personal` (port 443) — if SSH fails, push via HTTPS:
  ```
  TOKEN=$(gh auth token) && GIT_CONFIG_GLOBAL=/dev/null GIT_CONFIG_SYSTEM=/dev/null git push "https://x-access-token:${TOKEN}@github.com/adrienvictor-e/adrienvictor-e.github.io.git" main
  ```
- Global git config rewrites all GitHub URLs to SSH — the HTTPS override above bypasses that
- `gh` CLI is authenticated as `adrienvictor-e`

## Architecture
- **React 17** + React Router 5 (HashRouter for GitHub Pages compatibility)
- **Font Awesome 5** loaded via CDN in `public/index.html`
- **Code-split routes** — 9 routes use `React.lazy()` + `<Suspense>`, only Home/Navbar/Footer are eager
- Global aurora background in `App.js` / `App.css` — uses soft radial gradients (no `filter: blur`)
- Accent color: `#22d3ee` (cyan) throughout — migrated from green `#5fff59`

## Routes
| Route | Component | Location | Loading |
|-------|-----------|----------|---------|
| `/` | Home (Cards) | `src/components/pages/Home.js` | Eager |
| `/frontend` | Frontend | `src/components/pages/Frontend.js` | Lazy |
| `/fullstack` | Fullstack | `src/components/pages/Fullstack.js` | Lazy |
| `/automation` | Automation | `src/components/pages/Automation.js` | Lazy |
| `/videos` | Videos | `src/components/pages/Videos.js` | Lazy |
| `/calendar` | Calendar | `src/mini-apps/calendarApp/Calendar.js` | Lazy |
| `/bbapi` | Breaking Bad API | `src/mini-apps/BBAPI/BbapiApp.js` | Lazy |
| `/chespirito` | Chespirito | `src/mini-apps/Chespirito/ChesperitoApp.js` | Lazy |
| `/lightbox` | Fluid Lightbox | `src/mini-apps/FluidLightbox/Lightbox.js` | Lazy |
| `/cv-themes` | CV Themes | `src/components/pages/CvThemes.js` | Lazy |

## Mini-Apps Pattern
Mini-apps under `src/mini-apps/` follow the same structure (BBAPI as reference):
```
mini-apps/BBAPI/
  BbapiApp.js        — main component (state, fetch, filter)
  BbapiApp.css       — scoped styles
  characters/
    CharacterGrid.js — maps items to CharacterItem, shows Spinner
    CharacterItem.js — flip card (image front, info back)
  ui/
    Headerbb.js      — header
    Search.js        — search input with callback
    Spinner.js       — loading spinner (reused by Chespirito)
```
Data lives in `public/data/*.json`, images in `public/images/`.

## Home Page Cards
- `src/components/Cards.js` — overview grid with `CardItem` and `CardItemLink` components
- Layout: Row 1 (2 cards), Row 2 (3 cards), Row 3 (2 cards — Lightbox + CV Themes)
- Cards have glass box wrapper, desaturated images (`saturate(0.35) brightness(0.85)`) that restore on hover
- Glass shine sweep on hover (CSS `::before` with `linear-gradient` + `transform` transition)
- Staggered fade-in via IntersectionObserver

## Section Pages (Frontend, Fullstack, Automation, Videos)
- Use `.hero-btns` glass card containers (same style as overview cards)
- `.description` boxes use dark inner background with subtle cyan border
- Green "fat baby" buttons with CSS glass shine effect (`::after` pseudo-element with `linear-gradient`)
- Frontend page includes Fluid Lightbox and CV Themes cards

## Performance Optimizations Applied
- **Navbar**: resize listener moved into `useEffect` with cleanup (was leaking on every render)
- **Aurora orbs**: removed `filter: blur(80px)`, replaced with soft 3-stop radial gradients + larger sizes
- **Backdrop-filter stack**: reduced from 24 blur ops to 8 (removed redundant layers, increased opacity)
- **Code splitting**: 9 lazy routes, main bundle reduced ~31 kB gzipped
- **index.html**: removed nested `<body>`, Facebook SDK, combined 3 Google Font requests into 1
- **Home.js**: `window.scrollTo` wrapped in `useEffect`
- **Calendar**: responsive grid with percentage widths, abbreviated weekday names on mobile
- **Mobile nav**: removed fixed `height: 90vh`, menu sizes to content
- **Buttons**: replaced deprecated `-webkit-gradient()` with standard `linear-gradient()`
- **JSX cleanup**: `class=` → `className=`, `id="greenb"` → `className="greenb"`, proper React attributes

## Styling Conventions
- CSS class namespacing per mini-app (e.g. `chespirito-card`, `chespirito-grid`)
- BBAPI uses generic class names (`card`, `cardsbb`) — don't reuse those in new mini-apps
- Global styles in `App.css`, component styles co-located as `Component.css`
- No CSS modules or CSS-in-JS (except CvThemes which uses inline styles)
- Buttons use `.greenb` class (not id) for the green style

## Pre-existing Warnings
Build produces eslint warnings in Navbar.js (unused `Button` import, unused `button` state), page components, Gallery.js, and useDate.js — all pre-existing, none blocking.

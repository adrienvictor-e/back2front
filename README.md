# Back2Front

Personal portfolio and project showcase built with React.

**Live:** [adrienvictor-e.github.io/back2front](https://adrienvictor-e.github.io/back2front)

## Projects

| Project | Route | Description |
|---------|-------|-------------|
| Interactive Calendar | `/calendar` | Live calendar using the browser Date API with add/delete events (localStorage) |
| Breaking Bad API | `/bbapi` | Character explorer with search and flip-card animations |
| Chespirito Characters | `/chespirito` | Chespirito character browser with search and flip cards |
| Fluid Lightbox | `/lightbox` | Responsive image grid with full-screen popup |
| CV Themes | `/cv-themes` | Interactive CV viewer with Infograph and Spy-Fi Lounge themes |
| Terraform + AWS ECR | `/videos` | Video walkthrough of deploying a containerized React app |

## Tech Stack

- **React 17** with React Router 5 (HashRouter)
- **Axios** for data fetching
- **Material-UI** components
- **Styled Components** + vanilla CSS
- **GitHub Actions** for CI/CD to GitHub Pages

## Performance Notes: CSS Glass Shine Effect

The overview cards have a glass shine sweep that plays on hover. Here's how it works and why it's fast.

### How it's built

The effect is a single `::before` pseudo-element on each card with three pieces:

**1. The light beam** — a narrow diagonal gradient that goes transparent, white (15% opacity), transparent:
```css
background: linear-gradient(
  105deg,
  transparent 0%,
  rgba(255,255,255,0.06) 40%,
  rgba(255,255,255,0.15) 50%,
  rgba(255,255,255,0.06) 60%,
  transparent 100%
);
```

**2. Starting position** — it sits off-screen to the left, invisible, skewed 15 degrees to look like an angled light reflection:
```css
left: -20%;
width: 50%;
transform: skewX(-15deg);
opacity: 0;
```

**3. On hover** — it fades in and slides across to the right:
```css
.cards__item:hover::before {
  opacity: 1;
  transform: skewX(-15deg) translateX(250%);
}
```

Think of each card as a glass window. When you hover, a band of light slides across it — like sunlight catching a window as you walk past. The card has `overflow: hidden` so the beam disappears cleanly at the edges.

### Why it's fast: CPU vs GPU rendering

When a browser draws a webpage, most work happens on the **CPU** — calculating layouts, painting colors, rendering text. The CPU handles things one step at a time, so heavy work can make the page feel sluggish.

The **GPU** (graphics card) is designed to handle visual stuff — it can process thousands of pixels simultaneously instead of one by one.

When you use `transform` (moving/rotating) or `opacity` (fading), the browser hands that element to the GPU as a **layer** — like a flat image. The GPU can then slide that image around or fade it without the CPU having to redraw anything.

- **CPU approach**: erase the element, recalculate where everything goes, repaint it in the new position — every single frame
- **GPU approach**: "take this image and move it 5 pixels to the right" — the GPU does that almost for free

This is also why the aurora optimization mattered. The original `filter: blur(80px)` forced the GPU to reprocess every pixel of 3 large orbs on every animation frame — expensive even for a GPU. Replacing it with a pre-blurred radial gradient meant the GPU just moves a flat image around, which is trivial.

## Getting Started

```bash
yarn install
yarn start        # dev server at http://localhost:3000
yarn dev-check    # production build check (CI=false)
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) which builds and deploys to GitHub Pages automatically.

## Author

Adrien Victor Esquerre

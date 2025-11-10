# FINBIZ Club Platform

Interactive web experience for THE FINBIZ CLUB at Adani University. The site blends rich storytelling with real-time graphics, delivering a modern landing experience for entrepreneurship, finance, and technology initiatives. Built on Next.js 14 with deep integration of React Three Fiber, GSAP timelines, and finely tuned scroll interactions.

## Features
- Hero grid that continuously animates via GSAP timelines and responsive layouts for mobile and desktop
- Real-time WebGL background and fluid simulation scenes powered by Three.js and custom shaders
- Smooth scrolling, page transition choreography, and split-text animations for an immersive feel
- SEO-ready metadata, sitemap generation, and Vercel Analytics hooks for production deployments
- Modular page composition with reusable DOM, animation, and canvas components organized by feature

## Tech Stack
- Next.js 14 (React 18) with App Router-style file conventions and custom document/head components
- React Three Fiber, Drei, Rapier, and post-processing utilities for 3D experiences
- GSAP, Lenis, and custom hooks for animation, motion control, and scroll-triggered effects
- Sass modules with a shared design system (`src/styles`) for typography, grids, and utilities
- Zustand for global UI state, next-seo for structured metadata, and next-sitemap automation

## Getting Started

### Prerequisites
- Node.js 18+ (aligns with Next.js 14 support)
- npm (bundled with Node)

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Starts the development server on [http://localhost:3000](http://localhost:3000). Hot reloading is enabled.

### Linting
```bash
npm run lint
```
Runs ESLint with the configured presets (`next`, `airbnb`, custom import ordering, and React Three Fiber rules).

### Production Build
```bash
npm run build
npm run start
```
`next build` compiles and optimizes the app. `next start` serves the production build. The `postbuild` hook runs `next-sitemap` to refresh sitemap and robots metadata.

## Project Structure

```
public/
	finbiz/           Static imagery and branding assets
	model/            GLB/GLTF resources for 3D scenes
	other/            HDR environments used by canvas components
src/
	components/
		animationComponents/  Reusable motion primitives (split text, button effects)
		canvas/               WebGL backgrounds, fluid simulations, and shader utils
		dom/                  Layout, navigation, footer, and client-side UI pieces
	constants/              Content definitions for blog posts and projects
	hooks/                  Custom React hooks for scroll, viewport, and animations
	pages/                  Next.js pages and page-level component bundles
	store.js                Zustand global state (Lenis refs, menu, fluid color, etc.)
styles/                   Global styles, variables, and design tokens
```

`jsconfig.json` maps `@src/*` to the `src/` directory for clean import paths.

## Key Modules
- `src/pages/index.page.jsx`: Assembles the home experience with hero, about, clients, quote, and blog sections.
- `src/components/canvas/background/Background.jsx`: Custom shader surface with animated uniforms for the ambient backdrop.
- `src/components/canvas/fluid/Fluid.jsx`: GPU-driven fluid simulation using multiple render targets and pointer-driven splats.
- `src/pages/components/home/Index.jsx`: GSAP timelines, responsive grid logic, and floating mesh interactions driving the hero section.
- `src/components/dom/Layout.jsx`: Manages Lenis scroll control, page transitions, and header/footer visibility using GSAP timelines.

## Development Notes
- Smooth scrolling relies on a Lenis instance stored in Zustand; ensure new scroll-triggered effects reference `main` element scroller.
- Three.js assets (HDRs, models) load from `public`; keep file names stable to avoid cache issues.
- SEO metadata is centralized in `src/components/dom/CustomHead.jsx`; update keywords and descriptions there.
- Global styles live in `src/styles/global.scss` with CSS variables and mixins consolidated in `variables.scss` and `functions.scss`.

## Contributing
- Fork or create a feature branch and keep commits scoped by feature/fix.
- Run `npm run lint` before opening a pull request to maintain consistent formatting and import order.
- Document new components or hooks with brief comments if the implementation is not self-explanatory.


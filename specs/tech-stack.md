# Technical Stack & Requirements

## Frontend Architecture
- **Framework**: React 19 (TypeScript)
- **State Management**: React Hooks (useState, useEffect)
- **Animation**: Framer Motion (`motion/react`) for gestures and transitions.
- **Icons**: Lucide React
- **Styling**: Tailwind CSS (Utility-first, "Stone" palette).

## Build & Deployment
- **Bundler**: Vite
- **PWA**: `vite-plugin-pwa` (Workbox for asset caching).
- **Icons/Assets**: SVG-first approach with base64 PNG fallback for PWA manifest.

## Core Implementation Details
- **Transposition**: Pure function logic in `App.tsx` calculating `fretOffset` relative to a pattern's `rootNote`.
- **SVG Rendering**: `ChordDiagram.tsx` handles dynamic `viewBox` and `startFret` labels based on chord voicing.
- **Offline Support**: `manifest.webmanifest` and service worker (`sw.js`) ensure 100% offline uptime.

## Engineering Standards
- Strict TypeScript enforcement (no `any`).
- Responsive design via Tailwind container-queries/media-queries.
- Spec-Driven Development (SDD) is the mandatory workflow.

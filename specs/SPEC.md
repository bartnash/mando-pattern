# Mandolin Pattern Pro Specification

## Project Overview
Mandolin Pattern Pro is a visual explorer for movable mandolin chord patterns. It allows players to visualize chord sequences (typically 1-7 in a key) and transpose them dynamically across the fretboard.

## 1. Domain Models

### 1.1 Chord
Represents a single chord shape within a pattern.
- `number`: Position in the sequence (1-7).
- `name`: Quality (e.g., "Major", "Minor").
- `roman`: Roman numeral representation (e.g., "I", "ii").
- `frets`: Array of 4 values `(number | 'x')[]` representing [G, D, A, E] strings.
- `description`: (Optional) Contextual information.

### 1.2 Pattern
A collection of chords forming a musical sequence.
- `id`: Unique identifier.
- `name`: Display name.
- `description`: High-level summary of the pattern's use.
- `rootNote`: The base key the pattern is defined in (0=G, 1=G#, etc.).
- `chords`: Array of 7 `Chord` objects.

## 2. Core Features

### 2.1 Chord Visualization
- **Chord Diagram**: SVG-based representation of a 6-fret window of the mandolin neck.
  - Automatic calculation of `startFret` based on the lowest active fret.
  - Support for open strings (`0`) and muted strings (`x`).
- **Full Neck View**: A horizontal representation of the entire fretboard showing all chords in the pattern.

### 2.2 Transposition (Movable Patterns)
- The system calculates a `fretOffset` based on a selected `targetKey` relative to the pattern's `rootNote`.
- Chords are shifted dynamically: `shiftedFret = originalFret + fretOffset`.
- Range logic ensures patterns stay within a playable neck range (typically -2 to +9 relative offset).

### 2.3 Navigation
- **Carousel**: Infinite loop through the 7 chords of a pattern.
- **Direct Navigation**: A Roman numeral button bar for instant jumping to a specific position.
- **Gestures**: Swipe-to-navigate on both the chord diagram and the full neck view (powered by Framer Motion).

### 2.4 Layout & UI
- Responsive design with a sticky header.
- Collapsing header logic on scroll.
- Mobile-optimized key and pattern selectors.

### 2.5 Offline Support & PWA
- **Service Worker**: Use Workbox (via `vite-plugin-pwa`) to cache all static assets (JS, CSS, HTML, SVG).
- **Manifest**: Provide a `manifest.webmanifest` for "Add to Home Screen" support on mobile and desktop.
- **Offline Mode**: Ensure the app remains fully functional without an internet connection once cached.
- **Update Strategy**: Implement a "prompt for update" or "auto-update" mechanism for the service worker.

## 3. Technical Stack
- **Framework**: React 19 (TypeScript)
- **Build Tool**: Vite
- **PWA**: `vite-plugin-pwa`
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (`motion/react`)
- **Icons**: Lucide React

## 4. Future Roadmap
- [ ] AI-assisted chord pattern generation via `@google/genai`.
- [ ] Custom pattern builder.
- [ ] Audio playback for chord shapes.
- [ ] Alternative tunings support.

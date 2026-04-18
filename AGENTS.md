# Project Context: Mandolin Pattern Pro

## Overview
Mandolin Pattern Pro is a React-based interactive tool for mandolin players to explore and transpose movable chord patterns. It uses SVG diagrams to visualize fingerings and Framer Motion for a fluid, touch-friendly UI.

## Technical Stack
- **Framework**: React 19 (TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (`motion/react`)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **AI**: Integration with `@google/genai` (planned)

## Core Files
- `src/App.tsx`: Main application state, transposition logic, and layout.
- `src/components/ChordDiagram.tsx`: SVG renderer for individual chord shapes.
- `src/components/FullNeckView.tsx`: Overview of the chord sequence across the fretboard.
- `src/constants.ts`: Source of truth for chord definitions and patterns.
- `src/types.ts`: TypeScript interfaces for `Chord` and `Pattern`.

## Current Status
- [x] Basic project scaffolding (Vite + React 19).
- [x] Movable chord transposition logic.
- [x] Infinite carousel navigation.
- [x] Responsive SVG chord diagrams.
- [x] Spec-Driven Development (SDD) initialized.
- [x] Specifications moved to `specs/SPEC.md`.
- [x] Offline Support (PWA)

## Development Philosophy
This project strictly follows **Spec-Driven Development**. All changes must be reflected in `specs/SPEC.md` before implementation. Mandates for agents are located in `GEMINI.md`.

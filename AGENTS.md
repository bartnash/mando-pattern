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
This project strictly follows **Spec-Driven Development**. All changes must be reflected in the relevant file in the `specs/` directory before implementation. 

### Specification Map
- `specs/mission.md`: Goals, Features, and Domain Models.
- `specs/tech-stack.md`: Technical requirements and standards.
- `specs/roadmap.md`: Current status and future plans.

Mandates for agents are located in `GEMINI.md`.

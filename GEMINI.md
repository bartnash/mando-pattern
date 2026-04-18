# Gemini Instructions: Mandolin Pattern Pro

This project follows **Spec-Driven Development (SDD)**. Adhere to these mandates for all contributions.

## 1. The Specification is Law
- `specs/SPEC.md` is the source of truth.
- Before implementing a feature or fixing a bug, ensure the intended behavior is documented in `specs/SPEC.md`.
- If a change deviates from the spec, update the spec first.

## 2. Engineering Standards

### 2.1 React & TypeScript
- Use **React 19** idioms (e.g., `motion/react` for animations).
- Strict TypeScript is mandatory. Avoid `any` at all costs.
- Prefer functional components and hooks over class components.

### 2.2 Styling & UI
- Use **Tailwind CSS** for all styling. Avoid custom CSS files unless absolutely necessary.
- Follow the established "Stone" color palette (`bg-stone-100`, `text-stone-900`, etc.).
- All interactive elements should have appropriate hover/active states and transitions.

### 2.3 Data Integrity
- Maintain the `Chord` and `Pattern` interfaces defined in `src/types.ts`.
- Ensure transposition logic in `App.tsx` remains pure and handles "out-of-bounds" fret numbers gracefully.

## 3. Development Workflow
- **Research**: Check `SPEC.md` and existing code in `src/`.
- **Strategy**: Propose changes in terms of spec updates and implementation steps.
- **Execution**: Apply surgical changes.
- **Validation**: Verify layout responsiveness and transposition accuracy.

## 4. Project-Specific Nuances
- **Mandolin Tuning**: Always assume G-D-A-E (low to high).
- **Movable Chords**: The application's value proposition is "movable" shapes; prioritize patterns that don't rely on open strings where possible, or handle them specifically in the shifting logic.

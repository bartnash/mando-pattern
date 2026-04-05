# Contributing to Mandolin Pattern Pro

This document outlines guidelines and conventions for contributing to the Mandolin Pattern Pro project, designed to facilitate collaboration between human developers and AI coding assistants. Adhering to these guidelines helps maintain code quality, consistency, and ensures that contributions integrate smoothly.

## 1. Project Overview & Goals

For a high-level understanding of the project's purpose, features, and technologies, please refer to:
*   [AGENTS.md](./AGENTS.md)

The primary goal is to provide a user-friendly, visual tool for mandolin players to explore and learn chord patterns. Contributions should always aim to enhance this core experience, maintain performance, and ensure responsiveness across devices.

## 2. General AI Agent Guidelines

When contributing, AI agents should:
*   **Analyze Existing Code:** Prioritize understanding existing code structure, style, and conventions before proposing changes.
*   **Mimic Style:** Adopt the formatting, naming, and architectural patterns observed in the surrounding codebase.
*   **Focus on Why:** When adding comments, explain the *reason* for a particular implementation, not just *what* the code does. Comments should be used sparingly for complex logic.
*   **Iterative Development:** Break down complex tasks into smaller, manageable subtasks.
*   **Test-Driven Approach:** For new features or bug fixes, consider writing unit tests to verify correctness and prevent regressions.

## 3. Code Standards & Conventions

### Language & Framework
*   **TypeScript:** All new code should be written in TypeScript, leveraging its type-checking capabilities.
*   **React:** Adhere to React best practices, preferring functional components and hooks for stateful logic.
*   **Tailwind CSS:** Styling should primarily use Tailwind CSS utility classes. Avoid inline styles where possible.

### Formatting
*   Follow the existing formatting of the codebase. Consistency is key. (Automated formatting tools like Prettier may be introduced later to enforce this).

### Naming Conventions
*   **Components:** PascalCase (e.g., `ChordDiagram.tsx`).
*   **Functions/Variables:** camelCase (e.g., `getShiftedFrets`).
*   **Types/Interfaces:** PascalCase (e.g., `Pattern`, `Chord`).

### File Structure
*   Respect the current `src/` directory structure (e.g., `src/components`, `src/types.ts`, `src/constants.ts`). New files should fit logically within this structure.

## 4. Data Management

*   **Chord Patterns:** New chord patterns should be added to `src/constants.ts` following the `Pattern` and `Chord` interface definitions in `src/types.ts`.
*   **Transposition Logic:** Understand and utilize the `rootNote` property in `Pattern` and the `fretOffset` logic in `App.tsx` for correct chord transposition.

## 5. Testing

*   For any new features or bug fixes, consider adding corresponding tests.
*   Familiarize yourself with the project's testing setup (currently not explicitly configured, but expect standard React testing practices if introduced).

## 6. Git & Commit Messages

*   **Commit Frequency:** Aim for small, atomic commits that address a single logical change.
*   **Commit Message Format:** Use clear and concise commit messages. A good practice is to follow a convention like Conventional Commits (e.g., `feat: add new feature`, `fix: resolve bug in X`).

## 7. Tooling

*   **Build Tool:** Vite
*   **Package Manager:** npm (or yarn/pnpm, consistent with `package-lock.json`)
*   **Type Checker:** TypeScript (`npm run lint` currently runs `tsc --noEmit`)

By following these guidelines, we can ensure a smooth and effective development process for all contributors, human and AI alike.

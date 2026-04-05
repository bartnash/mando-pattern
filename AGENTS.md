# Project Overview

This project, "Mandolin Pattern Pro," is a visual web-based tool designed for mandolin players. Its primary purpose is to help users learn and share movable chord patterns and riffs across the mandolin neck. It features dynamic, SVG-based fretboard diagrams, a carousel for navigating through chord sequences, infinite scrolling, direct navigation via Roman numeral buttons, and a responsive design for various devices.

## Technologies Used

The application is built using:
*   **React**: For building the user interface.
*   **Vite**: As the build tool and development server.
*   **Tailwind CSS**: For utility-first styling.
*   **Framer Motion**: For animations and gesture handling.
*   **Lucide React**: For icons.

## Building and Running

To set up and run the project locally, follow these steps:

### Prerequisites
*   Node.js (v18 or higher)
*   npm

### Installation
1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd mandolin-pattern-pro
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    The application will typically be accessible in your web browser at `http://localhost:5173/` (or a similar address provided by Vite).

## Development Conventions

### Chord Pattern Management
*   **Location**: Chord patterns are defined and stored in `src/constants.ts`.
*   **Structure**: New patterns should be added to the `DEFAULT_PATTERNS` array, following the `Pattern` interface defined in `src/types.ts`.
*   **Chord Definition**: Each `Chord` object within a pattern includes `number`, `name`, `roman` numeral, and a `frets` array.
*   **Fret Array (`frets`)**: This array represents the four mandolin strings (G, D, A, E) in order.
    *   An integer (e.g., `4`) denotes the fret number to be pressed.
    *   `0` indicates an open string.
    *   `'x'` signifies a muted or unplayed string.

### Data Types
Core data structures for `Chord` and `Pattern` are defined in `src/types.ts`, ensuring consistency across the application.

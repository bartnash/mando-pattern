# Mandolin Pattern Pro

A visual tool for mandolin players to learn and share movable chord patterns and riffs across the neck.

## AI-Assisted Development & Contribution Guidelines

This project is set up to facilitate development with multiple AI coding assistants. For a comprehensive overview, contribution guidelines, and project context, please refer to:

*   [AGENTS.md](./AGENTS.md) - Project overview and AI agent instructions.
*   [CONTRIBUTING.md](./CONTRIBUTING.md) - Detailed contribution guidelines and conventions.

## Features

- **Dynamic Chord Diagrams**: Custom SVG-based fretboard diagrams for mandolin (G-D-A-E tuning).
- **Carousel Navigation**: View the current, previous, and next chords in a sequence.
- **Infinite Scrolling**: Loop through chord patterns seamlessly.
- **Direct Navigation**: Jump to any chord in the pattern using Roman numeral buttons.
- **Responsive Design**: Works on desktop and mobile devices with touch support.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd mandolin-pattern-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## How to Add New Chord Patterns

Chord patterns are stored in `src/constants.ts`. To add a new pattern, follow these steps:

### 1. Open `src/constants.ts`

Locate the `DEFAULT_PATTERNS` array.

### 2. Add a New Pattern Object

Add a new object to the `DEFAULT_PATTERNS` array with the following structure:

```typescript
{
  id: 'unique-pattern-id',
  name: 'Pattern Name',
  description: 'A brief description of the pattern.',
  chords: [
    { 
      number: 1, 
      name: 'Major', 
      roman: 'I', 
      frets: [4, 2, 'x', 'x'], // [G, D, A, E]
      description: 'Optional description for this specific chord' 
    },
    // ... add 6 more chords for a full 7-chord pattern
  ]
}
```

### 3. Understanding the `frets` Array

The `frets` array represents the four strings of the mandolin in order: **G, D, A, E**.

- **Integer (e.g., `4`)**: The fret number to be pressed.
- **`0`**: An open string.
- **`'x'`**: A muted or unplayed string.

The application automatically calculates the starting fret label (e.g., "4fr") based on the lowest non-zero fret in the shape.

### 4. Data Types

The data structures are defined in `src/types.ts`:

```typescript
export interface Chord {
  number: number;      // Position in the sequence (1-7)
  name: string;        // Chord quality (e.g., "Major", "Minor")
  roman: string;       // Roman numeral (e.g., "I", "ii", "IV")
  frets: (number | 'x')[]; // Array of 4 values [G, D, A, E]
  description?: string; // Optional context
}

export interface Pattern {
  id: string;          // Unique identifier
  name: string;        // Display name
  description: string; // Display description
  chords: Chord[];     // Array of 7 chords
}
```

## Technologies Used

- **React**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations and gestures
- **Lucide React**: Icons

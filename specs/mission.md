# Project Mission: Mandolin Pattern Pro

## Overview
Mandolin Pattern Pro is a visual explorer for movable mandolin chord patterns. It empowers players to visualize musical sequences (typically 1-7 in a key) and transpose them dynamically across the fretboard, bridging the gap between theory and fretboard visualization.

## Core Features
- **Dynamic Chord Diagrams**: SVG-based fretboard diagrams with automatic fret calculation.
- **Transposition Engine**: Real-time shifting of patterns across all keys.
- **Infinite Carousel**: Seamless navigation through chord sequences.
- **Full Neck View**: Contextual visualization of the entire pattern on the mandolin neck.
- **Offline First**: Fully functional as a PWA for use in practice rooms without connectivity.

## Domain Models

### Chord
Represents a single chord shape within a pattern.
- `number`: Position in the sequence (1-7).
- `name`: Quality (e.g., "Major", "Minor").
- `roman`: Roman numeral representation (e.g., "I", "ii").
- `frets`: Array of 4 values `(number | 'x')[]` representing [G, D, A, E] strings.
- `description`: (Optional) Contextual information.

### Pattern
A collection of chords forming a musical sequence.
- `id`: Unique identifier.
- `name`: Display name.
- `description`: High-level summary of the pattern's use.
- `rootNote`: The base key the pattern is defined in (0=G, 1=G#, etc.).
- `chords`: Array of 7 `Chord` objects.

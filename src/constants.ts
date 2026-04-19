import { Pattern } from './types';

export const DEFAULT_PATTERNS: Pattern[] = [
  {
    id: 'g-chop',
    name: 'Standard "G" chop chord',
    description: 'Typical bluegrass chop chords.',
    rootNote: 0, // G
    chords: [
      { number: 1, name: 'Major', roman: 'I', frets: [7, 5, 2, 3], description: 'G-shape root' },
      { number: 2, name: 'Minor', roman: 'ii', frets: [2, 2, 3, 5], description: 'Am-shape' },
      { number: 3, name: 'Minor', roman: 'iii', frets: [4, 4, 5, 7], description: 'Bm-shape' },
      { number: 4, name: 'Major', roman: 'IV', frets: [5, 2, 3, 0], description: 'C-shape' },
      { number: 5, name: 'Major', roman: 'V', frets: [7, 4, 5, 2], description: 'D-shape' },
      { number: 6, name: 'Minor', roman: 'vi', frets: [4, 2, 2, 3], description: 'Em-shape' },
      { number: 7, name: 'Minor', roman: 'vii', frets: [6, 4, 4, 5], description: 'F#dim-shape' },
    ]
  },
  {
    id: 'd-chop',
    name: 'Standard "D" chop chord',
    description: 'Derived from the IV chord of the G-chop pattern.',
    rootNote: 7, // D
    chords: [
      { number: 1, name: 'Major', roman: 'I', frets: [7, 4, 5, 2], description: 'D-shape root' },
      { number: 2, name: 'Minor', roman: 'ii', frets: [4, 2, 2, 3], description: 'Em-shape' },
      { number: 3, name: 'Minor', roman: 'iii', frets: [6, 4, 4, 5], description: 'F#m-shape' },
      { number: 4, name: 'Major', roman: 'IV', frets: [7, 5, 2, 3], description: 'G-shape' },
      { number: 5, name: 'Major', roman: 'V', frets: [9, 7, 4, 5], description: 'A-shape' },
      { number: 6, name: 'Minor', roman: 'vi', frets: [4, 4, 5, 7], description: 'Bm-shape' },
      { number: 7, name: 'Diminished', roman: 'vii°', frets: [6, 6, 7, 9], description: 'C#m-shape' },
    ]
  }
];

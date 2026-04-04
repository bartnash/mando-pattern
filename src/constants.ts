import { Pattern } from './types';

export const DEFAULT_PATTERNS: Pattern[] = [
  {
    id: 'major-movable-jethro',
    name: 'Major Scale (Jethro Style)',
    description: 'Classic 3-finger movable shapes used in bluegrass and jazz.',
    chords: [
      { number: 1, name: 'Major', roman: 'I', frets: [4, 2, 'x', 'x'], description: 'Root on G string' },
      { number: 2, name: 'Minor', roman: 'ii', frets: [5, 3, 'x', 'x'], description: 'Movable minor shape' },
      { number: 3, name: 'Minor', roman: 'iii', frets: [7, 5, 'x', 'x'], description: 'Movable minor shape' },
      { number: 4, name: 'Major', roman: 'IV', frets: [2, 4, 5, 'x'], description: 'Root on D string' },
      { number: 5, name: 'Major', roman: 'V', frets: [4, 6, 7, 'x'], description: 'Root on D string' },
      { number: 6, name: 'Minor', roman: 'vi', frets: [6, 8, 9, 'x'], description: 'Movable minor shape' },
      { number: 7, name: 'Diminished', roman: 'vii°', frets: [8, 10, 11, 'x'], description: 'Movable diminished shape' },
    ]
  },
  {
    id: 'major-open-movable',
    name: 'Full 4-Finger Shapes',
    description: 'Full sounding movable chords for rhythm playing.',
    chords: [
      { number: 1, name: 'Major', roman: 'I', frets: [2, 2, 4, 5], description: 'A-shape' },
      { number: 2, name: 'Minor', roman: 'ii', frets: [4, 4, 6, 7], description: 'Bm-shape' },
      { number: 3, name: 'Minor', roman: 'iii', frets: [6, 6, 8, 9], description: 'C#m-shape' },
      { number: 4, name: 'Major', roman: 'IV', frets: [7, 7, 9, 10], description: 'D-shape' },
      { number: 5, name: 'Major', roman: 'V', frets: [9, 9, 11, 12], description: 'E-shape' },
      { number: 6, name: 'Minor', roman: 'vi', frets: [11, 11, 13, 14], description: 'F#m-shape' },
      { number: 7, name: 'Diminished', roman: 'vii°', frets: [12, 12, 14, 15], description: 'G#dim-shape' },
    ]
  },
  {
    id: 'g-chop',
    name: 'Starting from the standard "G-chop"',
    description: 'Typical bluegrass chop chords.',
    chords: [
      { number: 1, name: 'Major', roman: 'I', frets: [7, 5, 2, 3], description: 'A-shape' },
      { number: 2, name: 'Minor', roman: 'ii', frets: [2, 2, 3, 5], description: 'Bm-shape' },
      { number: 3, name: 'Minor', roman: 'iii', frets: [4, 4, 5, 7], description: 'C#m-shape' },
      { number: 4, name: 'Major', roman: 'IV', frets: [5, 2, 3, 0], description: 'D-shape' },
      { number: 5, name: 'Major', roman: 'V', frets: [7, 4, 5, 2], description: 'E-shape' },
      { number: 6, name: 'Minor', roman: 'vi', frets: [4, 2, 2, 3], description: 'F#m-shape' },
      { number: 7, name: 'Minor', roman: 'vii', frets: [6, 4, 4, 5], description: 'G#dim-shape' },
    ]
  }
];

export interface Chord {
  number: number;
  name: string;
  roman: string;
  frets: (number | 'x')[]; // [G, D, A, E]
  description?: string;
}

export interface Pattern {
  id: string;
  name: string;
  description: string;
  chords: Chord[];
}

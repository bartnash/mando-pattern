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
  rootNote: number; // 0=G, 1=G#, 2=A, 3=Bb, 4=B, 5=C, 6=C#, 7=D, 8=Eb, 9=E, 10=F, 11=F#
  chords: Chord[];
}

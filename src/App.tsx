import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Music, Info, Settings, ListMusic } from 'lucide-react';
import { DEFAULT_PATTERNS } from './constants';
import { ChordDiagram } from './components/ChordDiagram';
import { FullNeckView } from './components/FullNeckView';
import { Pattern } from './types';

export default function App() {
  const [selectedPatternId, setSelectedPatternId] = useState<string>(DEFAULT_PATTERNS[0].id);
  const [currentChordIndex, setCurrentChordIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [targetKey, setTargetKey] = useState(0); // 0=G, 1=G#, 2=A, etc.
  const [isScrolled, setIsScrolled] = useState(false);

  const KEYS = ['G', 'G#', 'A', 'Bb', 'B', 'C', 'C#', 'D', 'Eb', 'E', 'F', 'F#'];

  const selectedPattern = DEFAULT_PATTERNS.find(p => p.id === selectedPatternId) || DEFAULT_PATTERNS[0];
  
  // Calculate offset based on target key and pattern's root note
  // We try to keep the offset in a playable range (-2 to +9)
  let fretOffset = targetKey - selectedPattern.rootNote;
  if (fretOffset > 9) fretOffset -= 12;
  if (fretOffset < -2) fretOffset += 12;

  const getShiftedFrets = (frets: (number | 'x')[]) => {
    return frets.map(f => (typeof f === 'number' ? f + fretOffset : f));
  };

  const currentChord = selectedPattern.chords[currentChordIndex];
  const shiftedCurrentFrets = getShiftedFrets(currentChord.frets);

  const paginate = (newDirection: number) => {
    const total = selectedPattern.chords.length;
    const nextIndex = (currentChordIndex + newDirection + total) % total;
    setDirection(newDirection);
    setCurrentChordIndex(nextIndex);
  };

  const jumpToChord = (index: number) => {
    if (index === currentChordIndex) return;
    setDirection(index > currentChordIndex ? 1 : -1);
    setCurrentChordIndex(index);
  };

  const prevIndex = (currentChordIndex - 1 + selectedPattern.chords.length) % selectedPattern.chords.length;
  const nextIndex = (currentChordIndex + 1) % selectedPattern.chords.length;

  // Reset chord index when pattern changes
  useEffect(() => {
    setCurrentChordIndex(0);
  }, [selectedPatternId]);

  // Scroll listener for collapsing header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans selection:bg-stone-200">
      {/* Header */}
      <header className={`bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between sticky z-50 shadow-sm transition-all duration-300 ${isScrolled ? 'top-[-80px]' : 'top-0'}`}>
        <div className="flex items-center gap-3">
          <div className="bg-stone-800 p-2 rounded-lg">
            <Music className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Mandolin Pattern Pro</h1>
            <p className="text-xs text-stone-500 font-medium">Movable Chord Explorer</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 bg-stone-50 px-4 py-1.5 rounded-full border border-stone-200">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Key</span>
            <select 
              value={targetKey}
              onChange={(e) => setTargetKey(parseInt(e.target.value))}
              className="bg-transparent text-sm font-bold text-stone-700 outline-none cursor-pointer hover:text-stone-900"
            >
              {KEYS.map((key, i) => (
                <option key={key} value={i}>{key}</option>
              ))}
            </select>
          </div>
          <button className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-600">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 flex flex-col gap-8">
        {/* Mobile Key Selector */}
        <section className={`md:hidden sticky z-40 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-between -mx-4 px-4 transition-all duration-300 ${isScrolled ? 'top-[-80px]' : 'top-[64px]'}`}>
          <span className="text-sm font-bold text-stone-500 uppercase tracking-wider">Song Key</span>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {KEYS.map((key, i) => (
              <button
                key={key}
                onClick={() => setTargetKey(i)}
                className={`min-w-[2.5rem] h-10 rounded-xl font-bold transition-all ${
                  targetKey === i 
                    ? 'bg-stone-800 text-white shadow-md' 
                    : 'bg-stone-50 text-stone-400 border border-stone-100'
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </section>

        {/* Pattern Selector */}
        <section className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-stone-700">
              <ListMusic className="w-5 h-5" />
              <h2 className="font-semibold text-sm md:text-base">Pattern</h2>
            </div>
            <select 
              value={selectedPatternId}
              onChange={(e) => setSelectedPatternId(e.target.value)}
              className="md:hidden bg-stone-50 border border-stone-200 rounded-lg px-2 py-1 text-xs font-bold text-stone-700 outline-none"
            >
              {DEFAULT_PATTERNS.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-3">
            {DEFAULT_PATTERNS.map((pattern) => (
              <button
                key={pattern.id}
                onClick={() => setSelectedPatternId(pattern.id)}
                className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedPatternId === pattern.id
                    ? 'border-stone-800 bg-stone-50 shadow-inner'
                    : 'border-stone-100 hover:border-stone-300 bg-white'
                }`}
              >
                <h3 className={`font-bold ${selectedPatternId === pattern.id ? 'text-stone-900' : 'text-stone-600'}`}>
                  {pattern.name}
                </h3>
                <p className="text-xs text-stone-500 mt-1 line-clamp-1">{pattern.description}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Chord Viewer & Neck Context */}
        <section className="flex flex-col items-center gap-4 w-full">
          <div className={`w-full sticky z-40 bg-stone-100/80 backdrop-blur-md py-2 -mx-4 px-4 transition-all duration-300 ${isScrolled ? 'top-0' : 'md:top-[64px] top-[128px]'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-between max-w-2xl mx-auto gap-4">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Position</span>
                <span className="text-xl font-black text-stone-800">{currentChord.number} / 7</span>
              </div>

              {/* Direct Navigation Roman Numerals */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-2xl shadow-sm border border-stone-200 overflow-x-auto max-w-full no-scrollbar">
                {selectedPattern.chords.map((chord, idx) => (
                  <button
                    key={chord.number}
                    onClick={() => jumpToChord(idx)}
                    className={`min-w-[2.2rem] h-9 px-2 rounded-xl font-bold transition-all duration-200 flex items-center justify-center text-sm ${
                      currentChordIndex === idx
                        ? 'bg-stone-800 text-white shadow-lg scale-105'
                        : 'text-stone-400 hover:bg-stone-100 hover:text-stone-600'
                    }`}
                  >
                    {chord.roman}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex gap-2">
                <button
                  onClick={() => paginate(-1)}
                  className="p-2 bg-white rounded-full shadow-md border border-stone-200 hover:bg-stone-50 transition-all active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="p-2 bg-white rounded-full shadow-md border border-stone-200 hover:bg-stone-50 transition-all active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden py-4 landscape:max-lg:h-[350px] landscape:max-lg:flex landscape:max-lg:items-center">
            <div className="flex items-center justify-center gap-4 md:gap-12 px-4 w-full">
              {/* Previous Chord */}
              <div 
                className="hidden sm:block transition-all duration-500 cursor-pointer opacity-0 sm:opacity-30 scale-75 grayscale hover:opacity-50"
                onClick={() => paginate(-1)}
              >
                <ChordDiagram
                  frets={getShiftedFrets(selectedPattern.chords[prevIndex].frets)}
                  name={selectedPattern.chords[prevIndex].name}
                  roman={selectedPattern.chords[prevIndex].roman}
                />
              </div>

              {/* Current Chord */}
              <motion.div
                key={`${selectedPatternId}-${currentChordIndex}-${fretOffset}`}
                initial={{ scale: 0.8, opacity: 0, x: direction * 50 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="z-10 rounded-2xl"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 50) paginate(-1);
                  else if (info.offset.x < -50) paginate(1);
                }}
              >
                <ChordDiagram
                  frets={shiftedCurrentFrets}
                  name={currentChord.name}
                  roman={currentChord.roman}
                />
              </motion.div>

              {/* Next Chord */}
              <div 
                className="hidden sm:block transition-all duration-500 cursor-pointer opacity-0 sm:opacity-30 scale-75 grayscale hover:opacity-50"
                onClick={() => paginate(1)}
              >
                <ChordDiagram
                  frets={getShiftedFrets(selectedPattern.chords[nextIndex].frets)}
                  name={selectedPattern.chords[nextIndex].name}
                  roman={selectedPattern.chords[nextIndex].roman}
                />
              </div>
            </div>
          </div>

          {/* Full Neck View - Now Swipable */}
          <motion.div 
            className="w-full cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.x > 50) paginate(-1);
              else if (info.offset.x < -50) paginate(1);
            }}
          >
            <FullNeckView 
              pattern={selectedPattern}
              currentChord={currentChord}
              fretOffset={fretOffset}
              className="w-full"
            />
          </motion.div>

          {/* Mobile Swipe Hint */}
          <div className="text-center text-stone-400 text-[10px] font-bold uppercase tracking-widest animate-pulse">
            Swipe neck or diagram to navigate
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-auto p-8 text-center text-stone-400 text-sm">
        <p>© 2026 Mandolin Pattern Pro • Built for Musicians</p>
      </footer>
    </div>
  );
}

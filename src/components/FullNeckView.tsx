import React from 'react';
import { Pattern, Chord } from '../types';

interface FullNeckViewProps {
  pattern: Pattern;
  currentChord: Chord;
  fretOffset: number;
  className?: string;
}

export const FullNeckView: React.FC<FullNeckViewProps> = ({ 
  pattern, 
  currentChord, 
  fretOffset,
  className = "" 
}) => {
  const strings = ['E', 'A', 'D', 'G'];
  const numFrets = 13; // 0 to 12
  const fretWidth = 45;
  const stringSpacing = 25;
  const margin = { top: 30, right: 20, bottom: 30, left: 40 };
  const width = margin.left + (numFrets * fretWidth) + margin.right;
  const height = margin.top + (3 * stringSpacing) + margin.bottom;

  const getShiftedFrets = (frets: (number | 'x')[]) => {
    return frets.map(f => (typeof f === 'number' ? f + fretOffset : f));
  };

  const currentFrets = getShiftedFrets(currentChord.frets);

  return (
    <div className={`bg-white p-6 rounded-2xl border border-stone-200 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest">Full Neck Context</h4>
        <div className="flex gap-4 text-[10px] font-medium text-stone-500">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-stone-800" />
            <span>Current Chord</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-stone-200" />
            <span>Scale Pattern</span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <svg 
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto overflow-visible"
        >
          {/* Fretboard Background */}
          <rect 
            x={margin.left} 
            y={margin.top} 
            width={numFrets * fretWidth} 
            height={stringSpacing * 3} 
            fill="#fdfcfb" 
            stroke="#e5e7eb" 
            strokeWidth="1"
          />

          {/* Frets */}
          {Array.from({ length: numFrets + 1 }).map((_, i) => (
            <g key={`fret-${i}`}>
              <line
                x1={margin.left + i * fretWidth}
                y1={margin.top}
                x2={margin.left + i * fretWidth}
                y2={margin.top + stringSpacing * 3}
                stroke={i === 0 ? "#444" : "#d1d5db"}
                strokeWidth={i === 0 ? "4" : "1"}
              />
              <text
                x={margin.left + i * fretWidth}
                y={margin.top + stringSpacing * 3 + 15}
                textAnchor="middle"
                className="text-[9px] font-bold fill-stone-400"
              >
                {i}
              </text>
            </g>
          ))}

          {/* Fret Markers (Dots) */}
          {[3, 5, 7, 10, 12].map(f => (
            <circle
              key={`marker-${f}`}
              cx={margin.left + (f - 0.5) * fretWidth}
              cy={margin.top + stringSpacing * 1.5}
              r="3"
              className="fill-stone-100"
            />
          ))}

          {/* Strings */}
          {strings.map((s, i) => (
            <g key={`string-${i}`}>
              <line
                x1={margin.left}
                y1={margin.top + i * stringSpacing}
                x2={margin.left + numFrets * fretWidth}
                y2={margin.top + i * stringSpacing}
                stroke="#9ca3af"
                strokeWidth={1 + i * 0.5}
              />
              <text
                x={margin.left - 15}
                y={margin.top + i * stringSpacing + 4}
                textAnchor="middle"
                className="text-[10px] font-bold fill-stone-500"
              >
                {s}
              </text>
            </g>
          ))}

          {/* Pattern Ghost Notes (Other chords in key) */}
          {pattern.chords.map((chord, cIdx) => {
            if (cIdx === pattern.chords.indexOf(currentChord)) return null;
            const shifted = getShiftedFrets(chord.frets);
            return shifted.map((f, sIdx) => {
              if (typeof f !== 'number' || f < 0 || f >= numFrets) return null;
              return (
                <circle
                  key={`ghost-${cIdx}-${sIdx}`}
                  cx={margin.left + (f === 0 ? -10 : (f - 0.5) * fretWidth)}
                  cy={margin.top + (3 - sIdx) * stringSpacing}
                  r="4"
                  className="fill-stone-200 opacity-40"
                />
              );
            });
          })}

          {/* Current Chord Notes */}
          {currentFrets.map((f, sIdx) => {
            if (typeof f !== 'number' || f < 0 || f >= numFrets) return null;
            return (
              <g key={`current-${sIdx}`}>
                <circle
                  cx={margin.left + (f === 0 ? -10 : (f - 0.5) * fretWidth)}
                  cy={margin.top + (3 - sIdx) * stringSpacing}
                  r="8"
                  className="fill-stone-800 shadow-sm"
                />
                {f === 0 && (
                  <circle
                    cx={margin.left - 10}
                    cy={margin.top + (3 - sIdx) * stringSpacing}
                    r="5"
                    fill="none"
                    stroke="#444"
                    strokeWidth="1.5"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

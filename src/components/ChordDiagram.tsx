import React from 'react';

interface ChordDiagramProps {
  frets: (number | 'x')[];
  name: string;
  roman: string;
  className?: string;
}

export const ChordDiagram: React.FC<ChordDiagramProps> = ({ frets, name, roman, className = "" }) => {
  const strings = ['G', 'D', 'A', 'E'];
  const numFrets = 6;
  
  // Find the minimum fret to start the diagram (for movable chords)
  const activeFrets = frets.filter((f): f is number => typeof f === 'number' && f > 0);
  const minFret = activeFrets.length > 0 ? Math.min(...activeFrets) : 1;
  const startFret = minFret > 1 ? minFret : 1;

  const fretWidth = 55;
  const stringSpacing = 40;
  const height = 380;
  const width = 200;
  const margin = { top: 40, right: 20, bottom: 20, left: 40 };

  return (
    <div className={`flex flex-col items-center bg-stone-50 p-8 rounded-2xl shadow-xl border border-stone-200 transition-all duration-500 landscape:max-lg:rotate-[-90deg] landscape:max-lg:scale-75 landscape:max-lg:my-[-100px] ${className}`}>
      <div className="mb-4 text-center">
        <h3 className="text-3xl font-bold text-stone-800">{roman}</h3>
        <p className="text-stone-500 font-medium uppercase tracking-widest text-sm">{name}</p>
      </div>

      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        {/* Fretboard background */}
        <rect 
          x={margin.left} 
          y={margin.top} 
          width={stringSpacing * 3} 
          height={fretWidth * numFrets} 
          fill="#fdfcfb" 
          stroke="#444" 
          strokeWidth="2"
        />

        {/* Frets */}
        {Array.from({ length: numFrets + 1 }).map((_, i) => (
          <line
            key={`fret-${i}`}
            x1={margin.left}
            y1={margin.top + i * fretWidth}
            x2={margin.left + stringSpacing * 3}
            y2={margin.top + i * fretWidth}
            stroke={i === 0 && startFret === 1 ? "#000" : "#888"}
            strokeWidth={i === 0 && startFret === 1 ? "4" : "1"}
          />
        ))}

        {/* Strings */}
        {strings.map((s, i) => (
          <g key={`string-${i}`}>
            <line
              x1={margin.left + i * stringSpacing}
              y1={margin.top}
              x2={margin.left + i * stringSpacing}
              y2={margin.top + numFrets * fretWidth}
              stroke="#444"
              strokeWidth="1.5"
            />
            <text
              x={margin.left + i * stringSpacing}
              y={margin.top - 10}
              textAnchor="middle"
              className="text-[10px] font-bold fill-stone-400"
            >
              {s}
            </text>
          </g>
        ))}

        {/* Fret Number */}
        {startFret > 1 && (
          <text
            x={margin.left - 25}
            y={margin.top + fretWidth / 2 + 5}
            className="text-sm font-bold fill-stone-600"
          >
            {startFret}fr
          </text>
        )}

        {/* Fingers/Dots */}
        {frets.map((fret, stringIdx) => {
          if (fret === 'x') {
            return (
              <text
                key={`mute-${stringIdx}`}
                x={margin.left + stringIdx * stringSpacing}
                y={margin.top - 20}
                textAnchor="middle"
                className="text-lg font-bold fill-red-400"
              >
                ×
              </text>
            );
          }
          
          if (fret === 0) {
             return (
              <circle
                key={`open-${stringIdx}`}
                cx={margin.left + stringIdx * stringSpacing}
                cy={margin.top - 20}
                r="6"
                fill="none"
                stroke="#444"
                strokeWidth="2"
              />
            );
          }

          const relativeFret = fret - startFret + 1;
          if (relativeFret > 0 && relativeFret <= numFrets) {
            return (
              <circle
                key={`dot-${stringIdx}`}
                cx={margin.left + stringIdx * stringSpacing}
                cy={margin.top + (relativeFret - 0.5) * fretWidth}
                r="12"
                className="fill-stone-800"
              />
            );
          }
          return null;
        })}
      </svg>
    </div>
  );
};

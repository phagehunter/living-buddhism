import { useMemo, useState } from 'react';
import * as d3 from 'd3';
import { FOCALIZATION } from '../data/focalization';
import { BOOK_TITLES, SECTION_COUNT } from '../data/bookTitles';
import { useFilters } from '../context/FilterContext';
import { useElementSize } from '../hooks/useElementSize';

const KEYS = ['sen', 'gaew', 'goy', 'karen', 'other'] as const;
type StreamKey = (typeof KEYS)[number];

const STREAM_COLORS: Record<StreamKey, string> = {
  sen: '#fb923c',
  gaew: '#fbbf24',
  goy: '#2dd4bf',
  karen: '#fb7185',
  other: '#64748b',
};

const STREAM_LABELS: Record<StreamKey, string> = {
  sen: 'Sen',
  gaew: 'Gaew',
  goy: 'Goy',
  karen: 'Ban Ko Tao (Karen)',
  other: 'Mae Daeng, friends & the study',
};

/** Where each section's scenes mostly unfold (for the setting strip). */
const SETTING: Record<number, string> = {
  1: 'The hospital',
  2: 'Mae Jaeng',
  3: 'Mae Jaeng',
  4: '↔ Ban Ko Tao',
  5: 'Mae Jaeng',
  6: '↔ Ban Ko Tao',
  7: '↔ Chiang Mai',
  8: 'Mae Jaeng',
};

const MARGIN = { top: 34, right: 18, bottom: 92, left: 46 };

export default function StreamGraph() {
  const { bookRange } = useFilters();
  const { ref, width } = useElementSize<HTMLDivElement>();
  const [hoverBook, setHoverBook] = useState<number | null>(null);

  const height = 520;
  const innerW = Math.max(width - MARGIN.left - MARGIN.right, 50);
  const innerH = height - MARGIN.top - MARGIN.bottom;

  const x = useMemo(
    () => d3.scaleLinear().domain([1, SECTION_COUNT]).range([0, innerW]),
    [innerW],
  );
  const y = useMemo(() => d3.scaleLinear().domain([0, 100]).range([innerH, 0]), [innerH]);

  const series = useMemo(() => {
    const stack = d3
      .stack<(typeof FOCALIZATION)[number]>()
      .keys(KEYS as unknown as string[])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);
    return stack(FOCALIZATION);
  }, []);

  const area = useMemo(
    () =>
      d3
        .area<d3.SeriesPoint<(typeof FOCALIZATION)[number]>>()
        .x((d) => x(d.data.book))
        .y0((d) => y(d[0]))
        .y1((d) => y(d[1]))
        .curve(d3.curveCatmullRom.alpha(0.6)),
    [x, y],
  );

  const hoverRow = hoverBook ? FOCALIZATION[hoverBook - 1] : null;
  const [from, to] = bookRange;

  return (
    <div ref={ref} className="relative w-full h-full overflow-y-auto p-4">
      <div className="mb-2">
        <h2 className="font-display text-lg text-sepia-200">
          Narrative Gravity — whose story each section follows
        </h2>
        <p className="hidden sm:block text-xs text-slate-400 max-w-3xl">
          Share of each section following the three protagonists, the Karen Christian village, and
          everyone else (editorial estimates). The hatched band marks the <b>Prologue</b>: its
          hospital scenes belong chronologically to Chapter 5 — the ending, told first.
        </p>
      </div>

      {width > 0 && (
        <svg
          width={width - 32}
          height={height}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const px = e.clientX - rect.left - MARGIN.left;
            const book = Math.round(x.invert(Math.max(0, Math.min(px, innerW))));
            setHoverBook(Math.max(1, Math.min(SECTION_COUNT, book)));
          }}
          onMouseLeave={() => setHoverBook(null)}
        >
          <defs>
            <pattern id="prologue-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="7" stroke="#d9c19a" strokeWidth="0.7" opacity="0.5" />
            </pattern>
          </defs>

          <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
            {/* y grid + axis */}
            {[0, 25, 50, 75, 100].map((v) => (
              <g key={v}>
                <line x1={0} x2={innerW} y1={y(v)} y2={y(v)} stroke="#1e293b" strokeWidth={1} />
                <text x={-8} y={y(v)} textAnchor="end" dominantBaseline="middle" className="fill-slate-500 text-[10px]">
                  {v}%
                </text>
              </g>
            ))}

            {/* streams */}
            {series.map((s, idx) => (
              <path
                key={KEYS[idx]}
                d={area(s) ?? undefined}
                fill={STREAM_COLORS[KEYS[idx]]}
                fillOpacity={0.72}
                stroke="#020617"
                strokeWidth={0.75}
              />
            ))}

            {/* Prologue flash-forward overlay (section 1) */}
            <rect x={x(1)} y={0} width={x(1.5) - x(1)} height={innerH} fill="url(#prologue-hatch)" pointerEvents="none" />
            <rect x={x(1)} y={0} width={x(1.5) - x(1)} height={innerH} fill="none" stroke="#d9c19a" strokeDasharray="5 4" strokeWidth={1} pointerEvents="none" />
            <text x={x(1.25)} y={-10} textAnchor="start" className="fill-sepia-300 text-[11px] italic">
              Prologue — the ending, told first
            </text>

            {/* section-range dimmers */}
            {from > 1 && <rect x={0} y={0} width={x(from) - x(1)} height={innerH} fill="#020617" opacity={0.62} pointerEvents="none" />}
            {to < SECTION_COUNT && (
              <rect x={x(to)} y={0} width={x(SECTION_COUNT) - x(to)} height={innerH} fill="#020617" opacity={0.62} pointerEvents="none" />
            )}

            {/* hover guide */}
            {hoverBook && (
              <line x1={x(hoverBook)} x2={x(hoverBook)} y1={0} y2={innerH} stroke="#e2e8f0" strokeWidth={1} strokeDasharray="3 3" opacity={0.7} pointerEvents="none" />
            )}

            {/* x axis: section numbers */}
            {FOCALIZATION.map((r) => (
              <text
                key={r.book}
                x={x(r.book)}
                y={innerH + 14}
                textAnchor="middle"
                className={r.nested ? 'fill-sepia-300 text-[10px]' : 'fill-slate-500 text-[10px]'}
              >
                {r.book}
              </text>
            ))}
            <text x={innerW / 2} y={innerH + 30} textAnchor="middle" className="fill-slate-400 text-[11px]">
              Section (Prologue · Introduction · Chapters 1–5 · Conclusion)
            </text>

            {/* setting strip */}
            <g transform={`translate(0, ${innerH + 42})`}>
              <text x={-8} y={9} textAnchor="end" className="fill-slate-400 text-[9px]">
                SETTING
              </text>
              {FOCALIZATION.map((r) => (
                <rect
                  key={r.book}
                  x={x(Math.max(r.book - 0.5, 1))}
                  y={0}
                  width={x(Math.min(r.book + 0.5, SECTION_COUNT)) - x(Math.max(r.book - 0.5, 1))}
                  height={13}
                  fill={SETTING[r.book].startsWith('↔') ? '#4c1d24' : r.book === 1 ? '#78350f' : '#1e293b'}
                  stroke="#020617"
                />
              ))}
              {FOCALIZATION.map((r) => (
                <text
                  key={r.book}
                  x={r.book === 1 ? 2 : x(r.book)}
                  y={9.5}
                  textAnchor={r.book === 1 ? 'start' : 'middle'}
                  className="fill-slate-300 text-[8px]"
                >
                  {SETTING[r.book]}
                </text>
              ))}
            </g>
          </g>
        </svg>
      )}

      {/* legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-1 mt-1 text-xs">
        {KEYS.map((k) => (
          <span key={k} className="flex items-center gap-1.5 text-slate-300">
            <span className="w-3 h-3 rounded-sm" style={{ background: STREAM_COLORS[k] }} />
            {STREAM_LABELS[k]}
          </span>
        ))}
      </div>

      {/* hover tooltip */}
      {hoverRow && (
        <div className="absolute top-24 right-8 z-30 w-72 bg-slate-900/95 border border-slate-600 rounded-lg p-3 shadow-2xl pointer-events-none">
          <div className="font-display text-sepia-200 text-sm mb-1">
            {hoverRow.book}. {BOOK_TITLES[hoverRow.book]}
          </div>
          {hoverRow.nested && (
            <div className="text-[11px] mb-2 space-y-0.5 border-b border-slate-700 pb-1.5">
              <div className="text-orange-300">Frame: {hoverRow.nested.frame}</div>
              <div className="text-amber-300">{hoverRow.nested.diegetic}</div>
              <div className="text-slate-500 italic">Flash-forward — these scenes recur in Chapter 5</div>
            </div>
          )}
          <ul className="text-xs space-y-0.5">
            {KEYS.map((k) => (
              <li key={k} className="flex justify-between">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-2 h-2 rounded-sm" style={{ background: STREAM_COLORS[k] }} />
                  {STREAM_LABELS[k]}
                </span>
                <span className="tabular-nums text-slate-400">{hoverRow[k]}%</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

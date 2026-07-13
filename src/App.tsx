import { useState } from 'react';
import { FilterProvider } from './context/FilterContext';
import BookSlider from './components/BookSlider';
import GroupFilters from './components/GroupFilters';
import NetworkGraph from './components/NetworkGraph';
import MapView from './components/MapView';
import StreamGraph from './components/StreamGraph';
import SidePanel from './components/SidePanel';

type View = 'network' | 'map' | 'stream';

const TABS: { id: View; label: string; sub: string }[] = [
  { id: 'network', label: 'Network Dynamics', sub: 'force-directed interaction graph' },
  { id: 'map', label: 'Spatial Topography', sub: 'the valley, the villages & the city' },
  { id: 'stream', label: 'Narrative Gravity', sub: 'whose story each section follows' },
];

/** Brand mark: the eight-spoked wheel — one spoke per section. */
function BrandMark() {
  const spokes = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    return { x2: 32 + 15 * Math.cos(a), y2: 32 + 15 * Math.sin(a) };
  });
  return (
    <svg viewBox="0 0 64 64" className="w-10 h-10 shrink-0" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="19" fill="none" stroke="#d9c19a" strokeWidth="2.5" />
      {spokes.map((sp, i) => (
        <line key={i} x1="32" y1="32" x2={sp.x2} y2={sp.y2} stroke="#fb923c" strokeWidth="2" strokeLinecap="round" />
      ))}
      <circle cx="32" cy="32" r="4" fill="#d9c19a" />
    </svg>
  );
}

export default function App() {
  const [view, setView] = useState<View>('network');

  return (
    <FilterProvider>
      <div className="h-full flex flex-col bg-slate-950">
        {/* ——— Branded header ——— */}
        <header className="border-b border-slate-800 px-4 sm:px-5 py-2 sm:py-3 flex flex-wrap items-center gap-x-8 gap-y-1.5">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <BrandMark />
            <div>
              <h1 className="font-display font-bold text-[15px] sm:text-[20px] leading-none text-sepia-200 uppercase tracking-[0.1em] sm:tracking-[0.16em]">
                Living Buddhism — Character Map
              </h1>
              <p className="text-[12px] text-slate-400 mt-1 tracking-wide">
                A visual companion to Julia Cassaniti&apos;s ethnography of a Thai community
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Project by{' '}
                <a
                  href="https://curtishoffmann.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-orange-300 underline decoration-dotted underline-offset-2"
                >
                  Curtis Hoffmann
                </a>
                {' · '}
                <a
                  href="https://forms.gle/ydBNztwZkeNYaWbc7"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-orange-300 underline decoration-dotted underline-offset-2"
                >
                  Share Your Feedback ↗
                </a>
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-1 ml-auto">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setView(t.id)}
                title={t.sub}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md text-[13px] sm:text-[15px] transition-colors border ${
                  view === t.id
                    ? 'bg-orange-900/40 border-orange-600/60 text-orange-200'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </header>

        {/* ——— Global controls: book window + group toggles ——— */}
        <div className="border-b border-slate-800 px-4 sm:px-5 py-2 sm:py-2.5 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-1.5 bg-slate-900/40">
          <BookSlider />
          <GroupFilters />
        </div>

        {/* ——— Main: view + reading panel (side-by-side on desktop, stacked on mobile) ——— */}
        <main className="flex-1 flex flex-col md:flex-row min-h-0">
          <section className="flex-1 min-w-0 min-h-0">
            {view === 'network' && <NetworkGraph />}
            {view === 'map' && <MapView />}
            {view === 'stream' && <StreamGraph />}
          </section>
          <SidePanel />
        </main>
      </div>
    </FilterProvider>
  );
}

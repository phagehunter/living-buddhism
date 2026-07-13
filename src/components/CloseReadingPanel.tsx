import { CHARACTER_BY_ID } from '../data/characters';
import { DOMAIN_COLORS, DOMAIN_LABELS, TERM_BY_ID, TERM_LINKS } from '../data/terms';
import { parseLbCitation } from '../data/bookLines';
import { LOCATION_BY_ID } from '../data/locations';
import { INTERACTIONS } from '../data/interactions';
import { ALIGNMENT_COLORS, useFilters } from '../context/FilterContext';
import { ITINERARY_COLORS, ITINERARY_LABELS } from './MapView';
import type { Interaction, InteractionType } from '../types';

/** Thematic tags inferred from interaction type — the book's own vocabulary. */
const TYPE_THEMES: Record<InteractionType, string[]> = {
  conversation: ['Dialogue'],
  teaching: ['Tham jai (Making the heart)'],
  care: ['Kreng jai (Deference & care)'],
  ritual: ['Tham bun (Merit-making)'],
  conflict: ['Jai ron (The hot heart)'],
  crisis: ['Agency & intervention'],
  loss: ['Anicca (Impermanence)'],
  hospitality: ['Nam jai (The generous heart)'],
  bond: ['Attachment (Upadana)'],
};

function ThemeChips({ themes }: { themes: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {themes.map((t) => (
        <span
          key={t}
          className="text-[11px] px-1.5 py-0.5 rounded-full bg-sepia-700/30 text-sepia-300 border border-sepia-600/40"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/** Citation that jumps the Guide tab to the cited section — landing
 *  proportionally near the cited page's place within the section guide. */
function CitationLink({ citation, book }: { citation?: string; book: number }) {
  const { openText } = useFilters();
  const parsed = citation ? parseLbCitation(citation) : null;
  return (
    <button
      onClick={() => openText(parsed?.book ?? book, parsed?.line)}
      className="text-[11px] font-mono text-orange-400/90 hover:text-orange-300 hover:underline whitespace-nowrap"
      title={
        parsed
          ? `Open the section guide near the cited pages`
          : `Open section ${book} in the Guide tab`
      }
    >
      {citation ?? `Section ${book}`} ↗
    </button>
  );
}

function InteractionCard({ i }: { i: Interaction }) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-semibold text-orange-300">§{i.book}</span>
        <span className="text-[11px] uppercase tracking-wider text-slate-400">
          {i.type.replace('_', ' ')} · weight {i.weight}
        </span>
      </div>
      {i.nested_narrative && (
        <div className="text-[11px] text-amber-300 border border-amber-700/50 rounded px-1.5 py-0.5 inline-block">
          Prologue — the ending, told first
        </div>
      )}
      <p className="text-[15px] text-slate-100 leading-relaxed">{i.summary}</p>
      {i.insight && (
        <p className="text-[13.5px] italic font-reading text-sepia-200 leading-relaxed border-l-2 border-sepia-600/60 pl-2.5">
          {i.insight}
        </p>
      )}
      <div className="flex items-center justify-between gap-2 pt-0.5">
        <ThemeChips themes={TYPE_THEMES[i.type]} />
        <CitationLink citation={i.citation} book={i.book} />
      </div>
    </div>
  );
}

/**
 * Commentary tab content: close-reading notes for the current selection —
 * a network edge, a map path segment, a waypoint, or a character.
 */
export default function CloseReadingPanel() {
  const { selection, setSelection } = useFilters();

  return (
    <div className="h-full overflow-y-auto p-4 space-y-3">
      {selection && (
        <div className="flex justify-end -mb-1">
          <button
            onClick={() => setSelection(null)}
            className="text-xs text-slate-500 hover:text-slate-300"
          >
            clear selection ✕
          </button>
        </div>
      )}

      {!selection && (
        <div className="text-[15px] text-slate-300 leading-relaxed space-y-3">
          <p>
            Select an <b className="text-slate-100">edge</b> in the network graph, a{' '}
            <b className="text-slate-100">path segment</b> or{' '}
            <b className="text-slate-100">waypoint</b> on the map, or a{' '}
            <b className="text-slate-100">node</b> to see textual summaries, thematic analysis,
            and line citations here.
          </p>
          <p>
            Every citation links into the <b className="text-slate-100">Guide</b> tab — original
            section-by-section synopses written for this project (the book itself is in copyright
            and worth owning).
          </p>
          <p className="text-[13px] text-slate-500 italic font-reading">
            Distant reading finds the pattern; close reading gives it a voice — the two halves of
            this project are meant to be read against each other.
          </p>
        </div>
      )}

      {selection?.kind === 'edge' && (
        <>
          <div className="font-display text-xl text-slate-50">
            {CHARACTER_BY_ID[selection.a]?.name} ↔ {CHARACTER_BY_ID[selection.b]?.name}
          </div>
          <div className="text-xs text-slate-500 -mt-2">
            {selection.interactions.length} interaction
            {selection.interactions.length === 1 ? '' : 's'} in the selected window · combined
            weight {selection.interactions.reduce((s, i) => s + i.weight, 0)}
          </div>
          {selection.interactions
            .slice()
            .sort((a, b) => a.book - b.book)
            .map((i, idx) => (
              <InteractionCard key={idx} i={i} />
            ))}
        </>
      )}

      {selection?.kind === 'segment' && (() => {
        const seg = selection.segment;
        const o = LOCATION_BY_ID[seg.origin];
        const d = LOCATION_BY_ID[seg.destination];
        return (
          <>
            <div className="font-display text-xl text-slate-50">
              {o?.name} → {d?.name}
            </div>
            <div className="flex items-center gap-2 text-xs -mt-1">
              <span
                className="px-1.5 py-0.5 rounded-full border"
                style={{ color: ITINERARY_COLORS[seg.character], borderColor: ITINERARY_COLORS[seg.character] }}
              >
                {ITINERARY_LABELS[seg.character]} · leg {seg.segment}
              </span>
              <span className="text-orange-300 font-semibold">§{seg.book}</span>
            </div>
            <div className="text-[12px] text-slate-400">
              {seg.inferred
                ? 'Routine or implied travel — the text mentions rather than narrates it.'
                : 'A journey the text narrates directly.'}
              {seg.nested && ' Told in the Prologue, out of chronological order.'}
            </div>
            <p className="text-[15px] text-slate-100 leading-relaxed">{seg.summary}</p>
            <div className="flex items-center justify-between gap-2">
              <ThemeChips themes={seg.themes} />
              <CitationLink citation={seg.citation} book={seg.book} />
            </div>
          </>
        );
      })()}

      {selection?.kind === 'location' && (() => {
        const loc = selection.location;
        return (
          <>
            <div className="font-display text-xl text-slate-50">{loc.name}</div>
            <div className="text-xs text-slate-500 -mt-2">
              {loc.status} · Sections {loc.books.join(', ')}
            </div>
            {loc.note && (
              <p className="text-[13.5px] italic font-reading text-sepia-200">{loc.note}</p>
            )}
            <div className="space-y-2">
              {loc.events.map((e, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-700 bg-slate-900/70 p-2.5 text-[15px] leading-relaxed"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span>
                      <span className="text-orange-300 font-semibold text-sm">§{e.book}. </span>
                      <span className="text-slate-100">{e.description}</span>
                    </span>
                  </div>
                  <div className="text-right mt-1">
                    <CitationLink book={e.book} />
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      })()}

      {selection?.kind === 'term' && (() => {
        const t = TERM_BY_ID[selection.id];
        if (!t) return null;
        const related = TERM_LINKS.filter((l) => l.source === t.id || l.target === t.id);
        return (
          <>
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-display text-xl italic text-slate-50">{t.term}</span>
              <span
                className="text-[11px] px-1.5 py-0.5 rounded-full border whitespace-nowrap"
                style={{ color: DOMAIN_COLORS[t.domain], borderColor: DOMAIN_COLORS[t.domain] }}
              >
                {t.lang} · {DOMAIN_LABELS[t.domain]}
              </span>
            </div>
            <p className="text-[15px] text-slate-100 leading-relaxed">{t.gloss}</p>
            {t.note && (
              <p className="text-[13.5px] italic font-reading text-sepia-200 leading-relaxed border-l-2 border-sepia-600/60 pl-2.5">
                {t.note}
              </p>
            )}
            <div className="text-[11px] uppercase tracking-widest text-slate-500 pt-1">
              Related terms ({related.length})
            </div>
            <div className="space-y-2">
              {related.map((l, idx) => {
                const other = TERM_BY_ID[l.source === t.id ? l.target : l.source];
                return (
                  <button
                    key={idx}
                    onClick={() => setSelection({ kind: 'term', id: other.id })}
                    className="w-full text-left rounded-lg border border-slate-700 bg-slate-900/70 p-2.5 hover:border-orange-600/60 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-[15px] italic text-slate-100">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: DOMAIN_COLORS[other.domain] }} />
                        {other.term}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 whitespace-nowrap">
                        {l.relation}
                      </span>
                    </div>
                    {l.note && <p className="text-[13px] text-slate-400 mt-1">{l.note}</p>}
                  </button>
                );
              })}
            </div>
          </>
        );
      })()}

      {selection?.kind === 'character' && (() => {
        const c = CHARACTER_BY_ID[selection.id];
        if (!c) return null;
        const involved = INTERACTIONS.filter(
          (i) => i.source === c.id || i.target === c.id,
        ).sort((a, b) => a.book - b.book);
        return (
          <>
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-display text-xl text-slate-50">{c.name}</span>
              <span
                className="text-[11px] px-1.5 py-0.5 rounded-full border whitespace-nowrap"
                style={{ color: ALIGNMENT_COLORS[c.alignment], borderColor: ALIGNMENT_COLORS[c.alignment] }}
              >
                {c.type} · {c.alignment.replace(/([a-z])([A-Z])/g, '$1 $2')}
              </span>
            </div>
            {c.epithets.length > 0 && (
              <div className="italic text-[13.5px] font-reading text-sepia-300 -mt-1">
                {c.epithets.join(' · ')}
              </div>
            )}
            {c.group_size > 1 && (
              <div className="text-[13px] text-slate-400">
                Aggregate node representing <b className="text-slate-200">{c.group_size}</b>{' '}
                individuals.
              </div>
            )}
            {c.note && <p className="text-[13px] text-slate-400">{c.note}</p>}
            <div className="text-[11px] uppercase tracking-widest text-slate-500 pt-1">
              All recorded interactions ({involved.length})
            </div>
            {involved.map((i, idx) => (
              <InteractionCard key={idx} i={i} />
            ))}
          </>
        );
      })()}
    </div>
  );
}

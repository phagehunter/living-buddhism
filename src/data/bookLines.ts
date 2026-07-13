/**
 * Book-page ranges per section of Living Buddhism (Cornell UP, 2015).
 * Citations in the commentary use the print pagination ("LB pp. 118–120");
 * the reader maps a cited page proportionally into that section's guide,
 * mirroring the way the Odyssey map lands Greek line numbers in prose.
 */
export const SECTION_PAGES: Record<number, [number, number]> = {
  1: [1, 5], // Prologue
  2: [6, 34], // Introduction — A World of Change
  3: [35, 59], // Ch. 1 — Cool Hearts
  4: [60, 86], // Ch. 2 — Heat
  5: [87, 117], // Ch. 3 — Letting Go
  6: [118, 148], // Ch. 4 — Holding On
  7: [149, 174], // Ch. 5 — Cause and Effect
  8: [175, 186], // Conclusion — Acting Apart
};

/** Kept for reader-scroll parity: line "counts" are page spans per section. */
export const BOOK_LINES: Record<number, number> = Object.fromEntries(
  Object.entries(SECTION_PAGES).map(([k, [a, b]]) => [Number(k), b - a + 1]),
) as Record<number, number>;

/**
 * Parse an "LB p. 63" / "LB pp. 118–120" citation into a section and a
 * relative position (the first cited page, offset within the section).
 */
export function parseLbCitation(citation: string): { book: number; line: number } | null {
  const m = citation.match(/pp?\.\s*(\d+)/);
  if (!m) return null;
  const page = Number(m[1]);
  for (const [book, [start, end]] of Object.entries(SECTION_PAGES)) {
    if (page >= start && page <= end) {
      return { book: Number(book), line: page - start + 1 };
    }
  }
  return null;
}

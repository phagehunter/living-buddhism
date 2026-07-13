import type { ItinerarySegment } from '../types';

/**
 * Journeys. `inferred: false` = trips the text narrates directly (solid);
 * `inferred: true` = routine or implied travel (dashed). `nested` marks the
 * Prologue's ambulance run, told before its place in the chronology.
 */
export const ITINERARIES: ItinerarySegment[] = [
  // ——— Julia: the ethnographer's widening circle ———
  { character: 'julia', segment: 1, origin: 'chiang_mai', destination: 'mae_jaeng', book: 2, inferred: false, nested: false,
    summary: 'The first ride west: two hours over the mountains on the back of a motorbike in the rainy season, the city’s scepticism receding behind.',
    themes: ['Arrival', 'From "high Buddhism" to lived Buddhism'], citation: 'LB pp. 3–5' },
  { character: 'julia', segment: 2, origin: 'mae_jaeng', destination: 'chang_kao', book: 3, inferred: false, nested: false,
    summary: 'Interview rounds in Ari’s battered Toyota, thirty kilometres of dirt road into the jungle.',
    themes: ['The eighteen questions', 'Cool hearts everywhere'], citation: 'LB pp. 50–54' },
  { character: 'julia', segment: 3, origin: 'mae_jaeng', destination: 'ban_ko_tao', book: 4, inferred: false, nested: false,
    summary: 'Ten kilometres uphill to the Karen Christian village — the comparison case that makes Mae Jaeng’s calm visible.',
    themes: ['Comparison', 'Christian heat, Buddhist cool'], citation: 'LB pp. 67–73' },
  { character: 'julia', segment: 4, origin: 'ban_ko_tao', destination: 'mae_ma_law', book: 4, inferred: false, nested: false,
    summary: 'Past Mae Wak to the farthest village: no power lines, and interview answers that keep refusing tham jai.',
    themes: ['The edge of the study'], citation: 'LB pp. 74–76' },
  { character: 'julia', segment: 5, origin: 'mae_jaeng', destination: 'cmu', book: 4, inferred: true, nested: false,
    summary: 'Back and forth to the university: the fieldwork keeps returning to the academy with words the academy lacks.',
    themes: ['No word for emotion'], citation: 'LB pp. 78–81' },

  // ——— Sen: one journey out, one journey home ———
  { character: 'sen', segment: 1, origin: 'mae_jaeng', destination: 'cm_hospitals', book: 7, inferred: false, nested: false,
    summary: 'The ambulance east: five policemen, a pocketed knife, and the two-hour mountain road to Nakhon Ping.',
    themes: ['Crisis', 'Whose agency?'], citation: 'LB pp. 165–167' },
  { character: 'sen', segment: 2, origin: 'cm_hospitals', destination: 'mae_jaeng', book: 7, inferred: false, nested: false,
    summary: 'Home to die — by the town’s reckoning. The nurse’s instruction: tham jai. The road runs the same mountains in reverse.',
    themes: ['Letting go', 'The whole town at the bedside'], citation: 'LB pp. 169–170' },

  // ——— The family's devotional travel ———
  { character: 'family', segment: 1, origin: 'mae_jaeng', destination: 'chiang_mai', book: 6, inferred: true, nested: false,
    summary: 'Mae San and Paw Nui travel for retreats and yo reh gatherings — merit sought at a distance while their son sits behind his door.',
    themes: ['Merit as medicine'], citation: 'LB pp. 143, 162' },
];

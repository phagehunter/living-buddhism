/** Shared domain types for Living Buddhism: A Character Map. */

/**
 * Fine-grained alignment used for node colouring.
 * Alignments are mapped onto the four coarse UI filter groups
 * (see GROUP_OF_ALIGNMENT in src/context/FilterContext.tsx).
 */
export type Alignment =
  | 'GaewFamily' // the shop-house family: Gaew, Sen, Noi, their parents & kin
  | 'GoyHousehold' // Goy, Mae Daeng, and their extended matrilineal family
  | 'Friend' // the Mae Jaeng friends: Chai, Aung, Jiew, Ban, Bank, Lek, Chang…
  | 'Healer' // doctors and spirit doctors
  | 'Monastic' // monks of the town's wats, past and present
  | 'Karen' // the Karen Christian community of Ban Ko Tao
  | 'Fieldwork' // the ethnographer and her research circle
  | 'Visitor'; // outsiders passing through

export type CharacterType = 'Person' | 'Departed' | 'Historical';

export interface Character {
  id: string;
  name: string;
  type: CharacterType;
  alignment: Alignment;
  /** Short identifying descriptors shown on the character card. */
  epithets: string[];
  /** >1 marks an aggregate/collective node (e.g. a congregation). */
  group_size: number;
  note?: string;
}

export type InteractionType =
  | 'conversation'
  | 'teaching'
  | 'care'
  | 'ritual'
  | 'conflict'
  | 'crisis'
  | 'loss'
  | 'hospitality'
  | 'bond';

export interface Interaction {
  source: string;
  target: string;
  /** Section 1–8 (Prologue, Introduction, Chs. 1–5, Conclusion). */
  book: number;
  type: InteractionType;
  weight: number;
  /** true when the scene is told out of chronological order (the Prologue
   *  narrates the 2007 hospital crisis that Chapter 5 reaches in sequence). */
  nested_narrative: boolean;
  summary: string;
  insight?: string;
  citation?: string;
}

/**
 * Documented: real, publicly identifiable places (Chiang Mai, Bangkok…).
 * Approximate: pseudonymised field sites — the book gives distances and
 * directions, not names, so pins are placed to match its description only.
 */
export type LocationStatus = 'Documented' | 'Approximate';

export interface AtlasLocation {
  id: string;
  name: string;
  status: LocationStatus;
  coordinates: [number, number]; // [lat, lng]
  books: number[];
  note?: string;
  events: { book: number; description: string }[];
}

export type ItineraryCharacter = 'julia' | 'sen' | 'family';

export interface ItinerarySegment {
  character: ItineraryCharacter;
  segment: number;
  origin: string;
  destination: string;
  book: number;
  /** true = route the text implies but does not narrate leg-by-leg (dashed). */
  inferred: boolean;
  /** true when the journey is told out of chronological order. */
  nested: boolean;
  summary: string;
  themes: string[];
  citation?: string;
}

export interface FocalizationRow {
  book: number;
  sen: number;
  gaew: number;
  goy: number;
  karen: number;
  other: number;
  /** Present only for the Prologue: its scenes belong chronologically to Ch. 5. */
  nested?: { frame: string; diegetic: string };
}

/** Coarse UI filter groups (checkbox toggles). */
export type GroupKey = 'gaewFamily' | 'goyHousehold' | 'community' | 'beyond';

/** What is currently pinned in the Close Reading panel. */
export type Selection =
  | { kind: 'edge'; a: string; b: string; interactions: Interaction[] }
  | { kind: 'segment'; segment: ItinerarySegment }
  | { kind: 'location'; location: AtlasLocation }
  | { kind: 'character'; id: string }
  | { kind: 'term'; id: string };

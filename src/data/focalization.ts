import type { FocalizationRow } from '../types';

/**
 * Narrative-gravity table: editorial estimates of how much of each section
 * follows the three protagonists (Sen, Gaew, Goy), the Karen Christian
 * comparison community of Ban Ko Tao, and everyone else (Mae Daeng, friends,
 * healers, interviewees, theory). Values are percentages summing to 100.
 *
 * The Prologue carries the `nested` annotation: its hospital scenes belong
 * chronologically to Chapter 5 — the ending, told first.
 */
export const FOCALIZATION: FocalizationRow[] = [
  { book: 1, sen: 45, gaew: 16, goy: 2, karen: 0, other: 37,
    nested: { frame: '2007 — the hospital', diegetic: 'The ending, told first' } },
  { book: 2, sen: 6, gaew: 12, goy: 38, karen: 1, other: 43 },
  { book: 3, sen: 6, gaew: 16, goy: 32, karen: 2, other: 44 },
  { book: 4, sen: 4, gaew: 14, goy: 12, karen: 38, other: 32 },
  { book: 5, sen: 12, gaew: 26, goy: 16, karen: 2, other: 44 },
  { book: 6, sen: 40, gaew: 16, goy: 6, karen: 16, other: 22 },
  { book: 7, sen: 44, gaew: 22, goy: 8, karen: 2, other: 24 },
  { book: 8, sen: 34, gaew: 18, goy: 10, karen: 4, other: 34 },
];

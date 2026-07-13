/**
 * Guide-text name → character-node id.
 * Longest names must come first in the regex so "Mae Daeng" wins over "Mae".
 * Powers the interactive names in the section guides.
 */
export const NAME_TO_ID: Record<string, string> = {
  'Khruba Si Wichai': 'khruba_si_wichai',
  'Ajarn Somwang': 'somwang',
  'Phra Ao Wat': 'phra_ao_wat',
  'Mae Daeng': 'mae_daeng',
  'Mae San': 'mae_san',
  'Paw Nui': 'paw_nui',
  'Mae Mon': 'mae_mon',
  'Mae Lah': 'mae_lah',
  'Mae U': 'mae_u',
  'Moh Bom': 'moh_bom',
  'Nan Jon': 'nan_jon',
  'Paw Pu': 'paw_pu',
  'P’Dao': 'p_dao',
  "P'Dao": 'p_dao',
  'P’Duang': 'p_duang',
  "P'Duang": 'p_duang',
  Anurak: 'anurak',
  Duansri: 'duansri',
  Jerapong: 'jerapong',
  Surree: 'surree',
  Sada: 'sada',
  Julia: 'julia',
  Gaew: 'gaew',
  Goy: 'goy',
  Sen: 'sen',
  Noi: 'noi',
  Pan: 'pan',
  Ta: 'ta',
  Dee: 'dee',
  Niw: 'niw',
  Jip: 'jip',
  Chai: 'chai',
  Aung: 'aung',
  Jiew: 'jiew',
  Bank: 'bank',
  Ban: 'ban',
  Lek: 'lek',
  Chang: 'chang',
  Ari: 'ari',
  Laina: 'laina',
  Min: 'min_may',
  May: 'min_may',
};

/**
 * Alternation regex, longest names first, with word boundaries so short
 * names ("Ta", "Ban") never match inside longer words ("Ban Ko Tao" is
 * guarded explicitly by a non-capturing lookahead exclusion).
 */
export const NAME_REGEX = new RegExp(
  `\\b(${Object.keys(NAME_TO_ID)
    .sort((a, b) => b.length - a.length)
    .map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})\\b(?! Ko Tao| Kao)`,
);

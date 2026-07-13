import type { Character } from '../types';

/**
 * Character catalogue for Julia Cassaniti's Living Buddhism: Mind, Self, and
 * Emotion in a Thai Community (Cornell UP, 2015).
 *
 * All Mae Jaeng names are the book's own pseudonyms; ages are as given for
 * the start of extended fieldwork (2005–6). "Departed" marks people who die
 * before or during the narrative; "Historical" marks real public figures who
 * enter the story indirectly.
 */
export const CHARACTERS: Character[] = [
  // ——— The shop-house family (Gaew, Sen & their kin) ———
  { id: 'sen', name: 'Sen', type: 'Person', alignment: 'GaewFamily', group_size: 1,
    epithets: ['32, minds the family shop', 'the book’s extended case study'],
    note: 'Raised in Chiang Mai by his grandmother Mae Mon; later renamed Monkut ("crown") to turn the family’s luck.' },
  { id: 'gaew', name: 'Gaew', type: 'Person', alignment: 'GaewFamily', group_size: 1,
    epithets: ['30, runs the general goods store', 'Sen’s younger sister'],
    note: 'Later renamed Wattana ("prosperity"); closes the shop after Sen’s illness and opens a noodle stand.' },
  { id: 'noi', name: 'Noi', type: 'Person', alignment: 'GaewFamily', group_size: 1,
    epithets: ['11, the youngest brother', 'novice monk for ten days'] },
  { id: 'mae_san', name: 'Mae San', type: 'Person', alignment: 'GaewFamily', group_size: 1,
    epithets: ['51, mother of Gaew, Sen & Noi', 'devoted merit-maker'] },
  { id: 'paw_nui', name: 'Paw Nui', type: 'Person', alignment: 'GaewFamily', group_size: 1,
    epithets: ['55, father of Gaew, Sen & Noi', 'once taught school in the Karen hills'] },
  { id: 'pan', name: 'Pan', type: 'Person', alignment: 'GaewFamily', group_size: 1,
    epithets: ['31, Gaew’s husband', 'works at the public health center'],
    note: 'Moved into his wife’s household, as Northern Thai matrilocal custom expects.' },
  { id: 'mae_mon', name: 'Mae Mon', type: 'Departed', alignment: 'GaewFamily', group_size: 1,
    epithets: ['the 93-year-old grandmother', 'raised Sen in Chiang Mai'],
    note: 'Her death early in Chapter 4 is the hinge of Sen’s story.' },
  { id: 'anurak', name: 'Uncle Anurak', type: 'Departed', alignment: 'GaewFamily', group_size: 1,
    epithets: ['Gaew & Sen’s uncle', 'karaoke-shop owner'],
    note: 'Died in a 4 a.m. motorcycle crash during Julia’s first summer; the family’s calm at his funeral startled her.' },

  // ——— Goy's household & matrilineal kin ———
  { id: 'goy', name: 'Goy', type: 'Person', alignment: 'GoyHousehold', group_size: 1,
    epithets: ['33, stationery-store owner', 'radio DJ, the town’s serious reader of dhamma'] },
  { id: 'mae_daeng', name: 'Mae Daeng', type: 'Person', alignment: 'GoyHousehold', group_size: 1,
    epithets: ['56, market vendor', 'Goy’s mother & Julia’s host mother'] },
  { id: 'ta', name: 'Ta', type: 'Person', alignment: 'GoyHousehold', group_size: 1,
    epithets: ['24, Goy’s brother', 'back from the army, "a bit ting-tong"'],
    note: 'His oddness is traced to opium use in Chiang Mai during the Thaksin-era drug years.' },
  { id: 'goy_father', name: 'Goy’s Father', type: 'Departed', alignment: 'GoyHousehold', group_size: 1,
    epithets: ['Mae Jaeng’s police chief', 'died at 47, the year before fieldwork'],
    note: 'His sudden heart attack — and how anicca helped Goy bear it — opens the book’s question.' },
  { id: 'p_dao', name: 'P’Dao', type: 'Person', alignment: 'GoyHousehold', group_size: 1,
    epithets: ['Goy’s aunt, next door in the compound', 'Julia’s first formal interviewee'] },
  { id: 'mae_u', name: 'Mae U', type: 'Person', alignment: 'GoyHousehold', group_size: 1,
    epithets: ['Mae Daeng’s twin sister', 'shopkeeper across town'] },
  { id: 'mae_lah', name: 'Mae Lah', type: 'Person', alignment: 'GoyHousehold', group_size: 1,
    epithets: ['Mae Daeng’s sister', 'holds that merit outweighs bad karma'] },
  { id: 'niw', name: 'Niw', type: 'Person', alignment: 'GoyHousehold', group_size: 1,
    epithets: ['niece, a nurse in America', 'keeps a "fifty-fifty" view of karma'] },
  { id: 'jip', name: 'Jip', type: 'Person', alignment: 'GoyHousehold', group_size: 1,
    epithets: ['Goy’s cousin', 'monk for a few months, then a police officer'] },
  { id: 'dee', name: 'Dee', type: 'Person', alignment: 'GoyHousehold', group_size: 1,
    epithets: ['niece visiting from England'],
    note: 'At the hospital she alone voices the objections — and the open grief — that Mae Jaeng custom holds back.' },

  // ——— Mae Jaeng friends ———
  { id: 'chai', name: 'Chai', type: 'Person', alignment: 'Friend', group_size: 1,
    epithets: ['29, runs a medical clinic', 'Sen’s closest companion'] },
  { id: 'aung', name: 'Aung', type: 'Person', alignment: 'Friend', group_size: 1,
    epithets: ['30, pork vendor at the market', 'friend of Gaew & Sen'] },
  { id: 'jiew', name: 'Jiew', type: 'Person', alignment: 'Friend', group_size: 1,
    epithets: ['hospital aide', 'Sen’s childhood best friend'] },
  { id: 'bank', name: 'Bank', type: 'Person', alignment: 'Friend', group_size: 1,
    epithets: ['nurse at the Mae Jaeng hospital', 'childhood friend of Sen'] },
  { id: 'ban', name: 'Ban', type: 'Person', alignment: 'Friend', group_size: 1,
    epithets: ['pharmacist at the hospital', 'knocked down Sen’s door, then backed away'] },
  { id: 'lek', name: 'Lek', type: 'Person', alignment: 'Friend', group_size: 1,
    epithets: ['works for Chai', 'childhood friend of Sen'] },
  { id: 'chang', name: 'Chang', type: 'Person', alignment: 'Friend', group_size: 1,
    epithets: ['childhood friend, emigrated to Sydney', 'saw the decline others had stopped seeing'] },

  // ——— Healers ———
  { id: 'moh_bom', name: 'Moh Bom', type: 'Person', alignment: 'Healer', group_size: 1,
    epithets: ['head doctor of the Mae Jaeng hospital', 'teaches tham jai alongside medicine'] },
  { id: 'nan_jon', name: 'Nan Jon', type: 'Person', alignment: 'Healer', group_size: 1,
    epithets: ['the town’s spirit doctor', '"Nan" marks his former monkhood'],
    note: 'Performs the khwan ritual detaching the spirits of alcohol from Sen’s life-spirits.' },

  // ——— Monastics ———
  { id: 'phra_ao_wat', name: 'Phra Ao Wat', type: 'Departed', alignment: 'Monastic', group_size: 1,
    epithets: ['head monk, dead at 72', 'a police officer before the robe'],
    note: 'His cremation — with its chanted verses on impermanence — is Julia’s first funeral in Mae Jaeng.' },
  { id: 'khruba_si_wichai', name: 'Khruba Si Wichai', type: 'Historical', alignment: 'Monastic', group_size: 1,
    epithets: ['the great Northern Thai saint-monk (1878–1938)'],
    note: 'His portrait replaces the whiskey shelf when the family stops selling alcohol.' },

  // ——— Ban Ko Tao: the Karen Christian village ———
  { id: 'duansri', name: 'Duansri', type: 'Person', alignment: 'Karen', group_size: 1,
    epithets: ['32, S’gaw Karen farmer & weaver', 'Julia’s host in Ban Ko Tao'],
    note: 'One of fifteen siblings; her "sometimes you have to get angry" is the book’s sharpest counterpoint to tham jai.' },
  { id: 'jerapong', name: 'Jerapong', type: 'Person', alignment: 'Karen', group_size: 1,
    epithets: ['Baptist pastor & de facto village head', 'widely travelled'],
    note: 'Quietly refused to translate a visiting missionary’s fire-and-brimstone: "I didn’t translate that part."' },
  { id: 'sada', name: 'Sada', type: 'Person', alignment: 'Karen', group_size: 1,
    epithets: ['Jerapong’s wife', 'keeper of the trilingual Bible'] },
  { id: 'paw_pu', name: 'Paw Pu', type: 'Person', alignment: 'Karen', group_size: 1,
    epithets: ['village patriarch in his eighties', 'the previous pastor, Duansri’s father'],
    note: 'Son of the village’s first Christian convert.' },
  { id: 'p_duang', name: 'P’Duang', type: 'Person', alignment: 'Karen', group_size: 1,
    epithets: ['Duansri’s husband, buffalo trader', 'the village’s only Buddhist'] },
  { id: 'min_may', name: 'Min & May', type: 'Person', alignment: 'Karen', group_size: 2,
    epithets: ['Duansri’s daughters, 8 and 12'] },
  { id: 'surree', name: 'Surree', type: 'Person', alignment: 'Karen', group_size: 1,
    epithets: ['22, newly married', 'asked the hospital for a psychologist'],
    note: 'Her expressive, solution-seeking approach to distress marks the Karen Christian contrast case.' },

  // ——— The fieldwork circle ———
  { id: 'julia', name: 'Julia', type: 'Person', alignment: 'Fieldwork', group_size: 1,
    epithets: ['31, anthropologist & narrator', 'ten years returning to Mae Jaeng'] },
  { id: 'ari', name: 'Ari', type: 'Person', alignment: 'Fieldwork', group_size: 1,
    epithets: ['research assistant, ethnically Karen', 'runs a boardinghouse for village schoolchildren'] },
  { id: 'somwang', name: 'Ajarn Somwang', type: 'Person', alignment: 'Fieldwork', group_size: 1,
    epithets: ['professor of philosophy & religion, Chiang Mai University'],
    note: 'Told Julia that Thai has no word for "emotion" — and that anicca is "high Buddhism," a claim the book overturns.' },

  // ——— Visitors ———
  { id: 'laina', name: 'Laina', type: 'Person', alignment: 'Visitor', group_size: 1,
    epithets: ['20, American traveller'],
    note: 'Her heated dinner argument with Julia alarmed the table — open conflict is what Mae Jaeng does not do.' },
  { id: 'missionary', name: 'The Kansas Missionary', type: 'Person', alignment: 'Visitor', group_size: 1,
    epithets: ['visiting Baptist preacher', 'fire and brimstone, untranslated'] },
];

export const CHARACTER_BY_ID: Record<string, Character> = Object.fromEntries(
  CHARACTERS.map((c) => [c.id, c]),
);

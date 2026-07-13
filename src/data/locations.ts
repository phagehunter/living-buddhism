import type { AtlasLocation } from '../types';

/**
 * Spatial gazetteer. The book pseudonymises its field sites to protect
 * privacy, so "Approximate" pins are placed only to match its published
 * description — a valley community ~150 km west of Chiang Mai and ~50 km
 * east of Burma — not to identify any real village. "Documented" places
 * are real, named cities and institutions.
 */
export const LOCATIONS: AtlasLocation[] = [
  {
    id: 'mae_jaeng', name: 'Mae Jaeng', status: 'Approximate', coordinates: [18.49, 98.36],
    books: [1, 2, 3, 4, 5, 6, 7, 8],
    note: 'The valley town at the heart of the book (a pseudonym): ~500 households, a covered market by the river bridge, two shopping streets, and more wats than the eye can count.',
    events: [
      { book: 1, description: 'Sen comes home from the Chiang Mai hospital; the town gathers to let go.' },
      { book: 2, description: 'Julia settles in: Goy’s stationery store, the head monk’s cremation, Noi’s ordination.' },
      { book: 3, description: 'Household rhythms with Mae Daeng and Goy; the interview study begins.' },
      { book: 4, description: 'Ta comes home; Julia is almost evicted and learns what heat does in a cool town.' },
      { book: 5, description: 'Songkran water, sand stupas, Loy Krathong lanterns — the ritual calendar of letting go.' },
      { book: 6, description: 'Mae Mon dies; Sen shuts his door and holds on.' },
      { book: 7, description: 'The knife, the ambulance, the khwan rite, and the family’s merit.' },
      { book: 8, description: 'The shop becomes a noodle stand; Sen walks again.' },
    ],
  },
  {
    id: 'ban_hai', name: 'Ban Hai', status: 'Approximate', coordinates: [18.51, 98.385],
    books: [2],
    note: 'The farming village at the valley’s edge where Julia first lodged; its small wat’s head monk deflected her questions to "monks in Bangkok."',
    events: [{ book: 2, description: 'First fieldwork lodgings; the walk into town passes Goy’s shop — and starts the book.' }],
  },
  {
    id: 'ban_ko_tao', name: 'Ban Ko Tao', status: 'Approximate', coordinates: [18.555, 98.31],
    books: [4, 6, 7],
    note: 'S’gaw Karen Christian village of ~50 households, ten kilometres up a dirt road: Baptist church on the hilltop, rai rice on the slopes.',
    events: [
      { book: 4, description: 'Duansri’s household hosts the comparison study; Jerapong edits the missionary in real time.' },
      { book: 6, description: '"Sometimes you have to get angry": the village’s verdict on Sen’s family.' },
      { book: 7, description: 'The congregation comes down the mountain to pray at a Buddhist bedside.' },
    ],
  },
  {
    id: 'chang_kao', name: 'Chang Kao', status: 'Approximate', coordinates: [18.72, 98.33],
    books: [3],
    note: 'A hamlet ~30 km north down a dirt road into the jungle — the study’s most rural Buddhist interviews.',
    events: [{ book: 3, description: 'Interview rounds with Ari; the head monk who lost his wallet and let it go.' }],
  },
  {
    id: 'mae_ma_law', name: 'Mae Ma Law', status: 'Approximate', coordinates: [18.83, 98.21],
    books: [4],
    note: 'Remote Karen Christian village further up the mountains — no electricity, no paved road.',
    events: [{ book: 4, description: 'The interview net widens; Karen answers keep valuing expression over cooling.' }],
  },
  {
    id: 'chiang_mai', name: 'Chiang Mai', status: 'Documented', coordinates: [18.788, 98.985],
    books: [2, 4, 6, 7],
    note: 'The northern capital, two mountain hours east: universities, discos, markets — and the "high Buddhism" experts who said villagers wouldn’t know anicca.',
    events: [
      { book: 2, description: 'The coffee-shop verdict ("country people don’t really understand Buddhism") and the drive west.' },
      { book: 4, description: 'Ajarn Somwang: Thai has no word for "emotion."' },
      { book: 6, description: 'Sen’s remembered youth: raised here by Mae Mon; the video-shop years.' },
      { book: 7, description: 'The ambulance crosses the mountains with the whole family behind it.' },
    ],
  },
  {
    id: 'cm_hospitals', name: 'Chiang Mai Hospitals', status: 'Documented', coordinates: [18.805, 99.005],
    books: [1, 7],
    note: 'Nakhon Ping (public, two hundred beds to a ward), Chiang Mai Ram (private), and Suan Prung — the region’s psychiatric hospital, which turned Sen away as "too far gone."',
    events: [
      { book: 1, description: 'The Prologue’s verdict: the liver is beyond saving; tham jai and take him home.' },
      { book: 7, description: 'Cirrhosis, hepatitis, a feeding tube, imaginary cigarettes — and no transplant within reach.' },
    ],
  },
  {
    id: 'cmu', name: 'Chiang Mai University', status: 'Documented', coordinates: [18.8, 98.951],
    books: [2, 4],
    note: 'Ajarn Somwang’s department, Julia’s borrowed office, and the scholarly frame the fieldwork keeps testing.',
    events: [
      { book: 2, description: '"Go ask the monks": the academy points away from the village.' },
      { book: 4, description: 'The missing word for emotion sends the analysis back to jai — the heart.' },
    ],
  },
  {
    id: 'lamphun', name: 'Lamphun', status: 'Documented', coordinates: [18.573, 99.008],
    books: [7],
    note: 'Home region of Khruba Si Wichai (1878–1938), the Northern Thai saint-monk whose portrait replaces the whiskey shelf.',
    events: [{ book: 7, description: 'The family stops selling alcohol under the saint’s gaze: "No Alcohol Sold Here."' }],
  },
  {
    id: 'bangkok', name: 'Bangkok', status: 'Documented', coordinates: [13.756, 100.502],
    books: [2, 5],
    note: 'The capital: where "real" scholarly Buddhism is imagined to live, and where it keeps failing to be needed.',
    events: [
      { book: 2, description: 'Monks and professors defer to Bangkok; Mae Jaeng quietly answers for itself.' },
      { book: 5, description: 'A visiting Bangkok monk supplies the salt-in-water image for diluting bad karma.' },
    ],
  },
  {
    id: 'wat_tham_krabok', name: 'Wat Tham Krabok', status: 'Documented', coordinates: [14.68, 100.79],
    books: [6],
    note: 'The famous addiction-treating monastery in Saraburi, central Thailand — considered for Sen, and impossibly far.',
    events: [{ book: 6, description: 'Every treatment door — rehab, AA, the monastery — proves too far, too foreign, or refused.' }],
  },
  {
    id: 'burma_way', name: 'Toward Burma', status: 'Approximate', coordinates: [18.49, 97.8],
    books: [2],
    note: 'Fifty kilometres west by dirt path lies the border; almost no one from Mae Jaeng travels that way.',
    events: [{ book: 2, description: 'The valley’s western horizon — the direction the road does not go.' }],
  },
];

export const LOCATION_BY_ID: Record<string, AtlasLocation> = Object.fromEntries(
  LOCATIONS.map((l) => [l.id, l]),
);

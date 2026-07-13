/**
 * Key-term network: the book's working vocabulary (glossary + chapter
 * discussions), linked by the conceptual relations the text itself draws.
 */

export type TermDomain =
  | 'heart' // the jai family — Thai emotion talk
  | 'doctrine' // Buddhist teachings & the Three Characteristics
  | 'release' // the letting-go vocabulary
  | 'karma' // karma, merit & fortune
  | 'ritual' // wats, festivals & practices
  | 'spirits' // khwan, phi & healing
  | 'karen' // Ban Ko Tao's Karen / Christian terms
  | 'social'; // people categories

export const DOMAIN_COLORS: Record<TermDomain, string> = {
  heart: '#fb923c',
  doctrine: '#a78bfa',
  release: '#2dd4bf',
  karma: '#fbbf24',
  ritual: '#34d399',
  spirits: '#38bdf8',
  karen: '#fb7185',
  social: '#94a3b8',
};

export const DOMAIN_LABELS: Record<TermDomain, string> = {
  heart: 'The heart (jai) family',
  doctrine: 'Doctrine',
  release: 'Letting go',
  karma: 'Karma & merit',
  ritual: 'Ritual & festival',
  spirits: 'Spirits & healing',
  karen: 'Karen / Christian',
  social: 'People & society',
};

export interface Term {
  id: string;
  term: string;
  lang: 'Thai' | 'Pali' | 'N. Thai' | 'Karen' | 'Sanskrit';
  domain: TermDomain;
  gloss: string;
  note?: string;
}

export interface TermLink {
  source: string;
  target: string;
  relation: string;
  note?: string;
}

export const TERMS: Term[] = [
  // ——— The heart (jai) family ———
  { id: 'jai', term: 'jai', lang: 'Thai', domain: 'heart',
    gloss: 'The heart-mind: the seat of feeling, root of hundreds of compound words.',
    note: 'Thai has no word for "emotion" — it has hearts. Heart Talk catalogues 700+ jai compounds.' },
  { id: 'jai_yen', term: 'jai yen', lang: 'Thai', domain: 'heart',
    gloss: 'The cool heart: calm, unroused, the valley’s prized equilibrium.',
    note: 'Not coldness — a warmed, level heart. The fire festival "warms the cold Buddha," it does not excite him.' },
  { id: 'jai_ron', term: 'jai ron', lang: 'Thai', domain: 'heart',
    gloss: 'The hot heart: roused, impatient, quick — read as immature.' },
  { id: 'kreng_jai', term: 'kreng jai', lang: 'Thai', domain: 'heart',
    gloss: 'The deferential, awe-struck heart: consideration that keeps troubles unspoken.',
    note: 'Why no one may raise Sen’s drinking with his mother — and why she may not raise it with him.' },
  { id: 'nam_jai', term: 'nam jai', lang: 'Thai', domain: 'heart',
    gloss: 'The "water heart": spontaneous kindness and generosity.' },
  { id: 'sabai_jai', term: 'sabai jai', lang: 'Thai', domain: 'heart',
    gloss: 'The comfortable, satisfied heart: ease as an emotional ideal.' },
  { id: 'tham_jai', term: 'tham jai', lang: 'Thai', domain: 'heart',
    gloss: 'To make the heart: active acceptance — the book’s master idiom.',
    note: 'What the nurse tells the family, what Goy teaches about the heat, what Sen finally claims as his own act.' },
  { id: 'khwam_ruu_suk', term: 'khwam ruu suk', lang: 'Thai', domain: 'heart',
    gloss: 'Feeling — the nearest Thai gets to the English category "emotion".' },
  { id: 'arom', term: 'arom', lang: 'Thai', domain: 'heart',
    gloss: 'Mood: diffuse, weather-like affect that passes rather than being processed.',
    note: 'Chai’s question after an upset is not "how do you feel?" but "gone yet?"' },

  // ——— Doctrine ———
  { id: 'anicca', term: 'anicca', lang: 'Pali', domain: 'doctrine',
    gloss: 'Impermanence (Thai anitchang): everything that arises passes.',
    note: 'The "high Buddhism" the experts said villagers wouldn’t know — and the book’s central lived concept.' },
  { id: 'dukkha', term: 'dukkha', lang: 'Pali', domain: 'doctrine',
    gloss: 'Unsatisfactoriness, suffering: the second of the Three Characteristics.' },
  { id: 'anatta', term: 'anatta', lang: 'Pali', domain: 'doctrine',
    gloss: 'Non-self: no stable, permanent "me" to hold on to.',
    note: 'Held lightly enough in Mae Jaeng that even legal names can be changed to turn one’s luck.' },
  { id: 'dhamma', term: 'dhamma', lang: 'Pali', domain: 'doctrine',
    gloss: 'The teachings — and the way nature simply is.' },
  { id: 'upadana', term: 'upadana', lang: 'Pali', domain: 'doctrine',
    gloss: 'Clinging, attachment: wanting permanence from an impermanent world.',
    note: 'Buddhadasa’s bee-sting: it is the wish for the pain to stop that stings longest.' },
  { id: 'nibbana', term: 'nibbana', lang: 'Pali', domain: 'doctrine',
    gloss: 'The extinguishing: release from the cycle, karma exhausted.' },
  { id: 'samsara', term: 'samsara', lang: 'Pali', domain: 'doctrine',
    gloss: 'The wheel of birth and death that karma keeps turning.' },
  { id: 'cetana', term: 'cetana', lang: 'Pali', domain: 'doctrine',
    gloss: 'Intention — what makes an act karmic at all.',
    note: 'Merit given for show is barely merit; the feeling of the giving is the deed.' },

  // ——— Letting go ———
  { id: 'ploy', term: 'ploy', lang: 'Thai', domain: 'release',
    gloss: 'To let go, release: the everyday verb of nonattachment.',
    note: '"We have to ploy," Sen’s friends say at his bedside — and Sen later claims the word for his recovery.' },
  { id: 'plong', term: 'plong', lang: 'Thai', domain: 'release',
    gloss: 'To lay a burden down.' },
  { id: 'yom_rap', term: 'yom rap', lang: 'Thai', domain: 'release',
    gloss: 'To accept: to pick up what is so, without argument.' },
  { id: 'mai_pen_rai', term: 'mai pen rai', lang: 'Thai', domain: 'release',
    gloss: '"Never mind": release built into small talk.' },
  { id: 'chuey_chuey', term: 'chuey chuey', lang: 'Thai', domain: 'release',
    gloss: 'Unroused "just being" — equanimity’s ambiguous twin.',
    note: 'Sen’s word for what drinking gives him: not feeling so much. Dispassion or numbness, depending who judges.' },

  // ——— Karma & merit ———
  { id: 'kam', term: 'kam (karma)', lang: 'Thai', domain: 'karma',
    gloss: 'Moral cause and effect running on intention, within and across lives.' },
  { id: 'tham_bun', term: 'tham bun', lang: 'Thai', domain: 'karma',
    gloss: 'Making merit: offerings, ordinations, kindnesses that seed good karma.',
    note: 'The medicine a family can always administer — Sen’s parents finish their merit-making before reaching the hospital.' },
  { id: 'khraw', term: 'khraw', lang: 'Thai', domain: 'karma',
    gloss: 'Fate, fortune, the karma waiting for you up ahead — usually the bad kind.' },
  { id: 'tham_dii', term: 'tham dii dai dii', lang: 'Thai', domain: 'karma',
    gloss: '"Do good, meet good; do bad, meet bad" — karma as proverb.' },

  // ——— Ritual & festival ———
  { id: 'wat', term: 'wat', lang: 'Thai', domain: 'ritual',
    gloss: 'The monastery: every neighbourhood’s sacred and social center.' },
  { id: 'wan_phra', term: 'wan phra', lang: 'Thai', domain: 'ritual',
    gloss: 'The weekly Buddha day of offerings and heightened observance.' },
  { id: 'songkran', term: 'Songkran', lang: 'Thai', domain: 'ritual',
    gloss: 'New Year in April: thrown water, and sand stupas built to wash away.' },
  { id: 'loy_krathong', term: 'Loy Krathong', lang: 'Thai', domain: 'ritual',
    gloss: 'The festival of lights: lanterns and leaf-boats float the year’s worries off.',
    note: 'Loy = to float. Worry management as civic ritual.' },
  { id: 'wai', term: 'wai', lang: 'Thai', domain: 'ritual',
    gloss: 'Palms together, a slight bow: respect to elders, monks, and the Buddha.' },
  { id: 'yo_reh', term: 'yo reh', lang: 'Thai', domain: 'ritual',
    gloss: 'Amulet-borne energy healing from a Japanese-derived Buddhist sect.',
    note: 'The parents’ chosen treatment for Sen — merit and transferred energy in place of confrontation.' },
  { id: 'ordination', term: 'buat (ordination)', lang: 'Thai', domain: 'ritual',
    gloss: 'Taking robes, briefly, as novice or monk: boyhood’s expected rite.',
    note: 'Noi does it twice and remembers none of the chant; Sen never does, and the town remembers that.' },

  // ——— Spirits & healing ———
  { id: 'khwan', term: 'khwan', lang: 'Thai', domain: 'spirits',
    gloss: 'The life-spirits or "wits" — a vital force that illness can scatter.',
    note: 'Nan Jon’s rite detaches the spirits of alcohol from Sen’s khwan.' },
  { id: 'phi', term: 'phi', lang: 'Thai', domain: 'spirits',
    gloss: 'Ghosts and spirits of trees, houses, and land.',
    note: 'Gaew, unbothered by doctrine, is nonetheless afraid of her uncle’s.' },
  { id: 'winyan', term: 'winyan', lang: 'Thai', domain: 'spirits',
    gloss: 'Spirit, soul (Pali viññāṇa).' },
  { id: 'sai_sin', term: 'sai sin', lang: 'Thai', domain: 'spirits',
    gloss: 'The white wrist-thread that calls the khwan back together.' },
  { id: 'moh_phi', term: 'moh phi', lang: 'Thai', domain: 'spirits',
    gloss: 'Spirit doctors; the "Nan" honorific marks a former monk.',
    note: 'They work in parallel with the pharmacy and the hospital — efficacy is plural in Mae Jaeng.' },

  // ——— Karen / Christian ———
  { id: 'gurlah', term: 'gurlah', lang: 'Karen', domain: 'karen',
    gloss: 'Soul — the S’gaw Karen term the villagers gloss with Thai winyan.' },
  { id: 'tah_guh', term: 'tah guh law guh law', lang: 'Karen', domain: 'karen',
    gloss: '"Useless, without benefit" — the closest Karen echo of impermanence.',
    note: 'Where Buddhist Mae Jaeng hears a teaching, Ban Ko Tao hears a complaint.' },
  { id: 'panyajan', term: 'Panyajan', lang: 'Thai', domain: 'karen',
    gloss: 'Ecclesiastes: "vanity of vanities" — impermanence lamented, not embraced.' },

  // ——— People & society ———
  { id: 'farang', term: 'farang', lang: 'Thai', domain: 'social',
    gloss: 'Westerners — who argue at dinner and ask how you feel.' },
  { id: 'kon_muang', term: 'kon muang', lang: 'N. Thai', domain: 'social',
    gloss: 'The Northern Thai people; muang is also their language and their word for city.' },
  { id: 'sangha', term: 'Sangha', lang: 'Pali', domain: 'social',
    gloss: 'The monastic order — third of the Triple Gems.' },
  { id: 'mae_chee', term: 'mae chee', lang: 'Thai', domain: 'social',
    gloss: 'A Buddhist nun: the robe the Thai Sangha offers women, one step short of ordination.',
    note: 'Mae Jaeng has exactly one — the gender line the book reads against its "town of women".' },
];

export const TERM_BY_ID: Record<string, Term> = Object.fromEntries(TERMS.map((t) => [t.id, t]));

export const TERM_LINKS: TermLink[] = [
  // the jai family radiates from jai
  { source: 'jai', target: 'jai_yen', relation: 'compound', note: 'yen = cool' },
  { source: 'jai', target: 'jai_ron', relation: 'compound', note: 'ron = hot' },
  { source: 'jai', target: 'kreng_jai', relation: 'compound', note: 'kreng = awe-struck' },
  { source: 'jai', target: 'nam_jai', relation: 'compound', note: 'nam = water' },
  { source: 'jai', target: 'sabai_jai', relation: 'compound', note: 'sabai = comfortable' },
  { source: 'jai', target: 'tham_jai', relation: 'compound', note: 'tham = to make' },
  { source: 'jai_yen', target: 'jai_ron', relation: 'opposes', note: 'The cool heart is defined against the hot one.' },
  { source: 'jai', target: 'khwam_ruu_suk', relation: 'kin', note: 'Feeling-talk where "emotion" would be.' },
  { source: 'khwam_ruu_suk', target: 'arom', relation: 'kin', note: 'Feeling and mood — the two pieces of the missing category.' },

  // tham jai as the hinge between heart and doctrine
  { source: 'tham_jai', target: 'anicca', relation: 'grounds', note: 'Goy: tham jai and anicca are the same teaching.' },
  { source: 'tham_jai', target: 'yom_rap', relation: 'kin', note: 'Making the heart is accepting.' },
  { source: 'tham_jai', target: 'ploy', relation: 'kin', note: 'Acceptance completed by release.' },

  // the Three Characteristics triangle
  { source: 'anicca', target: 'dukkha', relation: 'triad', note: 'Two of the Three Characteristics.' },
  { source: 'dukkha', target: 'anatta', relation: 'triad', note: 'Two of the Three Characteristics.' },
  { source: 'anicca', target: 'anatta', relation: 'triad', note: 'Two of the Three Characteristics.' },
  { source: 'dhamma', target: 'anicca', relation: 'teaches', note: 'Noi’s schoolbook and the funeral chant both carry it.' },
  { source: 'upadana', target: 'dukkha', relation: 'causes', note: 'Clinging to what changes is what suffers.' },
  { source: 'upadana', target: 'anicca', relation: 'collides with', note: 'Attachment meets impermanence — the book’s tragedy in two words.' },
  { source: 'ploy', target: 'upadana', relation: 'counters', note: 'Letting go is attachment’s antidote.' },

  // the release cluster
  { source: 'ploy', target: 'plong', relation: 'kin', note: 'Release and laying-down.' },
  { source: 'ploy', target: 'mai_pen_rai', relation: 'kin', note: 'Never-mind as micro-release.' },
  { source: 'chuey_chuey', target: 'jai_yen', relation: 'shadows', note: 'Equanimity or numbness — Sen’s word sits uneasily beside the ideal.' },
  { source: 'chuey_chuey', target: 'ploy', relation: 'imitates', note: 'Not-feeling can pass for letting go.' },

  // karma & merit
  { source: 'kam', target: 'cetana', relation: 'hinges on', note: 'No intention, no karma.' },
  { source: 'kam', target: 'tham_dii', relation: 'proverb', note: 'The town’s one-line physics.' },
  { source: 'kam', target: 'khraw', relation: 'folk cousin', note: 'Fortune as karma seen from the road ahead.' },
  { source: 'kam', target: 'samsara', relation: 'drives', note: 'Karma keeps the wheel turning.' },
  { source: 'nibbana', target: 'samsara', relation: 'escapes', note: 'The wheel stopped.' },
  { source: 'nibbana', target: 'kam', relation: 'exhausts', note: 'The karma neither dark nor bright, leading to karma’s end.' },
  { source: 'tham_bun', target: 'kam', relation: 'dilutes', note: 'The Bangkok monk’s salt-in-water: merit thins bad karma.' },
  { source: 'tham_bun', target: 'cetana', relation: 'measured by', note: 'The feeling of the giving is the merit.' },
  { source: 'tham_bun', target: 'wat', relation: 'practiced at' },
  { source: 'tham_bun', target: 'wan_phra', relation: 'practiced on' },
  { source: 'tham_bun', target: 'yo_reh', relation: 'kin', note: 'Merit as medicine — the family’s treatment of Sen.' },

  // ritual
  { source: 'wat', target: 'sangha', relation: 'houses' },
  { source: 'ordination', target: 'sangha', relation: 'joins' },
  { source: 'ordination', target: 'wat', relation: 'held at' },
  { source: 'mae_chee', target: 'sangha', relation: 'margins of', note: 'The ordination women are not offered.' },
  { source: 'songkran', target: 'anicca', relation: 'enacts', note: 'Sand stupas built to be washed away.' },
  { source: 'loy_krathong', target: 'ploy', relation: 'enacts', note: 'Loy = float: worries sent downriver and skyward.' },
  { source: 'wai', target: 'wat', relation: 'performed at' },

  // spirits & healing
  { source: 'khwan', target: 'sai_sin', relation: 'gathered by', note: 'The wrist-thread calls the wits home.' },
  { source: 'khwan', target: 'winyan', relation: 'kin', note: 'Life-spirits and soul.' },
  { source: 'moh_phi', target: 'khwan', relation: 'treats', note: 'Nan Jon’s rite over Sen.' },
  { source: 'moh_phi', target: 'phi', relation: 'negotiates', note: 'The doctor for what the pharmacy can’t reach.' },
  { source: 'moh_phi', target: 'wat', relation: 'trained at', note: 'The Nan honorific marks a former monkhood.' },

  // Karen / Christian bridges
  { source: 'gurlah', target: 'winyan', relation: 'translates', note: 'The villagers’ own gloss.' },
  { source: 'tah_guh', target: 'anicca', relation: 'mistranslates', note: '"Useless" where Mae Jaeng hears "impermanent" — lament vs. teaching.' },
  { source: 'panyajan', target: 'tah_guh', relation: 'glossed via', note: 'The Karen Bible reaches impermanence through Ecclesiastes.' },
  { source: 'panyajan', target: 'anicca', relation: 'parallels', note: '"Vanity of vanities" — the same fact, differently mourned.' },

  // social stereotypes as edges
  { source: 'farang', target: 'jai_ron', relation: 'stereotyped as', note: 'Foreigners argue at dinner.' },
  { source: 'kon_muang', target: 'jai_yen', relation: 'self-image', note: 'The Northern Thai account of themselves.' },
];

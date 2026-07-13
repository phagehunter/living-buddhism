# Living Buddhism — Character Map

**Live site: [phagehunter.github.io/living-buddhism](https://phagehunter.github.io/living-buddhism/)**

A single-page digital-humanities dashboard for Julia Cassaniti's ethnography *Living Buddhism: Mind, Self, and Emotion in a Thai Community* (Cornell University Press, 2015), combining **distant reading** (computational visualization) with **close reading** (scene-by-scene commentary, page citations, and original section guides readable alongside every view).

## Three analytical dimensions

| View | Technique | What it shows |
|---|---|---|
| **Network Dynamics** | Force-directed graph (react-force-graph-2d) | The community of "Mae Jaeng": 40+ people across two families, the town's friends and healers, the Karen Christian village of Ban Ko Tao, and the fieldwork circle. Node size ∝ degree centrality; edge width ∝ scene frequency; color = social circle. Dashed edges mark the Prologue, which narrates the ending first. |
| **Spatial Topography** | Leaflet + CartoDB Dark Matter (keyless tiles) | The valley and its world: pseudonymised field sites placed only per the book's published description, plus documented places (Chiang Mai, Bangkok, Lamphun…). Paths trace the ethnographer's widening circle, the ambulance to Chiang Mai, and the family's devotional travel. |
| **Narrative Gravity** | D3 stream/area graph | Whose story each of the eight sections follows — Sen, Gaew, Goy, Ban Ko Tao, and everyone else — with a flash-forward overlay on the Prologue. |

A **global section slider** (Prologue … Conclusion) and **group toggles** (Gaew & Sen's family, Goy's household, Mae Jaeng town, Ban Ko Tao & visitors) re-render every view in real time. A **playback control** animates the book section by section. Clicking any edge, path, waypoint, or node populates the **Commentary panel** with summaries, thematic tags from the book's own vocabulary (tham jai, jai yen, anicca, kreng jai…), and page citations — each linking into the **Guide tab**, original per-section synopses written for this project.

The book itself is in copyright and is not reproduced here; all personal and local place names are the book's own pseudonyms. Buy the book — it is superb.

All data is embedded as TypeScript constants (`src/data/`); the guides are static per-section JSON in `public/text/` — no backend, no API keys.

## Develop & build

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

## Deploy to GitHub Pages

A GitHub Actions workflow builds on every push to `main` and force-pushes `dist/` to the `gh-pages` branch. In the repository settings, set **Pages → Source: Deploy from a branch → `gh-pages` → `/ (root)`**.

## Caveats

- "Mae Jaeng," "Ban Ko Tao," and the other field-site pins are **approximate by design** — placed only to match the book's published distances and directions, not to identify real villages. The map's symbology encodes that.
- Focalization percentages and interaction weights are editorial estimates for visualization, not counts.

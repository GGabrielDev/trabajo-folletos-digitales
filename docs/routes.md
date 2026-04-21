# Route inventory

This document lists the public pages currently exposed by the site and the content/design split used by each brochure.

## Public routes

| Route | Topic | Style | Notes |
| --- | --- | --- | --- |
| `/` | Index | Neutral selector | Lists all brochure/topic combinations |
| `/sismos-glass` | Sismos y terremotos | Glassmorphism | Formal tone, dark background, gradient cards |
| `/sismos-friendly` | Sismos y terremotos | Friendly | Youth-oriented tone, bright palette, rounded cards |
| `/inundaciones-glass` | Lluvias e inundaciones | Glassmorphism | Formal flood-response guidance and alert levels |
| `/inundaciones-friendly` | Lluvias e inundaciones | Friendly | Simpler flood guidance with high-visibility alert chips |
| `/orden-publico-glass` | Orden publico y crisis | Glassmorphism | Formal household and supply guidance |
| `/orden-publico-friendly` | Orden publico y crisis | Friendly | Simplified family/community safety guidance |
| `/otros-riesgos-glass` | Riesgos especificos | Glassmorphism | Fire, spills, and swarm-related precautions |
| `/otros-riesgos-friendly` | Riesgos especificos | Friendly | Simplified outdoor-risk precautions |

## Content coverage by topic

| Topic | Glass page emphasis | Friendly page emphasis |
| --- | --- | --- |
| Sismos | Immediate protocol, myths to avoid, official information | Calm behavior, sheltering, danger zones |
| Inundaciones | Water currents, electrical protection, road alert levels | Avoiding floodwaters, moving to high ground, cleanup |
| Orden publico | Shelter in place, stockpiling, avoiding confrontation | Staying indoors, food and water prep, neighbor coordination |
| Otros riesgos | Wildfire contingency, hydrocarbon spills, dangerous swarms | Wildfire escape, swarm reporting, hazardous spill avoidance |

## Design system notes

### Shared pieces

- `src/layouts/Layout.astro` provides the base document, Spanish language setting, viewport configuration, favicon, and Google Fonts.
- `src/styles/global.css` imports Tailwind CSS and defines the reusable `.glassmorphism`, `.glassmorphism-dark`, and `.high-contrast-card` utility classes.
- Images are served from `public/assets/`.

### Style variants

| Variant | Characteristics |
| --- | --- |
| Glassmorphism | Dark surfaces, blurred translucent cards, gradient highlights, more formal tone |
| Friendly | Bright colors, playful rotations, rounded shapes, simplified phrasing |

## Content source context

The brochure text aligns with the project reference material in `pdf_content.txt`, which summarizes broader civil protection guidance for Venezuela, including seismic response, hydrometeorological risk, public-order contingencies, and special hazards.

The current implementation is manual and page-based: each route contains its own markup and copy instead of reading from shared structured data.

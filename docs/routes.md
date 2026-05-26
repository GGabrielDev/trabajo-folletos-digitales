# Route inventory

This document lists the public pages currently exposed by the site and the content/variant split used by each brochure after the PC-VENEZUELA redesign.

## Public routes

| Route | Topic | Variant | Notes |
| --- | --- | --- | --- |
| `/` | Index | Dashboard | Central panel linking to all topics |
| `/menu-escolar` | Menú Escolar | Dashboard | Entry menu exposing the 4 school-themed brochures |
| `/nuevo-contenido-submenus` | Seguridad y Gestión del Riesgo | Submenús | Landing page with 4 compact buttons to dedicated topic subpages |
| `/nuevo-contenido-submenus/:topic` | Seguridad y Gestión del Riesgo | Subpage | One emergency topic at a time with floating back button |
| `/nuevo-contenido-completo` | Seguridad y Gestión del Riesgo | Integral | Base page with the same emergency content in one long scroll |
| `/sismos-dark` | Sismos y terremotos | Dark | Institutional dark surface with formal protocol emphasis |
| `/sismos-light` | Sismos y terremotos | Light | Institutional light surface with simplified guidance emphasis |
| `/inundaciones-dark` | Lluvias e inundaciones | Dark | Formal flood-response guidance and alert levels |
| `/inundaciones-light` | Lluvias e inundaciones | Light | Simplified flood guidance and cleanup emphasis |
| `/orden-publico-dark` | Orden publico y crisis | Dark | Formal household and supply guidance |
| `/orden-publico-light` | Orden publico y crisis | Light | Family/community safety emphasis |
| `/otros-riesgos-dark` | Riesgos especificos | Dark | Fire, spills, and swarm-related precautions |
| `/otros-riesgos-light` | Riesgos especificos | Light | Simplified outdoor-risk precautions |

## Content coverage by topic

| Topic | Dark variant emphasis | Light variant emphasis |
| --- | --- | --- |
| Sismos | Immediate protocol, myths to avoid, official information | Calm behavior, sheltering, danger zones |
| Inundaciones | Water currents, electrical protection, road alert levels | Avoiding floodwaters, moving to high ground, cleanup |
| Orden publico | Shelter in place, stockpiling, avoiding confrontation | Staying indoors, food and water prep, neighbor coordination |
| Otros riesgos | Wildfire contingency, hydrocarbon spills, dangerous swarms | Wildfire escape, swarm reporting, hazardous spill avoidance |

## Design system notes

### Shared pieces

- `src/layouts/Layout.astro` provides the base document, Spanish language setting, viewport configuration, favicon, and Google Fonts.
- `src/styles/global.css` imports Tailwind CSS and defines the institutional design tokens, hard-shadow helpers, ribbons, hazard stripes, and diagonal utilities used by the redesign.
- Images are served from `public/assets/`.
- Shared brochure content lives in `src/data/brochures.ts`.
- Shared brochure rendering lives in `src/components/BrochurePage.astro`.

### Style variants

| Variant | Characteristics |
| --- | --- |
| Dark | Deep blue/night surfaces, white text, emergency-broadcast feel |
| Light | Smoke-white surfaces, institutional blue text, same geometry and orange alert accents |

## Content source context

The brochure text aligns with the project reference material in `pdf_content.txt`, which summarizes broader civil protection guidance for Venezuela, including seismic response, hydrometeorological risk, public-order contingencies, and special hazards.

The current implementation is data-driven at the topic level: shared content definitions in `src/data/brochures.ts` feed the common brochure template, while route files only select topic and variant.

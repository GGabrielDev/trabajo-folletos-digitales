# Route inventory

This document lists the public pages currently exposed by the site. It reflects the actual
`src/pages/` structure. For the vocabulary used here (Brochure, EmergencyTopic, reading mode,
style variant), see [`../CONTEXT.md`](../CONTEXT.md).

## Public routes

| Route pattern | Source file | Data source | Count | Notes |
| --- | --- | --- | --- | --- |
| `/` | `pages/index.astro` | — | 1 | Central dashboard |
| `/general` | `pages/general.astro` | — | 1 | Single long-scroll page; currently **hidden from the menu** |
| `/prevencion-escolar` | `pages/prevencion-escolar.astro` | `schoolEmergencyTopics` | 1 | School prevention menu |
| `/prevencion-escolar/[topic]` | `pages/prevencion-escolar/[topic].astro` | `schoolEmergencyTopics` (`.id`) | 6 | One school emergency topic, floating back button to `/prevencion-escolar` |
| `/prevencion-y-gestion-de-riesgo` | `pages/prevencion-y-gestion-de-riesgo.astro` | `emergencyTopics` | 1 | Risk-management menu |
| `/prevencion-y-gestion-de-riesgo/[topic]` | `pages/prevencion-y-gestion-de-riesgo/[topic].astro` | `emergencyTopics` (`.id`) | 6 | One emergency topic, floating back button to the menu |
| `/[slug]-[mode]` | `pages/[slug]-[mode].astro` | `brochures` (general slugs) | 8 | General brochure × reading mode |
| `/[slug]-[style]-[mode]` | `pages/[slug]-[style]-[mode].astro` | `brochures` (school slugs) | 24 | School brochure × style variant × reading mode |

Parameter values:

- `[mode]` (reading mode): `dark` \| `light`.
- `[style]` (style variant): `default` \| `rounded-glass` \| `timeline-step`.
- General brochure `[slug]`: `sismos`, `inundaciones`, `orden-publico`, `otros-riesgos` → e.g. `/sismos-dark`, `/orden-publico-light`.
- School brochure `[slug]`: `brigadas-escolares`, `plan-escolar-pegir`, `evacuacion-simulacros`, `senales-seguridad` → e.g. `/brigadas-escolares-timeline-step-dark`.
- `[topic]` id (both menus): `sismos`, `tsunamis`, `inundaciones`, `incendios`, `deslizamientos`, `prevencion-sustancias-quimicas`.

## Design system notes

### Shared pieces

- `src/layouts/Layout.astro` provides the base document, Spanish language setting, viewport configuration, favicon, and Google Fonts.
- `src/styles/global.css` imports Tailwind CSS and defines the institutional design tokens, hard-shadow helpers, ribbons, hazard stripes, and diagonal utilities used by the redesign.
- Images are served from `public/assets/`.
- `<SponsorsFooter />` (`src/components/SponsorsFooter.astro`) must be present on every view.

### Content sources

| File | Model | Rendered by |
| --- | --- | --- |
| `src/data/brochures.ts` | `Brochure` (cards + alert levels) | `src/components/BrochurePage.astro` |
| `src/data/emergencyTopics.ts` | `EmergencyTopic` (phases, map, infographic, steps) | `src/components/EmergencyTopicSection.astro` |
| `src/data/schoolEmergencyTopics.ts` | `EmergencyTopic` (school variant) | `src/components/EmergencyTopicSection.astro` |

### Style / reading variants

| Axis | Values | Applies to |
| --- | --- | --- |
| Reading mode | `dark`, `light` | All brochures |
| Style variant | `default`, `rounded-glass`, `timeline-step` | School brochures (general brochures use `default`) |

## Content source context

The brochure text aligns with the project reference material in `pdf_content.txt`, which
summarizes broader civil protection guidance for Venezuela (seismic response, hydrometeorological
risk, public-order contingencies, and special hazards). The implementation is data-driven: shared
content definitions feed common templates, while route files only select topic, style, and mode.

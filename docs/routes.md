# Route inventory

This document lists the public pages currently exposed by the site. It reflects the actual
`src/pages/` structure. For the vocabulary used here (Brochure, EmergencyTopic, reading mode,
style variant), see [`../CONTEXT.md`](../CONTEXT.md).

## Public routes

| Route pattern | Source file | Data source | Count | Notes |
| --- | --- | --- | --- | --- |
| `/` | `pages/index.astro` | — | 1 | Central dashboard |
| `/general` | `pages/general.astro` | — | 1 | Single long-scroll page; **not linked from any page** (orphaned). Links the 8 `/[slug]-[mode]` routes (`general.astro:80-83`) |
| `/prevencion-escolar` | `pages/prevencion-escolar.astro` | `schoolEmergencyTopics` + `brochures` | 1 | School prevention menu; also filters `brochures` for the 4 school planning slugs (`brigadas-escolares`, `plan-escolar-pegir`, `evacuacion-simulacros`, `senales-seguridad`) |
| `/prevencion-escolar/[topic]` | `pages/prevencion-escolar/[topic].astro` | `schoolEmergencyTopics` (`.id`) | 6 | One school emergency topic, floating back button to `/prevencion-escolar` |
| `/prevencion-y-gestion-de-riesgo` | `pages/prevencion-y-gestion-de-riesgo.astro` | `emergencyTopics` | 1 | Risk-management menu |
| `/prevencion-y-gestion-de-riesgo/[topic]` | `pages/prevencion-y-gestion-de-riesgo/[topic].astro` | `emergencyTopics` (`.id`) | 6 | One emergency topic, floating back button to the menu |
| `/[slug]-[mode]` | `pages/[slug]-[mode].astro` | `brochures` (general slugs) | 8 | General brochure × reading mode; the only page outside the set that links in is `/general`, whose cards carry a static `href` to `/${slug}-light` (`general.astro:80`); the four `-dark` routes are reached from the same cards through `data-dark-href` (`general.astro:83`), swapped by the inline theme script, and through the in-set mode switch |
| `/prevencion-en-parques-tierra-sombra` | `pages/prevencion-en-parques-tierra-sombra.astro` | `emergencyTopics` + `parkModules` | 1 | Parks menu, "tierra" palette (light ground). Renders `components/ParksMenu.astro` with `theme="tierra"`; linked from `/` as "Menú 03" — a style option under review, see the parks-menu PR |
| `/prevencion-en-parques-verde-contraste` | `pages/prevencion-en-parques-verde-contraste.astro` | `emergencyTopics` + `parkModules` | 1 | Same menu, "bosque" palette (dark ground, `mode="dark"` footer). Same component, `theme="bosque"`; linked from `/` as "Menú 04", same review |
| `/prevencion-en-parques-tierra-sombra/[topic]` | `pages/prevencion-en-parques-tierra-sombra/[topic].astro` | `emergencyTopics` (`.id`) | 6 | Same six topics as the risk menu, rendered by `EmergencyTopicSection` inside `.pc-theme-tierra`; back button to the "tierra" menu |
| `/prevencion-en-parques-verde-contraste/[topic]` | `pages/prevencion-en-parques-verde-contraste/[topic].astro` | `emergencyTopics` (`.id`) | 6 | The same six topics inside `.pc-theme-bosque`; back button to the "bosque" menu |
| `/[slug]-[style]-[mode]` | `pages/[slug]-[style]-[mode].astro` | `brochures` (school slugs) | 24 | School brochure × style variant × reading mode; **no page outside this set links into it**. `href`s to `[style]` routes do exist, but only inside the set: the mode switch (`BrochurePage.astro:36-37`) and the style switch (`StyleSwitch.astro:24`), the latter rendered only when `process.env.VERCEL_ENV === 'preview'` (`BrochurePage.astro:33`), so the style matrix is preview-only. Do not grep for the literal style ids — both `href`s are template literals. The school brochures render as in-page `<dialog>` modals instead |

**Total: 62 routes** (1+1+1+6+1+6+2+6+6+8+24). Reachability: `/`, the two menus, and their 12 `[topic]` children are reachable; the 8 `/[slug]-[mode]` routes are reachable from outside the set only via `/general` (the `-light` four by static `href`, the `-dark` four by its theme-swap script). The 2 `/prevencion-en-parques-*` menus are reachable from `/` as "Menú 03" and "Menú 04", and each reaches its own 6 `[topic]` children. Those children exist so each option carries its own palette: the `/prevencion-y-gestion-de-riesgo/[topic]` pages are shared with the original menu and must stay blue. Both options are awaiting a decision on which palette ships; the losing one is removed from the home menu together with its menu page and its 6 children. **Orphaned** (no entry point from outside the set): `/general` itself — which nothing links — and the 24 `/[slug]-[style]-[mode]` routes, whose only inbound `href`s come from within the set and, for the style switch, only in preview builds — see issue #7 on linking or removing them.

## Frozen legacy routes

Some routes are printed on QR codes already distributed and are therefore **immutable** — never
rename, move, or delete them, even if they violate a newer standard. The authoritative list and
rationale live in [ADR-0002](adr/0002-frozen-legacy-routes.md); it is the single source of truth
for which routes are frozen. The freeze does not cover the orphaned routes (`/general` and the 24
`/[slug]-[style]-[mode]` routes), which are on no deployed QR code and reachable from no page outside
themselves; they remain free to link or remove.

Parameter values:

- `[mode]` (reading mode): `dark` \| `light`.
- `[style]` (style variant): `default` \| `rounded-glass` \| `timeline-step`.
- General brochure `[slug]`: `sismos`, `inundaciones`, `orden-publico`, `otros-riesgos` → e.g. `/sismos-dark`, `/orden-publico-light`.
- School brochure `[slug]`: `brigadas-escolares`, `plan-escolar-pegir`, `evacuacion-simulacros`, `senales-seguridad` → e.g. `/brigadas-escolares-timeline-step-dark`.
- `[topic]` id (all four menus — the two park menus reuse `emergencyTopics` unchanged): `sismos`, `tsunamis`, `inundaciones`, `incendios`, `deslizamientos`, `prevencion-sustancias-quimicas`.

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

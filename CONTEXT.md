# CONTEXT.md — Domain glossary

Canonical vocabulary for the **Folletos Digitales** project: a static Astro site that publishes
civil-protection self-protection brochures (Protección Civil, Venezuela). Agents must use these
terms as defined here and avoid confusing synonyms. Code identifiers (in English) are listed
alongside each term; Spanish product terms (`Brochure` slugs, `Protección Civil`, route names)
are kept verbatim as identifiers.

> This repository has **two parallel content models** that must NOT be conflated:
> `Brochure` (card-style brochures) and `EmergencyTopic` (extended emergency topics). See below.

## Terms

### Brochure — `Brochure` (`src/data/brochures.ts`)
A compact single-topic guide made of cards (`BrochureCard`) and alert levels (`AlertLevel`),
rendered by `src/components/BrochurePage.astro`. Each brochure has a `slug`.
Current slugs: `sismos`, `inundaciones`, `orden-publico`, `otros-riesgos` (general brochures) and
`brigadas-escolares`, `plan-escolar-pegir`, `evacuacion-simulacros`, `senales-seguridad`
(school planning brochures).

### Emergency topic — `EmergencyTopic` (`src/data/emergencyTopics.ts`, `src/data/schoolEmergencyTopics.ts`)
A content model that is **extended and distinct** from `Brochure`: it carries phases
(`EmergencyPhase`), map nodes (`EmergencyMapNode`), an infographic (`EmergencyInfographicItem`)
and visual steps (`EmergencyVisualStep`). Rendered by `src/components/EmergencyTopicSection.astro`.
Each topic has an `id`. Current ids (in both files): `sismos`, `tsunamis`, `inundaciones`,
`incendios`, `deslizamientos`, `prevencion-sustancias-quimicas`.

- **`emergencyTopics`**: used by the Seguridad y Gestión de Riesgo section.
- **`schoolEmergencyTopics`**: used by the school menu (same ids, content adapted for schools).

> Note: a `Brochure`'s `slug` and an `EmergencyTopic`'s `id` can coincide (e.g. `sismos`) but they
> are separate entities with different structures. Do not interchange them.

### Reading mode — `mode` (`BrochureMode`: `'dark' | 'light'`)
The reading surface of a brochure. It **only affects the visual surface** (dark/light), not the
content. Selected by route (e.g. `/sismos-dark`, `/sismos-light`).

### Style variant — `styleVariant` (`'default' | 'rounded-glass' | 'timeline-step'`)
The brochure's visual treatment, orthogonal to the reading mode. General brochures use `default`;
school brochures are generated in all three variants × two modes.

### Menu / Submenu
Landing pages that link to subpages:
- **Prevención Escolar** (`/prevencion-escolar`): exposes the school topics and planning brochures.
- **Seguridad y Gestión del Riesgo** (`/prevencion-y-gestion-de-riesgo`): links to topic subpages (`/prevencion-y-gestion-de-riesgo/[topic]`).

### PC-VENEZUELA design system
The institutional visual identity documented in `docs/design_guide.md`: rescue orange +
institutional blue + alert yellow, straight geometry (~0px radii), hard shadows, hazard stripes
and diagonals. Tokens and utilities live in `src/styles/global.css`.

### Sponsors footer — `SponsorsFooter` (`src/components/SponsorsFooter.astro`)
A component that must be present in every view (project design rule).

## Vocabulary conventions

- Use **"reading mode"** for dark/light and **"style variant"** for
  `default`/`rounded-glass`/`timeline-step`. Do not call the reading mode a "variant".
- Use **"brochure"** (`Brochure`) and **"emergency topic"** (`EmergencyTopic`) as distinct
  concepts; do not use "brochure" to refer to an `EmergencyTopic`.

If a needed concept is not in this glossary, that is a signal of a possible gap: record it via
`/domain-modeling` rather than inventing a new synonym.

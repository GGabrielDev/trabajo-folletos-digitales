# Folletos Digitales

Static Astro site that publishes digital self-protection brochures for civil protection topics in Venezuela. The home page works as a central dashboard that links to the general brochures and to two topic menus (school prevention, and risk management).

## Purpose

The project turns summarized emergency guidance into mobile-first pages that are easy to open, review, and compare by reading mode while preserving one consistent Protección Civil visual identity.

For the canonical domain vocabulary used across the code and docs — in particular the two parallel content models (`Brochure` vs `EmergencyTopic`) and the reading-mode vs style-variant distinction — see [`CONTEXT.md`](CONTEXT.md).

**Content overview**

The site has two content models (see `CONTEXT.md`):

- **Brochures** (`src/data/brochures.ts`) — card-based guides. General topics: `sismos`, `inundaciones`, `orden-publico`, `otros-riesgos`. School planning brochures: `brigadas-escolares`, `plan-escolar-pegir`, `evacuacion-simulacros`, `senales-seguridad`.
- **Emergency topics** (`src/data/emergencyTopics.ts` and `src/data/schoolEmergencyTopics.ts`) — extended topic content (phases, map nodes, infographic, visual steps). Ids: `sismos`, `tsunamis`, `inundaciones`, `incendios`, `deslizamientos`, `prevencion-sustancias-quimicas`.

## Stack

| Area | Choice |
| --- | --- |
| Framework | Astro 6 |
| UI runtime | Static Astro pages |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` |
| Icons | `lucide-react` |
| Language | TypeScript-compatible Astro project |
| Node.js | `>=22.12.0` |

Although React support is configured, the current site is implemented with `.astro` pages and shared data/components only.

## Design system

The site follows the **PC-VENEZUELA** style guide documented in [`docs/design_guide.md`](docs/design_guide.md). The active implementation uses:

- institutional orange/blue design tokens
- uppercase headline hierarchy with Montserrat
- hard shadows and straight geometry
- alert ribbons, hazard stripes, and diagonal card treatment
- dark and light reading variants within the same visual language

## Routes

| Route pattern | Source | Count | Description |
| --- | --- | --- | --- |
| `/` | `pages/index.astro` | 1 | Main dashboard |
| `/general` | `pages/general.astro` | 1 | Single long-scroll page (currently hidden from the menu) |
| `/prevencion-escolar` | `pages/prevencion-escolar.astro` | 1 | School prevention menu |
| `/prevencion-escolar/[topic]` | `pages/prevencion-escolar/[topic].astro` | 6 | One school emergency topic (from `schoolEmergencyTopics`) |
| `/prevencion-y-gestion-de-riesgo` | `pages/prevencion-y-gestion-de-riesgo.astro` | 1 | Risk-management menu |
| `/prevencion-y-gestion-de-riesgo/[topic]` | `pages/prevencion-y-gestion-de-riesgo/[topic].astro` | 6 | One emergency topic (from `emergencyTopics`) |
| `/[slug]-[mode]` | `pages/[slug]-[mode].astro` | 8 | General brochure × reading mode (e.g. `/sismos-dark`) |
| `/[slug]-[style]-[mode]` | `pages/[slug]-[style]-[mode].astro` | 24 | School brochure × style variant × reading mode |

`[mode]` = `dark` \| `light`; `[style]` = `default` \| `rounded-glass` \| `timeline-step`.

Detailed route inventory: [`docs/routes.md`](docs/routes.md)

## Project structure

```text
.
├── public/
│   ├── assets/                       # Logo and brochure illustrations
│   └── favicon.*
├── src/
│   ├── data/
│   │   ├── brochures.ts              # Card-based Brochure content (general + school planning)
│   │   ├── emergencyTopics.ts        # Extended EmergencyTopic content (risk management)
│   │   └── schoolEmergencyTopics.ts  # Extended EmergencyTopic content (school variant)
│   ├── components/
│   │   ├── BrochurePage.astro        # Renders a Brochure
│   │   ├── EmergencyTopicSection.astro  # Renders an EmergencyTopic
│   │   ├── EmergencyHeader.astro
│   │   ├── SismosInteractiveInfographic.astro
│   │   ├── HomeButton.astro
│   │   ├── ModeSwitch.astro          # dark/light reading mode
│   │   ├── StyleSwitch.astro         # default/rounded-glass/timeline-step
│   │   ├── SponsorsFooter.astro      # Required on every view
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro              # Shared HTML shell and font loading
│   ├── pages/
│   │   ├── index.astro               # Dashboard
│   │   ├── general.astro             # Single long-scroll page (hidden from menu)
│   │   ├── prevencion-escolar.astro  # School menu
│   │   ├── prevencion-escolar/[topic].astro
│   │   ├── prevencion-y-gestion-de-riesgo.astro  # Risk-management menu
│   │   ├── prevencion-y-gestion-de-riesgo/[topic].astro
│   │   ├── [slug]-[mode].astro       # General brochures (dark/light)
│   │   └── [slug]-[style]-[mode].astro  # School brochures (style × mode)
│   └── styles/
│       └── global.css                # Tailwind import, tokens, and guide utilities
├── docs/
│   ├── agents/                       # Per-repo config for the engineering skills
│   ├── design_guide.md               # PC-VENEZUELA design system
│   └── routes.md                     # Full route inventory
├── CONTEXT.md                        # Domain glossary
├── pdf_content.txt                   # Source summary extracted from the reference PDF
└── astro.config.mjs
```

## Local development

```bash
npm install
npm run dev
```

Other available commands:

```bash
npm run build
npm run preview
```

### Configuración de Ruta Base (Despliegue tras Proxy Reverso)

Si necesitas desplegar el sitio bajo una subruta o directorio específico (por ejemplo, `/folleto` usando un proxy reverso de Apache/Nginx), puedes configurar la ruta base en tiempo de ejecución utilizando la variable de entorno `BASE_PATH`.

- **Desarrollo local con subruta**:
  ```bash
  BASE_PATH=/folleto npm run dev
  ```
  *(El sitio estará disponible en `http://localhost:4321/folleto/`)*

- **Compilación para producción con subruta**:
  ```bash
  BASE_PATH=/folleto npm run build
  ```
  *(Todos los recursos, estilos y enlaces internos se compilarán prefijados con `/folleto`)*

- **Comportamiento por defecto**: Si no defines la variable de entorno `BASE_PATH`, el sistema utilizará `/` por defecto, sirviendo el contenido desde la raíz del dominio.

## Content source

The brochure copy appears to be derived from the technical reference material summarized in `pdf_content.txt`, which in turn references Venezuelan civil protection and risk-management guidance such as FUNVISIS and INAMEH material.

This repository currently contains curated static copy. There is no CMS, API, database, or automated content ingestion pipeline.

## Notes for maintainers

- Shared page chrome lives in `src/layouts/Layout.astro`.
- Shared institutional tokens and utilities live in `src/styles/global.css`.
- Card-based brochure content is centralized in `src/data/brochures.ts` and rendered by `src/components/BrochurePage.astro`.
- Extended topic content lives in `src/data/emergencyTopics.ts` and `src/data/schoolEmergencyTopics.ts`, rendered by `src/components/EmergencyTopicSection.astro`.
- The `<SponsorsFooter />` component must remain present on every view.
- The repository does not define lint or test scripts at the moment; `npm run build` is the main project health check.
- Engineering-workflow config for AI agents lives in `docs/agents/` and the domain glossary in `CONTEXT.md`.

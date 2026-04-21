# Folletos Digitales

Static Astro site that publishes digital self-protection brochures for civil protection topics in Venezuela. The home page works as a central dashboard and links to eight brochure pages: four topics, each available in dark and light variants of the same institutional visual system.

## Purpose

The project turns summarized emergency guidance into mobile-first brochure pages that are easy to open, review, and compare by reading mode while preserving one consistent Protección Civil visual identity.

**Current topics**

| Topic | Variants |
| --- | --- |
| Sismos y terremotos | Dark, Light |
| Lluvias e inundaciones | Dark, Light |
| Orden publico y crisis | Dark, Light |
| Riesgos especificos | Dark, Light |

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

| Route | Description |
| --- | --- |
| `/` | Main dashboard for all brochures |
| `/sismos-dark` | Earthquake brochure, dark institutional variant |
| `/sismos-light` | Earthquake brochure, light institutional variant |
| `/inundaciones-dark` | Flood brochure, dark institutional variant |
| `/inundaciones-light` | Flood brochure, light institutional variant |
| `/orden-publico-dark` | Public order brochure, dark institutional variant |
| `/orden-publico-light` | Public order brochure, light institutional variant |
| `/otros-riesgos-dark` | Specific risks brochure, dark institutional variant |
| `/otros-riesgos-light` | Specific risks brochure, light institutional variant |

Detailed route inventory: [`docs/routes.md`](docs/routes.md)

## Project structure

```text
.
├── public/
│   ├── assets/            # Logo and brochure illustrations
│   └── favicon.*
├── src/
│   ├── data/
│   │   └── brochures.ts    # Shared topic content and per-variant copy
│   ├── components/
│   │   ├── BrochurePage.astro
│   │   ├── HomeButton.astro
│   │   └── ModeSwitch.astro
│   ├── layouts/
│   │   └── Layout.astro   # Shared HTML shell and font loading
│   ├── pages/
│   │   ├── index.astro    # Dashboard page
│   │   └── *-{dark,light}.astro
│   └── styles/
│       └── global.css     # Tailwind import, tokens, and guide utilities
├── pdf_content.txt        # Source summary extracted from the reference PDF
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

## Content source

The brochure copy appears to be derived from the technical reference material summarized in `pdf_content.txt`, which in turn references Venezuelan civil protection and risk-management guidance such as FUNVISIS and INAMEH material.

This repository currently contains curated static copy. There is no CMS, API, database, or automated content ingestion pipeline.

## Notes for maintainers

- Shared page chrome lives in `src/layouts/Layout.astro`.
- Shared institutional tokens and utilities live in `src/styles/global.css`.
- Topic content is centralized in `src/data/brochures.ts`.
- `src/components/BrochurePage.astro` renders the common brochure structure for all routes.
- The repository does not define lint or test scripts at the moment; `npm run build` is the main project health check.

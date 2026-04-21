# Folletos Digitales

Static Astro site that publishes digital self-protection brochures for civil protection topics in Venezuela. The home page works as a selector and links to eight brochure pages: four topics, each available in two visual styles.

## Purpose

The project turns summarized emergency guidance into mobile-first brochure pages that are easy to open, review, and compare by design style.

**Current topics**

| Topic | Styles |
| --- | --- |
| Sismos y terremotos | Glassmorphism, Friendly |
| Lluvias e inundaciones | Glassmorphism, Friendly |
| Orden publico y crisis | Glassmorphism, Friendly |
| Riesgos especificos | Glassmorphism, Friendly |

## Stack

| Area | Choice |
| --- | --- |
| Framework | Astro 6 |
| UI runtime | Static Astro pages |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` |
| Icons | `lucide-react` |
| Language | TypeScript-compatible Astro project |
| Node.js | `>=22.12.0` |

Although React support is configured, the current site is implemented with `.astro` pages only.

## Routes

| Route | Description |
| --- | --- |
| `/` | Selector page for all brochures |
| `/sismos-glass` | Earthquake brochure, glassmorphism style |
| `/sismos-friendly` | Earthquake brochure, friendly style |
| `/inundaciones-glass` | Flood brochure, glassmorphism style |
| `/inundaciones-friendly` | Flood brochure, friendly style |
| `/orden-publico-glass` | Public order brochure, glassmorphism style |
| `/orden-publico-friendly` | Public order brochure, friendly style |
| `/otros-riesgos-glass` | Specific risks brochure, glassmorphism style |
| `/otros-riesgos-friendly` | Specific risks brochure, friendly style |

Detailed route inventory: [`docs/routes.md`](docs/routes.md)

## Project structure

```text
.
├── public/
│   ├── assets/            # Logo and brochure illustrations
│   └── favicon.*
├── src/
│   ├── layouts/
│   │   └── Layout.astro   # Shared HTML shell and font loading
│   ├── pages/
│   │   ├── index.astro    # Selector page
│   │   └── *.astro        # Individual brochure pages
│   └── styles/
│       └── global.css     # Tailwind import and custom utilities
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
- Shared visual utilities such as `.glassmorphism-dark` live in `src/styles/global.css`.
- Each topic currently has two separate page files rather than a shared data-driven template.
- The repository does not define lint or test scripts at the moment; `npm run build` is the main project health check.

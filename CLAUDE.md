# CLAUDE.md — Project Guidelines

## Useful Commands

```bash
npm run dev                      # Start the local development server
npm run build                    # Build the static site (generates dist/)
BASE_PATH=/folleto npm run build # Build with a custom base path
```

## Development and Style Rules

1. **Git commits**: Make one descriptive git commit per logical change.
2. **Design system**:
   - Respect the visual styles (`default`, `rounded-glass`, and `timeline-step`) and ensure light/dark mode support in every view.
   - Keep the sponsors footer (`<SponsorsFooter />`) present at all times.
   - Use flexible grids (`flex flex-col`, `flex-1`) in cards to prevent overflow or clipped text.
3. **Communication style**: Reply to the user in Caveman Full mode when the prompt asks for it.
4. **Language policy** (by audience, not by file location):
   - **English** — everything read *in order to work on the repo*: `CLAUDE.md`, `CONTEXT.md`, `README.md`, `docs/agents/*`, `docs/routes.md`, `docs/adr/*`, plus every remote-facing artifact — pull request titles and bodies, issue titles and bodies, review comments, and commit messages. No exceptions.
   - **Spanish** — everything read *as the product*: page copy, brochure text, UI strings, and `docs/design_guide.md` (a visual reference for the team, not an agent process doc). `docs/design_guide.md` is a deliberate, documented exception.
   - Spanish domain terms (`Brochure` slugs, `Protección Civil`, route names) are kept verbatim as identifiers inside English prose.
5. **Frozen legacy routes**: The routes `/`, `/prevencion-escolar` (and `/prevencion-escolar/[topic]`), and `/prevencion-y-gestion-de-riesgo` (and `/prevencion-y-gestion-de-riesgo/[topic]`) are printed on QR codes already distributed by the press team. Their URLs are **immutable**: never rename, move, or delete them, even when they violate a newer standard. Non-compliant aspects of these routes are accepted as legacy. See [ADR-0002](docs/adr/0002-frozen-legacy-routes.md).

## Agent skills

Per-repo configuration the engineering skills (`/triage`, `/to-tickets`, `/to-spec`, `/implement`, etc.) assume. This section is an index; the details live in the linked files.

- **Issue tracker** — issues and pull requests live on the self-hosted Forgejo tracker, not GitHub. See `docs/agents/issue-tracker.md`.
- **Triage labels** — five triage labels drive the workflow. See `docs/agents/triage-labels.md`.
- **Domain docs** — single-context repo (`CONTEXT.md` + `docs/adr/`). See `docs/agents/domain.md`.

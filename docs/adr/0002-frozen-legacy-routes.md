# 2. Frozen legacy routes pinned by deployed QR codes

Date: 2026-09-19

## Status

Accepted

## Context

The press team distributed QR codes pointing directly at specific pages of the live site as part
of the **first QR campaign, deployed September 2026**. Those URLs are now printed and out in the
physical world; they cannot be recalled or reprinted at will. Meanwhile the project is formalizing
routing, naming, and design standards (see `CONTEXT.md`, `docs/routes.md`) that some of these
existing pages predate.

Source: maintainer directive, recorded 2026-09-19. The print artifact lives with the press team,
outside this repository.

## Decision

The following routes are **frozen**: their URLs are immutable and must never be renamed, moved,
or deleted, even when they do not comply with a newer standard.

- `/` (home)
- `/prevencion-escolar` and `/prevencion-escolar/[topic]`
- `/prevencion-y-gestion-de-riesgo` and `/prevencion-y-gestion-de-riesgo/[topic]`

Any non-compliant aspect of these routes (naming, structure, design variant) is accepted as
**legacy**. New standards apply to new routes; they do not license changing these paths.

## Consequences

- Refactors, renames, and route-scheme changes must preserve these exact paths. A redirect is
  not an acceptable substitute, since the QR codes resolve the URL directly.
- Compliance reviews must treat these routes as grandfathered, not as violations to fix.
- This constraint does not extend to routes that are not on a deployed QR code. In particular the
  orphaned routes — `/general` and the 24 `/[slug]-[style]-[mode]` routes, which are linked from no
  page — remain free to link or remove. (The 8 `/[slug]-[mode]` routes are reachable via `/general`
  but are likewise not frozen.)

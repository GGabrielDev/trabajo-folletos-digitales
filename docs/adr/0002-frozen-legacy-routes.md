# 2. Frozen legacy routes pinned by deployed QR codes

Date: 2026-09-19

## Status

Accepted

## Context

The press team has already printed and distributed QR codes that point directly at specific
pages of the live site. Those URLs are now out in the physical world and cannot be recalled or
reprinted at will. Meanwhile the project is formalizing routing, naming, and design standards
(see `CONTEXT.md`, `docs/routes.md`) that some of these existing pages predate.

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
- This constraint does not extend to unlinked/orphaned routes (`/general`, `/[slug]-[mode]`),
  which are not on any deployed QR code and remain free to link or remove.

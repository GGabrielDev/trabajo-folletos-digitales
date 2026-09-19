# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

This is a **single-context** repo.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root: the domain glossary.
- **`docs/adr/`**: read the ADRs that touch the area you're about to work in.

If a relevant ADR doesn't exist yet, **proceed silently**. Don't flag its absence; don't suggest creating one upfront. The `/domain-modeling` skill (reached via `/grill-with-docs` and `/improve-codebase-architecture`) creates ADRs lazily when decisions actually get resolved.

## File structure

```
/
├── CONTEXT.md
└── docs/adr/
    ├── 0001-forgejo-as-source-of-truth.md
    └── 0002-frozen-legacy-routes.md
```

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in `CONTEXT.md`. Don't drift to synonyms the glossary explicitly avoids.

If the concept you need isn't in the glossary yet, that's a signal: either you're inventing language the project doesn't use (reconsider) or there's a real gap (note it for `/domain-modeling`).

## Flag ADR conflicts

If your output contradicts an existing ADR, surface it explicitly rather than silently overriding:

> _Contradicts ADR-0001 (Forgejo as source of truth), but worth reopening because…_

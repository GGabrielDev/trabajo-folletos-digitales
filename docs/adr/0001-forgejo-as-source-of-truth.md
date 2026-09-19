# 1. Forgejo as source of truth, GitHub as backup mirror

Date: 2026-09-19

## Status

Accepted

## Context

The project was originally hosted on GitHub (`GGabrielDev/trabajo-folletos-digitales`). The
maintainer runs a self-hosted Forgejo instance and wants development — code, issues, and pull
requests — to live there rather than on GitHub. Deployment of the site is manual and not
triggered by any git remote, so moving the canonical remote carries no deployment risk.

## Decision

The Forgejo repository `PCivil/folletos-digitales` (`https://git.gaboggamer.online`) is the
**source of truth** for code, issues, and pull requests. GitHub is kept only as an **automatic
push-mirror** for backup; no issues or PRs are opened there.

The engineering skills track issues on Forgejo via its REST API (see
`docs/agents/issue-tracker.md`). Local `origin` points at Forgejo; the GitHub remote is named
`github`.

## Consequences

- All new work (branches, PRs, issues) happens on Forgejo.
- GitHub stays current through the push-mirror, so any GitHub-based integration keeps working.
- Contributors must clone from Forgejo (`git@git.gaboggamer.online:PCivil/folletos-digitales.git`).
- If GitHub is later retired, the push-mirror can simply be removed; nothing else depends on it.

# Issue tracker: Forgejo

Issues and specs for this repo live in a **self-hosted Forgejo** instance (Gitea-compatible).
Agents interact through the REST API at `<base>/api/v1` using `curl`. The instance is
self-hosted on the project owner's VPS (server-side changes are possible when needed).

## Connection

| Variable | Value | Notes |
| --- | --- | --- |
| `FORGEJO_BASE` | `https://git.gaboggamer.online` | API root is `$FORGEJO_BASE/api/v1`; Forgejo 8.x (Gitea 1.22 API) |
| `FORGEJO_OWNER` | `PCivil` | Organization login |
| `FORGEJO_REPO` | `folletos-digitales` | Repository name on Forgejo |
| `FORGEJO_TOKEN` | _(gitignored file, never committed)_ | Personal access token — read from `~/.config/forgejo/token` |

Load the token from the gitignored file — never inline it, never commit it:

```bash
export FORGEJO_BASE=https://git.gaboggamer.online
export FORGEJO_OWNER=PCivil
export FORGEJO_REPO=folletos-digitales
export FORGEJO_TOKEN=$(cat ~/.config/forgejo/token)
API="$FORGEJO_BASE/api/v1/repos/$FORGEJO_OWNER/$FORGEJO_REPO"
AUTH="Authorization: token $FORGEJO_TOKEN"
```

> The Forgejo repo is **not** a mirror of GitHub; it is an independent forge. This project's
> PRs currently live on GitHub (`GGabrielDev/trabajo-folletos-digitales`) while issues/specs
> live here. Git clone (SSH): `git@git.gaboggamer.online:PCivil/folletos-digitales.git`.

## Conventions

- **Create an issue**: `curl -X POST "$API/issues" -H "$AUTH" -H 'Content-Type: application/json' -d '{"title":"...","body":"..."}'`
- **Read an issue**: `curl "$API/issues/<index>" -H "$AUTH"` and comments via `"$API/issues/<index>/comments"`.
- **List open issues**: `curl "$API/issues?state=open&type=issues" -H "$AUTH"`.
- **Comment**: `curl -X POST "$API/issues/<index>/comments" -H "$AUTH" -H 'Content-Type: application/json' -d '{"body":"..."}'`
- **Apply labels**: labels are referenced by numeric id. Resolve ids via `curl "$API/labels" -H "$AUTH"`, then `curl -X POST "$API/issues/<index>/labels" -H "$AUTH" -H 'Content-Type: application/json' -d '{"labels":[<id>,...]}'`.
- **Remove a label**: `curl -X DELETE "$API/issues/<index>/labels/<label-id>" -H "$AUTH"`.
- **Close**: `curl -X PATCH "$API/issues/<index>" -H "$AUTH" -H 'Content-Type: application/json' -d '{"state":"closed"}'`.
- **Create a label** (bootstrap): `curl -X POST "$API/labels" -H "$AUTH" -H 'Content-Type: application/json' -d '{"name":"needs-triage","color":"ededed"}'`.

TLS: if the instance uses a self-signed certificate, add `--cacert <path>` (preferred) or, as a
last resort, `-k` (insecure).

## Pull requests as a triage surface

**PRs as a request surface: no.** _(Set to `yes` if this repo treats external PRs as feature
requests; `/triage` reads this flag. Forgejo shares the issue/PR index space, so `#N` may be
either — resolve with `"$API/pulls/<index>"` then fall back to `"$API/issues/<index>"`.)_

## When a skill says "publish to the issue tracker"

POST a new Forgejo issue via the create command above.

## When a skill says "fetch the relevant ticket"

GET `$API/issues/<index>` (with `/comments`).

## Wayfinding operations

Used by `/wayfinder`. Forgejo supports issue dependencies (`$API/issues/<index>/dependencies`)
and a `wayfinder:map` label convention as on GitHub.

## Server-side administration

The instance runs on a VPS reachable at `<redacted-operator-host>` (sudo for
the owner). TLS certificates are managed on that VPS. Reach for SSH only for genuine server-side
work (backups, monitoring, config); all issue/label operations go through the API above.

# Triage Labels

The triage workflow uses five labels. Each maps to one canonical role; the label string equals
the role name.

| Label | Applied when | Removed / advanced when |
| --- | --- | --- |
| `needs-triage` | An issue arrives unevaluated (default for new incoming reports/requests). | A maintainer has evaluated it and moved it to another state below. |
| `needs-info` | The issue can't be actioned until the reporter supplies more detail. | The reporter answers; re-triage to `ready-for-*` or `wontfix`. |
| `ready-for-agent` | Fully specified; an AFK agent can implement it without further decisions. | An agent picks it up and closes it via a PR. |
| `ready-for-human` | Actionable but requires a human (judgement, access, or design call). | A human implements it and closes it. |
| `wontfix` | The issue will not be actioned. | Closed. |

These labels exist on the Forgejo tracker (`PCivil/folletos-digitales`). When a skill names a
triage role, apply the matching label string above.

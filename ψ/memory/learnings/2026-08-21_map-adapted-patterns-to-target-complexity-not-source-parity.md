---
pattern: When adapting a dev-process pattern from a sibling/parent project, map it against the target repo's actual complexity surface — don't default to structural parity with the source.
date: 2026-08-21
source: rrr: portfolio-website
concepts: [pattern-adaptation, agent-roles, scope-discipline, cross-project-learning]
---

# Map adapted patterns to target complexity, not source parity

Asked to adapt Lumine's 7 AI-agent-role docs (Architect, PM, QA, Security,
DevOps, UX/UI, Developer) into portfolio-website's own dev process. The
tempting default move is structural parity — translate all 7, maybe rename a
couple to "fit." That would have been wrong here: Lumine's roles exist because
it has a backend, a locked API contract, a DB schema, auth, and an automated
test suite. Portfolio-website is a fully static site with none of those. Four
of the seven roles (Architect, Security, QA, most of DevOps) had literally
nothing to attach to in this repo.

The valuable move was inverting the question: instead of "how do I make each
of these 7 roles fit," ask "what does this project's own risk/complexity
surface actually look like, and which roles (if any) map to a real recurring
need." That surfaced 3 real targets — content-guardian (this project's actual
highest-frequency risk: confidentiality leaks and content fabrication, which
no single Lumine role maps to directly — it's PM's content judgment merged
with Security's audit-and-block posture, retargeted from auth/CORS to
confidentiality/honesty), ux-reviewer (design-token drift), and
deploy-verifier (a genuine recurring pain point — no working headless browser
— that had already been solved ad hoc in a prior session and was worth
codifying).

**Why**: forcing parity with a source pattern optimizes for looking similar to
the reference, not for solving the target project's actual problems. A thin
"Architect" role invented for a project with no schema to lock would be
pattern-cosplay — busywork that produces a file nobody will ever have a reason
to invoke, and dilutes the roles that do matter by treating them as equally
weighted siblings.

**How to apply**: before porting any process/role/workflow pattern across
projects, do the mapping exercise explicitly — list the source's components,
then ask "does this repo have the thing this component exists to govern?" for
each one. Skip the ones without a target, and say out loud why they're
skipped (don't just quietly omit them — the omission is itself a decision
worth surfacing, per [[verify-stated-file-state-before-trusting-premise]]'s
broader theme of not letting an unstated assumption stand in for a checked
fact). Where a real need exists but no single source component maps to it
cleanly (confidentiality/honesty here), don't force-fit an existing role name —
build the thing the target project actually needs and note which source roles
it draws from.

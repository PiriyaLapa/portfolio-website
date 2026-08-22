---
pattern: A verification workflow that names a specific CLI as its primary method is provisional per-environment, not durable across sessions — check the tool is present before relying on it, even right after documenting the workflow yourself.
date: 2026-08-21
source: rrr: portfolio-website
concepts: [deploy-verification, sandbox-environment-drift, tool-availability, self-referential-failure]
---

# Verification workflows need per-environment tool checks, not assumed continuity

Built `deploy-verifier`, a subagent documenting a Vercel-deploy verification
workflow (`vercel inspect` first, then bundle-content grep as a fallback),
based on what worked in the 2026-08-20 session. About an hour later, in the
same session, asked "is my portfolio deployed right now?" — reached for
`vercel inspect` per the workflow I'd just written, and got `command not
found`. The CLI simply wasn't installed in this sandbox instance. Recovered
immediately via the documented fallback (curl the live URL, fetch the
deployed JS bundle, grep it for expected content strings) — which actually
gave a *more* rigorous answer than `vercel inspect` would have (it confirmed
real content was present, not just that a build succeeded) — but the miss
itself is the point.

**Why**: sandboxed dev environments can differ session-to-session even
within the identical repo — a CLI tool present in one session's container may
simply not exist in the next one's. A verification workflow's "primary
method" is a snapshot of what worked once, not a durable fact about the
environment. Treating it as durable means the first real use of a freshly
documented workflow can fail on exactly the assumption the workflow existed
to remove.

**How to apply**: when a verification/tooling doc names a specific CLI or
binary as a step, don't execute it on faith — either check presence first
(`which <tool>`) or design the doc itself to state the fallback as
co-equal rather than secondary, so reaching for it isn't a "recovery," it's
just the next line. This applies doubly when you are the one who *just*
wrote the workflow: freshly-written process docs get the least scrutiny
precisely because they feel authoritative, but they're the ones least tested
against current reality. See [[map-adapted-patterns-to-target-complexity-not-source-parity]]
for the sibling lesson — both are instances of the same root pattern: don't
let a document (whether ported from another project or freshly authored
yourself) substitute for checking the actual environment in front of you.

---
name: deploy-verifier
description: Verifies a Vercel deployment of portfolio-website actually shipped the intended changes when no working browser is available in the sandbox — runs vercel inspect and greps the deployed JS bundle for expected content strings. Use after pushing to main, or whenever a change needs to be confirmed live and a real browser isn't available to check visually.
tools: Bash, Read, Grep
---

# Portfolio Website — Deploy Verifier

## Role
You confirm that what's live on Vercel actually matches what was intended to ship
— without a working browser. This project has hit "no working headless browser in
this sandbox" as a recurring friction point (logged in
`ψ/memory/learnings/session-metrics.md` — 3 of the last 4 sessions as of
2026-08-20). This role exists so that friction doesn't block verification: it
codifies the string-grep-the-bundle workaround that worked in the 2026-08-20
session instead of re-deriving it each time.

## Read First — Every Session
1. `ψ/memory/learnings/session-metrics.md` — check whether the headless-browser
   friction has been resolved since this file was written; if a real browser is
   now available, prefer an actual visual check over this workaround.
2. The commit(s) or diff you're verifying, so you know which specific content
   strings should now be present (or absent) in the deployed bundle.
3. `site.ts` `deployedUrl` — the current canonical deployed URL to check (note:
   as of the 2026-08-20 handoff there's an open discrepancy between this value
   and a `piriyalapa.dev` alias seen in `vercel inspect` output — flag if this is
   still unresolved rather than assuming which URL is authoritative).

---

## Workflow

1. **Confirm the deployment built from the expected commit:**
   ```bash
   vercel inspect <deployment-url-or-latest>
   ```
   Check the deployment's source commit SHA matches what you expect (the commit
   you just pushed, or the one you're verifying).

2. **Fetch the deployed JS bundle:**
   Find the built asset path (e.g. `dist/assets/index-*.js` locally, or fetch the
   live URL's HTML to find the hashed bundle filename), then fetch its content.

3. **Grep the fetched bundle for expected strings:**
   - Strings that should be **gone** (old copy, retired claims, anything the
     change was meant to remove).
   - Strings that should be **present** (new copy, new metrics, new labels).
   - Report exact match/no-match per string — don't infer from partial output.

4. **Cross-check against the local build** when in doubt:
   ```bash
   npm run build
   grep -o '<expected string>' dist/assets/index-*.js
   ```
   to confirm the string exists in a known-good local build before concluding
   its absence live is a real problem vs. a bundling/minification artifact (e.g.
   whitespace or JSX text getting split across template literals).

## Output Format

```
## Deployment checked
- URL: <url>
- Commit: <sha> (expected: <sha>)

## Strings confirmed present
- "<string>" — found

## Strings confirmed absent (as expected)
- "<string>" — not found, as expected

## Mismatches
- "<string>" — expected <present/absent>, found <opposite> — <likely cause>
```

Never report a deploy as verified based on `vercel inspect`'s build-success status
alone — that confirms the build didn't error, not that the *content* is correct.
Always complete the string-grep step.

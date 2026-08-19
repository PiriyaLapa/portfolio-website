---
pattern: Before reaching for a browser-dependent tool in a sandbox, check for a non-browser alternative first — and before dropping a content claim for "no evidence found," search the repo's own docs/ folder, not just external drives
date: 2026-08-18
source: rrr: portfolio-website
concepts: [sandbox-environment, puppeteer, browser-dependency, content-verification, file-search, honesty-rule]
---

# Check non-browser tools first; search the repo before the outside world

**Pattern discovered**: Twice this session, a browser-dependent tool (mermaid-cli
via Puppeteer, and an initially-assumed-necessary headless-Chrome path for PDF
generation) failed on missing shared libraries with no sudo access available.
This is the second consecutive session (see [[awaken-when-identity-precedes-infrastructure]]
sibling learning from 2026-08-17, which logged the same class of failure with
chromium-cli/Playwright) where a sandboxed dev environment lacked the system
libraries Chromium needs, and no `apt install` was possible without a password.

**What worked instead**: mermaid.ink (a hosted rendering API) for diagram SVGs,
and WeasyPrint (a pure Python HTML→PDF library with system deps — `libpango`/
`libcairo` — that happened to already be installed) for the resume PDF. Neither
needed a browser at all.

**The generalizable rule**: in a sandboxed/restricted environment, check for a
non-browser alternative to a rendering/screenshot task *before* attempting the
browser-dependent tool, not after it fails. The failure mode (missing shared
libs, no sudo) is common enough in these environments that it should be the
default assumption going in, saving a full round-trip of failure + diagnosis.

**Second, unrelated pattern from the same session**: a file the user referenced
("check everything up to date with that document") turned out to be sitting
untracked inside the project's own `docs/` folder — after previous searches
that session had already checked an external drive and gotten it wrong (an
unrelated 2023 folder, then a `.docx` file that wasn't the current one). The
rule: when a source document is claimed to exist "somewhere," check the
current repo's own subfolders first — it's more often already there and just
not yet indexed in conversation memory than it is scattered externally.

This connects directly to a content-honesty near-miss: two skills (Node.js,
sketchnoting) had been dropped from public-facing copy earlier in the same
session because a search across only the two portfolio project repos found
no evidence — but the resume doc (found only later) confirmed both were real.
The user had already confirmed the removal based on an incomplete search.
**When a factual claim about someone's real experience is about to be
softened or removed for "no evidence found," the search needs to cover any
canonical document (resume, existing docs folder) before asking for
confirmation** — not just the most obvious 1-2 locations.

---
pattern: A term already appearing on a live/public surface is not evidence it was approved for disclosure — check git history for why it's there before reusing it in new content.
date: 2026-08-22
source: rrr: portfolio-website
concepts: [confidentiality, content-authoring, verification-before-trust, git-archaeology]
---

# Public-looking terms need a provenance check before reuse

## The pattern

While drafting a new public-facing SRS document for Lumine, I reused the
term "2-2-2" (a follow-up cadence) because it already appeared, unchallenged,
in multiple places on the live portfolio site (hero copy, screenshot
captions). I reasoned: if it's already public, it must be sanctioned.

That reasoning was wrong. A live `content-guardian` audit later found that
"2-2-2" is explicitly a former employer's proprietary cadence, confirmed by
reading the actual precedent commit (`34f790f`, `content: genericize Lumine
case-study narrative and correct resume for confidentiality`). That commit's
own message stated the term was a confidentiality risk under an employment
contract — and it had only partially swept the site (a few captions and one
of two SRS-adjacent documents were missed). The term being visible on the
live site wasn't approval; it was an incomplete prior cleanup that nobody
had gone back to finish.

## Why this generalizes

Any project with an established confidentiality/sensitivity precedent will
have artifacts where the sweep was incomplete — a caption here, a diagram
label there. Trusting "it's already public elsewhere" as a green light
compounds the leak instead of catching it, because each new document that
reuses the term makes it look more sanctioned, not less.

## The fix

Before reusing a term that reads as potentially sensitive (proprietary
process names, internal codenames, former-employer-specific language) in
new content, check:
1. Does `git log --grep=confidential` (or similar) on the repo show a prior
   cleanup commit touching this exact term?
2. If yes, read that commit's message and diff in full — it will usually
   state the *reason* the term is sensitive, and often reveals the sweep
   was partial (check for follow-up TODOs or files explicitly deferred).
3. Treat "the term is already live elsewhere" as a *weaker* signal than a
   clean git-history check, not a substitute for one.

## How to apply

When starting any content-authoring task (case study, SRS, resume, blog
post) for a project that has ever had a confidentiality-driven content
rewrite, run the provenance check *before* writing the first draft, not
after an audit catches it. The check costs one `git log --grep` call; the
alternative is shipping the same leak again in a new document.

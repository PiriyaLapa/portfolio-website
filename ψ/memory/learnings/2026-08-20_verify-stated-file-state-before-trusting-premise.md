---
pattern: Verify a stated premise about file/document state before treating it as true, even when the human states it with confidence — especially when the premise is load-bearing for a scope decision
date: 2026-08-20
source: rrr: portfolio-website
concepts: [verification, confidentiality, scope-expansion, resume, premise-checking]
---

# Verify stated premises, don't inherit them

**Pattern discovered**: Benz's `/plan` for closing a confidentiality exposure said the
resume file "already has the corrected new version" wording (mirroring what Section A
was about to apply to the site), asking Claude Code to "mirror the same changes here."
That premise was false — `docs/Piriya_Resume_BusinessAnalyst.md` still spelled out the
exact "2-2-2 follow-up business rules (2 days, 2 weeks, 2 months post-purchase)" and
described the tool as "proposed to store leadership," the very framing the whole task was
trying to remove.

**Why it mattered**: this wasn't a cosmetic slip. If the resume's stated-as-fixed premise
had been trusted, the site and diagrams would have been genericized while the live,
QR-shareable site's "Download Resume" button kept serving the exact confidential numbers
one click away — a fix that looked complete in the diff but left the sharpest version of
the actual exposure live.

**What worked**: reading the actual resume file directly (`docs/Piriya_Resume_BusinessAnalyst.md`)
before writing any code, rather than trusting the plan's framing as ground truth. The
discrepancy surfaced immediately via a plain grep for "2-2-2"/"store leadership," and was
raised explicitly to Benz via AskUserQuestion before being folded into the fix — not
silently corrected, not silently skipped.

**The generalizable rule**: when a task's scope or urgency depends on a stated fact about
a file, document, or system's current state ("X is already done," "Y already has the
fix," "Z is up to date"), read the actual current state before proceeding — regardless of
how confidently the human states it. A stated premise is a claim from a point in time, not
a live fact. This is the same failure mode as trusting a stale memory file (see
[[2026-08-18_check-non-browser-tools-and-full-repo-search-first]]), just triggered by the
current conversation's own framing instead of an old note — the fix is identical: read
before you act, especially when the premise is load-bearing for what gets scoped in or
left out.

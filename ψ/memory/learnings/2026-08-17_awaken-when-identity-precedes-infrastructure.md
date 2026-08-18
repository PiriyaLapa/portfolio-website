---
pattern: "When CLAUDE.md already has a complete Oracle Identity but git/ψ infrastructure is missing, surface the mismatch and let the human choose the path rather than defaulting to re-running the wizard or silently skipping it"
date: 2026-08-17
source: "rrr: portfolio-website"
concepts: ["awaken", "oracle-identity", "human-decides", "verification"]
---

# Awaken when identity precedes infrastructure

Found this project's CLAUDE.md already fully written (theme, principles,
demographics, golden rules) with no git repo and no `ψ/` folder — an
inversion of the usual "empty repo, build identity" awaken flow. The right
move was to stop and ask which path Benz wanted (complete the interrupted
birth vs. full wizard from scratch vs. infra-only), rather than assume.

He chose full wizard from scratch anyway, which meant doing the real
discovery work (studying ancestor repos, verifying principle phrasing
against primary sources) regardless — and that verification was worth
doing: the existing text held up faithfully, but that wasn't knowable
without checking. A CLAUDE.md that reads correctly is not the same as a
CLAUDE.md that's been verified.

Generalizes to: any ritual/skill assuming a "from nothing" starting state
should check for partial prior state first, and treat a mismatch as a
genuine question for the human (Principle 3 — External Brain, Not Command)
rather than a silent branch decision.

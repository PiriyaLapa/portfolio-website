# Lumine Case Study PDF — Outline for Review

**Status**: Outline only, no prose written yet — per your steer, this needs
your call on story angle before I write full copy. Issue #7 (FR-6).

**Scope**: Lumine only. Per the sitemap in CLAUDE.md, Lumine is the primary/
detailed case study and Paws & Pace is the secondary/lighter project — Paws
& Pace already gets its full treatment via the Production Gallery, Logic vs.
Live pairs, and its own SRS. This PDF is Lumine's deeper dive.

**Target length**: 5-8 pages, matching the SRS's own reference point.

---

## Section structure

1. **Cover** — title, one-line positioning ("Evidence-Based CRM for Luxury
   Retail Sales Teams"), your name/role.
2. **The Problem** — pulled from the site's existing About narrative: a
   customer buys, says thanks, walks out, and no one follows up. Leadership
   wanted consistent follow-up; doing it by hand didn't scale.
3. **The Approach** — what you actually built and how you built it: owning
   requirements/architecture/QA, directing AI agents in specialized roles,
   tests-before-code discipline. This is where the "not just a claim, here's
   the proof" framing from the site's About section extends naturally into
   more depth than a homepage bullet allows.
4. **System at a Glance** — architecture diagram + the headline metrics
   already on the site (8 routers/24 endpoints, 331 tests, 14 mobile
   screens) presented as a compact fact panel, not prose.
5. **Walkthrough** — 2-3 of the strongest Logic-vs-Live pairs (scheduling →
   queue, customer profile access rule → live screen, Auto-Touch draft-then-
   review → queue screen) with the accompanying screenshots, showing the
   diagram-to-shipped-product connection at a level a homepage teaser can't.
6. **A Real Operational Lesson** — the migration-drift production incident
   from the SRS's Deployment section, softened the same way it already was
   for the public SRS (a resolved lesson about deploy-vs-migrate as two
   steps, not a dwelt-on failure). Shows judgment and growth, not just
   feature output.
7. **Outcome & Reflection** — where the system stands today (deployed, in
   active use), what you'd do differently or extend next, honest and brief.
8. **Evidence Index** — pointers to the live demo, GitHub repo, and the SRS
   PDF, so a reader who wants to go deeper knows exactly where.

## Evidence already available, reusable as-is (no new fabrication needed)
- Real screenshots: `lumine-dashboard.png`, `lumine-customer-profile.png`,
  `lumine-auto-touch.png`, `lumine-followup-dashboard.png` (already in
  `site.ts`'s `uiScreenshots`).
- Diagrams: architecture + the 3 diagram/screen pairs now in `logicVsLive`
  (issue #16, this session).
- Metrics: already-verified, already-public numbers from `site.ts` and the
  new SRS (8 routers/24 endpoints, 331 tests, 14 screens) — reuse, don't
  re-derive.
- Narrative voice: the site's existing About section (rewritten 2026-08-20
  to a first-person Moment → Friction → Pivot → Method structure) is the
  established tone reference — the case study should sound like a longer
  version of that voice, not a new one.

## Story-angle options — your call

**A. Straight feature walkthrough**
Problem → each major subsystem (scheduling, evidence, Auto-Touch, reports)
in turn → outcome. Safest, most conventional case-study shape. Reads well
to a reader skimming for capability coverage.

**B. Operational-maturity angle**
Same spine, but leans harder into section 6 (the production incident) and
frames the whole case study around "shipping something real means owning
what breaks, not just what you built" — the AI-agent-directed build process
becomes a supporting detail rather than the headline. Differentiates more
sharply from a typical bootcamp-project case study, at the cost of spending
less room on feature breadth.

**C. Build-process angle**
Leans into section 3 (directing 7 specialized AI agent roles through
disciplined sprints, tests-before-code) as the throughline, with the
product features as supporting evidence rather than the main event. Most
distinctive if the target audience is BA/SA roles evaluating how you work,
not just what you shipped — but risks reading as more about *how* than
*what*, which could undersell the product itself.

**My read**: option A as the spine with B's incident section kept in (not
as the whole angle, just one strong section) gets you breadth *and* the
one moment of real judgment-under-pressure a pure feature list can't show.
But this is your call, not mine to lock in — happy to draft any of the
three in full once you pick.

---

## Next step
Once you pick an angle (or tell me to adjust the structure itself), I'll
write full prose for review, then produce it the same way as the SRS docs —
a styled, print-ready HTML file you convert to PDF yourself.

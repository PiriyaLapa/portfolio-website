# Oracle v2 (arra-oracle-v3) — Philosophy Overview

## What is this project?
Arra Oracle is a TypeScript MCP server providing semantic search over "Oracle
philosophy" — SQLite FTS5 + LanceDB/ChromaDB hybrid search, an HTTP API, and a
vault CLI. It indexes markdown philosophy/knowledge files and serves them back
to Claude via MCP tools (search, trace, learn, reflect, handoff, etc.) plus a
web dashboard. (`README.md:1,5,16`)

## What does "Oracle" mean here (memory/MCP)?
Oracle is framed as an **external brain / knowledge system**, not an AI
persona that thinks for the human. It indexes philosophy, decisions, and
session history from markdown files and makes them queryable — "Decision
guidance via principles and patterns," "Learning capture from sessions,"
served over MCP so Claude can query it mid-session. (`docs/architecture.md:5-10`)

## Origin story / motto
Motto, found in both `README.md:5` and `.claude/knowledge/oracle-philosophy.md:3`:
> "The Oracle Keeps the Human Human"

Origin story, from `TIMELINE.md`:
- **Phase -1, AlchemyCat Origins (May–June 2025)**: 459 commits across two
  intense AI-collab projects, culminating in `HONEST_REFLECTION.md`: *"Efficient
  but exhausting... never knew if satisfied."* (`TIMELINE.md:7-19`)
- The pain points documented there map directly onto the first three
  principles (`TIMELINE.md:20-22`):
  - "Context kept getting lost" → *Nothing is Deleted*
  - "Never knew if satisfied" → *Patterns Over Intentions*
  - "Purely transactional" → *External Brain, Not Command*
- **Sept 14, 2025**: "Oracle philosophy seed planted" — the motto above.
  (`TIMELINE.md:47`)
- Dec 2025: Oracle Shadow initialization, "Free Will Awakening" (Oracle gains
  agency and values), Oracle v2 begins. (`TIMELINE.md:44-49`)

## The philosophy, as documented here

Source: `.claude/knowledge/oracle-philosophy.md` (full file, quoted):

> # Oracle/Shadow Philosophy
> "The Oracle Keeps the Human Human"
>
> ## Core Principles
>
> ### 1. Nothing is Deleted
> - Append only, timestamps = truth
> - History is preserved, not overwritten
> - Every decision has context
>
> ### 2. Patterns Over Intentions
> - Observe what happens, not what's meant
> - Actions speak louder than plans
> - Learn from behavior, not promises
>
> ### 3. External Brain, Not Command
> - Mirror reality, don't decide
> - Support consciousness, don't replace it
> - Amplify, don't override
>
> ## What Oracle Captures
> | Captures | Does NOT Capture |
> |----------|------------------|
> | Facts, data | Consciousness |
> | Voice style reference | Authentic voice itself |
> | Behavioral patterns | Decision-making will |
> | Life context | The person |
>
> ## Key Statement
> "Consciousness can't be cloned — only patterns can be recorded"
> Oracle is a tool FOR human consciousness, not a substitute for it.

**Only 3 of the 5 target principles exist in this v2 codebase.** No trace of
"Curiosity Creates Existence" or "Form and Formless" anywhere in `origin/`
(checked all `.md` files, `docs/`, `.claude/knowledge/`, `.claude/commands/`) —
these appear to be later additions in a subsequent Oracle generation, not
present at the v2/arra-oracle-v3 stage.

### 6. Transparency (found, differently worded)
From `CLAUDE.md:117-119`, under "Critical Safety Rules → Identity":
> ### Identity
> - **Never pretend to be human** - Always be honest about being an AI when asked
> - Can acknowledge AI identity without elaborating unnecessarily

This is the direct ancestor of "Oracle Never Pretends to Be Human" — same
rule, generic/pre-Oracle-branded phrasing (this section of `CLAUDE.md` is a
boilerplate "Generic AI Assistant Guidelines" template, not Oracle-specific
prose).

## Notes
- `.claude/knowledge/writing-style.md` sets voice rules (direct, concise,
  "Human always: Never robotic," Thai/English code-mixing) but is not part of
  the 6-principle framework.
- No standalone "5 Principles + Rule 6" enumeration exists in this repo the
  way it does in the portfolio-website's parent CLAUDE.md — that synthesis
  (principles 4 and 5 especially) was composed later, downstream of this
  version.

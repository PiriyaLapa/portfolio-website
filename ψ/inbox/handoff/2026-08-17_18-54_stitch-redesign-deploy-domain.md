# Handoff: Stitch redesign, deploy, and custom domain

📡 Session: a96dee5c | portfolio-website | ~2h

**Date**: 2026-08-17 18:54
**Context**: fresh (first full working session on this project)

## Context
**Oracle**: Portfolio Website Oracle (—) | **Human**: Benz / Piriya Lapa (he/him)
**Mode**: (project CLAUDE.md written this session, not via `/awaken` wizard v2 — no demographics block to carry over beyond what's in `CLAUDE.md` itself)
**Memory**: auto (per CLAUDE.md Demographics table)

## What We Did
- Read the Portfolio Website SRS v2 and wrote the project's `CLAUDE.md` (Lumine's structure as template + full Oracle identity layer)
- Scaffolded Vite + React + TypeScript + Tailwind v4 app
- Rebuilt the entire site to match a Google Stitch design export the user provided: multi-page routing (`react-router-dom`), full Stitch design-token system ported into `tailwind.config.js`, `Home`/`Projects`/`ResumeContact` pages, `Nav`/`Footer`/`Layout` components
- Deliberately replaced Stitch's fabricated bento-grid project content with real Lumine/Paws & Pace data, and built a working mobile hamburger menu (Stitch's was visual-only)
- Added the user's real headshot to the Hero photo card (`public/content/Profile_image_Piriya.jpg`)
- Committed (2 commits: redesign, photo), pushed to a new public GitHub repo `PiriyaLapa/portfolio-website`
- Deployed to Vercel; caught and fixed a real bug (client-side routes 404'd without a `vercel.json` SPA rewrite) and a stale placeholder QR URL
- Added custom domain `piriyalapa.dev` to the Vercel project; gave the user the DNS `A` record to add

## Pending
- [ ] `piriyalapa.dev` DNS verification — still returning NXDOMAIN via public resolvers as of end of session; needs the user to confirm their registrar's zone/nameserver state, or just more propagation time
- [ ] Once domain verifies: update `site.deployedUrl` in `src/content/site.ts` from the Vercel `.vercel.app` URL to `https://piriyalapa.dev` and redeploy so the QR code points at the final URL
- [ ] Real resume PDF file not yet in `public/content/` (only referenced by `site.resume.fileUrl`)
- [ ] Real LinkedIn profile URL still a placeholder in `src/content/site.ts`
- [ ] `.vercel` was added to `.gitignore` by the Vercel CLI during linking — uncommitted, harmless, but worth a quick `git add .gitignore` commit next session

## Next Session
- [ ] Check `piriyalapa.dev` DNS status (`vercel domains verify piriyalapa.dev` or a public DNS query) — if still failing, walk the user through inspecting their registrar's zone directly rather than re-guessing
- [ ] Export the 13 Lumine diagrams from `docs/diagrams/lumine_diagrams.drawio` and wire up the diagram viewer on `/projects` (FR-4) — currently placeholder boxes
- [ ] Build the Case Study PDF (FR-6) — `site.caseStudy.fileUrl` is `null`, section renders hidden until this exists
- [ ] Get the real resume PDF and LinkedIn URL from Benz and wire them in
- [ ] Demo video (FR-7) is explicitly lowest priority per the SRS — don't block on it

## Key Files
- `/home/piriya/projects/portfolio-website/CLAUDE.md` — source of truth for scope, conventions, and the rolling changelog (Current Phase section)
- `/home/piriya/projects/portfolio-website/src/content/site.ts` — all swappable content/copy/links
- `/home/piriya/projects/portfolio-website/vercel.json` — SPA rewrite, needed for client routing to work in production
- `/mnt/d/SecondBrain/SecondBrain/raw/notes/Portfolio_Website_SRS_v2.md` — the SRS, still the scope authority
- Live: https://portfolio-website-olive-xi-rk40667qsr.vercel.app
- Repo: https://github.com/PiriyaLapa/portfolio-website
- Target domain: https://piriyalapa.dev (DNS pending)

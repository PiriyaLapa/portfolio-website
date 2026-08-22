Superseded 2026-08-22. Pre-patch originals of all 20 deployed diagram SVGs
(13 Lumine, 7 Paws & Pace), before internal "Verified [date] against [file]"
annotations and the proprietary "2-2-2"/"2D/2W/2M" cadence terminology were
stripped/genericized.

Kept per this project's diagram convention (CLAUDE.md, "Nothing is Deleted"):
prior exports are archived, not deleted, when a diagram is re-exported or
patched. Moved here (outside `public/`) rather than left under
`public/content/diagrams/archive/`, since Vite copies everything under
`public/` verbatim into the production build — an archive folder in that
path would have shipped the un-redacted originals to the live domain even
though nothing links to them. See `src/content/site.ts` for the current,
patched set.

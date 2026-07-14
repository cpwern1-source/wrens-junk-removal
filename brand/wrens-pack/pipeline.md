# Pipeline — Wren's Junk Removal

## Gates
- One-off / small batch (≤8): Generation Brief → contact sheet of candidates → final pick verdict.
- Cost ceiling per run without re-confirm: **40 credits**. Anything above → re-confirm with Carson.

## File homes
- Masters (gitignored): `brand/wrens-pack/generated-masters/<batch>/`
- Shipped finals: `public/brand/` (web assets the site imports), descriptive kebab-case names
  (e.g. `public/brand/truck-logo-hero.webp`).
- Briefs: `brand/wrens-pack/briefs/`
- Reflections: `brand/wrens-pack/scratch/reflections/`

## Shipping compression
- Convert masters to web with `cwebp -q 88` (or `sips` to PNG if transparency needed).
- Web cap ~400 KB for hero art; keep a full-res master.

## Run-doc
None yet — this pack runs from free-text briefs for now.

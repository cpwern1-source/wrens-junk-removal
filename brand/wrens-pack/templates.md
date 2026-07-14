# Prompt Templates — Wren's Junk Removal

Locked prompt templates with slots. Archive entries; never delete.

---

## T1 — truck-logo-sketch · v1 · experimental

- **Use case:** Transform the real Tacoma reference into a flat illustrated logo emblem — truck in
  side profile, bed stacked high with junk.
- **Model:** `nano_banana_2` · refs: `public/truck.webp` (truck identity) · `--aspect_ratio 3:2`
  · `--resolution 2k` (candidates) / `4k` (final)
- **Tier:** experimental (pending first calibration)

**Prompt fragment (slots in CAPS):**

> A flat illustrated logo emblem of a rugged pickup truck shown in clean side profile, its cargo bed
> piled high and overflowing with junk — old furniture, a worn armchair, cardboard boxes, a rolled
> mattress, scrap lumber and broken crates stacked and roped down above the cab line. Redraw the
> reference truck as a GENERIC stylized pickup: keep its tan/sand body color, lifted stance and
> chunky off-road tires, but remove all manufacturer badges, grille emblems and license plates — no
> real-world branding anywhere. STYLE_BLOCK. The whole mark sits on a clean CREAM background, drawn as
> a single cohesive badge that reads clearly at small sizes. VARIANT_NOTE. Bold confident linework,
> flat screen-print fills, subtle distressed texture — a designed emblem, not a photograph.

- **STYLE_BLOCK** = the locked style block from `style.md` (verbatim).
- **VARIANT_NOTE** = per-candidate steer (clean 2-color vector / inked cross-hatch engraving / vintage
  distressed workwear patch).
- Preservation is scoped to *stance + tan color only* — everything else transforms to illustration.

**Example outputs:** (none yet — first run)

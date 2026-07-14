# Style — Wren's Junk Removal (LOCKED)

The aesthetic spine. The locked style block is prepended to logo/illustration prompts verbatim.

## Locked style block

> Illustrated logo art — a clean, hand-drawn vector style with confident ink linework and flat
> screen-print color fills, the look of a rugged Montana workwear patch or trail-sign badge. Limited
> palette: forest green (#2F4A33), warm sand/tan (#C7A86A), navy ink (#1E2A33), on a cream (#F5F1E6)
> ground. Bold, legible, slightly distressed edges — emphatically a printed emblem, NOT a photograph,
> not 3D, no photorealism, no gradients-as-rendering. Flat, graphic, designed.

## Brand palette (the only colors)

| Role | Hex |
|---|---|
| Forest green (primary linework / fills) | `#2F4A33` |
| Sand / tan (truck body, accents) | `#C7A86A` |
| Navy ink (deep outline / detail) | `#1E2A33` |
| Cream (background / banner) | `#F5F1E6` |
| Slate (mountain shading, sparing) | `#8FA0AD` |

## Shot classes

- **logo / emblem** (product-led): the subject is large, centered, legible, on a clean ground.
  Designed to read at small sizes. This is the default class for this pack.
- **scene** (scene-led): future — lifestyle/job-site imagery. Not yet calibrated.

## Model routing (pinned)

| Job | Model | jst | Why |
|---|---|---|---|
| Logo/illustration from a real ref | Nano Banana 2 | `nano_banana_2` | Holds the truck's identity from `--image` while restyling hard to flat illustration. Verified transform path. |
| Cheap composition drafts | Seedream 4.5 | `seedream_v4_5` | Vector-illustration niche; only if NB2 over-renders. |

Pinned default: `nano_banana_2`. Model swaps are a versioned event.

## Final-render spec

- Aspect: **3:2** for the landing hero (matches the hero card, 1200×800). 1:1 for a future standalone badge.
- Resolution: candidates at **2k**; final pick re-rolled at **4k** for crisp edges.
- Master format: PNG from the model; shipped as compressed WebP/PNG with transparent or cream ground.

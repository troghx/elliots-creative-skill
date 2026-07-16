# Color and Contrast System

Use this reference to choose colors by meaning, page context, and verified contrast. It is a decision system, not a list of fashionable palettes.

## Judgment on FullwindCSS

[FullwindCSS](https://fullwindcss.com/) interpolates the classic Tailwind palette from 0–1000, making intermediate steps available between the standard Tailwind stops. Its implementation uses Chroma.js in CIELAB mode and preserves the original Tailwind anchor colors.

Use it as a **precision shade finder**, not as a palette director or accessibility checker.

### Good uses

- move a brand/action shade just enough to pass contrast without changing its character
- find a quieter hover, active, border, tinted surface, or focus shade between standard Tailwind steps
- build a smooth tonal ramp around an already approved hue
- export one selected value in hex, RGB, HSL, LAB, LCH, OKLAB, or OKLCH

### Bad uses

- importing all 27,000+ colors into a project
- choosing arbitrary classes such as `text-blue-687` throughout components
- assuming adjacent numbers guarantee accessible contrast
- treating interpolation as proof that a palette is harmonious
- installing the package merely to avoid defining semantic tokens
- using industry stereotypes as automatic color decisions

The public package currently declares Tailwind 3.4.x as a dependency even though the website markets Tailwind v4 variables, has no real test script, and does not include Tailwind's newer neutral families such as taupe, mauve, mist, and olive. Prefer the live Tailwind palette or the project's installed version as source of truth. Do not install FullwindCSS by default.

## The Color Contract

Before coding, define a small semantic system:

| Role | Purpose |
|---|---|
| `canvas` | page-level background |
| `surface` / `surface-raised` | content layers with real hierarchy |
| `text` | primary reading color |
| `text-muted` | secondary information that still passes text contrast |
| `border` | separation when spacing alone is insufficient |
| `action` / `action-hover` / `on-action` | primary interaction and its label |
| `focus` | keyboard focus indication |
| `success` / `warning` / `danger` / `info` | semantic feedback, each with text/icon support |

Add roles only when the interface needs them. A page rarely needs every shade in a hue family.

## Selection Sequence

1. **Read the real brand and content.** Existing brand colors, photography, product materials, audience, emotional target, and risk level come first.
2. **Choose neutral temperature.** Cool, neutral, or warm determines the atmosphere more reliably than adding more accents.
3. **Choose one dominant accent.** It owns primary actions and the strongest emphasis.
4. **Add at most one supporting accent.** It must have a separate job, not merely make the page more colorful.
5. **Reserve semantic colors.** Success, warning, danger, and information must remain recognizable and must include text or icon cues.
6. **Map semantic tokens.** Components consume roles, not raw palette indices.
7. **Test every foreground/background pair.** Test final composited colors, not source values before opacity or overlays.
8. **Tune with Fullwind only if needed.** Select the minimum intermediate shades that solve a specific contrast or state problem.

## Contrast Targets

WCAG 2.2 minimums:

- normal text: **4.5:1**
- large text: **3:1**
- meaningful icons, control boundaries, focus indicators, and graphical objects: **3:1** against adjacent colors
- color must never be the only signal for state, action, or information

Quality targets for this skill:

- body, legal, instructional, and dense reading text: target **7:1** when the art direction permits
- large display headings: target **4.5:1** even though the formal minimum may be 3:1, especially with thin or unusual fonts
- CTA labels: target **4.5:1** regardless of visual size
- muted text and placeholders: still target **4.5:1** because they are readable text, not decoration
- thin icons and strokes: exceed 3:1 when possible because anti-aliasing weakens them visually

Thresholds are not rounded. A computed 4.49:1 does not pass 4.5:1.

Use `scripts/contrast-check.mjs` for solid hex pairs:

```bash
node scripts/contrast-check.mjs "#111827" "#ffffff"
node scripts/contrast-check.mjs --min 7 "#111827" "#ffffff"
```

The script cannot judge gradients, opacity, images, video, blend modes, or changing animation frames. Capture or compute their final rendered colors and inspect the worst-case frame.

## Page-Type Directions

These are starting directions, never brand replacements.

| Page type | Neutral direction | Accent directions | Guardrail |
|---|---|---|---|
| Finance, legal, medical, debt, civic | cool slate/gray/mist or disciplined neutral | blue, teal, restrained emerald | calm trust; red stays error/danger and fear tactics stay out |
| SaaS, dashboard, developer tool, data | slate, zinc, gray | blue, indigo, violet, cyan | keep chroma out of dense reading surfaces; status colors remain semantic |
| Luxury, editorial, architecture, premium service | stone, neutral, taupe, mauve, near-black + ivory | restrained amber, olive, rose, deep blue | use material and spacing before saturation; no low-contrast champagne text |
| Food, hospitality, beauty, consumer lifestyle | warm stone/neutral | orange, amber, rose, green | yellow/lime usually need dark text; photography should not fight the CTA |
| Wellness, nature, sustainability | stone, mist, olive, warm neutral | emerald, teal, sky, botanical green | pale green text commonly fails; avoid equating green alone with success |
| Creative, culture, music, gaming, entertainment | zinc, slate, near-black | violet, fuchsia, cyan, lime, electric blue | vivid accents and gradients are atmospheric; functional text remains stable |
| E-commerce and conversion landing | neutral base aligned to product imagery | one brand/action color plus semantic states | one dominant CTA; sale styling must not be confused with danger/error |
| Documentation, education, content-heavy | gray, slate, mist, paper-like warm neutral | blue, teal, restrained indigo | prioritize long-reading contrast; labels/icons accompany color coding |

If brand identity contradicts the table, keep the brand and solve contrast through lightness, surfaces, borders, type weight, and token roles.

## Neutral Family Heuristics

- **Slate / mist:** technical, calm, institutional, contemporary.
- **Gray / neutral:** flexible and low-bias; lets imagery or brand color lead.
- **Zinc:** sharper, more editorial, product-oriented, and good for dark UI.
- **Stone / taupe:** warmer, tactile, hospitality, craft, wellness, and luxury.
- **Mauve:** softer editorial or beauty tone without turning every surface pink.
- **Olive:** natural and grounded; use carefully for text because midtones can lose contrast.

Do not choose a neutral family from name alone. View it beside the actual photography, font rendering, and accent.

## Light and Dark Modes

Dark mode is not a numeric inversion of light mode.

- define semantic tokens separately for each mode
- avoid pure black and pure white when a softer pair improves comfort without reducing contrast
- dark surfaces often need less saturated, slightly lighter accents
- light borders may need alpha, but test the final composite against every adjacent surface
- shadows are weaker in dark mode; use lightness separation before adding glowing outlines
- test text, icon, border, focus, and state colors independently in both modes

## Colored Surfaces and Same-Hue Pairing

Tinted surfaces can feel more authored than gray boxes:

- choose a very light or very dark surface from the same hue family
- move the foreground far enough in lightness to meet the required ratio
- keep chroma secondary to contrast
- use Fullwind intermediate stops to tune the pair only after measuring it

Never assume `blue-700` on `blue-100` passes simply because the numbers are far apart.

## Images, Video, Gradients, and Glass

- text over media needs a stable local contrast strategy: protected negative space, solid/scrim layer, or controlled crop
- test the lightest and darkest frames of animation or video
- gradients must pass at the weakest point beneath the text
- backdrop blur does not guarantee contrast; content behind it changes
- alpha colors must be composited with the real background before measurement
- do not put legal copy, prices, consent, or form errors on unstable media

## State Matrix

Verify at least:

- default
- hover
- pressed/active
- selected/current
- focus-visible
- loading
- disabled
- success
- warning
- error/danger
- informational
- light mode
- dark mode

Disabled controls may be exempt from some WCAG contrast requirements, but essential information must never become disabled-looking or unreadable.

## Color-Vision and Meaning

- pair status color with text, icon, pattern, position, or shape
- avoid red vs. green as the only comparison
- links inside body text need more than a subtle hue difference when surrounding text is close in luminance
- charts need labels, direct annotation, patterns, or distinct luminance—not a rainbow legend alone
- test grayscale and common color-vision simulations when color encodes multiple categories

## Token Example

Prefer semantic tokens:

```css
:root {
  --canvas: #ffffff;
  --surface: #f8fafc;
  --text: #0f172a;
  --text-muted: #475569;
  --border: #cbd5e1;
  --action: #4338ca;
  --action-hover: #3730a3;
  --on-action: #ffffff;
  --focus: #2563eb;
}
```

The values are examples, not universal defaults. Verify them and preserve the project's naming conventions.

If Fullwind yields an intermediate shade such as indigo 625, copy only the selected output into a project token such as `--action`; do not make the component depend on `indigo-625` as a design decision.

## Final Checklist

- palette reflects the actual brand, audience, content, and risk level
- neutral temperature was chosen intentionally
- one accent dominates; supporting color has a separate job
- semantic roles replace raw shade usage
- normal text passes 4.5:1 and priority reading targets 7:1 when viable
- meaningful UI visuals pass 3:1
- muted, placeholder, focus, and state colors were tested
- color is not the sole information carrier
- light/dark and all interaction states were checked
- photos, gradients, transparency, and animation were tested at worst case
- Fullwind was used only for deliberate intermediate shades
- no giant generated palette or unnecessary dependency was added

## Primary References

- [FullwindCSS palette](https://fullwindcss.com/)
- [FullwindCSS source](https://github.com/laurentlahmy/fullwindcss)
- [Tailwind CSS colors](https://tailwindcss.com/docs/colors)
- [WCAG 2.2: Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [WCAG 2.2: Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [WCAG 2.2: Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)

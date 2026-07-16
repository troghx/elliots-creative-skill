# Motion Library

Motion is a state change with a purpose. Define the state model before choosing a library or easing curve.

## Motion Brief

For every animated system specify:

1. **Meaning:** what does movement communicate?
2. **Trigger:** load, time, scroll, pointer, form progress, or explicit action?
3. **Initial state:** what is visible before animation?
4. **Settled state:** where does it stop?
5. **Interruption:** what happens if the user scrolls, clicks, navigates, or backgrounds the tab?
6. **Reduced motion:** what static or crossfade version preserves meaning?
7. **Performance budget:** assets, duration, frame cost, and mobile fallback.

## Default Motion Budget

- one narrative hero sequence
- zero to two ambient loops
- up to three reusable micro-interaction types
- no more than one attention-seeking element at a time

If everything moves, nothing leads.

## Timing and Easing

Use ranges, then tune by screenshot/video review:

| Motion | Typical duration | Easing |
|---|---:|---|
| Hover/press feedback | 120–220 ms | ease-out |
| Label or icon swap | 180–300 ms | cubic-bezier with quick settle |
| Card/state transition | 300–550 ms | ease-in-out |
| Section reveal | 450–800 ms | decelerating ease |
| Hero transformation | 6–12 s | slow staged interpolation |
| Ambient loop | 12–30 s | linear or symmetric gentle ease |

Avoid spring motion for serious financial, legal, grief, or health decisions unless it is extremely restrained.

## Narrative Motion Families

### Environmental Transformation

The world changes to represent progress: storm to sunlight, fog to clarity, winter to spring, scattered parts to an organized system.

**Use when:** the service promises a real transition and the metaphor remains honest.

**Implementation:** matched image states, layered overlays, short video, WebGL/canvas only when necessary.

**Do not:** imply a guaranteed result. The change can represent taking the next step, not a promised outcome.

### Spatial Parallax

Foreground, subject, atmosphere, and background move at different speeds.

**Use when:** the scene has real depth and the motion supports focus.

**Rule:** two or three depth bands are enough. Keep travel under roughly 2–4% of viewport size for ambient motion.

### Scroll Choreography

One visual stays while text or states advance.

**Use when:** explaining a mechanism, process, or before/after.

**Rule:** scrolling must still work normally; never trap the user in a long cinematic sequence.

### Object Physics

Products or cards stack, orbit, magnetize, unfold, or collide.

**Use when:** the physical behavior explains organization, choice, assembly, or material.

**Rule:** preserve predictable click targets and disable exaggerated movement under reduced motion.

### Typographic Motion

Words mask, track, swap, count, or reveal.

**Use when:** language itself is the concept.

**Rule:** do not animate long paragraphs. Keep the accessible name stable when labels swap.

### Light and Focus

A beam, reflection, shadow, blur, or exposure change guides attention.

**Use when:** clarity, discovery, precision, or material quality matters.

**Rule:** animate low-frequency shapes; avoid flicker, strobe, or fast contrast oscillation.

### Feedback and Celebration

Progress indicators, checkmarks, confetti, or environment changes acknowledge completion.

**Use when:** the user has completed a meaningful action.

**Rule:** celebration follows completion, never pressures the user before consent or submission.

## Storm-to-Sun Hero Recipe

This recipe fits a debt-relief lead generator when handled calmly.

### Concept

The user arrives in uncertainty, sees a path through the landscape, and the atmosphere becomes clearer as they take concrete steps. The weather represents orientation and agency, not a guaranteed financial result.

### Preferred State Sequence

1. **Overcast calm, 0–2 s**
   - cool color temperature
   - slow cloud drift
   - light fog over distance
   - no lightning, violent rain, or panic effects
   - headline and CTA already readable

2. **Opening, 2–7 s**
   - cloud mask moves away from the visual path
   - fog opacity falls
   - a warm highlight travels along the path or water edge
   - scene saturation rises slightly

3. **Clear direction, 7–12 s**
   - sunlight reaches the destination first, not the entire image
   - water reflection or foliage receives a subtle warm response
   - motion settles into a very slow environmental loop

4. **Interaction-linked progress**
   - form step 1: rain/fog stops
   - form step 2: horizon brightens
   - form step 3: path receives light
   - successful submission: full warm state plus restrained confetti

### Asset Options

**Best fidelity:** a 6–12 second art-directed video with a poster frame and separate static mobile crop.

**Best control:** two matched generated images plus cloud, fog, light, and reflection layers. Crossfade state changes with CSS masks.

**Lowest cost:** one still image with animated gradient light, fog overlays, and local color grading. This creates atmosphere but cannot convincingly transform real weather.

### Layer Stack

1. base clear image
2. overcast grade or alternate image
3. cloud/fog mask
4. rain or ripple layer only if subtle
5. warm light bloom localized to path/horizon
6. stable vignette or text contrast layer
7. content and CTA, never distorted

Set decorative layers to `pointer-events: none` and `aria-hidden="true"`.

### Performance

- Prefer AV1/WebM plus MP4 fallback when video is justified.
- Supply a compressed poster.
- Lazy-load noncritical layers after the headline and CTA.
- Stop or reduce loops when the tab is hidden.
- On mobile, use fewer layers and a deliberate portrait crop.
- Animate transform, opacity, filter, or mask cautiously; avoid repainting huge blurred elements every frame.

### Reduced Motion

Show a static partly-cleared scene or a 200–300 ms crossfade after explicit form progress. Remove cloud travel, parallax, rain, and continuous ripples.

### Conversion Guardrail

A permanently violent storm increases stress for users already worried about debt. Start contemplative, not catastrophic. The page should feel clearer within the first few seconds and the CTA should never wait for the animation.

## Micro-Interaction Recipes

### Magnetic CTA

Move the button no more than 4–6 px toward the pointer while the icon moves slightly more. Disable for touch and reduced motion. Keep focus behavior equivalent to hover.

### Spot Fill Button

A small circle grows behind the label on hover/focus. Swap label color at the midpoint and guarantee contrast throughout.

### Label Swap Button

Translate the current label 6–10 px out while the result label or arrow enters. Keep the DOM label or `aria-label` stable.

### Liquid Glass Focus

Increase border luminance and shift one refraction highlight on hover/focus. Do not continuously wobble the entire glass surface.

### Path Light Sweep

A narrow, soft light moves along a real path in the scene toward the CTA or destination. Trigger once on load or when the CTA enters view.

### Story Card Change

Use a 220–350 ms opacity and 6–12 px vertical transition. Keep the container size fixed and do not animate layout height.

### Stacked Card Advance

Front card moves out, next card lifts, stack settles. Provide buttons and keyboard navigation; drag is optional, not the only control.

### Success Confetti

Trigger only after confirmed success. Keep it under roughly 1.5–2.5 seconds, avoid covering the confirmation copy, and suppress under reduced motion.

## Accessibility and Safety

- Respect `prefers-reduced-motion: reduce`.
- Avoid flashes or large rapid luminance changes.
- Do not require hover to understand content.
- Keep focus indicators visible over animated surfaces.
- Pause long or repeated movement when practical.
- Never animate away legal disclosures, prices, or consent language.
- Keep forms usable during scene transitions.

## Performance Verification

- Watch the animation on a mid-range mobile viewport.
- Confirm no layout shift when assets load.
- Check CPU/GPU usage when the page is idle.
- Test background-tab return and interrupted transitions.
- Verify every state with long copy and 200% zoom.
- Capture the darkest and lightest frames and test text contrast in both.

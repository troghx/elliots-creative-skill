---
name: elliots-creative-skill
description: Use when a website, landing page, hero, section, button system, icon system, color system, background, or interaction needs a distinctive creative direction instead of generic layout patterns. Helps explore strong visual concepts, reproduce supplied visual references responsibly, compose complete page systems, build semantic color and contrast systems, select meaningful Hugeicons, design narrative motion, and implement the strongest direction.
---

# Elliot's Creative Skill

## Purpose

Turn a marketing, product, or operational goal into the right interface: memorable when the surface must persuade, compact when it must help a known user finish a repeated task. Use this skill for creative exploration, redesigns, landing pages, internal tools, signature moments, and interactions that must feel authored rather than assembled.

This is a composition, iconography, and motion skill. References may guide an original direction or, when the user asks for fidelity, serve as a visual target to reproduce closely from the rendered preview. Rebuild the result independently for the actual brand, content, and codebase; never unlock or extract gated code or proprietary assets.

## Load References Selectively

- Read [creative-composition.md](references/creative-composition.md) when choosing layouts, section patterns, buttons, backgrounds, cards, and visual systems.
- Read [motion-library.md](references/motion-library.md) when the request includes animation, scroll behavior, cinematic transitions, ambient movement, or micro-interactions.
- Read [jiro-audit.md](references/jiro-audit.md) when Jiro is mentioned or when a broad menu of current creative-web patterns would help.
- Read [hugeicons.md](references/hugeicons.md) whenever implementation includes navigation, buttons, inputs, features, steps, statuses, metadata, empty states, or directional affordances. This reference is mandatory for greenfield design implementation unless the user explicitly requests another icon family.
- Read [color-and-contrast.md](references/color-and-contrast.md) whenever choosing or modifying palette, text color, surfaces, borders, CTAs, states, charts, overlays, light/dark themes, or imagery behind text.
- Read [react-effects.md](references/react-effects.md) whenever the implementation touches React state, effects, event handling, subscriptions, DOM measurement, or client-side data synchronization.
- Do not load all references for a tiny button or copy-only request.

## Operating Principles

1. **Menos es más.** Every element must earn its place by improving comprehension, action, trust, or character. When two solutions work equally well, choose the one with fewer words, controls, containers, effects, and visual rules.
2. **Al buen entendedor, menos palabras.** Write interface copy for recognition, not explanation: lead with the useful verb or outcome, remove repeated context, and let hierarchy, labels, icons, and progressive disclosure carry what does not need a paragraph.
3. **Context before composition.** Determine whether the surface is marketing, onboarding, public product, internal operations, or a personal tool before choosing a hero, slogan, narrative, CTA, proof, or conversion pattern. Never make a utility surface sell its own known purpose back to its operator.
4. **Utility is action-first.** For internal, admin, personal, or repeated-use tools, optimize time to first action, information density, state visibility, and above-the-fold workspace. Default to a compact task header; do not add a marketing hero, eyebrow slogan, value proposition, trust section, or explanatory paragraph unless it solves a demonstrated onboarding problem.
5. **Always make a QOL pass.** After the core task works, look for small, reversible improvements that reduce repeated friction: remembered preferences, theme choice, keyboard paths, bulk actions, useful defaults, loading and empty states, undo/recovery, clearer status, and fewer repeated steps. Add only the improvements that fit the actual workflow; QOL is not feature creep.
6. **Use the viewport deliberately.** In apps and working surfaces, default to using available width and height for data, controls, or workspace instead of imposing decorative max-width bands. Preserve readable line length for prose and marketing pages, but do not waste side space that could reduce scrolling in tables, galleries, dashboards, editors, or internal tools.
7. **Scrollbars are designed UI.** Hide generic page scrollbars when scrolling remains obvious from the content. When a nested or horizontal region needs an affordance, provide a subtle custom scrollbar, fade, or other cue that matches the visual system. Never remove keyboard, wheel, touch, or assistive scrolling just to hide the chrome.
8. **One dominant idea.** A page may contain many sections, but it needs one concept spine that a person can describe in a sentence.
9. **Structure before decoration.** Solve hierarchy, composition, reading order, and primary-action placement before effects.
10. **Visual fidelity is allowed; gated extraction is not.** When the user supplies a premium reference or asks for a close reproduction, match its visible composition, proportions, hierarchy, rhythm, material treatment, and motion as faithfully as useful. Rebuild from the preview or screenshot with original code. Never bypass access controls, copy locked source, or take proprietary assets the user did not provide.
11. **Motion must mean something.** Movement should reveal state, guide attention, provide feedback, or express the concept. Decorative motion alone does not justify itself.
12. **One spectacle at a time.** Pair one high-impact moment with quieter supporting sections.
13. **Respect the local system.** In an existing product, inspect nearby components, tokens, type, spacing, and interactions before proposing new primitives.
14. **Creative does not mean cluttered.** Prefer scale, crop, whitespace, alignment, contrast, and timing over extra cards, borders, gradients, badges, or wrappers.
15. **The primary task stays legible.** In marketing, protect the CTA, value proposition, trust signals, and next step. In utility products, protect the frequent action, live status, working data, and recovery controls instead.
16. **Design for all motion tolerances.** Supply a useful `prefers-reduced-motion` state and keep content available without animation.
17. **Do not manipulate vulnerable users.** In finance, debt, health, legal, or crisis contexts, use calm, clarity, autonomy, and honest outcomes. Never weaponize fear, shame, false urgency, or implied guarantees.
18. **Icons are part of the design pass, not cleanup.** While writing the interface code, actively identify places where an icon improves recognition, scanning, hierarchy, state, or action clarity. Use Hugeicons Stroke Rounded by default in greenfield work, but do not turn every label into icon confetti.
19. **Effects are an escape hatch, not orchestration.** In React, do not reach for `useEffect` to derive display values, mirror props into state, react to user actions, or repair state modeling. Use an Effect only when the component must synchronize with a real external system, and make that contract explicit.
20. **Color is a semantic system, not a shade buffet.** Choose a neutral temperature, one dominant accent, an optional supporting accent, and explicit semantic roles. Every foreground/background pair must pass its required contrast in the real rendered state; visual taste never overrides legibility.

## Workflow

### 1. Snapshot the Real Surface

Before ideating or editing:

- Read the actual page/component and its related styles.
- Inspect the current viewport or screenshot.
- Identify existing type, spacing, colors, primitives, media, and motion libraries.
- Inventory the current semantic color tokens, light/dark mappings, alpha usage, gradients, focus treatment, and known contrast pairs before introducing new shades.
- Inspect the installed icon system and how nearby controls size, align, label, and color icons.
- In React projects, inspect the state/data stack, existing Effects, server/client boundary, query library, form model, and lint rules before adding synchronization logic.
- Classify the surface first: marketing, onboarding, public product, internal operations, or personal utility.
- Record the user, frequency of use, primary task, time-to-action target, working data, technical constraints, and risk level. Add conversion goal, CTA, and proof only when persuasion is actually part of the job.
- Separate approved elements from areas open to change.

Do not redesign an existing page from memory.

### 2. Choose the Working Mode

- **Original direction:** write a concept spine and explore three distinct routes.
- **Reference fidelity:** treat the supplied preview or screenshot as the visual contract. Inventory its composition, proportions, spacing, typography treatment, imagery, responsive behavior, icons, and motion. Skip speculative redesign directions unless the user requests alternatives.
- **Utility/product mode:** write a task contract: who uses it, what they repeatedly do, what state they must see, and what must remain above the fold. Skip slogans, persuasion architecture, and three-route spectacle unless the user explicitly asks for exploration.

All modes use independent implementation code and the real project's content, constraints, and accessibility needs.

### 3. Write the Concept Spine or Fidelity Contract

Complete this sentence:

> The page makes **[audience]** feel **[emotion]** by turning **[brand truth or product mechanism]** into **[visual metaphor]**, leading naturally to **[action]**.

For original direction, if the sentence is vague enough to fit any startup, the concept is not ready. For reference fidelity, replace it with a short contract listing the visual traits that must match and the assets or content that must be adapted.

For utility/product mode, replace the concept spine with:

> **[user]** can **[frequent action]** in **[target time/steps]**, while seeing **[critical state/data]** without scrolling or dismissing promotional copy.

Before retaining any hero, eyebrow, slogan, or paragraph, ask: “Does this teach an unknown user something necessary right now, or does it merely restate what the operator already knows?” Remove it when the answer is the latter.

Examples:

- Debt relief: uncertainty becomes changing weather; each completed step clears the horizon.
- Produce wholesale: order confidence becomes a packing-line rhythm from harvest to labeled case.
- AI analysis: noisy evidence converges into one precise beam and a readable decision.

### 4. Explore Three Truly Different Routes

For original-direction marketing or brand requests, produce three directions before selecting one. Change the composition grammar, not merely the color palette. For a faithful rebuild or a small utility redesign, skip this exploration and continue with the reference or task contract as the selected route.

For each route define:

- **Name**: two to four memorable words.
- **Concept spine**: one sentence.
- **Hero composition**: where type, imagery, object, navigation, and CTA live.
- **Signature interaction**: the one moment people remember.
- **Section system**: how the idea continues after the hero.
- **Button behavior**: shape, label behavior, hover/focus, and pressed state.
- **Icon language**: where icons improve comprehension, which semantic roles they serve, and how their weight fits the typography.
- **Motion grammar**: reveal, parallax, transformation, physics, or none.
- **Risk**: readability, performance, brand fit, implementation cost, or conversion distraction.

The three routes must differ in at least four of those nine dimensions.

### 5. Select with a Weighted Score

Score each route from 1–5:

| Criterion | Weight |
|---|---:|
| Brand specificity | 25% |
| Conversion clarity | 25% |
| Memorability | 20% |
| Content fit | 15% |
| Feasibility/performance | 10% |
| Accessibility | 5% |

For original-direction requests, recommend one route and explain the winning tradeoff in two sentences. Do not blend all three into visual soup; borrow at most one supporting device from a runner-up. For a faithful rebuild, score the implementation against the visual contract instead of inventing alternatives.

### 6. Build a Page System

Use [creative-composition.md](references/creative-composition.md) to select one pattern per required function:

- entrance/navigation
- hero/value proposition
- proof or mechanism
- benefits/features
- trust/testimonials
- offer/pricing when needed
- final CTA
- footer

Repeat a small set of rules across the page: crop logic, type scale, corner behavior, line weight, image treatment, motion timing, and CTA language. Variation should occur inside the system, not by inventing a new visual language for every section.

### 7. Define the Color Contract

Read [color-and-contrast.md](references/color-and-contrast.md) and define:

- neutral family and temperature
- dominant accent and optional supporting accent
- semantic tokens for canvas, surfaces, text, muted text, borders, action, focus, success, warning, danger, and information
- foreground/background pairs for light and dark modes
- contrast target for each pair

Use FullwindCSS only when a standard Tailwind step is visually too coarse and an intermediate shade helps preserve the concept while passing contrast. Do not import its entire 27,000-color output or expose arbitrary shade numbers throughout component code. Promote selected values into semantic project tokens.

### 8. Make the Icon Pass Before Coding

Read [hugeicons.md](references/hugeicons.md) and create a compact icon map for the interface:

| UI role | Meaning | Search terms | Label strategy |
|---|---|---|---|
| Primary CTA | direction or completion | two or three semantic synonyms | visible text plus supporting icon |
| Navigation | destination or movement | destination, back, menu, external | visible label when ambiguity is possible |
| Feedback | success, warning, error, info | state plus object | text is mandatory for critical states |

Then search the live Hugeicons library, compare the strongest two to four candidates, open the chosen icon, and use the exact framework code or SVG exposed by its detail page. Do not invent export names from memory.

Add the selected imports, markup, states, sizing, and accessible names in the same implementation changeset. Do not leave icon selection as a decorative TODO after the layout is finished.

### 9. Design Motion as States

If animation is requested, read [motion-library.md](references/motion-library.md) and define:

- initial state
- trigger
- transition
- settled state
- interruption behavior
- reduced-motion state

Budget motion by default:

- one hero transformation
- up to two ambient loops
- up to three reusable micro-interaction types

Avoid simultaneous parallax, particles, cursor effects, animated gradients, marquee text, and 3D tilt unless the concept specifically requires them.

### 10. Implement Within the Codebase

When implementation is requested:

- Reuse existing components and tokens before creating new primitives.
- Express color through semantic tokens rather than scattering raw hex values or palette indices through components.
- Test selected color pairs with `scripts/contrast-check.mjs`; opacity, gradients, images, and overlays must be checked in their final composited state.
- Keep brand color separate from semantic success, warning, and danger roles unless the meaning remains unambiguous.
- Use Hugeicons Stroke Rounded for new creative surfaces unless the existing product already has a coherent icon system that should remain consistent or the user requests another family.
- Import only the icons used. Preserve tree-shaking and avoid wildcard icon imports.
- Use icons where they clarify navigation, actions, inputs, features, steps, status, metadata, empty states, or direction. Skip them when they only repeat obvious text or create visual noise.
- Keep semantic HTML and keyboard states intact.
- Prefer transform and opacity for motion.
- Keep decorative layers non-interactive and `aria-hidden`.
- Preserve CTA hit area and readable contrast through every animation frame.
- Use responsive crops intentionally; do not merely shrink desktop art.
- Add reduced-motion behavior at the same time as the primary animation.
- Avoid dependencies for effects that CSS or the existing stack can handle cleanly.
- For React behavior, follow [react-effects.md](references/react-effects.md). Prefer render-time derivation, event handlers, framework data primitives, lifted state, callback refs, or `useSyncExternalStore` for their proper cases before adding an Effect.

For background-led heroes, keep text and CTA in a stable layer. Animate the environment behind them, not the conversion target itself.

### 11. Audit React Effects

When React code changed, inspect every new or modified `useEffect` and answer:

1. What external system is being synchronized?
2. Why can this not happen during render, in the originating event handler, through the framework's data layer, or through a dedicated subscription primitive?
3. Are dependencies complete and stable?
4. What cleanup, cancellation, or stale-response protection is required?
5. Does the behavior remain correct under Strict Mode's development replay?

If question 1 has no concrete answer, remove or redesign the Effect. Do not silence the Hooks linter to force an Effect through review.

When React Doctor is already configured, run it after the normal project checks. For an optional one-off audit, use the privacy-conscious command from [react-effects.md](references/react-effects.md) and treat its output as review evidence, not an automatic rewrite mandate.

### 12. Verify Visually

Run the loop:

1. reference or concept board
2. implementation
3. screenshot at desktop and mobile
4. side-by-side comparison
5. surgical adjustment

Verify:

- first-glance reading order
- CTA visibility at 100% zoom
- contrast at the lightest and darkest animation states
- normal text reaches at least 4.5:1; large text and meaningful UI graphics reach at least 3:1
- body, legal, instructional, and dense reading text targets 7:1 when the art direction can support it
- muted text and placeholders remain readable; color is never the only carrier of meaning
- hover, active, selected, focus, disabled, error, success, overlays, gradients, photos, and both color modes were checked separately
- no overlap at long copy and narrow widths
- animation settles instead of demanding permanent attention
- reduced motion removes nonessential travel and loops
- no layout shift from media loading
- no generic AI-dashboard drift: card soup, pills everywhere, excessive glow, or boxed sections without purpose
- apps and working surfaces use available viewport space unless a real readability or focus constraint justifies a narrower canvas
- page scrollbars are hidden when scrolling remains obvious; necessary nested or horizontal scroll affordances are custom and visually coherent
- the QOL pass considered theme choice, remembered preferences, keyboard paths, bulk actions, useful defaults, status, loading/empty states, and recovery without adding feature creep
- light/dark themes, when useful for repeated-use tools, preserve semantic roles, contrast, media legibility, focus states, and user preference across reloads
- icon semantics are recognizable without guessing
- icon size, stroke, optical alignment, and color are consistent across the interface
- icon-only controls have an accessible name; critical meaning never depends on an icon alone
- React behavior has no unnecessary Effects, duplicated derived state, Effect chains, stale async responses, or missing cleanup

## Output Contract

### For ideation-only requests

Return:

1. three distinct directions
2. a scored recommendation
3. section map for the winner
4. signature interaction and motion states
5. visual ingredients: type, semantic palette, verified contrast pairs, image treatment, button grammar
6. icon language: library/style, semantic placements, sizing, and label strategy
7. main risk and simplest fallback

### For implementation requests

Deliver the working change, then summarize:

- concept implemented
- files changed
- interaction and reduced-motion behavior
- icon system and accessible label strategy
- semantic color tokens and contrast results
- React state/effect decisions and any React Doctor findings
- verification performed
- anything intentionally left unchanged

## Originality Test

For original-direction work, ask:

- Could this hero belong unchanged to a random AI startup?
- Is the main visual metaphor connected to the offer?
- Did we use scale, crop, rhythm, and whitespace before adding effects?
- Does each animated element have a reason?
- Is there one moment worth remembering?
- Would the page still work with animation disabled?

If the first answer is yes or the last answer is no, revise.

For reference-fidelity work, replace the originality test with a side-by-side fidelity check: composition, spacing, type treatment, color relationships, imagery, icons, responsive behavior, and motion should match the supplied target as closely as the available assets and codebase allow.

---
name: elliots-creative-skill
description: Art direction and redesign for apps, tools, dashboards, AI interfaces, landing pages, marketing sites, campaigns and portfolios, new or existing. It interviews the user first, proposes at least three distinct directions, sources real components from BoardUI when the stack allows, and builds an original result. Not for one-line style fixes or business-logic changes.
---

# Elliot's Creative — v2

Find the idea the product deserves, build it from real parts, and make it feel authored.

The loop is **ask → classify → source → propose three → build → verify**. Only a small, already-specified fix skips the asking and the three directions.

## 1. Ask before you design

Do not open with a design. Read what already exists first (repo, running app, URL, screenshots), so you only ask what the evidence cannot answer. Then ask one short round of 3–6 questions in the user's language, multiple choice where possible, using the client's question tool if it has one:

- **What is it?** A tool you or your team use every day · dashboard or internal app · AI/agent interface · landing page that sells · marketing site or campaign · portfolio or personal brand · other.
- **New or existing?** If existing: what must survive (functions, data, brand, URLs, SEO)?
- **Who uses it, how often, and what is the one action that matters** (finish a task, buy, sign up, book, contact, explore)?
- **Tone** in three words, and one thing they never want to see.
- **Constraints:** stack, brand assets, devices, deadline, budget for paid components.

Write the answers back as a five-line brief and continue. If the user says "just do it", infer from the evidence, list your assumptions in the brief and proceed. Question bank per surface and the brief template: [intake](references/intake.md).

## 2. Classify the surface

| Surface | What wins | Default character | BoardUI role |
| --- | --- | --- | --- |
| Repeat-use tool, internal app | speed, density, clear state | calm instrument | main source of components |
| Dashboard, analytics | comparison at a glance | data first | stat cards, tables, charts |
| AI / agent interface | progress, trust, control | conversational | agent blocks |
| Landing page that sells | one conversion | persuasive, expressive | forms, pricing toggles, auth, modals |
| Marketing, campaign, portfolio | memory and personality | authored, playful | small; art direction leads |

A product site plus its app is two surfaces: design each for its job and connect them through shared tokens. Repeat-use software never becomes a marketing page; a campaign never has to look like a dashboard.

## 3. Source real components — BoardUI first

Before hand-building a control, check whether [BoardUI](https://www.boardui.com/components) ships it.

- **Read the code.** Every free component's full source is public under MIT, one web fetch away: `https://www.boardui.com/r/registry.json` lists them and `https://www.boardui.com/r/<name>.json` holds each one's code in `files[].content`; https://github.com/BoardUI/boardui mirrors it all. No CLI, MCP or install needed. Read the source, and open its docs page with developer tools to see it running, before you design around it. Names are exact; take them from the index.
- **Stack fit.** If the project is React 19 + Tailwind CSS v4, bring the real components in: write the registry files yourself, or use the CLI or MCP when available. Ask first if the project already has its own design system. In any other stack, port the free source into the project's own primitives. Never add React to a non-React project for one component.
- **Pro.** Items missing from the public registry (most chart cards, the composer, full templates) need a paid license. Their demos run in the browser, but without a license never take their code, markup or styles, whether from developer tools, bundles, source maps or screenshots. Say what the item does and offer: activate a license, compose from free parts, or design an original.

Surface-to-component map, BoardUI's design language and how to make it yours: [BoardUI](references/boardui.md).

## 4. Propose at least three distinct directions

Before building any broad change, present three or more directions. They must differ on at least three axes: structure, type voice, color and material, motion personality, density, signature moment. Three palettes on one layout count as one direction.

For each direction give: a name, the idea in one sentence, the composition, type and color and material, the signature moment, the BoardUI components it uses (free or Pro), and its trade-off. Spread them:

1. **Refine:** keeps what works and fixes what hurts.
2. **Commit:** pushes one idea all the way.
3. **Wildcard:** starts from an unexpected reference.

Recommend one and say why it fits the brief. When it is cheap, show it as well as describing it: a small ASCII wireframe or a static mock for each. Then wait for the user's choice. If they asked you not to stop, build your recommendation and say so. Axes, archetypes and wildcard generators: [directions](references/directions.md).

## 5. Build with creative license

BoardUI is the floor, not the ceiling. It supplies accessible anatomy, coherent tokens and a motion grammar; you supply the authorship.

- Retheme its tokens and accent ramp to the brand. The source is yours: restyle and restructure installed components.
- Invent new components where nothing fits. That is usually where the signature moment lives.
- Combine BoardUI's precision with expressive devices from [Kenji Lambert notes](references/kenji-lambert.md) and the [composition library](references/creative-composition.md).

The result must look neither like a stock BoardUI demo with a new logo nor like a copy of a reference. Translate devices; never copy another site's copy, illustrations, branding or code. For an existing product, follow [redesign](references/redesign.md): keep its functions, data meaning, permissions and save behavior unless the user changes them.

**Icons:** Hugeicons first, Lucide welcome ([icons](references/icons.md)). BoardUI components ship with Remix Icon (`@remixicon/react`). Keep one family per surface: either swap the installed icons to the chosen family or keep Remix consistently there. Never mix families inside one control group.

**Motion:** every movement explains a state change. Use BoardUI's timings for product UI and the [motion library](references/motion-library.md) for narrative moments. Always provide a reduced-motion state.

## 6. Verify the real thing

Run it and look at it as its user would, on desktop unless the brief says otherwise. Check:

- the primary action end to end;
- populated, empty, loading and error states;
- keyboard access and focus;
- contrast, with `scripts/contrast-check.mjs`;
- reduced motion;
- that BoardUI components actually render (React Aria tables need a client component).

Judge against the brief and the chosen direction, not novelty. Deliver what changed, what stayed fixed, what was tested and what is left.

## References — read only what the task needs

- [Intake](references/intake.md): questions per surface and the brief template.
- [Directions](references/directions.md): how to make three directions that really differ.
- [BoardUI](references/boardui.md): access, component map, design language, Pro rules.
- [Kenji Lambert](references/kenji-lambert.md): authored, playful devices for portfolios, campaigns and landing pages.
- [Redesign](references/redesign.md): scope, invariants and judging an existing product.
- [Composition](references/creative-composition.md): hero, navigation, section, CTA and card grammars.
- [Motion](references/motion-library.md): narrative motion, micro-interactions, tactile continuity.
- [Color](references/color-and-contrast.md): color roles and contrast checks.
- [Icons](references/icons.md): Hugeicons, Lucide and Remix inside BoardUI.
- [React](references/react-effects.md): effect discipline when the build is React.
- [Design references](references/design-references.md): Cofounder, Gooey and Jiro notes.
- [Jiro audit](references/jiro-audit.md): dated catalog observations.

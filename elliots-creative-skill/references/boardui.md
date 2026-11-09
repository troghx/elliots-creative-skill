# BoardUI — observed 2026-11-09

[BoardUI](https://www.boardui.com/) is a React + Tailwind CSS v4 design system for dashboards and agentic interfaces, built on React Aria Components and drawn in Figma first. Components install as **source you own**; there is no runtime package. Counts and the free/Pro split change: refresh from the registry or MCP before relying on a specific item.

## Read the code: no CLI, MCP or install needed

The free source is MIT and public. You can read any free component in full with a plain web fetch (WebFetch, curl, or the browser), in any stack and any client:

1. **Index:** `https://www.boardui.com/r/registry.json` lists every free item: name, title, description, npm `dependencies`, `registryDependencies` and file paths (no code).
2. **One component:** `https://www.boardui.com/r/<name>.json` carries the complete source in `files[].content`, plus `meta.example` (a usage example), `meta.snippets` (variants, sizes, icons) and `meta.docsUrl`. Follow `registryDependencies` the same way: `cx`, `globals`, and `theme` (`styles/theme.css`, every token) and `typography` are items too.
3. **Everything at once:** https://github.com/BoardUI/boardui mirrors the free source under MIT. Shallow-clone it into a scratch folder when you need to search across components (how every control draws focus, every timing value). It can lag the registry; when they differ, the registry wins.
4. **See it running:** open `meta.docsUrl` in a browser. On a free component, the developer tools show what the source does live: DOM and ARIA structure, resolved CSS variables, computed sizes, and transition and animation timing. Use them to judge feel and states; take code from the source above, not from the compiled page.
5. **Catalog:** https://www.boardui.com/components and https://www.boardui.com/llms.txt (maps item names to doc pages; a few differ, such as `agent-chat` → `chat-starter`).

Read the source before designing around a component: its anatomy, props, states and motion values decide what you can bend.

## Bring it into a project

- **By hand:** write each `files[].content` to its `target` path, do the same for every `registryDependencies` item (`theme`, `typography`, `globals` and `cx` first, or components render unstyled), then add the npm `dependencies` with the project's package manager. Imports expect the `@/` alias.
- **CLI, when available:** `npx boardui@latest init --yes` once, then `npx boardui@latest add <name> [...] --yes`. Keep `--yes`: without a terminal the CLI exits with code 1 instead of prompting. Installs send anonymous telemetry (component names, versions); set `BOARDUI_TELEMETRY_DISABLED=1` if the user prefers not to.
- **MCP, when connected:** `list_components`, `get_component`, `get_usage_examples`, `install_components`, `init_boardui`, `get_theme`, `install_rules`, `license_status`. Setup: `claude mcp add boardui -- npx -y boardui@latest mcp`, then restart the session.

BoardUI also publishes its own agent skill (`npx boardui@latest skill`) with its catalog and rules. In a project that adopts BoardUI it complements this one: this skill decides *what* to build, theirs knows *how* BoardUI wants it built.

## When it fits

- **Install:** React 19 + Tailwind v4 (Next.js, Vite, React Router, Astro with React). Imports expect the `@/` alias.
- **Ask first:** the project already has a design system. `init` (or the `theme`, `typography` and `globals` items) writes `styles/`, `utils/cx`, and with the CLI an always-on section in `AGENTS.md` plus `.cursor/rules/`. Mixing two token systems is worse than either.
- **Port:** Vue, Svelte, plain HTML/CSS, Tailwind v3 or a non-web stack. Read the free item's source and docs page, then translate it into the project's own primitives; MIT allows it. Keep the behavior React Aria provided (keyboard, focus, ARIA) with the stack's equivalent.

## Component map by need

Free items come from the public registry; **PRO** items need a license.

| Need | Reach for |
| --- | --- |
| App frame, navigation | `app-shell`, `sidebar`, `breadcrumb`, `tabs`, `command-palette`, `kbd`, `theme-toggle` |
| Actions | `button`, `icon-button`, `link-button`, `button-group`, `segmented-control`, `dropdown`, `context-menu` |
| Forms | `input`, `textarea`, `select`, `combobox`, `number-field`, `time-field`, `input-otp`, `checkbox(-card)`, `radio(-card)`, `switch(-card)`, `slider`, `color-picker`, `file-upload`, `search-field`, `tag-group` |
| Dates and booking | `date-picker`, `date-range-picker`, `date-calendar`, `meeting-scheduler`; month view `calendar` **PRO** |
| Lists and data | `table`, `data-table`, `data-grid`, `tree-view`, `pagination`, `chip`, `badge`, `status-dot`, `avatar` |
| Metrics | `stat-cards`, `meter`, `progress`, `revenue-chart-card`, `orders-chart-card`, `important-alerts-card`; most other chart cards (area, line, bar list, combo, funnel, sankey, heatmap, radar, radial, scatter, contributions, earnings…) **PRO** |
| Feedback and overlays | `toast`, `notification`, `notification-center`, `announcement`, `modal`, `drawer`, `popover`, `tooltip`, `skeleton`, `spinner` |
| Settings and auth | `settings-modal`, `auth-card`, `social-button` |
| AI / agents | `agent-chat`, `agent-thinking`, `agent-log`, `composer-loader`, `agent-runtime`; `composer`, `composer-panel`, `composer-attachments`, `agent-progress`, `task-list`, `web-search`, `agent-limits-card`, `questionnaire`, `agent-creator` **PRO** |
| Marketing helpers | `carousel`, `accordion` (FAQ), `segmented-control` (monthly/yearly pricing), `social-button`, `modal` |
| Whole pages | templates (dashboard, finance, marketing, project board, AI chat, AI profile, image generation, medical profile) **PRO** |

BoardUI has no hero sections, feature grids or testimonial blocks. For landing pages and campaigns, art direction leads and BoardUI supplies the working parts: forms, pricing toggles, sign-up, booking, FAQ, toasts.

## Its design language, in short

- **Type:** Inter (display sizes use its optical axis), composite type utilities that set size, weight, line height and tracking together.
- **Color:** semantic tokens only (text, background, border, icon and chart roles). A single accent ramp drives every interactive and selected state, so re-tinting eleven variables rebrands the whole system. Dark mode flips through the `.dark` class.
- **Shape:** 4px spacing scale, gaps over margins; cards and panels around 24px radius, inputs and rows 6–12px, pills fully round; soft, low-opacity shadows.
- **Motion:** fast and quiet. Hover colors at 150ms; popovers and menus condense in with fade + slight scale + about 2px blur; modals at 300ms; exits faster than entrances; pressing darkens a step and never shrinks the element; springs only for list reflow, tight and not bouncy; reduced motion guarded everywhere.
- **Signature details:** iridescent orbiting light for "working" states, split-flap text swaps for agent status, activity rings, heatmaps.

## Making it yours

A BoardUI screen with a new logo is not a design. Change at least the layers the chosen direction calls for:

- **Accent ramp and neutrals:** retheme with literal `oklch(...)` values (runtime ramps cannot reference other variables).
- **Typeface:** swap `--font-inter` for the brand's face, then check the composite scale still holds.
- **Shape and density:** radius, padding and row height express the character: tight for instruments, soft for consumer, square for brutalist.
- **Composition:** BoardUI gives parts, not layouts. The arrangement, the signature moment and the voice are yours.
- **Edit the source:** it is owned code. Restructure a component when the product needs it; keep its accessibility behavior.

## Rules

- Read and reuse before rebuilding. Do not hand-write a lookalike of a component the registry ships.
- **Free vs Pro:** the free source is MIT; Pro source is paid and licensed per developer ([license](https://www.boardui.com/license)). Pro demos run on public pages, so their compiled code reaches the browser, but seeing it is not a license to use it.
- **PRO without a license:** do not take its code, markup or styles by any route: developer tools, page bundles, source maps, network responses, or rebuilding it from screenshots. Look at the demo only to tell the user what it does, then offer three paths: activate a license (`npx boardui@latest login <key>` or MCP `activate_license`; the user supplies the key), compose from free parts, or design an original component.
- React Aria tables (`table`, `data-table`) must render from a `"use client"` module, or they show headers with no columns.
- After `init`, wire the global stylesheet and the font in the root layout, or text falls back to the system font.
- Never paste a license key into code, commits or logs.

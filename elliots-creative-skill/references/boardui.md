# BoardUI — observed 2026-11-09

[BoardUI](https://www.boardui.com/) is a React + Tailwind CSS v4 design system for dashboards and agentic interfaces, built on React Aria Components and drawn in Figma first. Components install as **source you own**; there is no runtime package. Counts and the free/Pro split change: refresh from the registry or MCP before relying on a specific item.

## Access, from best to plainest

1. **MCP server** (when the client has it): `claude mcp add boardui -- npx -y boardui@latest mcp`. Tools: `list_components`, `get_component`, `get_usage_examples`, `install_components`, `init_boardui`, `get_theme`, `install_rules`, `license_status`. Restart the session after adding it; tools bind at session start.
2. **Public registry** (shadcn schema): `https://www.boardui.com/r/registry.json` lists the free items; `https://www.boardui.com/r/<name>.json` has each item's description, dependencies, usage example and source.
3. **CLI:** `npx boardui@latest init --yes` once, then `npx boardui@latest add <name> [...] --yes`. Keep `--yes`: without a terminal the CLI exits with code 1 instead of prompting. Dependencies resolve on their own.
4. **Catalog and docs:** https://www.boardui.com/components and https://www.boardui.com/llms.txt.

BoardUI also publishes its own agent skill (`npx boardui@latest skill`) with the full catalog and its rules. Install it in a project that adopts BoardUI; this skill decides *what* to build, theirs knows *how* BoardUI wants it built.

Installs send anonymous telemetry (component names, versions). Set `BOARDUI_TELEMETRY_DISABLED=1` if the user prefers not to.

## When it fits

- **Install:** React 19 + Tailwind v4 (Next.js, Vite, React Router, Astro with React). Imports expect the `@/` alias.
- **Ask first:** the project already has a design system. `init` writes `styles/` (theme, typography, globals), `utils/cx`, and an always-on section in `AGENTS.md` plus `.cursor/rules/`. Mixing two token systems is worse than either.
- **Reference only:** Vue, Svelte, plain HTML/CSS, Tailwind v3 or a non-web stack. Study the item's anatomy, states and motion in its docs page and rebuild natively.

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

- Install before rebuilding. Do not hand-write a lookalike of a component the registry ships.
- **PRO without a license:** do not fetch its source or recreate it from screenshots. Tell the user what it does and offer three paths: activate a license (`npx boardui@latest login <key>` or MCP `activate_license`; the user supplies the key), compose from free parts, or design an original component.
- React Aria tables (`table`, `data-table`) must render from a `"use client"` module, or they show headers with no columns.
- After `init`, wire the global stylesheet and the font in the root layout, or text falls back to the system font.
- Never paste a license key into code, commits or logs.

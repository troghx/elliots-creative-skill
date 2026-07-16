# Hugeicons Implementation Guide

Use this reference while designing and coding, not as a final polish pass.

## Default

For greenfield creative web work, default to [Hugeicons Stroke Rounded](https://hugeicons.com/icons/stroke-rounded). The free set currently contains 5,900+ icons and is documented for unlimited personal and commercial projects. Hugeicons also offers paid styles and packages; do not assume Pro access.

If an existing product already has a coherent icon system, preserve local consistency unless the user explicitly asks to migrate or use Hugeicons. Do not mix icon families inside one surface without a deliberate system reason.

## Non-Negotiable Rule

Make icon decisions while writing the interface code.

For every navigation item, action, input, feature, step, status, metadata row, empty state, and directional affordance, ask:

1. Would an icon make the element faster to recognize or scan?
2. Does the icon add meaning beyond the text?
3. Is the symbol familiar to this audience?
4. Will it remain legible at the intended size?

If yes, select and implement the icon in the same changeset. If no, keep the text clean. The goal is semantic reinforcement, not maximum icon count.

## Selection Workflow

### 1. Start from meaning

Write the intended meaning before searching. Search the [live library](https://hugeicons.com/icons/stroke-rounded) with the object, action, state, and two or three synonyms.

Examples of search intent:

- create: `add`, `plus`, `new`
- continue: `arrow right`, `next`, `forward`
- open elsewhere: `external`, `new window`, `link`
- refine results: `filter`, `sort`, `adjust`
- save: `bookmark`, `save`, `favorite`
- success: `check`, `complete`, `verified`
- warning: `alert`, `warning`, `attention`
- remove: `delete`, `trash`, `remove`

These are search terms, not guaranteed export names.

### 2. Compare candidates visually

Compare two to four candidates in their real context. Prefer the simplest silhouette that communicates correctly at the final rendered size. Check cultural context and avoid clever metaphors when a universal symbol exists.

### 3. Open the exact icon

Open the icon detail page and use its framework tab or copied SVG. Detail pages expose code for web, React, React Native, Vue, Svelte, Flutter, and Angular. Verify the exact icon and export name there; do not hallucinate package exports.

### 4. Match the system

Keep these properties consistent within a surface:

- family and style: normally Stroke Rounded
- optical size
- stroke weight
- color behavior
- corner language
- placement relative to text
- active, disabled, hover, focus, and loading states

Do not alternate Stroke Rounded, Solid, Twotone, Sharp, and unrelated libraries as decoration.

## Where Icons Usually Help

- primary and secondary actions when direction or object is meaningful
- compact navigation and utilities
- search, reveal, clear, upload, download, filter, and sort controls
- feature lists when each icon encodes a distinct capability
- numbered processes or state transitions
- success, warning, error, and informational feedback
- contact methods, dates, locations, files, device types, and other metadata
- empty states and recovery actions
- external links, expandable regions, carousels, and pagination

## Where to Restrain Them

- long editorial navigation where labels are already unmistakable
- every bullet in a simple text list
- decorative icon clouds with no informational purpose
- repeated icons that compete with a strong hero image or product object
- critical legal, financial, medical, or safety meaning without supporting text
- icon-only controls whose meaning is unfamiliar or ambiguous

Avoid the generic three-card-plus-random-icon pattern. An icon does not rescue weak information architecture.

## React: Free Package

Use the official free packages when a package dependency fits the project:

```bash
npm install @hugeicons/react @hugeicons/core-free-icons
```

```tsx
import { HugeiconsIcon } from '@hugeicons/react'
import { Search01Icon } from '@hugeicons/core-free-icons'

export function SearchLabel() {
  return (
    <span className="search-label">
      <HugeiconsIcon
        icon={Search01Icon}
        size={18}
        color="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      Search
    </span>
  )
}
```

Import only the icons used. Never wildcard-import the library. Use `currentColor` so icon color follows the surrounding control. If the product uses many icons, create a small local wrapper for shared defaults instead of repeating arbitrary values.

Before adding packages, inspect `package.json` and the current icon stack. Do not add Hugeicons beside another established library for one isolated glyph without a clear migration or design reason.

## SVG and Other Frameworks

When a package is not appropriate, use the exact SVG or framework snippet exposed by the selected icon's detail page. Keep the SVG inline when it must inherit color or animate; use a static asset when it is purely decorative and stable.

Do not scrape the full library, redistribute icon source, or create a downloadable competing icon set. Never attempt to obtain Pro source without valid access.

## Sizing and Optical Alignment

Treat values as starting points, then verify visually:

| Context | Typical icon size |
|---|---:|
| Dense metadata or compact control | 14–16 px |
| Standard button or input | 16–20 px |
| Primary navigation or prominent action | 18–24 px |
| Feature or empty-state illustration | 24–40 px |

- Start around `strokeWidth={1.5}` for Stroke Rounded and tune only to match the type and local UI.
- Align to the optical center, not merely the SVG bounding box.
- Use a consistent text gap, commonly 6–10 px depending on density.
- Keep icon-only hit targets large enough even when the glyph is small; 44×44 px is a safe touch target default.
- Check the icon at actual size, not only enlarged in the library preview.

## Labels and Accessibility

- A decorative icon beside visible text should be hidden from assistive technology.
- An icon-only interactive control needs a stable accessible name such as `aria-label`.
- Critical states need text; color and icon alone are insufficient.
- If the symbol may be unfamiliar, use a visible label or tooltip. A tooltip is support, not a substitute for essential instructions.
- Preserve visible focus states and sufficient contrast.
- When icons swap to show state, keep the accessible name synchronized with the action or current state.

## Motion

Animate icons only when movement communicates state or direction:

- arrow shifts slightly to indicate travel
- chevron rotates to show expansion
- loader rotates while progress is genuinely pending
- checkmark appears after confirmed success
- play/pause or mute/unmute swaps with the real state

Keep motion subtle and support `prefers-reduced-motion`. Do not make unrelated icons bounce, pulse, or orbit merely to make the page feel alive.

## License Guardrails

- The free Stroke Rounded set is documented for unlimited personal and commercial projects.
- Pro icons, styles, packages, and source require appropriate access and seats.
- Using an icon in a finished site or product is different from redistributing the source library.
- Do not expose license keys, package credentials, raw icon collections, or downloadable source folders.
- If license status is uncertain, use a verified free Stroke Rounded icon or the project's existing licensed system.

Review the current [Hugeicons documentation](https://hugeicons.com/docs), [icon-selection guidance](https://hugeicons.com/docs/best-practice/icon-selection), [React quick start](https://hugeicons.com/docs/integrations/react/quick-start), [React best practices](https://hugeicons.com/docs/integrations/react/best-practices), and [license](https://hugeicons.com/license-agreement) when package behavior or permissions matter.

## Verification Checklist

- every icon has a clear semantic job
- no obvious action is left iconless when an icon would materially improve scanning
- exact icon names came from the live detail page or installed package exports
- one family and style dominate the surface
- imports are explicit and tree-shakeable
- icons use consistent size, stroke, color, gap, and alignment
- icon-only controls have accessible names
- critical states retain visible text
- mobile hit targets and reduced motion are correct
- no Pro asset was used without verified access

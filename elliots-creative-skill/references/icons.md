# Icon choice

Hugeicons, usually Stroke Rounded, is the primary reference; Lucide is an approved alternative, not a failure mode.

- Search by meaning in https://hugeicons.com/icons and verify the actual export in the installed package or official docs. Do not invent exports, assume Pro licenses or import a whole catalog for a few symbols.
- Use https://lucide.dev/icons/ when the existing system is Lucide, an equivalent is clearer, or integration makes it the better choice.
- Preserve a coherent local family for small changes. A broader redesign can migrate a defined surface; avoid arbitrary mixing inside the same navigation or action group.
- Check apparent weight, baseline, optical size and stroke at real control sizes. Prefer semantic reinforcement to decorative quotas.
- Keep labels where an icon alone is ambiguous. Textless controls need accessible names and visible keyboard focus; the hit area belongs to the control, not to the artwork. Decorative SVGs should not create duplicate announcements.
- Verify package version, licensing and import cost before installation. Do not assume paid icons are available.
- Use verified library assets rather than improvised glyph substitutes. User or brand requirements can select a different family.

## Inside BoardUI

BoardUI components take Remix Icon (`@remixicon/react`) as component references, for example `leadingIcon={RiAddLine}`. Decide per surface:

- **Keep Remix** on a surface built mostly from BoardUI, so installed and custom controls match.
- **Swap to Hugeicons or Lucide** when the product already speaks that family. Edit the owned component source to accept the new icon component, match stroke weight and size to the surrounding text, and change every icon on that surface, not a few.

Never put two families in the same toolbar, menu or navigation.

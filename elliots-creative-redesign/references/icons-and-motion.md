# Icons and tactile behavior

## Icon direction

- Primary: [Hugeicons](https://hugeicons.com/icons), usually Stroke Rounded.
- Preferred alternative: [Lucide](https://lucide.dev/icons/), especially when already established in the product.
- Verify the real symbol/export through official docs or the installed package. Do not invent exports, assume Pro licenses or import an entire catalog for a few symbols.
- Choose by meaning first. Align visual weight, optical size and baseline within an action group. A full surface can have a deliberate migration; a tiny fix should not cause library churn.
- Keep recognizable labels where icons alone are ambiguous. Give icon-only buttons accessible names; mark decorative SVGs appropriately. Visible focus and a usable hit area belong to the control, not to the artwork.

## Motion direction

Use Gooey as a reference for continuity, not an obligation to liquefy the product. Before adding movement, identify the state change it makes clearer or the tactile response it gives.

Keep text, icons and hit targets stable while surfaces move. Inputs, tables and financial values must remain legible. Opening, closing, interruption, keyboard input and repeated activation should all resolve cleanly.

Use a static/reduced-motion alternative with the same actions and labels. A plain CSS transition may be enough. If a liquid library is appropriate, verify its current documentation and behavior in the target stack; no version or performance claim is implied here.

Check real devices in scope, contrast through the transition, focus order, clipping and rendering cost. Remove or simplify an effect when it interferes with the task.

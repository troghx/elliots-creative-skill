# Redesigning an existing product

Improve the experience, not merely its CSS. Preserve what matters; be willing to replace what does not.

## Understand the freedom you actually have

Inspect the running product and the relevant code. Identify its frequent action, the information a decision depends on, the current friction and what already works. Separate functional invariants (data meaning, permissions, calculations, save behavior, URLs) from accidental layout choices.

Read the scope the user gave in the intake literally:

- **Reskin:** same structure, new material, type and color.
- **Re-layout:** "same app, better distribution" permits regrouping, new proportions and hierarchy; the current DOM need not survive.
- **Rethink:** composition and flow may change substantially, functions stay.

A small alignment fix does not invite a redesign. A reference is inspiration unless the user asks for fidelity.

For an app, start from what the person needs to do and see together. For a website, start from the intended action and the content. Do not turn repeat-use software into a marketing page, or assume useful software must look austere.

## Make a design decision before polishing

State the improvement in one concrete sentence: what becomes easier, clearer or more satisfying? Each of the three directions should answer that sentence differently.

Preserve identity through the details that carry recognition (a color, a mark, a voice, a layout habit users rely on), not by protecting every container. A distinctive decision should belong to this product: an action next to its consequence, a comparison at the moment of choice, a persistent useful summary, a well-judged material. It need not be spectacular.

When adopting BoardUI in an existing product, migrate a defined surface at a time. Do not leave half the screens on old tokens and half on new ones without a plan the user agreed to.

## Implement

Use the current stack and its useful primitives; change structure when needed inside the authorized scope. Do not hide a layout problem with overflow clipping or endless overrides. Keep data meaning, permissions, calculations and save behavior unchanged unless separately authorized. Never create test transactions in a real shared data store to prove the UI.

## Judge the result

Can the person find the primary action, read its context, complete it and understand the outcome, faster or more clearly than before? Check populated, empty and error states, keyboard access, contrast and the viewports in scope.

Compare before and after for usefulness and visual coherence, not novelty. If the result is the same friction in rearranged boxes, revise the decision. If it is attractive but slower or misleading, fix the interaction before adding polish. Do not claim the redesign is better merely because this skill was followed.

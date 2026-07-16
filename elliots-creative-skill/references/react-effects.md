# React Effects Discipline

Use this reference whenever a creative implementation includes React state, client interactions, subscriptions, DOM integration, or asynchronous behavior.

## Core Rule

`useEffect` is an escape hatch for synchronizing React with a system outside React. It is not the default place for component logic.

Before adding an Effect, finish this sentence:

> This component must synchronize **[React value or lifecycle]** with **[specific external system]** because **[render/event/framework primitive cannot own it]**.

Valid external systems include browser APIs, timers, network connections, third-party imperative widgets, media APIs, observers, and external subscription stores. “Another piece of React state” is not an external system.

## Decision Ladder

Use the first matching route:

1. **Value derived from props or state:** calculate it during render.
2. **Expensive pure calculation:** calculate during render; add memoization only when profiling or the local compiler/tooling justifies it.
3. **Logic caused by a click, submit, drag, or other user action:** put it in that event handler.
4. **Two components need the same state:** lift it to their nearest common owner or use the existing store/form model.
5. **State must reset when identity changes:** model identity explicitly, commonly with a `key`, route boundary, or deliberate state owner.
6. **Server data:** use the project's loader, action, server component, query library, or cache primitive before building manual fetch synchronization.
7. **External mutable store or subscription source:** use `useSyncExternalStore` when its contract fits.
8. **Work tied to a particular DOM node:** prefer a callback ref; use `useLayoutEffect` only when a layout read/write must happen before paint.
9. **True external synchronization remains:** use `useEffect` with a complete contract.

Do not replace every Effect mechanically with `useSyncExternalStore`, refs, or memoization. Each primitive has a narrower purpose.

## Patterns to Reject

### Mirrored or derived state

```tsx
const [fullName, setFullName] = useState('')

useEffect(() => {
  setFullName(`${firstName} ${lastName}`)
}, [firstName, lastName])
```

Prefer:

```tsx
const fullName = `${firstName} ${lastName}`
```

### Event logic hidden in an Effect

```tsx
useEffect(() => {
  if (submitted) showToast('Saved')
}, [submitted])
```

Prefer calling the feedback from the successful submit path. The originating event and outcome already identify when it should happen.

### Effect chains

Do not create a pipeline where one Effect sets state that triggers another Effect that sets more state. Calculate the next state in one event transition or reducer whenever possible.

### Linter suppression as design

Do not remove dependencies or disable `exhaustive-deps` simply to stop reruns. Fix unstable inputs, move logic to its real owner, or redesign the synchronization boundary.

### Manual fetch races

Avoid ad hoc Effects for server data when the framework or installed query library already handles caching, cancellation, request identity, and stale responses.

## Valid Effect Contract

For every retained Effect, verify:

- **External system:** name it precisely.
- **Setup:** one clear synchronization responsibility.
- **Dependencies:** every reactive value used by setup and cleanup is represented correctly.
- **Cleanup:** unsubscribes, disconnects, removes listeners, clears timers, or reverses setup.
- **Async safety:** aborts or ignores stale responses and cannot overwrite newer state.
- **Idempotence:** setup → cleanup → setup is safe under Strict Mode development replay.
- **Ownership:** only one component or hook owns the connection.
- **Visibility:** hidden/background behavior is intentional when timers, media, or observers are involved.

Extract a custom hook when it creates a meaningful reusable boundary around an external system, not merely to hide a confusing Effect.

## UI and Design Consequences

Effect discipline directly protects interface quality:

- fewer flashes caused by render-then-correct behavior
- fewer duplicate requests and loading-state jumps
- no stale validation or outdated search results
- predictable animation and focus state
- fewer hydration mismatches
- cleaner reduced-motion and responsive behavior
- easier visual testing because state transitions have explicit owners

This is why the rule belongs in a design implementation skill even though it is not a visual-style rule.

## React Doctor

[React Doctor](https://www.react.doctor/docs) can complement tests and linting by scanning state/effects, performance, architecture, security, and accessibility.

### When already configured

Use the repository's pinned script, version, and config. Do not replace local policy with `@latest` or auto-fix findings blindly.

### Optional one-off audit

If the user requests a health audit or the project permits an ephemeral package run:

```bash
npx react-doctor@latest --no-telemetry
```

Review every finding against the actual runtime and framework. Do not install CI, add dependencies, change gates, or apply bulk fixes unless that is part of the requested changeset.

React Doctor is supporting evidence, not proof that the UI works. Continue to run project tests and validate the real interaction visually.

## Review Checklist

- no Effect exists without a named external system
- derived values stay out of state
- user actions own their immediate logic
- server data uses the established framework/query path
- external stores use the appropriate subscription primitive
- DOM-node behavior uses refs before lifecycle synchronization where possible
- retained Effects have complete dependencies and symmetrical cleanup
- async work cannot commit stale results
- Strict Mode replay does not duplicate visible behavior
- Hooks lint rules remain enabled
- tests cover user-visible transitions, not implementation details

## Primary References

- [React: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [React: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [React: `useEffect`](https://react.dev/reference/react/useEffect)
- [React: `useSyncExternalStore`](https://react.dev/reference/react/useSyncExternalStore)

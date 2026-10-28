import { rerender } from './runtime'

export const parentValue = 'parent'
export { value as childValue } from './child'

if (import.meta.hot) {
  import.meta.hot.accept((newMod) => {
    if (!newMod) return

    rerender({ child: newMod.childValue, parent: newMod.parentValue })
  })
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=parent.js

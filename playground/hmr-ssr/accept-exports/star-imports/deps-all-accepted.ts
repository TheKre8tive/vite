export const a = 'a0'

export const b = 'b0'

const aliased = 'c0'
export { aliased as c }

export default 'default0'

log(`all >>>>>> ${a}, ${b}, ${aliased}`)

if (import.meta.hot) {
  import.meta.hot.acceptExports(['a', 'b', 'c', 'default'])
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=deps-all-accepted.ts

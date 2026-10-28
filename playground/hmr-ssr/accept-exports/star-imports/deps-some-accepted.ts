export const a = 'a0'

export const b = 'b0'

const aliased = 'c0'
export { aliased as c }

export default 'default0'

log(`some >>>>>> ${a}, ${b}, ${aliased}`)

if (import.meta.hot) {
  import.meta.hot.acceptExports(['a', 'b', 'default'])
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=deps-some-accepted.ts

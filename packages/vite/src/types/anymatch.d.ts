export type AnymatchFn = (testString: string) => boolean
export type AnymatchPattern = string | RegExp | AnymatchFn
type AnymatchMatcher = AnymatchPattern | AnymatchPattern[]

export { AnymatchMatcher as Matcher }

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=anymatch.d.ts

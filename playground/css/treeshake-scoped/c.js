import './c-scoped.css' // should be treeshaken away if `b` is not used

export default function c() {
  return 'treeshake-scoped-c'
}

export function cUsed() {
  // used but does not depend on scoped css
  return 'c-used'
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=c.js

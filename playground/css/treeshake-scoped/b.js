import './b-scoped.css' // should be treeshaken away if `b` is not used

export default function b() {
  return 'treeshake-scoped-b'
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=b.js

import './a-scoped.css' // should be treeshaken away if `a` is not used

export default function a() {
  return 'treeshake-scoped-a'
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=a.js

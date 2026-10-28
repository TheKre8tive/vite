const key = '$$excludedDependencyInstanceCount'

if (!(key in window)) {
  window[key] = 0
}

++window[key]

export function testExcluded() {
  return window[key]
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js

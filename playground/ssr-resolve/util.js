import { pathToFileURL } from 'node:url'

export function used(s) {
  return s
}

// This is not used, so `node:url` should not be bundled
export function treeshaken(s) {
  return pathToFileURL(s)
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=util.js

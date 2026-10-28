// We have to import external json to prevent Vite / esbuild from bundling it.
import pkg from 'vite/package.json' with { type: 'json' }

export default {
  jsonValue: pkg.name,
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config.import-attributes.ts

import config from './vite.config.js'
config.resolve.mainFields = [
  'custom',
  ...config.resolve.mainFields.filter((f) => f !== 'custom'),
]
export default config

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.config-mainfields-custom-first.js

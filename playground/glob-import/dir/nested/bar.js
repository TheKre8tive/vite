const modules = import.meta.glob('../*.json', { eager: true })

export const msg = 'bar'
export { modules }

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=bar.js

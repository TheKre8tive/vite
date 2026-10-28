// Scheme check that imports from different paths are resolved to the same module
const messages = []
export const add = (message) => {
  messages.push(message)
}
export const get = () => messages

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=index.js

let state = {}

export const render = (newState) => {
  state = newState
  apply()
}

export const rerender = (updates) => {
  state = { ...state, ...updates }
  apply()
}

const apply = () => {
  globalThis.__HMR__['.file-delete-restore'] = Object.values(state).join(':')
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=runtime.js

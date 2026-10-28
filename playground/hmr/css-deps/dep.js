// This file is depended by main.css via this.addWatchFile
export const color = 'red'

// Self-accept so that updating this file would not trigger a page reload.
// We only want to observe main.css updating itself.
if (import.meta.hot) {
  import.meta.hot.accept()
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=dep.js

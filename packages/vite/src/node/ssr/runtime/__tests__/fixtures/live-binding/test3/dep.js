function f() {
  return 0;
}

f = () => 1

export { f as default }

f = () => 2

export function update() {
  f = () => 3;
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=dep.js

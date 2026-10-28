// This counts as 'server-side' rendering, yes?
export async function render() {
  return /* html */ `
    <div id="app">Hello</div>
    <div id="mode">${import.meta.env.MODE}</div>
  `
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=entry-server-sequential.js

import shouldTreeshake from './shared-css-empty-2.js'
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Shared CSS, with JS</h1>
  </div>
`
function shouldBeTreeshaken_0() {
  // This function should be treeshaken, even if { moduleSideEffects: 'no-treeshake' }
  // was used in the JS corresponding to the HTML entrypoint.
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=shared-css-main.js

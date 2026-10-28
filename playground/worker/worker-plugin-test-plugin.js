export default () => ({
  name: 'plugin-for-worker',
  transform(code, id) {
    if (id.includes('worker/modules/test-plugin.js')) {
      return {
        // keep length for sourcemap
        code: code.replace('plugin fail.   ', 'plugin success!'),
        map: null,
      }
    }
  },
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=worker-plugin-test-plugin.js

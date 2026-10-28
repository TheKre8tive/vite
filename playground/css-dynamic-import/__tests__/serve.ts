// this is automatically detected by playground/vitestSetup.ts and will replace
// the default e2e test serve behavior

// The server is started in the test, so we need to have a custom serve
// function or a default server will be created
export async function serve() {
  return {
    close: () => Promise.resolve(),
  }
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=serve.ts

// do nothing here since server is managed inside spec
export async function serve(): Promise<{ close(): Promise<void> }> {
  return {
    close: () => Promise.resolve(),
  }
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=serve.ts

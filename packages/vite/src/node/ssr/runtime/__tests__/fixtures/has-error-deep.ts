function crash(message: string) {
  throw new Error(message)
}

export function main(): void {
  crash('crash')
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=has-error-deep.ts

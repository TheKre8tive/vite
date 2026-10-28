declare module 'css-color-names' {
  const colors: Record<string, string>
  export default colors
}

declare module 'kill-port' {
  const kill: (port: number) => Promise<void>
  export default kill
}

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=shims.d.ts

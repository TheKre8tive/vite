import type { Config } from 'tailwindcss'

export default {
  content: [
    // Before editing this section, make sure no paths are matching with `/src/main.js`
    // Look https://github.com/vitejs/vite/pull/6959 for more details
    __dirname + '/src/{components,views}/**/*.js',
    __dirname + '/src/main.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=tailwind.config.ts

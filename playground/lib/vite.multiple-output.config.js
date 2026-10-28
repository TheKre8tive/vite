import path from 'node:path'
import { defineConfig } from 'vite'

const root = process.env.VITEST
  ? path.resolve(__dirname, '../../playground-temp/lib')
  : __dirname

export default defineConfig({
  build: {
    lib: {
      // set multiple entrypoint to trigger css chunking
      entry: {
        main: path.resolve(__dirname, 'src/main-multiple-output.js'),
        sub: path.resolve(__dirname, 'src/sub-multiple-output.js'),
      },
      name: 'MyLib',
    },
    outDir: 'dist/multiple-output',
    rollupOptions: {
      // due to playground-temp, the `dir` needs to be relative to the resolvedRoot
      output: [
        {
          dir: path.resolve(root, 'dist/multiple-output/es'),
          format: 'es',
          entryFileNames: 'index.mjs',
          assetFileNames: 'assets/mylib.css',
        },
        {
          dir: path.resolve(root, 'dist/multiple-output/cjs'),
          format: 'cjs',
          entryFileNames: 'index.cjs',
          assetFileNames: 'assets/mylib.css',
        },
      ],
    },
    cssCodeSplit: true,
  },
  cacheDir: 'node_modules/.vite-multiple-output',
})

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=vite.multiple-output.config.js

/// <reference types="vitest" />

import {defineConfig} from 'vitest/config'
import {svelte} from '@sveltejs/vite-plugin-svelte'

export default defineConfig(({mode}) => ({
  plugins: [svelte()],
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
  },
  test: {
    globals : true,
    environment: 'jsdom',
    setupFiles: ['./src/setup-tests.ts'],
  },
}))
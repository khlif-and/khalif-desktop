import { defineConfig } from 'vite'

export default defineConfig({
    base: './', // CRITICAL for Electron to find assets in production
})

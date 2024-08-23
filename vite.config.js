import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// tell vite to use externals
import { viteExternalsPlugin } from 'vite-plugin-externals'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteExternalsPlugin({
      "vue": "Vue",
      "vue-router": "VueRouter",
      "vue-i18n": "VueI18n",
      "pinia": "Pinia"
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

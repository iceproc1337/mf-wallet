import fs from 'fs/promises';
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// tell vite to use externals
import { viteExternalsPlugin } from 'vite-plugin-externals'

// Visualize the bundle
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteExternalsPlugin({
      "vue": "Vue",
      "vue-router": "VueRouter",
      "vue-i18n": "VueI18n",
      "pinia": "Pinia",
      "framework7": "Framework7",
    }),
    // Use index_dev.html in development
    {
      name: 'index-html-env',
      async transformIndexHtml() {
        if (process.env.NODE_ENV !== 'production') {
          return await fs.readFile('index_dev.html', 'utf8')
        }
      }
    },
    visualizer({ open: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';
import Components from 'unplugin-vue-components/vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages(), Components(), Layouts({ layoutsDirs: 'src/layouts', nuxtStyle: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  test: {
    globals: true
  },
  server: {
    host: '0.0.0.0',
    port: '3001'
  },
  publicPath: '/new-vite-pro/'
})

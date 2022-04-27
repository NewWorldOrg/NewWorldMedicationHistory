import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactJsx from 'vite-react-jsx'
import eslintPlugin from 'vite-plugin-eslint'


const HOST = '0.0.0.0'
const PORT = 8080

export default defineConfig({
  server: {
    open: false,
    host: HOST,
    port: PORT,
    strictPort: true,
    /* hmr: {
      host: HOST,
      port: PORT,
      clientPort: 80,
      path: 'dist',
    }, */
    watch: {
      ignored: ['./dist', './node_modules'],
    },
    force: true,
  },
  plugins: [
    react(),
    reactJsx(),
    reactRefresh(),
    eslintPlugin(),
  ],
  build: {
    outDir: path.resolve(__dirname, '..', 'dist'),
  },
  envDir: './',
  json: {
    stringify: true,
  },
})
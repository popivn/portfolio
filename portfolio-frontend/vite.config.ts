import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(({ mode }) => {

  return {
    base: './',
    plugins: [
      vue(),
      vueJsx(),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode)
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      watch: {
        usePolling: true,
        interval: 100,
      },
      hmr: {
        clientPort: 5173,
        host: 'localhost'
      },
      allowedHosts: ['popivn.onrender.com','1c3e-2405-4802-d095-38c0-3d52-9361-750c-936d.ngrok-free.app','vnpopi.onrender.com'],
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { routes } from './src/data/site'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        routes.map((route) => [
          route.id,
          resolve(
            process.cwd(),
            route.id === 'not-found'
              ? '404.html'
              : `${route.path === '/' ? '' : route.path.slice(1)}index.html`,
          ),
        ]),
      ),
    },
  },
})

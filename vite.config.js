import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('vue')) {
              return 'vendor-framework'; // Separate React/Vue
            }
            return 'vendor'; // Separate other libraries
          }
        },
      },
    },
  },
})

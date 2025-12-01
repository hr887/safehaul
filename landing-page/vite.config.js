import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['55d132c2-84b6-477f-ae6c-24518b00964f-00-2ommgstultd8a.pike.replit.dev'],
  },
})

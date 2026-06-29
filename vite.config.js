import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT : remplace 'tracker-devsecops' par le nom exact de ton repo GitHub
  base: '/tracker-v2/',
})

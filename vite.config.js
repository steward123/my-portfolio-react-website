import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/my-portfolio-react-website/',
  server:{
    port:2587
  },
  build:{
    outDir:"./docs"
  }
})

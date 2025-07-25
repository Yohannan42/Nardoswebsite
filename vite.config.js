import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Nardoswebsite/', // Add this line for GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  assetsInclude: ['**/*.PNG', '**/*.JPEG', '**/*.JPG', '**/*.jpg', '**/*.png', '**/*.jpeg'],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})

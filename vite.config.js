import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'fs'

// Custom plugin to copy root assets folder to dist/assets after build
const copyAssetsPlugin = () => {
  return {
    name: 'copy-assets',
    closeBundle() {
      const srcDir = path.resolve(__dirname, 'assets')
      const destDir = path.resolve(__dirname, 'dist/assets')
      
      if (existsSync(srcDir)) {
        if (!existsSync(destDir)) {
          mkdirSync(destDir, { recursive: true })
        }
        
        const files = readdirSync(srcDir)
        files.forEach(file => {
          const srcPath = path.join(srcDir, file)
          const destPath = path.join(destDir, file)
          try {
            copyFileSync(srcPath, destPath)
            console.log(`Copied: ${file}`)
          } catch (err) {
            console.error(`Failed to copy ${file}:`, err)
          }
        })
        console.log(`✓ Copied ${files.length} asset files to dist/assets`)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyAssetsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['5173-ig0lurl8qo1dwy03palk0-6366d9fd.manusvm.computer'],
  },
})

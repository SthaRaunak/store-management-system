import { defineConfig } from '../client/node_modules/vite/dist/node'
import react from '../client/node_modules/@vitejs/plugin-react/dist'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

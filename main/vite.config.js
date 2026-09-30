import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, pathToFileURL } from 'node:url'

const repoRoot = fileURLToPath(new URL('..', import.meta.url))

// Dev only: serve the Vercel function at /api/contact so `npm run dev` can send real mail.
// Reads GMAIL_* from the repo-root .env (never committed).
function contactApiDevRoute() {
  return {
    name: 'contact-api-dev-route',
    apply: 'serve',
    configureServer(server) {
      const env = loadEnv('development', repoRoot, '')
      for (const key of ['GMAIL_USER', 'GMAIL_APP_PASSWORD', 'CONTACT_TO']) {
        if (env[key] && !process.env[key]) process.env[key] = env[key]
      }

      server.middlewares.use('/api/contact', async (req, res) => {
        const url = pathToFileURL(`${repoRoot}api/contact.js`).href
        const { default: handler } = await import(`${url}?t=${Date.now()}`)
        await handler(req, res)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactApiDevRoute()],
})

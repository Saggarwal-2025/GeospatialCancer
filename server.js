/*
 * Production server for GoDaddy Node.js Hosting.
 *
 * The platform runs `npm run build` (vite build -> dist/) and then `npm start`,
 * which is this file. Express serves the built assets and falls back to
 * index.html so react-router can handle /departments, /officers and /contact
 * on a hard refresh - the same job vercel.json does on Vercel.
 */
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, 'dist')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(dist))

app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'index.html'))
})

app.listen(port, '0.0.0.0')

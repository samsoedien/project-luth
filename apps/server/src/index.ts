import http from 'http'
import dotenv from 'dotenv'

import app from './api/app'

dotenv.config()

const PORT = process.env.PORT ?? 5002
const server = http.createServer(app)

server
  .listen(PORT, () => {
    console.info(`Server running at http://localhost:${PORT}`)
  })
  .on('error', console.error)

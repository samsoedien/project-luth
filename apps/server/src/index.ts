import http from 'http'
import dotenv from 'dotenv'

import { sum } from '@project-luth/common'
import app from './api/app'
// import connectDB from './config/mongoDB'

console.log(sum(2, 2))

dotenv.config()

const PORT = process.env.PORT != null || 5001
const server = http.createServer(app)

server
  .listen(PORT, () => {
    // connectDB()
    console.info(`Server running at http://localhost:${PORT}`)
  })
  .on('error', console.error)

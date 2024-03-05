import http from 'http'
import dotenv from 'dotenv'

import app from './api/app'
// import connectDB from './config/mongoDB'

dotenv.config()

const PORT = process.env.PORT || 5001
const server = http.createServer(app)

server
  .listen(PORT, () => {
    // connectDB()
    console.info(`Server running at http://localhost:${PORT}`)
  })
  .on('error', console.error)

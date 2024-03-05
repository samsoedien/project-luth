import path from 'path'
import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import hpp from 'hpp'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import xss from 'xss-clean'
import cookieparser from 'cookie-parser'

// import productRoutes from './routes/products.route'
// import errorMiddleware from './middleware/error.middleware'

dotenv.config()

const app: Application = express()

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
})

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(compression())
app.use(cookieparser())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(cors())
app.use(limiter)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  return next()
})

app.get('/', (req: Request, res: Response) => res.send('Rest API Running.'))

// app.use('/api/v1/products', productRoutes)
// app.use(errorMiddleware)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

export default app

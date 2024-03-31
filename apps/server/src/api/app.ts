import path from 'path'
import express, { type Application, type Request, type Response } from 'express'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import hpp from 'hpp'
import cors from 'cors'
import xss from 'xss-clean'
import cookieparser from 'cookie-parser'

import limiter from './middlewares/limiter.middelware'

import authRoutes from './routes/auth.route'
import userRoutes from './routes/users.route'
import productRoutes from './routes/products.route'
import postRoutes from './routes/posts.route'
import cartRoutes from './routes/cart.route'

import errorMiddleware from './middlewares/error.middleware'

const app: Application = express()

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
  next()
})

app.get('/', (req: Request, res: Response) => res.send('Rest API Running.'))

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/products', productRoutes)
app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/cart', cartRoutes)
// app.use('/api/v1', rootRouter)

app.use(errorMiddleware)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

export default app

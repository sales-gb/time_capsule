import 'dotenv/config'

import { fastify } from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { authRoutes, memoriesRoutes, uploadRoutes } from './routes'
import { resolve } from 'node:path'

const app = fastify()

app.register(cors, {
  origin: true
})
app.register(jwt, {
  secret: 'spacetime'
})
app.register(multipart)
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads', 
})

app.register(authRoutes)
app.register(memoriesRoutes)
app.register(uploadRoutes)

app.listen({ 
  port: 3333, 
  host: '0.0.0.0',
}).then(() => {
  console.log('🚀 server is running on http://localhost:3333')
})

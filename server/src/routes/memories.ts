import { FastifyInstance } from 'fastify'
import z from 'zod'
import { prisma } from '../lib/prisma'

const paramsSchema = z.object({
  id: z.string().uuid(),
})

const bodySchema = z.object({
  content: z.string(),
  coverUrl: z.string(),
  isPublic: z.coerce.boolean().default(false)
})


export async function memoriesRoutes(app: FastifyInstance) {
  
  app.get('/memories', async (r) => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })

    return memories.map(memory => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat('...')
      }
    })
  })

  app.get('/memories/:id', async (req) => {
    const { id } = paramsSchema.parse(req.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      }
    })

    return memory
  })

  app.post('/memories', async (req) => {
    const {content, coverUrl, isPublic} = bodySchema.parse(req.body)

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: '5be7f607-54f2-4a4e-85b0-f992615efef9'
      }
    })

    return memory
  })

  app.put('/memories/:id', async (req) =>{
    const { id } = paramsSchema.parse(req.params)
    const {content, coverUrl, isPublic} = bodySchema.parse(req.body)
    
    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic
      }
    })

    return memory
  })

  app.delete('/memories/:id', async (req) =>{
    const { id } = paramsSchema.parse(req.params)

    await prisma.memory.delete({
      where: {
        id,
      }
    })
  })
}

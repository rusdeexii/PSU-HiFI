import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  return Response.json(await prisma.news.findMany())
}

export async function POST(req: Request) {
  try {
    const { title, content,imageUrl } = await req.json()
    const newNews = await prisma.news.create({
      data: {
        title,
        content,
        imageUrl,
      },
    })
    return Response.json(newNews)
  } catch (error) {
    return new Response(error as BodyInit, {
      status: 500,
    })
  }
}
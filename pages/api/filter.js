import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const { filter } = req.body

  const result = await prisma.customer.findMany({
    where: {
      firstName: {equals: filter}
    },
  })

  res.json(result)
}
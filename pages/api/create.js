import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const { firstName, lastName, email } = req.body

  const result = await prisma.customer.create({
    data: {
      firstName,
      lastName,
      email,
    },
  })

  res.json(result)
}

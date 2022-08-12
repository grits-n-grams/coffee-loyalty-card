import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const { customer, customer_id, amount, loyalty_gained } = req.body

  const result = await prisma.customer.create({
    data: {
      customer,
      customer_id,
      amount,
      loyalty_gained,
    },
  })
  res.json(result)
}

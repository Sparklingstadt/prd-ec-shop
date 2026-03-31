import { prisma } from "@/lib/prisma"

export async function getOrders(userId: number) {
  const orders = await prisma.order.findMany({
    where: {
      userId
    }
  })

  return orders
}
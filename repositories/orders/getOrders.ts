import { prisma } from "@/lib/prisma"

export async function getOrders() {
  const orders = await prisma.order.findMany()

  return orders
}
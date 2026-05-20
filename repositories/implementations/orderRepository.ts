import { prisma } from "@/lib/prisma"

export const orderRepository = {
  async findByUserId(userId: number) {
    return await prisma.order.findMany({
      where: { userId }
    })
  },
  async findByOrderId(orderId: number) {
    return await prisma.order.findUnique({
      where: { id: orderId }
    })
  }
}
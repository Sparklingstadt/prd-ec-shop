import { prisma } from "@/lib/prisma"

export const orderItemRepository = {
  async findByOrderId(orderId: number) {
    return await prisma.orderItem.findMany({
      where: { orderId }
    })
  }
}
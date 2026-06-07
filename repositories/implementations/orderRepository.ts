import { prisma } from "@/lib/prisma"
import { IOrderRepository } from "../interfaces/IOrderRepository"

export class OrderRepository implements IOrderRepository {
  async findByUserId(userId: number) {
    return await prisma.order.findMany({
      where: { userId }
    })
  }
  async findByOrderId(orderId: number) {
    return await prisma.order.findUnique({
      where: { id: orderId }
    })
  }
}
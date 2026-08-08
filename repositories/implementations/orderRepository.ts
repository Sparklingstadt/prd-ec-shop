import { prisma } from "@/lib/prisma"
import { IOrderRepository } from "../interfaces/IOrderRepository"
import { Order } from "../entities/Order"

export class OrderRepository implements IOrderRepository {
  async findManyByUserId(userId: number) {
    const orders = await prisma.order.findMany({
      where: { userId }
    })
    return orders.map(order => {
      return new Order(
        order.id,
        order.paymentStatus,
        order.shippingStatus,
        order.shippingPrice,
        order.totalPrice,
        order.orderedAt,
        order.userId
      )
    })
  }
  async findByOrderId(orderId: number) {
    const order = await prisma.order.findUnique({
      where: { id: orderId }
    })
    if(!order) throw new Error("Order not found!")
    
    return new Order(
      order.id,
      order.paymentStatus,
      order.shippingStatus,
      order.shippingPrice,
      order.totalPrice,
      order.orderedAt,
      order.userId
    )
  }
}
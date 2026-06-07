import { OrderItem } from "../entities/OrderItem";

export interface IOrderItemRepository {
  findManyByOrderId(orderId: number): Promise<OrderItem[]>
}
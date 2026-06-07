import { Order } from "../entities/Order";

export interface IOrderRepository {
  findManyByUserId(userId: number): Promise<Order[]>
  findByOrderId(orderId: number): Promise<Order | null>
}
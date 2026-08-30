import { Order } from "../entities/Order";

export interface IOrderRepository {
  findManyByUserId(userId: number): Promise<Order[]>
  findByOrderIdForUser(orderId: number, userId: number): Promise<Order | null>
}

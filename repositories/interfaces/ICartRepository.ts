import { Cart } from "../entities/Cart";

export interface ICartRepository {
  findByUserId(userId: number): Promise<Cart | null>
}
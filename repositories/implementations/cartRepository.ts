import { prisma } from "@/lib/prisma"
import { ICartRepository } from "../interfaces/ICartRepository"

export class cartRepository implements ICartRepository {
  async findByUserId(userId: number) {
    return await prisma.cart.findUnique({
      where: { userId }
    })
  }
}
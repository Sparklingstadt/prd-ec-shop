import { prisma } from "@/lib/prisma"

export const cartRepository = {
  async findByUserId(userId: number) {
    return await prisma.cart.findUnique({
      where: { userId }
    })
  }
}
import { prisma } from "@/lib/prisma"

export const cartItemRepository = {
  async findByCartId(cartId: number) {
    return await prisma.cartItem.findMany({
      where: { cartId }
    })
  },
  async findWithProductsByCartId(cartId: number) {
    return await prisma.cartItem.findMany({
      where: { cartId },
      include: {
        product: true
      }
    })
  }
}
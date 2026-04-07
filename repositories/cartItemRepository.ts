import { prisma } from "@/lib/prisma"

export const cartItemRepository = {
  async findByCartId(cartId: number) {
    return await prisma.cartItem.findMany({
      where: { cartId }
    })
  },
  async findWithVariantsByCartId(cartId: number) {
    return await prisma.cartItem.findMany({
      where: { cartId },
      include: {
        variant: true
      }
    })
  },
  async addToCart({
    cartId,
    variantId,
    quantity
  }: {
    cartId: number,
    variantId: number,
    quantity: number
  }) {
    return await prisma.cartItem.upsert({
      where: {
        cartId_variantId: {
          cartId,
          variantId
        }
      },
      update: {
        quantity
      },
      create: {
        cartId,
        variantId,
        quantity
      }
    })
  },
  async removeCartItem(cartId: number, variantId: number) {
    await prisma.cartItem.delete({
      where: {
        cartId_variantId: {
          cartId,
          variantId
        }
      }
    })    
  },
  async incrementQuantity(cartItemId: number) {
    await prisma.cartItem.update({
      where: { id: cartItemId },
      data: {
        quantity: { increment: 1 }
      }
    })
  },
  async decrementQuantity(cartItemId: number) {
    await prisma.cartItem.update({
      where: { id: cartItemId },
      data: {
        quantity: { decrement: 1 }
      }
    })
  },
}
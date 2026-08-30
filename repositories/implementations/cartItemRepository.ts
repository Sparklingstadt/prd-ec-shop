import { prisma } from "@/lib/prisma"
import { ICartItemRepository } from "../interfaces/ICartItemRepository"
import { MAX_CART_QUANTITY } from "@/lib/validation"

export class cartItemRepository implements ICartItemRepository {
  async findManyByCartId(cartId: number) {
    return await prisma.cartItem.findMany({
      where: { cartId }
    })
  }
  async findManyWithVariantsByCartId(cartId: number) {
    return await prisma.cartItem.findMany({
      where: { cartId },
      include: {
        variant: true
      }
    })
  }
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
  }
  async removeCartItemForUser(userId: number, variantId: number) {
    const result = await prisma.cartItem.deleteMany({
      where: {
        variantId,
        cart: { userId }
      }
    })
    return result.count
  }
  async incrementQuantityForUser(cartItemId: number, userId: number) {
    const result = await prisma.cartItem.updateMany({
      where: {
        id: cartItemId,
        cart: { userId },
        quantity: { lt: MAX_CART_QUANTITY }
      },
      data: {
        quantity: { increment: 1 }
      }
    })
    return result.count
  }
  async decrementQuantityForUser(cartItemId: number, userId: number) {
    const result = await prisma.cartItem.updateMany({
      where: {
        id: cartItemId,
        cart: { userId },
        quantity: { gt: 1 }
      },
      data: {
        quantity: { decrement: 1 }
      }
    })
    return result.count
  }
}

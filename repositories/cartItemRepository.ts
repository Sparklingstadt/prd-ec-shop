import { decrementCartItemQuantity, incrementCartItemQuantity } from "@/app/actions/actions"
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
  },
  async addToCart(cartId: number, productId: number, quantity: number) {
    return await prisma.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId,
          productId
        }
      },
      update: {
        quantity
      },
      create: {
        cartId,
        productId,
        quantity
      }
    })
  },
  async removeCartItem(cartId: number, productId: number) {
    await prisma.cartItem.delete({
      where: {
        cartId_productId: {
          cartId,
          productId
        }
      }
    })    
  },
  async incrementQuantity(cartId: number, productId: number) {
    await prisma.cartItem.update({
      where: {
        cartId_productId: {
          cartId,
          productId
        }
      },
      data: {
        quantity: { increment: 1 }
      }
    })
  },
  async decrementQuantity(cartId: number, productId: number) {
      await prisma.cartItem.update({
        where: {
          cartId_productId: {
            cartId,
            productId
          }
        },
        data: {
          quantity: { decrement: 1 }
        }
      })
    
  }
}
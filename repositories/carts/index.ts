import { prisma } from "@/lib/prisma"

export async function getCartWithProductsByUserId(userId: number) {
    const cart = await prisma.cart.findUnique({
    where: { userId },
    include: {
      items: {
        include: {
          product: true
        }
      }
    }
  })

  return cart
}
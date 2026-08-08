"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { calculateOrderTotal } from "./orderPricing";

export default async function checkoutService(userId: number) {
  const shippingPrice = 1000
  await prisma.$transaction(async tx => {
    const cart = await tx.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: { variant: true }
        }
      }
    })

    if(!cart || cart.items.length === 0) {
      throw new Error("カートが空です")
    }

    const order = await tx.order.create({
      data: {
        userId,
        paymentStatus: "支払い済み",
        shippingStatus: "発送済み",
        shippingPrice,
        totalPrice: calculateOrderTotal(cart.items, shippingPrice),
        orderItems: {
          create: cart.items.map(item => ({
            variant: {
              connect: { id: item.variantId }
            },
            quantity: item.quantity,
            variantName: item.variant.name,
            priceAtPurchase: item.variant.price
          }))
        }
      }
    })

    await tx.cartItem.deleteMany({
      where: { cartId: cart.id }
    })

    return order
  })

  revalidatePath("/", "layout")
}

"use server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function addItemToCart({
  cartId,
  productId,
  quantity
}: {
  cartId: number,
  productId: number,
  quantity: number
}) {

  await prisma.cartItem.upsert({
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

  revalidatePath("/", "layout")

  return { success: true }
}

type removeCartItemProps = {
  cartId: number
  productId: number
}
export async function removeCartItem({ cartId, productId }: removeCartItemProps) {
  await prisma.cartItem.delete({
    where: {
      cartId_productId: {
        cartId,
        productId
      }
    }
  })
  
  revalidatePath("/", "layout")

  return { success: true }

}
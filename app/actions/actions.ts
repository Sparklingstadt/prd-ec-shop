"use server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

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

export async function signIn(userId: number) {
  (await cookies()).set("userId", String(userId))
  revalidatePath("/", "layout")
  redirect("/account")
}

export async function signOut() {
  (await cookies()).delete("userId")
  revalidatePath("/", "layout")
  redirect("/signin")
}

export async function incrementCartItemQuantity({
  cartId,
  productId
}: {
  cartId: number
  productId: number
}){
  await prisma.cartItem.update({
    where: {
      cartId_productId: {
        cartId,
        productId
      }
    },
    data: {
      quantity: {
        increment: 1
      }
    }
  })

  revalidatePath("/cart")
}

export async function decrementCartItemQuantity({
  cartId,
  productId
}: {
  cartId: number
  productId: number
}){
  await prisma.cartItem.update({
    where: {
      cartId_productId: {
        cartId,
        productId
      }
    },
    data: {
      quantity: {
        decrement: 1
      }
    }
  })

  revalidatePath("/cart")
}


"use server"
import { signOut } from "@/auth"
import { removeItemFromCart } from "@/services/cartService"
import { revalidatePath } from "next/cache"

export async function removeCartItem({ cartId, variantId }: {
  cartId: number
  variantId: number
}) {
  await removeItemFromCart(cartId, variantId)
  revalidatePath("/", "layout")
  return { success: true }
}

export async function signOutAction() {
  await signOut({
    redirect: false,
  })
  revalidatePath("/", "layout")
}

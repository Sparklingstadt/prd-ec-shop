"use server"
import { signOut } from "@/auth"
import { requireUserId } from "@/lib/auth"
import { removeItemFromCart } from "@/services/cartService"
import { revalidatePath } from "next/cache"

export async function removeCartItem({ variantId }: {
  variantId: number
}) {
  const userId = await requireUserId()
  await removeItemFromCart(userId, variantId)
  revalidatePath("/", "layout")
  return { success: true }
}

export async function signOutAction() {
  await signOut({
    redirect: false,
  })
  revalidatePath("/", "layout")
}

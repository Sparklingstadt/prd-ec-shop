"use server"
import { addItemToCart } from "@/services/cartService"
import { requireUserId } from "@/lib/auth"
import { revalidatePath } from "next/cache"

export async function addItemToCartAction(_prevState: unknown, formData: FormData) {
  const userId = await requireUserId()
  const variantId = Number(formData.get("variantId"))
  const quantity = Number(formData.get("quantity"))

  await addItemToCart({ userId, variantId, quantity })
  revalidatePath("/", "layout")
  return { success: true }
}

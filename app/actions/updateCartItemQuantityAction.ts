"use server"
import { updateCartItemQuantity } from "@/services/cartService"
import { requireUserId } from "@/lib/auth"
import { revalidatePath } from "next/cache"

export async function updateCartItemQuantityAction(
  _prevState: unknown,
  formData: FormData
) {
  const userId = await requireUserId()
  const cartItemId = Number(formData.get("cartItemId"))
  const type = formData.get("type")
  if (type === "increment" || type === "decrement") {
    await updateCartItemQuantity(userId, cartItemId, type)
  }

  revalidatePath("/", "layout")
  return { success: true }
}

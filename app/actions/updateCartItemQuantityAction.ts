"use server"
import { updateCartItemQuantity } from "@/services/cartService"
import { revalidatePath } from "next/cache"

export async function updateCartItemQuantityAction(
  _: any,
  formData: FormData
) {
  const cartItemId = Number(formData.get("cartItemId"))
  const type = formData.get("type")
  if (type === "increment" || type === "decrement") {
    await updateCartItemQuantity(cartItemId, type)
  }

  revalidatePath("/", "layout")
  return { success: true }
}

import { cartItemRepository } from "@/repositories/cartItemRepository"
import { revalidatePath } from "next/cache"

export async function updateCartItemQuantityAction(
  _: any,
  formData: FormData
) {
  const cartItemId = Number(formData.get("cartItemId"))
  const type = formData.get("type")

  if (type === "increment") {
    await cartItemRepository.incrementQuantity(cartItemId)
  }

  if (type === "decrement") {
    await cartItemRepository.decrementQuantity(cartItemId)
  }

  revalidatePath("/", "layout")
  return { success: true }
}
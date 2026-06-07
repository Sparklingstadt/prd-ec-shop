"use server"
import { cartItemRepository } from "@/repositories/implementations/cartItemRepository"
import { revalidatePath } from "next/cache"

export async function updateCartItemQuantityAction(
  _: any,
  formData: FormData
) {
  const cartItemId = Number(formData.get("cartItemId"))
  const type = formData.get("type")
  const repo = new cartItemRepository()
  if (type === "increment") {
    await repo.incrementQuantity(cartItemId)
  }

  if (type === "decrement") {
    await repo.decrementQuantity(cartItemId)
  }

  revalidatePath("/", "layout")
  return { success: true }
}
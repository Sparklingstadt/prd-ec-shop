"use server"
import { updateCartItemQuantity } from "@/services/cartService"
import { requireUserId } from "@/lib/auth"
import { requireCartMutationType, requireNonNegativeInteger } from "@/lib/validation"
import { revalidatePath } from "next/cache"

export async function updateCartItemQuantityAction(
  _prevState: unknown,
  formData: FormData
) {
  const userId = await requireUserId()
  const cartItemId = requireNonNegativeInteger(formData.get("cartItemId"), "cartItemId")
  const type = requireCartMutationType(formData.get("type"))
  await updateCartItemQuantity(userId, cartItemId, type)

  revalidatePath("/", "layout")
  return { success: true }
}

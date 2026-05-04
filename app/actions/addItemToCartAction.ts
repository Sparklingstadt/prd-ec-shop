import { addItemToCart } from "@/services/cartService"
import { revalidatePath } from "next/cache"

export async function addItemToCartAction(prevState: any, formData: FormData) {
  const cartId = Number(formData.get("cartId"))
  const variantId = Number(formData.get("variantId"))
  const quantity = Number(formData.get("quantity"))

  await addItemToCart({ cartId, variantId, quantity })
  revalidatePath("/", "layout")
  return { success: true }
}
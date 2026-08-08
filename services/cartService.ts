"use server"
import { cartItemRepository } from "@/repositories/implementations/cartItemRepository"

export async function addItemToCart({
  cartId, variantId, quantity
}: {
  cartId: number
  variantId: number
  quantity: number
}) {
  const repo = new cartItemRepository()
  await repo.addToCart({ cartId, variantId, quantity })
}

export async function removeItemFromCart(cartId: number, variantId: number) {
  const repo = new cartItemRepository()
  await repo.removeCartItem(cartId, variantId)
}

export async function updateCartItemQuantity(
  cartItemId: number,
  type: "increment" | "decrement"
) {
  const repo = new cartItemRepository()

  if (type === "increment") {
    await repo.incrementQuantity(cartItemId)
    return
  }

  await repo.decrementQuantity(cartItemId)
}

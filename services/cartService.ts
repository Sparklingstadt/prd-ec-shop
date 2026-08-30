import { cartRepository } from "@/repositories/implementations/cartRepository"
import { cartItemRepository } from "@/repositories/implementations/cartItemRepository"

export async function addItemToCart({
  userId, variantId, quantity
}: {
  userId: number
  variantId: number
  quantity: number
}) {
  const cartRepo = new cartRepository()
  const cart = await cartRepo.findByUserId(userId)
  if (!cart) throw new Error("Cart not found")

  const repo = new cartItemRepository()
  await repo.addToCart({ cartId: cart.id, variantId, quantity })
}

export async function removeItemFromCart(userId: number, variantId: number) {
  const repo = new cartItemRepository()
  const count = await repo.removeCartItemForUser(userId, variantId)
  if (count !== 1) throw new Error("Cart item not found")
}

export async function updateCartItemQuantity(
  userId: number,
  cartItemId: number,
  type: "increment" | "decrement"
) {
  const repo = new cartItemRepository()

  if (type === "increment") {
    const count = await repo.incrementQuantityForUser(cartItemId, userId)
    if (count !== 1) throw new Error("Cart item not found")
    return
  }

  const count = await repo.decrementQuantityForUser(cartItemId, userId)
  if (count !== 1) throw new Error("Cart item not found")
}

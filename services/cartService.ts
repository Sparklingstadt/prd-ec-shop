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
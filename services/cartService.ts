"use server"
import { cartItemRepository } from "@/repositories/cartItemRepository"

export async function addItemToCart({
  cartId, variantId, quantity
}: {
  cartId: number
  variantId: number
  quantity: number
}) {
  await cartItemRepository.addToCart({ cartId, variantId, quantity })
}
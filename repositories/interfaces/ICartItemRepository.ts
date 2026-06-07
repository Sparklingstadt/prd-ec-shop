import { Variant } from "@/lib/types";
import { CartItem } from "../entities/CartItem";

export interface ICartItemRepository {
  findManyByCartId(cartId: number): Promise<CartItem[]>,
  findManyWithVariantsByCartId(cartId: number): Promise<(CartItem & { variant: Variant})[]>,
  addToCart({
    cartId,
    variantId,
    quantity
  }: { 
    cartId: number,
    variantId: number, 
    quantity: number
  }): void,
  removeCartItem(cartId: number, variantId: number): void,
  incrementQuantity(cartItemId: number): void,
  decrementQuantity(cartItemId: number): void

}
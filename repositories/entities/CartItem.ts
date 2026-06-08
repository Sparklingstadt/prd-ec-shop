export class CartItem {
  constructor(
    public readonly id: number,
    public readonly cartId: number,
    public readonly quantity: number,
    public readonly variantId: number
  ) {
    if(!id) {
      throw new Error("id is required!")
    }
    if(!cartId) {
      throw new Error("cartId is required!")
    }
    if(!quantity) {
      throw new Error("quantity is required!")
    }
    if(!variantId) {
      throw new Error("variantId is required!")
    }
  }
}
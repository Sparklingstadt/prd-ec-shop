export class CartItem {
  constructor(
    public readonly id: number,
    public readonly cartId: number,
    public readonly quantity: number,
    public readonly variantId: number
  ) {
    if(id < 0) {
      throw new Error("id must be non-negative!")
    }
    if(cartId < 0) {
      throw new Error("cartId must be non-negative!")
    }
    if(!quantity) {
      throw new Error("quantity is required!")
    }
    if(variantId < 0) {
      throw new Error("variantId must be non-negative!")
    }
  }
}

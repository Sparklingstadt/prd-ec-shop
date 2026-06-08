export class OrderItem {
  constructor(
    public readonly id: number,
    public readonly orderId: number,
    public readonly variantId: number,
    public readonly variantName: string,
    public readonly priceAtPurchase: number,
    public readonly quantity: number,
  ) {
    if(!id) {
      throw new Error("id is required!")
    }
    if(!orderId) {
      throw new Error("orderId is required!")
    }
    if(!variantId) {
      throw new Error("variantId is required!")
    }
    if(!variantName) {
      throw new Error("varintName is required!")
    }
    if(!priceAtPurchase) {
      throw new Error("priceAtPurchase is required!")
    }
    if(!quantity) {
      throw new Error("quantity is required!")
    }
  }
}
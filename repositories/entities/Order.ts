export class Order {
  constructor(
    public readonly id: number,
    public readonly paymentStatus: string,
    public readonly shippingStatus: string,
    public readonly shippingPrice: number,
    public readonly totalPrice: number,
    public readonly orderedAt: Date,
    public readonly userId: number,
  ) {
    if(!id) {
      throw new Error("id is required!")
    }
    if(!paymentStatus) {
      throw new Error("paymentStatus is required!")
    }
    if(!shippingStatus) {
      throw new Error("shippingStatus is required!")
    }
    if(!shippingPrice) {
      throw new Error("shippingPrice is required!")
    }
    if(!totalPrice) {
      throw new Error("totalPrice is required!")
    }
    if(!orderedAt) {
      throw new Error("orderedAt is required!")
    }
    if(userId === undefined) {
      throw new Error("userId is required!")
    }
  }
}
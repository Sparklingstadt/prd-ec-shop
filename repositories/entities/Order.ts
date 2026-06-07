export type Order = {
  id: number,
  paymentStatus: string,
  shippingStatus: string,
  shippingPrice: number,
  totalPrice: number,
  orderedAt: Date,
  userId: number,
}
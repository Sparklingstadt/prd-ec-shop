export async function getOrders() {
  const orders = [
    {
      id: 0,
      orderId: 1000,
      date: new Date(),
      paymentStatus: "支払い済み",
      shippingStatus: "配送済み",
      shippingPrice: 1000,
      total: 5800
    },
    {
      id: 1,
      orderId: 1001,
      date: new Date(),
      paymentStatus: "支払い済み",
      shippingStatus: "配送済み",
      shippingPrice: 1000,
      total: 5800
    },
    {
      id: 2,
      orderId: 1002,
      date: new Date(),
      paymentStatus: "支払い済み",
      shippingStatus: "配送済み",
      shippingPrice: 1000,
      total: 12300
    },
  ]

  return orders
}
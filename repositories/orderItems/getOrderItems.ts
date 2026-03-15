export default async function getOrderItems(){
  const orderItems = [
    {
      id: 0,
      orderId: 1000,
      productId: 0,
      productName: "アクリルスタンド A",
      quantity: 1,
      price: 1500,
      totalPrice: 1500
    },
    {
      id: 1,
      orderId: 1000,
      productId: 1,
      productName: "アクリルスタンド B",
      quantity: 1,
      price: 1500,
      totalPrice: 1500
    },
  ]

  return orderItems
}
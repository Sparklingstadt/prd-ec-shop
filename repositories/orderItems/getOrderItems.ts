export default async function getOrderItems(){
  const orderItems = [
    {
      id: 0,
      orderId: 1000,
      productId: 0,
      productName: "アクリルスタンド A",
      quantity: 1,
      price: 1500,
    },
    {
      id: 1,
      orderId: 1000,
      productId: 1,
      productName: "アクリルスタンド B",
      quantity: 2,
      price: 1500,
    },
    {
      id: 2,
      orderId: 1001,
      productId: 1,
      productName: "アクリルスタンド B",
      quantity: 3,
      price: 1500,
    },
    {
      id: 3,
      orderId: 1002,
      productId: 4,
      productName: "タペストリー",
      quantity: 1,
      price: 4500,
    },
    {
      id: 4,
      orderId: 1002,
      productId: 6,
      productName: "オリジナル TEE B",
      quantity: 1,
      price: 6500,
    }
  ]

  return orderItems
}
import { createOrder } from "@/repositories/orders/createOrder";
import { getProducts } from "@/repositories/products";
import { getUserById } from "@/repositories/users";

type CheckoutItem = {
  productId: number,
  quantity: number
}

export default async function checkoutService(userId: number, items: Array<CheckoutItem>) {
  const products = await getProducts()

  // const order = await createOrder({
  //   userId,
  //   paymentStatus: "支払い済み",
  //   shippingStatus: "配送済み",
  //   shippingPrice: 1000,
  //   totalPrice: 3000
  // })

  // const orderItems = items.map(item => {
  //   const product = products.find(p => p.id === item.productId)

  //   return {
  //     orderId: order.id,
  //     productId: product.id
  //     quantity: item.quantity
  //     price: product.price
  //   }
  // })

  // await orderItemRepository.createMany(orderItems)

  // return order
}
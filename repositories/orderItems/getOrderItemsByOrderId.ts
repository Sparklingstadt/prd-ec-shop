import getOrderItems from "./getOrderItems";

export default async function getOrderItemsByOrderId(orderId: number){
  const orderItems = (await getOrderItems()).filter(orderItem => orderItem.orderId === orderId)
  return orderItems
}
import { getOrders } from "./getOrders";

export async function getOrderById(id: number) {
  return (await getOrders()).map(order => order.id === id)[0]
}
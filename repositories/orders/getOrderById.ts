import { cookies } from "next/headers";
import { getOrders } from "./getOrders";
import { redirect } from "next/navigation";

export async function getOrderById(id: number) {
  const userId = (await (cookies())).get("userId")?.value
  if(!userId) redirect("/signin")

  return (await getOrders(parseInt(userId))).map(order => order.id === id)[0]
}
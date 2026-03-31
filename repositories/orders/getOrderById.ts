import { cookies } from "next/headers";
import { getOrders } from "./getOrders";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function getOrderById(id: number) {
  const userId = (await (cookies())).get("userId")?.value
  if(!userId) redirect("/signin")

  const order = await prisma.order.findFirst({
    where: { userId: id }
  })

  if(!order) throw new Error("Order not found")

  return order
}
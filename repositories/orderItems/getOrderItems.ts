import { prisma } from "@/lib/prisma"

export default async function getOrderItems(){
  const orderItems = await prisma.orderItem.findMany()

  return orderItems
}
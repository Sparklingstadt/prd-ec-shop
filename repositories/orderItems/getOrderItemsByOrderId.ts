import { prisma } from "@/lib/prisma";
import getOrderItems from "./getOrderItems";

export default async function getOrderItemsById(id: number){
  const orderItems = prisma.orderItem.findMany({
    where: {
      orderId: id
    }
  })
  return orderItems
}
import { prisma } from "@/lib/prisma"

export async function addItemToCart({
  productId,
  quantity
}: {
  productId: number,
  quantity: number
}) {
  "use server"

  console.log(productId, quantity)
  // await prisma.cartItem.create()
}
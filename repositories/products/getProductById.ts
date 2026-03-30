import { prisma } from "@/lib/prisma";

export async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: { id }
  })

  return product
}
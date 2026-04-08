import { prisma } from "@/lib/prisma"

export const variantRepository = {
  async findManyWithProductId(productId: number) {
    return await prisma.variant.findMany({where: { productId }})
  }
}
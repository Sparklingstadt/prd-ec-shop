import { prisma } from "@/lib/prisma"

export const productRepository = {
  async findMany() {
    return await prisma.product.findMany()
  },
  async findById(productId: number) {
    return await prisma.product.findUnique({
      where: { id: productId }
    })
  }
}
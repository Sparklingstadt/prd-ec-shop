import { prisma } from "@/lib/prisma"

export const productRepository = {
  async findMany() {
    return await prisma.product.findMany()
  },
  async findById(productId: number) {
    return await prisma.product.findUnique({
      where: { id: productId }
    })
  },
  async findManyWithVariants() {
    return await prisma.product.findMany({
      include: { variants: true }
    })
  },
  async findWithVariantsById(productId: number) {
    return await prisma.product.findUnique({
      where: { id: productId },
      include: { variants: true }
    })
  }
}
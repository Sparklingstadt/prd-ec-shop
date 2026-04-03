import { prisma } from "@/lib/prisma"

export const userRepository = {
  async findMany() {
    return await prisma.user.findMany()
  },
  async findByuserId(userId: number) {
    return await prisma.user.findUnique({
      where: { id: userId }
    })
  }
}
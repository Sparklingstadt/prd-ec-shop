import { prisma } from "@/lib/prisma";

export async function getUserById(userId: number) {
  const user = await prisma.user.findMany({
    where: {
      id: userId
    }
  })

  return user
}
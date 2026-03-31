import { prisma } from "@/lib/prisma";

export async function getUserById(userId: number) {
  const user = await prisma.user.findFirst({
    where: {
      id: userId
    }
  })

  if(!user) throw new Error("User not found")

  return user
}
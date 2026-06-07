import { prisma } from "@/lib/prisma"
import { IUserRepository } from "../interfaces/IUserRepository"

export class userRepository implements IUserRepository{
  async findMany() {
    return await prisma.user.findMany()
  }
  async findByUserId(userId: number) {
    return await prisma.user.findUnique({
      where: { id: userId }
    })
  }
}
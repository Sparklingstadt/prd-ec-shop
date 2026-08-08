import { prisma } from "@/lib/prisma"

async function resetE2eData() {
  await prisma.$transaction([
    prisma.orderItem.deleteMany(),
    prisma.order.deleteMany({ where: { userId: 0 } }),
    prisma.cartItem.deleteMany({ where: { cart: { userId: 0 } } }),
  ])
}

resetE2eData()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => prisma.$disconnect())

import assert from "node:assert/strict"
import { after, beforeEach, test } from "node:test"
import { prisma } from "../../lib/prisma"
import { createOrderFromCart } from "../../services/checkout/checkoutService"

async function resetPurchaseData() {
  await prisma.$transaction([
    prisma.orderItem.deleteMany(),
    prisma.order.deleteMany({ where: { userId: 0 } }),
    prisma.cartItem.deleteMany({ where: { cart: { userId: 0 } } }),
  ])
}

beforeEach(resetPurchaseData)
after(async () => {
  await resetPurchaseData()
  await prisma.$disconnect()
})

test("購入処理は注文スナップショットを保存してカートを空にする", async () => {
  const cart = await prisma.cart.findUniqueOrThrow({ where: { userId: 0 } })
  await prisma.cartItem.create({
    data: { cartId: cart.id, variantId: 0, quantity: 2 },
  })

  const order = await createOrderFromCart(0)
  const storedOrder = await prisma.order.findUniqueOrThrow({
    where: { id: order.id },
    include: { orderItems: true },
  })

  assert.equal(storedOrder.shippingPrice, 1000)
  assert.equal(storedOrder.totalPrice, 2000)
  assert.equal(storedOrder.orderItems.length, 1)
  assert.equal(storedOrder.orderItems[0].variantName, "ランダム缶バッジ")
  assert.equal(storedOrder.orderItems[0].priceAtPurchase, 500)
  assert.equal(storedOrder.orderItems[0].quantity, 2)
  assert.equal(await prisma.cartItem.count({ where: { cartId: cart.id } }), 0)
})

test("空のカートでは注文を作成しない", async () => {
  await assert.rejects(() => createOrderFromCart(0), /カートが空です/)
  assert.equal(await prisma.order.count({ where: { userId: 0 } }), 0)
})

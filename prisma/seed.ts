import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.product.createMany({
    data: [
      { id: 0, name: "ランダム缶バッジ", category: "グッズ", price: 500, description: "", imageUrl: "/products/Rectangle 1.png" },
      { id: 1, name: "クリアファイルセット", category: "グッズ", price: 1000, description: "", imageUrl: "/products/Rectangle 2.png" },
      { id: 2, name: "アクリルスタンド A", category: "グッズ", price: 1500, description: "", imageUrl: "/products/Rectangle 3.png" },
      { id: 3, name: "アクリルスタンド B", category: "グッズ", price: 1500, description: "", imageUrl: "/products/Rectangle 4.png" },
      { id: 4, name: "タペストリー", category: "グッズ", price: 4500, description: "", imageUrl: "/products/Rectangle 3.png" },
      { id: 5, name: "オリジナル TEE A", category: "グッズ", price: 6500, description: "", imageUrl: "/products/Rectangle 2.png" },
      { id: 6, name: "オリジナル TEE B", category: "グッズ", price: 6500, description: "", imageUrl: "/products/Rectangle 1.png" },
    ],
    skipDuplicates: true
  })

  await prisma.user.createMany({
    data: [
      { id: 0, firstName: "Angelia", lastName: "Hoge" },
      { id: 1, firstName: "Bill", lastName: "Foo" },
    ],
    skipDuplicates: true
  })

  await prisma.order.createMany({
    data: [
      {
        id: 0,
        userId: 0,
        paymentStatus: "支払い済み",
        shippingStatus: "配送済み",
        shippingPrice: 1000,
        totalPrice: 4000,
      },
      {
        id: 1,
        userId: 0,
        paymentStatus: "支払い済み",
        shippingStatus: "配送済み",
        shippingPrice: 1000,
        totalPrice: 5500,
      },
      {
        id: 2,
        userId: 1,
        paymentStatus: "支払い済み",
        shippingStatus: "配送済み",
        shippingPrice: 1000,
        totalPrice: 6500,
      },
      {
        id: 3,
        userId: 0,
        paymentStatus: "支払い済み",
        shippingStatus: "配送済み",
        shippingPrice: 1000,
        totalPrice: 12000,
      },
    ],
    skipDuplicates: true
  })

  await prisma.orderItem.createMany({
    data: [
      {
        id: 0,
        orderId: 0,
        productId: 2,
        productName: "アクリルスタンド A",
        quantity: 2,
        productPrice: 1500,
      },
      {
        id: 1,
        orderId: 0,
        productId: 3,
        productName: "アクリルスタンド B",
        quantity: 1,
        productPrice: 1500,
      },
      {
        id: 2,
        orderId: 1,
        productId: 3,
        productName: "アクリルスタンド B",
        quantity: 3,
        productPrice: 1500,
      },
      {
        id: 2,
        orderId: 2,
        productId: 1,
        productName: "クリアファイルセット",
        quantity: 1,
        productPrice: 1000,
      },
      {
        id: 3,
        orderId: 2,
        productId: 4,
        productName: "タペストリー",
        quantity: 1,
        productPrice: 4500,
      },
      {
        id: 4,
        orderId: 3,
        productId: 4,
        productName: "タペストリー",
        quantity: 1,
        productPrice: 4500,
      },
      {
        id: 5,
        orderId: 3,
        productId: 6,
        productName: "オリジナル TEE B",
        quantity: 1,
        productPrice: 6500,
      }
    ],
    skipDuplicates: true
  })

  await prisma.cart.createMany({
    data: [
      { id: 0, userId: 0},
      { id: 1, userId: 1}
    ],
    skipDuplicates: true
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())
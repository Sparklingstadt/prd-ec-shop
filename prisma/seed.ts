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
import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.product.createMany({
    data: [
      { id: 0, name: "ランダム缶バッジ", category: "グッズ", description: "", thumbnailImageUrl: "/products/Rectangle 1.png" },
      { id: 1, name: "クリアファイル", category: "グッズ", description: "", thumbnailImageUrl: "/products/Rectangle 2.png" },
      { id: 2, name: "アクリルスタンド", category: "グッズ", description: "", thumbnailImageUrl: "/products/Rectangle 2.png" },
      { id: 3, name: "タペストリー", category: "グッズ", description: "", thumbnailImageUrl: "/products/Rectangle 1.png" },
      { id: 4, name: "オリジナル TEE", category: "グッズ", description: "", thumbnailImageUrl: "/products/Rectangle 2.png" },
    ],
    skipDuplicates: true
  })

  await prisma.variant.createMany({
    data: [
      { id: 0, name: "クリアファイル A", productId: 1, price: 800, stock: 50, imageUrl: "/products/Rectangle 3.png" },
      { id: 1, name: "クリアファイル B", productId: 1, price: 800, stock: 50, imageUrl: "/products/Rectangle 4.png" },
      { id: 2, name: "アクリルスタンド A", productId: 2, price: 1500, stock: 50, imageUrl: "/products/Rectangle 3.png" },
      { id: 3, name: "アクリルスタンド B", productId: 2, price: 1500, stock: 50, imageUrl: "/products/Rectangle 4.png" },
      { id: 4, name: "アクリルスタンド C", productId: 2, price: 1500, stock: 50, imageUrl: "/products/Rectangle 5.png" },
      { id: 5, name: "タペストリー A", productId: 3, price: 4500, stock: 50, imageUrl: "/products/Rectangle 3.png" },
      { id: 6, name: "タペストリー B", productId: 3, price: 4500, stock: 50, imageUrl: "/products/Rectangle 4.png" },
      { id: 7, name: "オリジナル TEE A", productId: 4, price: 6500, stock: 50, imageUrl: "/products/Rectangle 3.png" },
      { id: 8, name: "オリジナル TEE B", productId: 4, price: 6500, stock: 50, imageUrl: "/products/Rectangle 4.png" },
    ]
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
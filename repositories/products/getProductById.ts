import { getProducts } from "./getProducts";

export async function getProductById(id: number) {
  // 将来的にPrismaに置き換え
  
  return (await getProducts())[id]
}
import { getProducts } from "./getProducts"

export function getProductById(id: number): Product {
  return getProducts()[id]
}
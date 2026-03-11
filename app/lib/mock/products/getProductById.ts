import getProducts from "./getProducts"

export default function getProductById(id: number): Product {
  return getProducts()[id]
}
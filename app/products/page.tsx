import { getProducts } from "@/repositories/products"
import ProductList from "./ProductList"

export default async function Page(){
  const products = await getProducts()

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  )
}
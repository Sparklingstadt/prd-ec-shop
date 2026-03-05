import { getProducts } from "../lib/products"
import ProductList from "./ProductList"

export default function Page(){
  const products = getProducts()

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  )
}
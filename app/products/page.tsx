import { getProducts } from "../lib/mock/products/index"
import ProductList from "./ProductList"

export default function Page(){
  const products = getProducts.default()

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  )
}
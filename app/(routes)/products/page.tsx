import { getProducts, getProductsWithVariants } from "@/app/actions/actions"
import ProductList from "./ProductList"
import { Suspense } from "react"

export default function Page(){
  const products = getProductsWithVariants()

  return (
    <div>
      <h1>Products</h1>
      <Suspense fallback={<p>読み込み中</p>}>
        <ProductList productsPromise={products} />
      </Suspense>
    </div>
  )
}
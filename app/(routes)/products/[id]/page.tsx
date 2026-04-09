import { getCartByUserId, getProductById, getVariantsByProductId } from "@/app/actions/actions"
import ProductImageView from "./ProductImageView"
import { ProductActions } from "./ProductActions"
import { requireUserId } from "@/lib/auth"

export default async function Page({ params }: { 
  params: Promise<{ id: string }>
}) {
  const id = parseInt((await params).id)
  const product = await getProductById(id)
  if(!product) throw new Error("Product not found")
  const variants = await getVariantsByProductId(product.id)
  const userId = await requireUserId()
  const cart = await getCartByUserId(userId)
  if(!cart) throw new Error("Cart not found")
  
  return (
    <div className="flex">
      <ProductImageView productId={product.id} />
      <div className="px-12">
        <h1 className="text-2xl mt-4 mb-2">{product.name}</h1>
        <h2 className="text-xl">¥NaN</h2>
        <p className="py-2">カテゴリー：{product.category || "カテゴリー指定なし"}</p>
        <div className="my-4 py-2">
          <h2 className="text-xl">詳細情報</h2>
          <p>{product.description || "詳細情報の記入なし"}</p>
        </div>
        <ProductActions cartId={cart.id} variants={variants} />
      </div>
    </div>
  )
}
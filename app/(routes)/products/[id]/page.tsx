import AddItemToCartForm from "./AddItemToCartForm"
import { requireUserId } from "@/lib/auth"
import { getProductWithVariantsById } from "@/app/actions/actions"
import ProductImageView from "./ProductImageView"

export default async function Page({ params }: { 
  params: Promise<{ id: string }>
}) {
  const id = parseInt((await params).id)
  const product = await getProductWithVariantsById(id)
  if(!product) throw new Error("Product not found")
  const userId = await requireUserId()
  
  return (
    <div className="flex">
      { product.variants.map(v => ( <div key={v.id}>{v.name}</div>))}
      <ProductImageView productWithVariant={product} />
      <div className="px-12">
        <h1 className="text-2xl mt-4 mb-2">{product.name}</h1>
        <h2 className="text-xl">¥{product.variants[0].price}</h2>
        <p className="py-2">カテゴリー：{product.category || "カテゴリー指定なし"}</p>
        <div className="my-4 py-2">
          <h2 className="text-xl">詳細情報</h2>
          <p>{product.description || "詳細情報の記入なし"}</p>
        </div>
        <AddItemToCartForm cartId={userId} variantId={id}/>
      </div>
    </div>
  )
}
import { getProductById } from "@/repositories/products"
import Image from "next/image"
import AddItemToCartForm from "./AddItemToCartForm"

export default async function Page({
  params
}: { 
  params: Promise<{ id: string }>
}) {
  const id = parseInt((await params).id)
  // idが数字でない時の処理は別途でやる
  const product = await getProductById(id)
  if(!product) throw new Error("Product not found")

  return (
    <div>
      <div>
        <Image src={product.imageUrl} alt="product img" width={1280} height={768}/>
      </div>
      <h1 className="text-2xl mt-4 mb-2">{product.name}</h1>
      <h2 className="text-xl">¥{product.price}</h2>
      <p className="py-2">カテゴリー：{product.category || "カテゴリー指定なし"}</p>
      <div className="my-4 py-2">
        <h2 className="text-xl">詳細情報</h2>
        <p>{product.description || "詳細情報の記入なし"}</p>
      </div>
      <AddItemToCartForm cartId={0} productId={id}/>
    </div>
  )
}
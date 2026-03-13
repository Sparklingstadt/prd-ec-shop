import QuantityStepper from "./QuantityStepper"
import ProductImage from "./ProductImage"
import Button from "@/app/components/Button"
import { getProductById } from "@/repositories/products"

export default async function Page({
  params
}: { 
  params: Promise<{ id: string }>
}) {
  const id = parseInt((await params).id)
  // idが数字でない時の処理は別途でやる
  const product = await getProductById(id)

  return (
    <div>
      <div>
        <ProductImage />
      </div>
      <h1 className="text-2xl">{product.name}</h1>
      <h2 className="text-xl">¥{product.price}</h2>
      <p>カテゴリー：{product.category || "カテゴリー指定なし"}</p>
      <div className="my-4">
        <h2 className="text-xl">詳細情報</h2>
        <p>{product.description || "詳細情報の記入なし"}</p>
      </div>
      <div>
        <p>数量</p>
        <QuantityStepper value={1} min={1} max={3} />
      </div>
      <div>
        <Button>購入</Button>
        <Button>カートに追加</Button>
      </div>
    </div>
  )
}
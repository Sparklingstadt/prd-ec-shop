import { getProductById } from "@/app/lib/mock/products"
import QuantityStepper from "./QuantityStepper"
import ProductImage from "./ProductImage"

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
      <p>カテゴリー：グッズ</p>
      <div className="my-4">
        <h2 className="text-xl">詳細情報</h2>
        <p>ここに商品の詳細情報</p>
      </div>
      <div>
        <p>数量</p>
        <QuantityStepper value={1} min={1} max={3} />
      </div>
      <div>
        <button>購入</button>
        <button>カートに追加</button>
      </div>
    </div>
  )
}
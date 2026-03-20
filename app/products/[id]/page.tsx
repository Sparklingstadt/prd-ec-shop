import QuantityStepper from "./QuantityStepper"
import Button from "@/app/components/Button"
import { getProductById } from "@/repositories/products"
import Image from "next/image"

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
        <Image src={product.imageUrl} alt="product img" width={1280} height={768}/>
      </div>
      <h1 className="text-2xl mt-4 mb-2">{product.name}</h1>
      <h2 className="text-xl">¥{product.price}</h2>
      <p className="py-2">カテゴリー：{product.category || "カテゴリー指定なし"}</p>
      <div className="my-4 py-2">
        <h2 className="text-xl">詳細情報</h2>
        <p>{product.description || "詳細情報の記入なし"}</p>
      </div>
      <div className="flex items-center">
        <p className="mr-4">数量</p>
        <QuantityStepper value={1} min={1} max={3} />
      </div>
      <div className="flex mt-4">
        <Button>カートに追加</Button>
      </div>
    </div>
  )
}
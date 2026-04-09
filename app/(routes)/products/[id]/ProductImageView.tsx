import { getProductById, getVariantsByProductId } from "@/app/actions/actions"
import Image from "next/image"

export default async function ProductImageView({ productId }: { productId: number}) {
  const product = await getProductById(productId)
  if(!product) throw new Error("Product not found")
  const variants = await getVariantsByProductId(productId)

  return (
    <div>
      <Image src={product.thumbnailImageUrl} alt="product img" width={1080} height={720}/>
      <div className="flex">
        { variants.map((v: any) => (
          <Image key={v.id} src={v.imageUrl} alt="product variant img" width={360} height={240} />
        ))}          
      </div>
    </div>
  )
}
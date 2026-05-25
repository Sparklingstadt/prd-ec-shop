import { getProductById, getVariantsByProductId } from "@/app/actions/actions"
import { ProductRepository } from "@/repositories/implementations/productRepository"
import Image from "next/image"

export default async function ProductImageView({ productId }: { productId: number}) {
  const repo = new ProductRepository()
  const product = await getProductById(repo, productId)
  if(!product) throw new Error("Product not found")
  const variants = await getVariantsByProductId(productId)

  return (
    <div>
      <Image src={product.thumbnailImageUrl} alt="product img" width={1080} height={720} loading="eager" />
      <div className="flex">
        { variants.map((v: any) => (
          <Image key={v.id} src={v.imageUrl} alt="product variant img" width={360} height={240} style={{ width: "25%", height: "auto" }}/>
        ))}          
      </div>
    </div>
  )
}
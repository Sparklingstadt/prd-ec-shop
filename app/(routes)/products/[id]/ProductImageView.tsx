import { getProductById, getVariantsByProductId } from "@/services/storeQueryService"
import { ProductRepository } from "@/repositories/implementations/productRepository"
import { variantRepository } from "@/repositories/implementations/variantRepository"
import Image from "next/image"

export default async function ProductImageView({ productId }: { productId: number}) {
  const repo = new ProductRepository()
  const product = await getProductById(repo, productId)
  if(!product) throw new Error("Product not found")
  const variantRepo = new variantRepository()
  const variants = await getVariantsByProductId(variantRepo, productId)

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border bg-muted shadow-sm">
        <Image src={product.thumbnailImageUrl} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" priority />
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        { variants.map(v => (
          <div key={v.id} className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
            <Image src={v.imageUrl} alt={v.name} fill className="object-cover" sizes="160px" />
          </div>
        ))}          
      </div>
    </div>
  )
}

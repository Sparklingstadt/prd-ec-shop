import { getCartByUserId, getProductById, getVariantsByProductId } from "@/services/storeQueryService"
import ProductImageView from "./ProductImageView"
import { ProductActions } from "./ProductActions"
import { requireUserId } from "@/lib/auth"
import { ProductRepository } from "@/repositories/implementations/productRepository"
import { cartRepository } from "@/repositories/implementations/cartRepository"
import { variantRepository } from "@/repositories/implementations/variantRepository"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default async function Page({ params }: { 
  params: Promise<{ id: string }>
}) {
  const productId = parseInt((await params).id)
  const repo = new ProductRepository()
  const product = await getProductById(repo, productId)
  if(!product) throw new Error("Product not found")
  const variantRepo = new variantRepository()
  const variants = await getVariantsByProductId(variantRepo, product.id)
  const minPrice = Math.min(...variants.map(v => v.price))
  const userId = await requireUserId()
  const cartRepo = new cartRepository()
  const cart = await getCartByUserId(cartRepo, userId)
  if(!cart) throw new Error("Cart not found")
  
  return (
    <div className="space-y-8">
      <Link href="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><ChevronLeft className="size-4" /> 商品一覧へ戻る</Link>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
        <ProductImageView productId={product.id} />
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-5">
            <Badge variant="secondary">{product.category || "カテゴリー指定なし"}</Badge>
            <h1 className="text-4xl font-semibold tracking-tight">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary">¥{minPrice.toLocaleString()}〜</p>
            <p className="leading-7 text-muted-foreground">{product.description || "日常にさりげない彩りを添える、Candy Rainのオリジナルアイテムです。"}</p>
          </div>
          <Separator className="my-7" />
          <ProductActions cartId={cart.id} variants={variants} />
        </div>
      </div>
    </div>
  )
}

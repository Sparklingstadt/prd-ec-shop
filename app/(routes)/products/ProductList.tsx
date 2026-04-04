import Link from "next/link"
import Image from "next/image"
import { Product, Variant } from "@/lib/types"

export default function ProductList({ products }: {
  products: (Product & { variants: Variant[] })[]
}){
  const getProductStartingPrice = (productsWithVariants: (Product & { variants: Variant[] })) => {
    return Math.min(...productsWithVariants.variants.map(v => v.price))
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      { products.map(product => {
        return (
          <Link href={"/products/" + product.id} key={product.id}>
            <div className="mb-8">
              <Image src={product.thumbnailImageUrl} alt="prd" width={400} height={200}/>
              <div>
                <p className=" text-sm underline">グッズ</p>
                <p className="text-lg">{product.name}</p>
                <p>¥{getProductStartingPrice(product)}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
import Link from "next/link"
import Image from "next/image"
import { Product } from "@/lib/types"

export default function ProductList({ products }: {
  products: Array<Product>
}){
  return (
    <div className="grid grid-cols-3 gap-4">
      { products.map(product => {
        return (
          <Link href={"/products/" + product.id} key={product.id}>
            <div className="mb-8">
              <Image src={product.imageUrl} alt="prd" width={400} height={200}/>
              <div>
                <p className=" text-sm underline">グッズ</p>
                <p className="text-lg">{product.name}</p>
                <p>¥{product.price}</p>
              </div>
            </div>
          </Link>
        )
      })
      }
    </div>
  )
}
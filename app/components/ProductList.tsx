import Link from "next/link"

export default function ProductList({ products }: {
  products: Array<Product>
}){
  return (
    <div className="grid grid-cols-3 gap-4">
      { products.map(product => (
        <Link href={"/products/" + product.id} key={product.id}>
          <div className="mb-8">
            <div className="bg-gray-200 w-full h-52"></div>
            <div>
              <p className=" text-sm underline">グッズ</p>
              <p className="text-lg">{product.name}</p>
              <p>¥{product.price}</p>
            </div>
          </div>
          </Link>
        ))
      }
    </div>
  )
}
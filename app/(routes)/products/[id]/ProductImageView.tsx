import Image from "next/image"

export default async function ProductImageView({
  productWithVariant: product
}: {
  productWithVariant: any
}) {
  return (
    <div>
      <Image src={product.thumbnailImageUrl} alt="product img" width={1080} height={720}/>
      <div className="flex">
        { product.variants.map((v: any) => (
          <Image key={v.id} src={v.imageUrl} alt="product variant img" width={360} height={240} />
        ))}          
      </div>
    </div>
  )
}
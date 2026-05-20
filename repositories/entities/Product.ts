export type Product = {
  id: number,
  name: string,
  category: string | null,
  description: string,
  thumbnailImageUrl: string,
}

export type ProductVariant = {
  id: number,
  name: string,
  productId: number,
  price: number,
  stock: number,
  imageUrl: string
}

export type ProductWithVariant = Product & {
  variants: ProductVariant[]
}
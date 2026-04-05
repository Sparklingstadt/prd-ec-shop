export type Product = {
  id: number,
  name: string,
  category: string | null,
  description: string,
  thumbnailImageUrl: string,
}

export type Variant = {
  id: number,
  name: string,
  productId: number,
  price: number,
  stock: number,
  imageUrl: string
}

export type Result<T, E> =
  | { ok: true, data: T }
  | { ok: false, error: E }
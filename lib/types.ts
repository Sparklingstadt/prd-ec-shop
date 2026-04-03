type Product = {
  id: number,
  name: string,
  category: string | null,
  description: string,
  price: number,
  imageUrl: string,
}

export type Result<T, E> =
  | { ok: true, data: T }
  | { ok: false, error: E }
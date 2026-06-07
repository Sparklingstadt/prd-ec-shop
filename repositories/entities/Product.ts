export class Product {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly category: string | null,
    public readonly description: string,
    public readonly thumbnailImageUrl: string,
  ) {
    if(!id) {
      throw new Error("id is required!")
    }
    if(!name) {
      throw new Error("name is required!")
    }
    if(!category) {
      throw new Error("category is required!")
    }
    if(description) {
      throw new Error("description is required!")
    }
    if(!thumbnailImageUrl) {
      throw new Error("thumbnailImageUrl is required!")
    }
  }
}

export class ProductVariant {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly productId: number,
    public readonly price: number,
    public readonly stock: number,
    public readonly imageUrl: string
  ) {
    if(!id) {
      throw new Error("id is required!")
    }
    if(!name) {
      throw new Error("name is required!")
    }
    if(!productId) {
      throw new Error("productId is required!")
    }
    if(!price) {
      throw new Error("price is required!")
    }
    if(!stock) {
      throw new Error("stock is required!")
    }
    if(!imageUrl) {
      throw new Error("imageUrl is required!")
    }
  }
}

export type ProductWithVariant = Product & {
  variants: ProductVariant[]
}
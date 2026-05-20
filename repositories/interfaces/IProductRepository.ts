import { Product, ProductWithVariant } from "../entities/Product";

export interface IProductRepository {
  findMany(): Promise<Product[]>
  findById(productId: number): Promise<Product | null>
  findManyWithVariants(): Promise<ProductWithVariant[]>
  findWithVariantsById(productId: number): Promise<ProductWithVariant | null>
}
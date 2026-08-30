import { Variant } from "../entities/Variant";

export interface IVariantRepository {
  findById(variantId: number): Promise<Variant | null>
  findManyByProductId(productId: number): Promise<Variant[]>
}

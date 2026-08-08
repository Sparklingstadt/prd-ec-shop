"use server"
import { signOut } from "@/auth"
import { removeItemFromCart } from "@/services/cartService"
import { ICartItemRepository } from "@/repositories/interfaces/ICartItemRepository"
import { ICartRepository } from "@/repositories/interfaces/ICartRepository"
import { IOrderItemRepository } from "@/repositories/interfaces/IOrderItemRepository"
import { IOrderRepository } from "@/repositories/interfaces/IOrderRepository"
import { IProductRepository } from "@/repositories/interfaces/IProductRepository"
import { IUserRepository } from "@/repositories/interfaces/IUserRepository"
import { IVariantRepository } from "@/repositories/interfaces/IVariantRepository"
import { revalidatePath } from "next/cache"

export async function getUsers(repo: IUserRepository) {
  return await repo.findMany()
}

export async function getProducts(repo: IProductRepository) {
  return await repo.findMany()
}

export async function getProductsWithVariants(repo: IProductRepository) {
  return await repo.findManyWithVariants()
}

export async function getProductById(repo: IProductRepository, productId: number) {
  return await repo.findById(productId)
}

export async function getVariantsByProductId(repo: IVariantRepository, productId: number) {
  return await repo.findManyByProductId(productId)
}

export async function getUserByUserId(repo: IUserRepository, userId: number) {
  return await repo.findByUserId(userId)
}

export async function getOrders(repo: IOrderRepository, userId: number) {
  const orders = await repo.findManyByUserId(userId)
  return orders
}

export async function getOrderByOrderId(repo: IOrderRepository, orderId: number) {
  return await repo.findByOrderId(orderId)
}

export async function getOrderItemsByOrderId(repo: IOrderItemRepository,orderId: number) {
  const orderItems = await repo.findManyByOrderId(orderId)
  return orderItems
}

export async function getCartByUserId(repo: ICartRepository, userId: number) {
  const cart = await repo.findByUserId(userId)
  return cart
}

export async function getCartItemsByCartId(repo: ICartItemRepository,cartId: number) {
  const cartItems = await repo.findManyByCartId(cartId)
  return cartItems
}

export async function getCartItemsWithVariantsByCartId(repo: ICartItemRepository, cartId: number) {
  const cartItemsWithProducts = await repo.findManyWithVariantsByCartId(cartId)
  return cartItemsWithProducts
}

export async function removeCartItem({ cartId, variantId }: {
  cartId: number
  variantId: number
}) {
  await removeItemFromCart(cartId, variantId)
  revalidatePath("/", "layout")
  return { success: true }
}

export async function signOutAction() {
  await signOut({
    redirect: false,
  })
  revalidatePath("/", "layout")
}

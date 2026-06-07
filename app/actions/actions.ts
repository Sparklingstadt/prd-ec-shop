"use server"
import { signOut } from "@/auth"
import { cartItemRepository } from "@/repositories/implementations/cartItemRepository"
import { cartRepository } from "@/repositories/implementations/cartRepository"
import { orderItemRepository } from "@/repositories/implementations/orderItemRepository"
import { userRepository } from "@/repositories/implementations/userRepository"
import { variantRepository } from "@/repositories/implementations/variantRepository"
import { ICartItemRepository } from "@/repositories/interfaces/ICartItemRepository"
import { ICartRepository } from "@/repositories/interfaces/ICartRepository"
import { IOrderItemRepository } from "@/repositories/interfaces/IOrderItemRepository"
import { IOrderRepository } from "@/repositories/interfaces/IOrderRepository"
import { IProductRepository } from "@/repositories/interfaces/IProductRepository"
import { revalidatePath } from "next/cache"

export async function getUsers() {
  return await userRepository.findMany()
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

export async function getVariantsByProductId(productId: number) {
  return await await variantRepository.findManyWithProductId(productId)
}

export async function getUserByUserId(userId: number) {
  return await userRepository.findByuserId(userId)
}

export async function getOrders(repo: IOrderRepository, userId: number) {
  const orders = await repo.findManyByUserId(userId)
  return orders
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

export async function removeCartItem({ cartId, productId }: {
  cartId: number
  productId: number
}) {
  const repo = new cartItemRepository()
  await repo.removeCartItem(cartId, productId)
  revalidatePath("/", "layout")
  return { success: true }
}

export async function signOutAction() {
  await signOut({
    redirect: false,
  })
  revalidatePath("/", "layout")
}
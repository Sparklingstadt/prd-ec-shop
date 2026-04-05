"use server"
import { cartItemRepository } from "@/repositories/cartItemRepository"
import { cartRepository } from "@/repositories/cartRepository"
import { orderItemRepository } from "@/repositories/orderItemRepository"
import { orderRepository } from "@/repositories/orderRepository"
import { productRepository } from "@/repositories/productRepository"
import { userRepository } from "@/repositories/userRepository"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function getUsers() {
  return await userRepository.findMany()
}

export async function getProducts() {
  return await productRepository.findMany()
}

export async function getProductsWithVariants() {
  return await productRepository.findManyWithVariants()
}

export async function getProductWithVariantsById(productId: number) {
  return await productRepository.findWithVariantsById(productId)
}

export async function getProductById(productId: number) {
  return await productRepository.findById(productId)
}

export async function getUserByUserId(userId: number) {
  return await userRepository.findByuserId(userId)
}

export async function getOrders(userId: number) {
  const orders = await orderRepository.findByUserId(userId)
  return orders
}

export async function getOrderItemsByOrderId(orderId: number) {
  const orderItems = await orderItemRepository.findByOrderId(orderId)
  return orderItems
}

export async function getCartByUserId(userId: number) {
  const cart = await cartRepository.findByUserId(userId)
  return cart
}

export async function getCartItemsByCartId(cartId: number) {
  const cartItems = await cartItemRepository.findByCartId(cartId)
  return cartItems
}

export async function getCartItemsWithVariantsByCartId(cartId: number) {
  const cartItemsWithProducts = await cartItemRepository.findWithVariantsByCartId(cartId)
  return cartItemsWithProducts
}

export async function addItemToCart({
  cartId,
  variantId,
  quantity
}: {
  cartId: number,
  variantId: number,
  quantity: number
}) {

  await cartItemRepository.addToCart(cartId, variantId, quantity)
  revalidatePath("/", "layout")
  return { success: true }
}

export async function removeCartItem({ cartId, productId }: {
  cartId: number
  productId: number
}) {
  await cartItemRepository.removeCartItem(cartId, productId)
  revalidatePath("/", "layout")
  return { success: true }
}

export async function signIn(userId: number) {
  (await cookies()).set("userId", String(userId))
}

export async function signOut() {
  (await cookies()).delete("userId")
  revalidatePath("/", "layout")
}

export async function incrementCartItemQuantity({
  cartId,
  productId
}: {
  cartId: number
  productId: number
}){
  await cartItemRepository.incrementQuantity(cartId, productId)
  revalidatePath("/cart")
}

export async function decrementCartItemQuantity({
  cartId,
  productId
}: {
  cartId: number
  productId: number
}){
  await cartItemRepository.decrementQuantity(cartId, productId)
  revalidatePath("/cart")
}


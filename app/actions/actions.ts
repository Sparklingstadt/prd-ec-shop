"use server"
import { signOut } from "@/auth"
import { cartItemRepository } from "@/repositories/cartItemRepository"
import { cartRepository } from "@/repositories/cartRepository"
import { orderItemRepository } from "@/repositories/orderItemRepository"
import { orderRepository } from "@/repositories/orderRepository"
import { productRepository } from "@/repositories/productRepository"
import { userRepository } from "@/repositories/userRepository"
import { variantRepository } from "@/repositories/variantRepository"
import { addItemToCart } from "@/services/cartService"
import { revalidatePath } from "next/cache"

export async function getUsers() {
  return await userRepository.findMany()
}

export async function getProducts() {
  return await productRepository.findMany()
}

export async function getProductsWithVariants() {
  return await productRepository.findManyWithVariants()
}

export async function getProductById(productId: number) {
  return await productRepository.findById(productId)
}

export async function getVariantsByProductId(productId: number) {
  return await await variantRepository.findManyWithProductId(productId)
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

export async function addItemToCartAction(prevState: any, formData: FormData) {
  const cartId = Number(formData.get("cartId"))
  const variantId = Number(formData.get("variantId"))
  const quantity = Number(formData.get("quantity"))

  await addItemToCart({ cartId, variantId, quantity })
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

export async function signOutAction() {
  await signOut()
  revalidatePath("/", "layout")
}

export async function updateCartItemQuantityAction(
  _: any,
  formData: FormData
) {
  const cartItemId = Number(formData.get("cartItemId"))
  const type = formData.get("type")

  if (type === "increment") {
    await cartItemRepository.incrementQuantity(cartItemId)
  }

  if (type === "decrement") {
    await cartItemRepository.decrementQuantity(cartItemId)
  }

  return { success: true }
}
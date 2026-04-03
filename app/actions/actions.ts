"use server"
import { prisma } from "@/lib/prisma"
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

export async function getCartItemsWithProductsByCartId(cartId: number) {
  const cartItemsWithProducts = await cartItemRepository.findWithProductsByCartId(cartId)
  return cartItemsWithProducts
}

export async function addItemToCart({
  cartId,
  productId,
  quantity
}: {
  cartId: number,
  productId: number,
  quantity: number
}) {

  await prisma.cartItem.upsert({
    where: {
      cartId_productId: {
        cartId,
        productId
      }
    },
    update: {
      quantity
    },
    create: {
      cartId,
      productId,
      quantity
    }
  })

  revalidatePath("/", "layout")
  return { success: true }
}

export async function removeCartItem({ cartId, productId }: {
  cartId: number
  productId: number
}) {
  await prisma.cartItem.delete({
    where: {
      cartId_productId: {
        cartId,
        productId
      }
    }
  })

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
  await prisma.cartItem.update({
    where: {
      cartId_productId: {
        cartId,
        productId
      }
    },
    data: {
      quantity: { increment: 1 }
    }
  })

  revalidatePath("/cart")
}

export async function decrementCartItemQuantity({
  cartId,
  productId
}: {
  cartId: number
  productId: number
}){
  await prisma.cartItem.update({
    where: {
      cartId_productId: {
        cartId,
        productId
      }
    },
    data: {
      quantity: { decrement: 1}
    }
  })

  revalidatePath("/cart")
}


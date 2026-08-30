"use server"

import { requireUserId } from "@/lib/auth"
import checkoutService from "@/services/checkout/checkoutService"

export async function placeOrderAction() {
  const userId = await requireUserId()
  await checkoutService(userId)
}

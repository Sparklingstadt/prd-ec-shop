"use client"

import checkoutService from "@/services/checkout/checkoutService"
import { useRouter } from "next/navigation"
export default function PlaceOrderButton({ userId }: { userId: number }){
  const router = useRouter()
  const handlePlaceOrder = async () => {
    await checkoutService(userId)
    router.push("/orders")
  }

  return (
    <button
      className="p-1 px-2 border"
      onClick={handlePlaceOrder}  
    >購入</button>
  )
}
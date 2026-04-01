"use client"

import checkoutService from "@/services/checkout/checkoutService"
export default function PlaceOrderButton({ userId }: { userId: number }){
  const handlePlaceOrder = async () => {
    checkoutService(userId)
  }

  return (
    <button
      className="p-1 px-2 border"
      onClick={handlePlaceOrder}  
    >購入</button>
  )
}
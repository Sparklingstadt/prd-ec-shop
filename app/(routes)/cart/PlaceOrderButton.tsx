"use client"

import { placeOrderAction } from "@/app/actions/placeOrderAction"
import { useRouter } from "next/navigation"
import { ArrowRight, LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
export default function PlaceOrderButton(){
  const router = useRouter()
  const [isPending, setIsPending] = useState(false)
  const handlePlaceOrder = async () => {
    setIsPending(true)
    await placeOrderAction()
    router.push("/orders")
  }

  return (
    <Button
      size="lg"
      className="h-11 w-full"
      disabled={isPending}
      onClick={handlePlaceOrder}  
    >{isPending ? <LoaderCircle className="animate-spin" /> : <ArrowRight />}購入</Button>
  )
}

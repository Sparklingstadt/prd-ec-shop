"use client"

import Button from "@/app/components/Button"
import QuantityStepper from "./QuantityStepper"
import { addItemToCart } from "@/app/actions/actions"
import { useState } from "react"

type AddItemToCartFormProps = {
  cartId: number | undefined
  productId: number
}

const quantity = 1

export default function AddItemToCartForm({ cartId, productId }: AddItemToCartFormProps) {
  const [message, setMessesage] = useState("")

  const handleClick = async () => {
    if(cartId === undefined) {
      setMessesage("カートに追加するにはサインインが必要です")
      return
    }
    const res = await addItemToCart({ cartId, productId, quantity})

    if(res?.success) setMessesage("カートに追加しました！")
  }
  return (
    <div>
      <div className="flex items-center">
        <p className="mr-4">数量</p>
        <QuantityStepper value={1} min={1} max={3} />
      </div>
      <div className="mt-4">
        <Button onClick={handleClick}>カートに追加</Button>
        {message && <p className="py-2">{message}</p>}
      </div>
    </div>
  )
}
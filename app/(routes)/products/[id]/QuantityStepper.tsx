"use client"

import { useState } from "react"

export default function QuantityStepper({
  value: initialValue,
  min,
  max
}: {
  value: number,
  min: number,
  max: number
}) {
  const [quantity, setQuantity] = useState((initialValue))

  return (
    <div className="flex">
      <button className="flex-none w-12 h-12 border border-gray-300" onClick={() => setQuantity(quantity + 1)} disabled={quantity === max}>+</button>
      <p className="flex-none w-12 h-12 flex items-center justify-center border border-l-0 border-r-0 border-gray-300">{quantity}</p>
      <button className="flex-none w-12 h-12 border border-gray-300" onClick={() => setQuantity(quantity - 1)} disabled={quantity === min}>-</button>
    </div>
  )
}
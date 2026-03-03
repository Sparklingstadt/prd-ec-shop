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
    <div className="flex items-center border-2 border-gray-200">
      <button className="w-12 h-12" onClick={() => setQuantity(quantity + 1)} disabled={quantity === max}>+</button>
      <p className="w-12 h-12 flex items-center justify-center">{quantity}</p>
      <button className="w-12 h-12" onClick={() => setQuantity(quantity - 1)} disabled={quantity === min}>-</button>
    </div>
  )
}
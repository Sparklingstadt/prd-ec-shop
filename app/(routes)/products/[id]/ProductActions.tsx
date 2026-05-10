"use client"
import AddItemToCartForm from "./AddItemToCartForm";
import { useState } from "react";

export function ProductActions({ cartId, variants }: { cartId: number, variants: any}) {
  const [variantId, setVariantId] = useState(variants[0].id)

  return (
    <div>
      <p className="mb-4">選択：</p>
      <div className="mb-8">
        { variants.map((v: any) => (
          <div
            key={v.id}
            className="border-gray-400 border rounded-sm px-4 py-4 mb-2 text-sm flex justify-between"
          >
            <span>{ v.name }</span>
            <span className="mr-4">¥{ v.price }</span>
          </div>
        ))}
      </div>
      <AddItemToCartForm cartId={cartId} variantId={variantId} />
    </div>
  )
}
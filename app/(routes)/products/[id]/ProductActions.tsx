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
            className="items-center border-gray-400 border rounded-sm px-4 py-4 mb-2 text-sm flex justify-between"
            style={{ borderColor: "blue" }}
          >
            <span>{ v.name }</span>
            <div className="flex items-center">
              <span className="text-lg mr-2">¥{ v.price }</span>
              <span className="text-sm">(税込)</span>
            </div>
          </div>
        ))}
      </div>
      <AddItemToCartForm cartId={cartId} variantId={variantId} />
    </div>
  )
}
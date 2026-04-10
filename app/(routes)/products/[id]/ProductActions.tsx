"use client"
import AddItemToCartForm from "./AddItemToCartForm";
import { useState } from "react";

export function ProductActions({ cartId, variants }: { cartId: number, variants: any}) {
  const [variantId, setVariantId] = useState(variants[0].id)

  return (
    <div>
      <p>選択：</p>
      <select
        name="variantId"
        id="variantId"
        className="border px-4 py-2 mb-4"
        value={variantId}
        onChange={ e  => setVariantId(e.target.value)}
      >
        { variants.map((v: any) => (
          <option key={v.id} value={v.id} >{v.name}</option>
        ))}
      </select>
      <AddItemToCartForm cartId={cartId} variantId={variantId} />
    </div>
  )
}
"use client"
import AddItemToCartForm from "./AddItemToCartForm";
import { useState } from "react";

export function ProductActions({ cartId, variants }: { cartId: number, variants: any}) {
  const [variantId, setVariantId] = useState()

  return (
    <div>
      <p>選択：</p>
      <select
        name="variantId"
        id="variantId"
        className="border px-4 py-2 mb-4"
      >
        { variants.map((v: any) => <option key={v.id} value={v.id} >{v.name}</option> )}
      </select>
      <AddItemToCartForm cartId={cartId} variantId={variants[0].id} />
    </div>
  )
}
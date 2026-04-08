"use client"
import { addItemToCartAction } from "@/app/actions/actions"
import { useActionState, useState } from "react"


export default function AddItemToCartForm({
  cartId,
  variantId
}: {
  cartId: number,
  variantId: number
}) {
  const [state, formAction, isPending] = useActionState(addItemToCartAction, null)

  return (
    <form action={formAction}>
      <input type="hidden" name="cartId" value={cartId} />
      <input type="hidden" name="variantId" value={variantId} />
      <input type="hidden" name="quantity" value={1} />
      <button disabled={isPending} className="border px-4 py-2">
        { isPending ? "追加中..." : "カートに追加"}
      </button>
    </form>
  )
}
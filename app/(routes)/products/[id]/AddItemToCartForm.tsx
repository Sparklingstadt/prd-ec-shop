"use client"
import { addItemToCartAction } from "@/app/actions/addItemToCartAction"
import { useActionState } from "react"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function AddItemToCartForm({
  cartId,
  variantId
}: {
  cartId: number,
  variantId: number
}) {
  const [, formAction, isPending] = useActionState(addItemToCartAction, null)

  return (
    <form action={formAction}>
      <input type="hidden" name="cartId" value={cartId} />
      <input type="hidden" name="variantId" value={variantId} />
      <input type="hidden" name="quantity" value={1} />
      <Button type="submit" disabled={isPending} size="lg" className="h-11 w-full">
        <ShoppingBag data-icon="inline-start" />
        { isPending ? "追加中..." : "カートに追加"}
      </Button>
    </form>
  )
}

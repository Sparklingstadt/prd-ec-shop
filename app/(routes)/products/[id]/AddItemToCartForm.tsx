"use client"
import { addItemToCartAction } from "@/app/actions/addItemToCartAction"
import { useActionState } from "react"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function AddItemToCartForm({
  variantId,
  isAvailable,
}: {
  variantId: number
  isAvailable: boolean
}) {
  const [state, formAction, isPending] = useActionState(addItemToCartAction, null)

  return (
    <form action={formAction} className="space-y-3">
      <input type="hidden" name="variantId" value={variantId} />
      <input type="hidden" name="quantity" value={1} />
      <Button type="submit" disabled={isPending || !isAvailable} size="lg" className="h-11 w-full">
        <ShoppingBag data-icon="inline-start" />
        {isPending ? "追加中..." : isAvailable ? "カートに追加" : "売り切れ"}
      </Button>
      {state && !state.success ? (
        <p role="alert" className="text-sm text-destructive">{state.message}</p>
      ) : null}
    </form>
  )
}

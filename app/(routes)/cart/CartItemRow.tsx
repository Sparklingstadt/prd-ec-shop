import { updateCartItemQuantityAction } from "@/app/actions/updateCartItemQuantityAction"
import { useActionState } from "react"
import { CartItemWithVariant } from "@/lib/types"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MAX_CART_QUANTITY } from "@/lib/validation"

export function CartItemRow({ cartItem }: { cartItem: CartItemWithVariant }) {
const [, formAction, isPending] = useActionState(updateCartItemQuantityAction, null)
  return (
<form action={formAction} className="flex w-fit items-center rounded-lg border bg-background p-0.5">
  <input type="hidden" name="cartItemId" value={cartItem.id} />
  <Button
    type="submit"
    name="type"
    value="increment"
    disabled={isPending || cartItem.quantity >= MAX_CART_QUANTITY}
    variant="ghost"
    size="icon-sm"
  ><Plus /></Button>
  <p className="flex h-7 w-9 items-center justify-center text-sm font-medium">{cartItem.quantity}</p>
  <Button
    type="submit"
    name="type"
    value="decrement"
    disabled={isPending || cartItem.quantity <= 1}
    variant="ghost"
    size="icon-sm"
  ><Minus /></Button>
</form>
  )
}

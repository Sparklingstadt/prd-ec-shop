import { updateCartItemQuantityAction } from "@/app/actions/actions"
import { useActionState } from "react"

export function CartItemRow({ cartItem }: { cartItem: any }) {
const [state, formAction, isPending] = useActionState(updateCartItemQuantityAction, null)
  return (
<form action={formAction} className="flex justify-center">
  <input type="hidden" name="cartItemId" value={cartItem.id} />
  <button
    type="submit"
    name="type"
    value="increment"
    disabled={isPending}
    className="flex-none w-12 h-12 border border-gray-300"
  >+</button>
  <p className="flex-none w-12 h-12 flex items-center justify-center border border-l-0 border-r-0 border-gray-300">{cartItem.quantity}</p>
  <button
    type="submit"
    name="type"
    value="decrement"
    disabled={isPending}
    className="flex-none w-12 h-12 border border-gray-300"
  >-</button>
</form>
  )
}
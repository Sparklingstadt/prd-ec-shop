import Link from "next/link"
import CartItemTable from "./CartItemTable"
import PlaceOrderButton from "./PlaceOrderButton"
import { requireUserId } from "@/lib/auth"
import { getCartByUserId, getCartItemsWithVariantsByCartId } from "@/app/actions/actions"
import { CartSummary } from "./CartSummary"

export default async function Page(){
  const userId = await requireUserId()
  const cart = await getCartByUserId(userId)
  if(!cart) throw new Error("Cart not found")
  const cartItems = await getCartItemsWithVariantsByCartId(cart.id)
  const subTotalPrice = cartItems.reduce((acc, item) => acc + (item.quantity * item.variant.price), 0)
  const totalPrice = subTotalPrice + 1000 + 300

  return (
    <div>
      <Link href="/products" className="text-sm underline">商品一覧へ戻る</Link>
      <p className="text-2xl font-bold py-4">買い物かご</p>
      <CartItemTable cartItems={cartItems} />
      <CartSummary
        cartItems={cartItems}
        subTotalPrice={subTotalPrice}
        shippingFee={1000}
        totalPrice={totalPrice}
      />
      <div>
        <PlaceOrderButton userId={userId}/>
      </div>
    </div>
  )
}
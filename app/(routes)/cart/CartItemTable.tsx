"use client"
import { removeCartItem } from "@/app/actions/actions"
import { CartItemRow } from "./CartItemRow"

export default function CartItemTable({ cartItems }: { cartItems: any }) {
  const handleRemoveCartItem = async (cartId: number, productId: number) => {
    await removeCartItem({ cartId, productId })
  }
  
  return (
    <table className="w-full border border-gray-300">
      <thead>
        <tr>
          <th className="p-4 text-left font-normal text-gray-500 text-sm">商品名</th>
          <th className="p-4 font-normal text-gray-500 text-sm">価格</th>
          <th className="p-4 font-normal text-gray-500 text-sm">数量</th>
          <th className="p-4 font-normal text-gray-500 text-sm">削除</th>
          <th className="p-4 font-normal text-gray-500 text-sm">合計</th>
        </tr>
      </thead>
      <tbody>
        { cartItems.map((cartItem: any) => (
          <tr key={cartItem.variantId} className="border-t border-gray-300 text-sm">
            <td className="p-4">{cartItem.variant.name}</td>
            <td className="p-4 text-center">¥{cartItem.variant.price}</td>
            <td className="p-4 text-center flex justify-center">
              <CartItemRow cartItem={cartItem} />
            </td>
            <td className="p-4 text-center">
              <button className="border p-1 px-2" onClick={() => handleRemoveCartItem(cartItem.cartId, cartItem.variant.id)}>削除</button>
            </td>
            <td className="p-4 text-center">¥{cartItem.quantity * cartItem.variant.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}


"use client"
import { decrementCartItemQuantity, incrementCartItemQuantity, removeCartItem } from "@/app/actions/actions"

export default function CartItemTable({ cart }: { cart: any}) {
  const handleRemoveCartItem = async (cartId: number, productId: number) => {
    const res = await removeCartItem({
      cartId,
      productId
    })
  }

  const handleIncrementCartItemQuantity = async (productId: number) => {
    incrementCartItemQuantity({
      cartId: cart.id,
      productId
    })
  }

  const handleDecrementCartItemQuantity = async (productId: number) => {
    decrementCartItemQuantity({
      cartId: cart.id,
      productId
    })
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
        { cart.items.map((item: any) => (
          <tr key={item.productId} className="border-t border-gray-300 text-sm">
            <td className="p-4">{item.product.name}</td>
            <td className="p-4 text-center">¥{item.product.price}</td>
            <td className="p-4 text-center flex justify-center">
              <button
                className="flex-none w-12 h-12 border border-gray-300"
                onClick={() => handleIncrementCartItemQuantity(item.productId)}
              >+</button>
              <p className="flex-none w-12 h-12 flex items-center justify-center border border-l-0 border-r-0 border-gray-300">{item.quantity}</p>
              <button
                className="flex-none w-12 h-12 border border-gray-300" 
                onClick={() => handleDecrementCartItemQuantity(item.productId)}             >-</button>
            </td>
            <td className="p-4 text-center">
              <button className="border p-1 px-2" onClick={() => handleRemoveCartItem(item.cartId, item.productId)}>削除</button>
            </td>
            <td className="p-4 text-center">¥{item.quantity * item.product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}


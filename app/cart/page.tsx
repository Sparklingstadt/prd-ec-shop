"use client"

import Link from "next/link"
import { useState } from "react"

export default function Page(){
  const [cartItems] = useState([
    { name: "アクリルスタンド A", price: 1500, quantity: 1, productId: 0 },
    { name: "アクリルスタンド B", price: 1500, quantity: 1, productId: 1 },
    { name: "タペストリー", price: 4000, quantity: 1, productId: 4 },
  ])
  const subTotalPrice = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0)
  const totalPrice = subTotalPrice + 1000 + 300


  return (
    <div>
      <Link href="/products" className="text-sm underline">商品一覧へ戻る</Link>
      <p className="text-2xl font-bold py-4">買い物かご</p>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="p-4 text-left font-normal text-gray-500 text-sm">商品名</th>
            <th className="p-4 font-normal text-gray-500 text-sm">価格</th>
            <th className="p-4 font-normal text-gray-500 text-sm">数量</th>
            <th className="p-4 font-normal text-gray-500 text-sm">合計</th>
          </tr>
        </thead>
        <tbody>
          { cartItems.map((item, index) => (
            <tr key={item.productId} className="border-t border-gray-300 text-sm">
              <td className="p-4">{item.name}</td>
              <td className="p-4 text-center">¥{item.price}</td>
              <td className="p-4 text-center">{item.quantity}</td>
              <td className="p-4 text-center">¥{item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full mx-auto p-4 border border-t-0 border-gray-300">
        <div className="flex justify-between mt-4">
          <p>小計</p>
          <p>¥{subTotalPrice}</p>
        </div>
        <div className="flex justify-between mt-4">
          <p>送料</p>
          <p>¥1000</p>
        </div>
        <div className="flex justify-between mt-4">
          <p>消費税</p>
          <p>¥300</p>
        </div>
        <div className="flex justify-between text-2xl mt-4">
          <p>合計</p>
          <p>¥{totalPrice}</p>
        </div>
      </div>
    </div>
  )
}
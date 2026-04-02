import getOrderItemsByOrderId from "@/repositories/orderItems/getOrderItemsByOrderId"
import Link from "next/link"

export default async function Page({
  params
}: {
  params: Promise<{'orderId': string}>
}) {
  const { orderId } = await params
  const orderItems = await getOrderItemsByOrderId(parseInt(orderId))
  const subTotalPrice = orderItems.reduce((acc, item) => acc + (item.quantity * item.productPrice), 0)
  const totalPrice = subTotalPrice + 1000

  return (
    <div>
      <Link href="/orders" className="text-sm underline">注文一覧へ戻る</Link>
      <p className="text-2xl font-bold py-4">Order #{orderId}</p>
      <p className="py-4">{new Date().toLocaleString()}</p>
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
          { orderItems.map(item => (
            <tr key={item.productId} className="border-t border-gray-300 text-sm">
              <td className="p-4">{item.productName}</td>
              <td className="p-4 text-center">¥{item.productPrice}</td>
              <td className="p-4 text-center">{item.quantity}</td>
              <td className="p-4 text-center">¥{item.quantity * item.productPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full mx-auto p-4 border border-t-0 border-gray-300">
        <div className="flex justify-between mt-4">
          <p>小計(税込)</p>
          <p>¥{subTotalPrice}</p>
        </div>
        <div className="flex justify-between mt-4">
          <p>送料(税込)</p>
          <p>¥1000</p>
        </div>
        <div className="flex justify-between text-2xl mt-4">
          <p>合計</p>
          <p>¥{totalPrice}</p>
        </div>
      </div>
    </div>
  )
}
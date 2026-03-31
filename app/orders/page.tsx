import { getOrders } from "@/repositories/orders"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import Link from "next/link"

export default async function Page() {
  const userId = (await cookies()).get("userId")?.value
  if(!userId) redirect("/signin")
  const orders = await getOrders(parseInt(userId))

  return (
    <div>
      <h1 className="text-2xl font-bold py-4">注文履歴</h1>
      <table className="w-full mx-auto border border-gray-300">
        <thead>
          <tr>
            <th className="p-4 font-normal text-gray-500 text-sm">注文ID</th>
            <th className="p-4 font-normal text-gray-500 text-sm">日付</th>
            <th className="p-4 font-normal text-gray-500 text-sm">支払い状況</th>
            <th className="p-4 font-normal text-gray-500 text-sm">発送状況</th>
            <th className="p-4 font-normal text-gray-500 text-sm">合計金額</th>
          </tr>
        </thead>
        <tbody>
          { orders.map(order => (
            <tr key={order.id} className="border-t border-gray-300">
              <td className="text-center">
                <Link href={`/orders/${order.id}`} className="border border-gray-300 text-xs p-2 px-4">#{order.id}</Link>
              </td>
              <td className="p-4 text-center">{new Date().toLocaleString()}</td>
              <td className="p-4 text-center">{order.paymentStatus}</td>
              <td className="p-4 text-center">{order.shippingStatus}</td>
              <td className="p-4 text-center">¥{order.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function cookie() {
  throw new Error("Function not implemented.")
}

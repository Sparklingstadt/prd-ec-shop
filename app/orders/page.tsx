import Link from "next/link"

export default function Page() {
  const orders = [
    { id: 0, orderId: 1000, date: new Date(), paymentStatus: "支払い済み", shippingStatus: "配送済み", total: 3000 },
    { id: 1, orderId: 1001, date: new Date(), paymentStatus: "支払い済み", shippingStatus: "配送済み", total: 6000 },
    { id: 2, orderId: 1002, date: new Date(), paymentStatus: "支払い済み", shippingStatus: "配送済み", total: 13000 },
  ]

  return (
    <div>
      <h1>注文履歴</h1>
      <table className="w-11/12 mx-auto border border-gray-300">
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
                <Link href={`/orders/${order.orderId}`} className="border border-gray-300 text-xs p-2 px-4">#{order.orderId}</Link>
              </td>
              <td className="p-4 text-center">{order.date.toLocaleString()}</td>
              <td className="p-4 text-center">{order.paymentStatus}</td>
              <td className="p-4 text-center">{order.shippingStatus}</td>
              <td className="p-4 text-center">¥{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
import { getOrders } from "@/repositories/orders";
import Link from "next/link";
import SignOut from "./SignOut";

export default async function Page() {
  const orders = await getOrders()

  return (
    <div>
      <SignOut />
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <h2 className=" text-xl font-bold py-4">注文履歴</h2>
      <table className="w-full mx-auto border border-gray-300">
        <thead>
          <tr>
            <th className="p-4 font-normal text-gray-500 text-sm">注文ID</th>
            <th className="p-4 font-normal text-gray-500 text-sm">注文日時</th>
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
      <h2 className="text-xl font-bold py-4">お届け先住所</h2>
      <div>
        <p>FIRSTN LASTN</p>
        <p>000-0000</p>
        <p>XX県 YY市 ZZ丁目</p>
        <p>A-B-C号室</p>
      </div>
      <div className="py-4">
        <Link href="/account/address" className="underline">住所を見る(1)</Link>
      </div>
      <div className="py-4">
        <Link href="/account/edit" className="underline">アカウント情報を編集</Link>
      </div>
    </div>
  )
}
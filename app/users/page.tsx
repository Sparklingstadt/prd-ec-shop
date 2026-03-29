import { getUsers } from "@/repositories/users"
import Link from "next/link"

export default async function Page() {
  const users = await getUsers()

  return (
    <div>
      <h1 className="text-2xl font-bold py-4">Users</h1>
      <table className="w-full mx-auto border border-gray-300">
        <thead>
          <tr>
            <th className="p-4 font-normal text-gray-500 text-sm">ユーザーID</th>
            <th className="p-4 font-normal text-gray-500 text-sm">fitstName</th>
            <th className="p-4 font-normal text-gray-500 text-sm">lastName</th>
            <th className="p-4 font-normal text-gray-500 text-sm">注文数</th>
            <th className="p-4 font-normal text-gray-500 text-sm">操作</th>
          </tr>
        </thead>
        <tbody>
          { users.map(user => (
            <tr key={user.id} className="border-t border-gray-300">
              <td className="text-center px-8">
                <Link href={`/users/${user.id}`} className="border border-gray-300 text-xs p-2 px-4">#{user.id}</Link>
              </td>
              <td className="p-4 text-center">{user.firstName}</td>
              <td className="p-4 text-center">{user.lastName}</td>
              <td className="p-4 text-center">N/A</td>
              <td className="p-4 text-center">
                <button disabled>{ user.role === "admin" ? "選択済み" : "切り替え" }</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
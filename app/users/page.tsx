import { getUsers } from "@/repositories/users"

export default async function Page() {
  const users = await getUsers()

  return (
    <div>
      <h1 className="text-2xl font-bold py-4">Users</h1>
      <table className="w-full mx-auto border border-gray-300">
        <thead>
          <tr>
            <th className="p-4 text-left font-normal text-gray-500 text-sm">ユーザー</th>
            <th className="p-4 font-normal text-gray-500 text-sm">注文数</th>
            <th className="p-4 font-normal text-gray-500 text-sm">ロール</th>
            <th className="p-4 font-normal text-gray-500 text-sm">操作</th>
          </tr>
        </thead>
        <tbody>
          { users.map(user => (
            <tr key={user.id} className="border-t border-gray-300">
              <td className="p-4">{user.firstName}</td>
              <td className="p-4 text-center">N/A</td>
              <td className="p-4 text-center">{user.role}</td>
              <td className="p-4 text-center">
                <button disabled>切り替え</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
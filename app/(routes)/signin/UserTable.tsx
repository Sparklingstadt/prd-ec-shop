"use client"
import { signIn } from "@/app/actions/actions"
import { useRouter } from "next/navigation"

export default function UserTable({ users }: { users: any }) {
  const router = useRouter()

  const handleSignIn = async (userId: number) => {
    await signIn(userId)
    router.push("/account")
  }

  return (
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
        { users.map((user: any) => (
          <tr key={user.id} className="border-t border-gray-300">
            <td className="text-center px-8">{user.id}</td>
            <td className="p-4 text-center">{user.firstName}</td>
            <td className="p-4 text-center">{user.lastName}</td>
            <td className="p-4 text-center">N/A</td>
            <td className="p-4 text-center">
              <button
                className="border p-1 px-2"
                onClick={async () => handleSignIn(user.id)}>選択</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
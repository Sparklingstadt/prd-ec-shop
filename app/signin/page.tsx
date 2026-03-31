import { getUsers } from "@/repositories/users"
import { cookies } from "next/headers"
import UserTable from "./UserTable"

export default async function Page() {
  const users = await getUsers()

  const userInfo = (await cookies()).get("userId")?.value

  return (
    <div>
      <h1 className="text-2xl font-bold py-4">Users</h1>
      <p>{ userInfo }</p>
      <UserTable users={users} />
    </div>
  )
}
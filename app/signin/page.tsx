import { getUsers } from "@/repositories/users"
import UserTable from "./UserTable"

export default async function Page() {
  const users = await getUsers()

  return (
    <div>
      <h1 className="text-2xl font-bold py-4">サインイン</h1>
      <UserTable users={users} />
    </div>
  )
}
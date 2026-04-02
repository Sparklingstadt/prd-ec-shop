import { getUserById } from "@/repositories/users"

export default async function Page({
  params
}: {
  params: Promise<{'userId': string}>
}) {
  const { userId} = await params
  const user = await getUserById(parseInt(userId))

  return (
    <div>
      <h1 className="text-2xl font-bold">User: #{userId}</h1>
      <pre>{ JSON.stringify(user) }</pre>
    </div>
  )
}
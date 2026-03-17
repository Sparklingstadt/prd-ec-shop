import { getUsers } from "./getUsers";

export async function getUserById(userId: number) {
  const user = (await getUsers())[userId]

  return user
}
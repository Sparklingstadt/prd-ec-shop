import getUsers from "./getUsers";

export default async function getUserById(userId: number) {
  const user = (await getUsers())[userId]

  return user
}
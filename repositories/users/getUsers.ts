export async function getUsers() {
  const users = [
    { id: 0, firstName: "Angelia", lastName: "Hoge", role: "admin" },
    { id: 1, firstName: "Bill", lastName: "Foo", role: "user" },
  ]

  return users
}
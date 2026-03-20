export async function getUsers() {
  const users = [
    { id: 0, firstName: "Angelia", lastName: "User", role: "admin" },
    { id: 1, firstName: "Bill", lastName: "User", role: "user" },
    { id: 2, firstName: "Carter", lastName: "User", role: "user" },
    { id: 3, firstName: "Egol", lastName: "User", role: "user" },
  ]

  return users
}
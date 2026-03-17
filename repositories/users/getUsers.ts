export async function getUsers() {
  const users = [
    { id: 0, firstName: "Admin", lastName: "User" },
    { id: 1, firstName: "Bill", lastName: "User" },
    { id: 2, firstName: "Carter", lastName: "User" },
    { id: 2, firstName: "Egol", lastName: "User" },
  ]

  return users
}
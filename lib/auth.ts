import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function requireUserId(){
  const userId = (await cookies()).get("userId")?.value
  if(userId === undefined) redirect("/signin")

  return parseInt(userId)
}
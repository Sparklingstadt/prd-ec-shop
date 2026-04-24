import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function requireUserId(){
  const session = await auth()
  if(!session || !session.user || !session.user.id) redirect("/signin")

  return parseInt(session.user.id)
}
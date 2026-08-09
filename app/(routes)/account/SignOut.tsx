"use client"
import Link from "next/link"
import { signOutAction } from "@/app/actions/actions"
import { LogOut } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export default function SignOut() {
  const handleSignOut = async () => {
    await signOutAction()
  }

  return (
    <Link href="/signout" className={buttonVariants({ variant: "outline" })} onClick={handleSignOut}><LogOut /> Sign out</Link>
  )
}

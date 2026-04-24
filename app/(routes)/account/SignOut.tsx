"use client"
import Link from "next/link"
import { signOutAction } from "@/app/actions/actions"

export default function SignOut() {
  const handleSignOut = async () => {
    signOutAction()
  }

  return (
    <Link href="/signout" className="text-sm underline" onClick={handleSignOut}>Sign out</Link>    
  )
}
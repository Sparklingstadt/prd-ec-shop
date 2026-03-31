"use client"
import Link from "next/link"
import { signOut } from "../actions/actions"

export default function SignOut() {
  const handleSignOut = async () => {
    signOut()
  }

  return (
    <Link href="/signout" className="text-sm underline" onClick={handleSignOut}>Sign out</Link>    
  )
}
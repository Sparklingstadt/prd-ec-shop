"use client"

import { signOut } from "../actions/actions"

export default function SignOut() {
  const handleSignOut = async () => {
    signOut()
  }

  return (
    <p
      className="text-sm underline"
      onClick={handleSignOut}  
    >Sign out</p>    
  )
}
import { signIn } from "@/auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthError } from "next-auth"

export function SignInForm() {
  const handleSignIn = async (formData: FormData) => {
    "use server"
    try {
      await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false
      })
    } catch (error) {
      if (error instanceof AuthError) {
        redirect("/signin?error=credentials")
      }
      throw error
    }

    redirect("/products")
  }

  return (
    <form action={handleSignIn} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" defaultValue="user1@mail.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" autoComplete="current-password" defaultValue="password" required />
      </div>
      <Button type="submit" size="lg" className="h-11 w-full">Sign In</Button>
    </form>
  )
}

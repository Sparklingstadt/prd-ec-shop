import { signIn } from "@/auth"
import { redirect } from "next/navigation"

export function SignInForm() {
  const handleSignIn = async (formData: FormData) => {
    "use server"
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false
    })

    redirect("/products")
  }

  return (
    <form action={handleSignIn}>
      <div>
        <label>
          <span className="block py-2">Email</span>
          <input name="email" type="email" className="w-full border border-gray-400 rounded-sm px-2 py-1" />
        </label>
      </div>
      <div className="mt-4">
        <label>
          <span className="block py-2">Password</span>
          <input name="password" type="password" className="w-full border border-gray-400 rounded-sm px-2 py-1" />
        </label>
      </div>
      <div className="mt-8">
       <button className="w-full bg-slate-800 text-white px-4 py-2">Sign In</button>
      </div>
    </form>
  )
}
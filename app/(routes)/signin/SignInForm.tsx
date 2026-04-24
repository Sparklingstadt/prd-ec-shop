import { signIn } from "@/auth"

export function SignInForm() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
      }}
    >
      <div>
        <label className="w-full flex justify-between mt-4">
          <span>Email</span>
          <input name="email" type="email" className="border p-2" placeholder="email@example.com" />
        </label>
      </div>
      <div>
        <label className="w-full flex justify-between mt-4">
          <span>Password</span>
          <input name="password" type="password" className="border p-2" placeholder="*****" />
        </label>
      </div>
      <div className="mt-4">
       <button className="w-full bg-slate-800 text-white px-4 py-2">Sign In</button>
      </div>
    </form>
  )
}
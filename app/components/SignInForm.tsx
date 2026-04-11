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
        <label>
          Email
          <input name="email" type="email" className="border"/>
        </label>
      </div>
      <div>
        <label>
          Password
          <input name="password" type="password" className="border"/>
        </label>
      </div>
      <div className="mt-4">
       <button className="border px-4 py-2">Sign In</button>
      </div>
    </form>
  )
}
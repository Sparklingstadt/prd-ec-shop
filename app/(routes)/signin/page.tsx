import { SignInForm } from "@/app/(routes)/signin/SignInForm"
import { auth } from "@/auth"

export default async function Page() {  
  const session = await auth()

  if(!session?.user) console.log("session not found")

  return (
    <div>
      <h1 className="text-2xl font-bold py-4">サインイン</h1>
      <SignInForm />
      <div>
        <h2>User Data</h2>
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
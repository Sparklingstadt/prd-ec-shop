import { SignInForm } from "@/app/(routes)/signin/SignInForm"

export default async function Page() {  
  return (
    <div>
      <h1 className="text-2xl font-bold py-4">サインイン</h1>
      <SignInForm />
    </div>
  )
}
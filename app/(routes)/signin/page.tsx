import { SignInForm } from "@/app/(routes)/signin/SignInForm"

export default async function Page() {  
  return (
    <div>
      <h1 className="text-2xl font-bold py-4">サインイン</h1>
      <SignInForm />
      <div className="mt-8">
        <h1 className="text-2xl my-4">説明</h1>
        <p>下記の内容を入力し、「Sign In」クリックで入れます</p>
        <div className="my-4">
          <p>Email: user1@mail.com</p>
          <p className="lline-">Password: hoge</p>
        </div>
        <p className="text-gray-500">※便宜上、Passwordは現状なんでも通すようにしています</p>
      </div>
    </div>
  )
}
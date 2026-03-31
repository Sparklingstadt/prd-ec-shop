import Link from "next/link";

export default async function Page(){
  return (
    <div>
      <Link href="/" className="text-sm underline">トップページに戻る</Link>
      <h1 className="text-2xl font-bold py-4">サインアウトしました</h1>
    </div>
  )
}
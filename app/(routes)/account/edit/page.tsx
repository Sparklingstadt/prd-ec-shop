import Link from "next/link";

export default function Page(){
  return (
    <div>
      <Link href="/account" className="text-sm underline">アカウントへ戻る</Link>
      <h1 className="text-2xl font-bold py-4">アカウント情報を編集</h1>
      <p>ここに編集用のフォーム</p>
    </div>
  )
}
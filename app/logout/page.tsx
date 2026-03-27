import Link from "next/link";

export default function Page(){
  return (
    <div>
      <Link href="/" className="text-sm underline">トップページに戻る</Link>
      <h1 className="text-2xl font-bold py-4">ログアウト画面</h1>
      <p>このページではログアウト処理を行う</p>
    </div>
  )
}
import Link from "next/link"

export default function Page(){
  return (
    <div>
      <Link href="/account" className="text-sm underline">アカウントへ戻る</Link>
      <h1 className="text-2xl font-bold py-4">設定住所</h1>
      <div>
        <p>FIRSTN LASTN</p>
        <p>000-0000</p>
        <p>XX県 YY市 ZZ丁目</p>
        <p>A-B-C号室</p>
      </div>
    </div>
  )
}
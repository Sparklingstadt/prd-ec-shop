import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>/items/a</h1>
      <p>商品詳細説明</p>
      <p>
        <Link href="/">トップへ</Link>
      </p>
    </div>
  )
}
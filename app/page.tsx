export default function Page() {
  return (
    <div>
      <h1 className="text-2xl mb-4">/app</h1>
      <ul>
        <li>/app/page.tsxは https://localhost:3000 にルーティングされる</li>
        <li>page.tsxではJSXをreturnするHome関数をexport defaultする</li>
      </ul>
    </div>
  )
}
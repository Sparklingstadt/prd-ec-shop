import { prisma } from "@/lib/prisma"
import Link from "next/link"
import CartItemTable from "./CartItemTable"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import PlaceOrderButton from "./PlaceOrderButton"

export default async function Page(){
  const userId = (await cookies()).get("userId")?.value
  if(!userId) redirect("/signin")


  const cart = await prisma.cart.findUnique({
    where: {
      userId: parseInt(userId)
    },
    include: {
      items: {
        include: {
          product: true
        }
      }
    }
  })
  
  if(!cart) throw new Error("Cart not found")
  const subTotalPrice = cart.items.reduce((acc, item) => acc + (item.quantity * item.product.price), 0)
  const totalPrice = subTotalPrice + 1000 + 300

  return (
    <div>
      <Link href="/products" className="text-sm underline">商品一覧へ戻る</Link>
      <p className="text-2xl font-bold py-4">買い物かご</p>
      <CartItemTable cart={cart} />
      { cart.items.length > 0 && <div className="w-full mx-auto p-4 border border-t-0 border-gray-300">
        <div className="flex justify-between mt-4">
          <p>小計</p>
          <p>¥{subTotalPrice}</p>
        </div>
        <div className="flex justify-between mt-4">
          <p>送料</p>
          <p>¥1000</p>
        </div>
        <div className="flex justify-between mt-4">
          <p>消費税</p>
          <p>¥300</p>
        </div>
        <div className="flex justify-between text-2xl mt-4">
          <p>合計</p>
          <p>¥{totalPrice}</p>
        </div>
      </div>
      }
      { cart.items.length === 0 && <div className="w-full mx-auto p-4 border border-t-0 border-gray-300">
          <p>カートの中は空です</p>
        </div>
      }
      <div>
        <PlaceOrderButton userId={parseInt(userId)}/>
      </div>
    </div>
  )
}
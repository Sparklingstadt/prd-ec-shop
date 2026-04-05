import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { cookies } from "next/headers";
import { getCartByUserId, getCartItemsWithVariantsByCartId } from "./actions/actions";

export const metadata: Metadata = {
  title: "Candy Rain",
  description: "EC Shopping app developed with Next.js v16",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userId = (await cookies()).get("userId")?.value
  let cartItemCountText = ""
  if(userId){
    const cart = await getCartByUserId(parseInt(userId))
    if(!cart) throw new Error("Cart not found")
    const cartItems = await getCartItemsWithVariantsByCartId(cart.id)
    cartItemCountText = `(${cartItems.length})`
  }
  
  const navLinks = [
    { href: "/products", text: "Products" },
    { href: "/cart", text: "Cart" + cartItemCountText},
    { href: "/orders", text: "Orders" },
    { href: "/account", text: "Account"}
  ]

  return (
    <html lang="ja">
      <body>
        <header className="border-b border-gray-300">
        <div className="flex justify-between items-center w-11/12 mx-auto">
          <h1 className="text-2xl font-light">
            <Link href="/">Candy Rain</Link>
          </h1>
          <nav>
            <ul className="flex">
              { navLinks.map((navLink, index) => (
                <li key={index}>
                  <Link href={navLink.href} className="inline-block p-8 font-bold uppercase text-sm">{navLink.text}</Link>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/Sparklingstadt/prd-ec-shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-8 font-bold uppercase text-sm"
                >GitHub</a>
              </li>
            </ul>
          </nav>
        </div>
        </header>
        <div className="w-11/12 mx-auto py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
function getCartWithProductsByUserId(arg0: number) {
  throw new Error("Function not implemented.");
}


import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Candy Rain",
  description: "EC Shopping app developed with Next.js v16",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cart = await prisma.cart.findUnique({
    where: {
      userId: 0
    },
    include: {
      items: {
        include: {
          product: true
        }
      }
    }
  })

  const userId = (await cookies()).get("userId")?.value
  if(!userId) throw new Error("userId not found")
  const user = await prisma.user.findFirst({ where: { id: parseInt(userId) }})
if(!user) throw new Error("User not found")
  console.log(user.firstName)

  if(!cart) throw new Error("Cart not found")

  const navLinks = [
    { href: "/products", text: "Products" },
    { href: "/cart", text: "Cart" + `(${cart.items.length})`},
    { href: "/users", text: "Users" },
    { href: "/orders", text: "Orders" },
    { href: "/account", text: "Account" + `(${user.firstName})`},
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

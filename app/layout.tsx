import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Candy Rain",
  description: "EC Shopping app developed with Next.js v16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header className="border-b border-gray-300">
        <div className="flex justify-between items-center w-11/12 mx-auto">
          <h1 className="text-2xl font-light">Candy Rain</h1>
          <nav>
            <ul className="flex">
              <li>
                <Link className="inline-block p-8 font-bold uppercase text-sm" href="/products">Products</Link>
              </li>
              <li>
                <Link className="inline-block p-8 font-bold uppercase text-sm" href="/orders">Orders</Link>
              </li>
              <li>
                <Link className="inline-block p-8 font-bold uppercase text-sm" href="/users">Users</Link>
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

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
        <header className="flex justify-between items-center w-11/12 mx-auto">
          <h1 className="text-2xl">Candy Rain</h1>
          <nav>
            <ul className="flex">
              <li>
                <Link className="inline-block p-4 px-8" href="/products">Products</Link>
              </li>
              <li>
                <Link className="inline-block p-4 px-8" href="/orders">Orders</Link>
              </li>
              <li>
                <Link className="inline-block p-4 px-8" href="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

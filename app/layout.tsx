import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EC Shop",
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
        <header className="flex justify-between items-center">
          <h1 className="text-2xl">EC shop app</h1>
          <nav>
            <ul className="flex">
              <li>
                <Link className="inline-block p-4 px-8" href="/">Top</Link>
              </li>
              <li>
                <Link className="inline-block p-4 px-8" href="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

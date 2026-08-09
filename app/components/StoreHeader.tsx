"use client"

import Link from "next/link"
import { Code2, Menu, ShoppingBag, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { href: "/products", label: "Products" },
  { href: "/orders", label: "Orders" },
  { href: "/account", label: "Account" },
]

export default function StoreHeader({ cartItemCount, signedIn }: { cartItemCount: number, signedIn: boolean }) {
  const cartLabel = `Cart(${cartItemCount})`

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span>Candy Rain</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="メインナビゲーション">
          {navigation.map((item) => (
            <Button key={item.href} variant="ghost" render={<Link href={item.href} />}>
              {item.label}
            </Button>
          ))}
          <Button variant="outline" render={<Link href="/cart" />} className="ml-2">
            <ShoppingBag data-icon="inline-start" />
            {cartLabel}
          </Button>
          <Button variant="ghost" size="icon" render={<a href="https://github.com/Sparklingstadt/prd-ec-shop" target="_blank" rel="noreferrer" />}>
            <Code2 />
            <span className="sr-only">GitHub</span>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Badge variant={signedIn ? "secondary" : "outline"}>{signedIn ? "Signed in" : "Guest"}</Badge>
          <Sheet>
            <SheetTrigger render={<Button variant="outline" size="icon" />}>
              <Menu />
              <span className="sr-only">メニューを開く</span>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Candy Rain</SheetTitle>
                <SheetDescription>ストアメニュー</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-4" aria-label="モバイルナビゲーション">
                {navigation.map((item) => (
                  <Button key={item.href} variant="ghost" className="justify-start" render={<Link href={item.href} />}>
                    {item.label}
                  </Button>
                ))}
                <Button variant="secondary" className="justify-start" render={<Link href="/cart" />}>
                  <ShoppingBag data-icon="inline-start" />
                  {cartLabel}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

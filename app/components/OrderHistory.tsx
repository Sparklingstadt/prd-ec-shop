import Link from "next/link"
import { PackageOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Order } from "@/repositories/entities/Order"

export default function OrderHistory({ orders }: { orders: Order[] }) {
  if (orders.length === 0) {
    return <Card className="py-16 text-center"><CardContent><PackageOpen className="mx-auto size-8 text-muted-foreground" /><p className="mt-4 font-medium">注文はまだありません</p><p className="mt-2 text-sm text-muted-foreground">最初の商品を選んでみましょう。</p></CardContent></Card>
  }

  return (
    <Card className="py-0">
      <Table>
        <TableHeader><TableRow><TableHead className="p-4">注文</TableHead><TableHead>日時</TableHead><TableHead>支払い</TableHead><TableHead>配送</TableHead><TableHead className="text-right">合計</TableHead></TableRow></TableHeader>
        <TableBody>
          {orders.map(order => (
            <TableRow key={order.id}>
              <TableCell className="p-4"><Link href={`/orders/${order.id}`} className="font-semibold text-primary hover:underline">#{order.id}</Link></TableCell>
              <TableCell className="text-muted-foreground">{order.orderedAt.toLocaleString()}</TableCell>
              <TableCell><Badge variant="secondary">{order.paymentStatus}</Badge></TableCell>
              <TableCell><Badge variant="outline">{order.shippingStatus}</Badge></TableCell>
              <TableCell className="text-right font-semibold">¥{order.totalPrice.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

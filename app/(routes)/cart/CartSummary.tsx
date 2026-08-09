import { CartItemWithVariant } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export async function CartSummary({
  cartItems,
  subTotalPrice,
  shippingFee,
  totalPrice
}: {
  cartItems: CartItemWithVariant[],
  subTotalPrice: number,
  shippingFee: number,
  totalPrice: number
}) {
  return (
    <div>
      { cartItems.length > 0 && <Card>
        <CardHeader><CardTitle>ご注文内容</CardTitle></CardHeader>
        <CardContent className="space-y-4">
        <div className="flex justify-between text-sm">
          <p>小計</p>
          <p>¥{subTotalPrice.toLocaleString()}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>送料</p>
          <p>¥{shippingFee.toLocaleString()}</p>
        </div>
        <Separator />
        <div className="flex items-end justify-between">
          <p className="font-medium">合計</p>
          <p className="text-2xl font-semibold text-primary">¥{totalPrice.toLocaleString()}</p>
        </div>
        </CardContent>
      </Card>
      }
      { cartItems.length === 0 && <Card className="py-16 text-center"><CardContent><p className="text-lg font-medium">カートの中は空です</p><p className="mt-2 text-sm text-muted-foreground">お気に入りの商品を見つけて追加しましょう。</p></CardContent></Card>
      }
    </div>
  )
}

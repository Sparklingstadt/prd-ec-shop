export async function CartSummary({
  cartItems,
  subTotalPrice,
  shippingFee,
  totalPrice
}: {
  cartItems: any,
  subTotalPrice: number,
  shippingFee: number,
  totalPrice: number
}) {
  return (
    <div>
      { cartItems.length > 0 && <div className="w-full mx-auto p-4 border border-t-0 border-gray-300">
        <div className="flex justify-between mt-4">
          <p>小計</p>
          <p>¥{subTotalPrice}</p>
        </div>
        <div className="flex justify-between mt-4">
          <p>送料</p>
          <p>¥{shippingFee}</p>
        </div>
        <div className="flex justify-between text-2xl mt-4">
          <p>合計</p>
          <p>¥{totalPrice}</p>
        </div>
      </div>
      }
      { cartItems.length === 0 && <div className="w-full mx-auto p-4 border border-t-0 border-gray-300">
          <p>カートの中は空です</p>
        </div>
      }
    </div>
  )
}
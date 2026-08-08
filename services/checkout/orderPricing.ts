type PricedCartItem = {
  quantity: number
  variant: {
    price: number
  }
}

export function calculateOrderTotal(
  items: PricedCartItem[],
  shippingPrice: number
) {
  return items.reduce(
    (total, item) => total + item.variant.price * item.quantity,
    shippingPrice
  )
}

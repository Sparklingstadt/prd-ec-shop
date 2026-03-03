export function getProducts(): Array<Product> {
  return [
    { id: 0, name: "アクリルスタンド", price: 1800 },
    { id: 1, name: "クリアファイル", price: 700 },
    { id: 2, name: "缶バッジ", price: 600 },
    { id: 3, name: "オリジナルパーカー", price: 9000 },
    { id: 4, name: "オリジナルTEE", price: 7000 },
    { id: 5, name: "タペストリー", price: 4500 },
    { id: 6, name: "キーホルダー", price: 1000 },
  ]
}
export function getProduct(id: number) {
  return {
    id,
    name: "プロダクト名",
    price: "¥5,800",
    category: "グッズ",
    description: "グッズの詳細情報"
  }
}
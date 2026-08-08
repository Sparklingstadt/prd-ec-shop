import assert from "node:assert/strict"
import test from "node:test"
import { Product } from "./Product"
import { User } from "./User"

test("seedで使用するID 0の商品を生成できる", () => {
  const product = new Product(0, "商品", null, "", "/product.png")

  assert.equal(product.id, 0)
  assert.equal(product.category, null)
  assert.equal(product.description, "")
})

test("seedで使用するID 0のユーザーを生成できる", () => {
  const user = new User(0, "Taro", "Yamada")

  assert.equal(user.id, 0)
})

test("負のIDは拒否する", () => {
  assert.throws(
    () => new Product(-1, "商品", null, "", "/product.png"),
    /id must be non-negative/
  )
})

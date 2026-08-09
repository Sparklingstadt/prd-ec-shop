import { expect, test, type Page } from "@playwright/test"

async function signIn(page: Page) {
  await page.goto("/signin")
  await page.getByLabel("Email").fill("user1@mail.com")
  await page.getByLabel("Password").fill("demo-password")
  await page.getByRole("button", { name: "Sign In" }).click()
  await expect(page).toHaveURL(/\/products$/)
}

test("未認証ユーザーをサインイン画面へ誘導する", async ({ page }) => {
  await page.goto("/products")

  await expect(page).toHaveURL(/\/signin$/)
  await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible()
})

test("サインインして商品を購入できる", async ({ page }) => {
  await signIn(page)

  await page.getByRole("link", { name: /ランダム缶バッジ/ }).click()
  await expect(page.getByRole("heading", { name: "ランダム缶バッジ" })).toBeVisible()
  await page.getByRole("button", { name: "カートに追加" }).click()
  await expect(page.getByRole("link", { name: "Cart(1)" })).toBeVisible()

  await page.getByRole("link", { name: "Cart(1)" }).click()
  await expect(page.getByText("¥1,500", { exact: true })).toBeVisible()
  await page.getByRole("button", { name: "購入", exact: true }).click()

  await expect(page).toHaveURL(/\/orders$/)
  await expect(page.getByRole("heading", { name: "注文履歴" })).toBeVisible()
  await expect(page.getByRole("cell", { name: "¥1,500" })).toBeVisible()

  await page.getByRole("link", { name: "Cart(0)" }).click()
  await expect(page.getByText("カートの中は空です")).toBeVisible()
})

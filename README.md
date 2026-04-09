## Candy Rain Stoer / prd-ec-shop

シンプルなECサイトです

商品一覧・商品詳細・カート・注文履歴までをフルスタックで実装

責務分離と保守性を意識した構成にしています

## デモ

URL: https://candy-rain-store.vercel.app

## 技術スタック
- Next.js v16
- TypeScript v5
- Prisma
- PostgreSQL
- TailwindCSS v4

## アーキテクチャ設計

準備中

## こだわった点 / 工夫

- Server Actionで例外を投げない
- Service層でドメインロジック集約
- Prismaのトランザクション設計

## 苦労した点と解決
- RSCとClientの責務分離

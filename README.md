## Candy Rain Stoer / prd-ec-shop

シンプルなECサイトです

商品一覧・商品詳細・カート・注文履歴までをフルスタックで実装

単なる機能実装ではなく、**責務分離・保守性・拡張性を意識した設計**を目的として開発しました

特に、Server Action / Service層 / Repository層の分離を行い、
実務を想定したアーキテクチャ構成を意識しています

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

---

## 技術スタック

- Next.js v16 (App Router)
- TypeScript v5
- Prisma
- PostgreSQL
- TailwindCSS v4

### 採用理由
- App Router + Server Actions によるサーバー主導設計の理解を深めるため
- 型安全・実行時エラー予防のためTSを導入
- Prismaによる型安全なDB操作
- VercelやSupabaseのようなマネージドDB対応のためPostgresを採用
- Service層分離によるロジックの明確化

---

## アーキテクチャ設計

### レイヤー構成

- UI (Server / Client Component)
- Server Action（入力受付のみ）
- Service層（ビジネスロジック）
- Repository層（DBアクセス）

### 設計方針

- Server Actionでは例外を投げず、Service層で制御
- Repositoryは純粋なDBアクセスのみに限定
- ビジネスロジックはServiceに集約

---

## こだわった点 / 工夫

- Server Actionで直接DB操作を行わない構成
  - repository経由での取得を厳守
- Prismaトランザクションを用いた注文処理の整合性担保
- revalidatePathの適切な使用によるUI整合性維持
  - 商品のカート追加でカートのアイテム数表記が更新される

---

## 苦労した点と解決

### RSCとClient Componentの責務分離

Server Componentでデータ取得を行い、
Client Componentには状態管理のみを担当させる構成へ整理しました。

初期はロジックが混在していましたが、
責務を明確に分離することで可読性と保守性を向上させました。

---

## 今後の改善点

- 認証の導入
- テストコード導入
- CI/CD整備
- テーブルコンポーネントの共通化
- UIコンポーネントのさらなる抽象化

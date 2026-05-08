# Candy Rain Store / prd-ec-shop

ECストアのデモWebアプリです。

バックエンド学習の成果として、
商品一覧・商品詳細・カート・注文履歴機能までをフルスタックで設計・実装しました。

単なる機能実装にとどまらず、
責務分離・保守性・拡張性を意識したアーキテクチャ設計を行い、
将来的な機能追加・改修・バグ修正を容易にする構成を目指しています。

具体的には、Server Action / Service層 / Repository層を分離し、
変更に強い構成を実現しました。



## デモ

URL: https://candy-rain-store.vercel.app

## 技術スタック

* Next.js v16
* TypeScript
* Prisma ORM
* PostgreSQL
* Tailwind CSS
* Auth.js
* Playwright

## アーキテクチャ設計

### レイヤー構成

* UI（Server / Client Component）
* Server Action（入力受付・DTO変換）
* Service層（ビジネスロジック）
* Repository層（DBアクセス）

## 設計方針

* Server Actionでは例外処理を行わず、Service層で制御
* Repositoryは純粋なDBアクセスのみに限定
* ビジネスロジックはService層に集約

## こだわった点 / 工夫

* Server Actionから直接DB操作を行わない構成
    * DBアクセスはRepository層に限定
* Prismaのトランザクションを用いた注文処理の整合性担保
* revalidatePath を適切に使用し、カート追加時のUI整合性を維持

## 苦労した点と解決

### RSCとClient Componentの責務分離

初期実装ではデータ取得・状態管理・UIロジックが混在していました。

Server Componentでデータ取得を行い、
Client Componentには状態管理のみを担当させる構成へ整理することで、
可読性と保守性を向上させました。



## 今後の改善点

* テストコードの拡充
* CIの整備
* UIコンポーネントのさらなる抽象化
* shadcn/uiの導入
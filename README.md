# アルゴリズムを実践で学ぼう2（重複文字のカウント, パスワード強度の確認, 最長のユニーク部分列）

## 課題一覧
1. [重複文字のカウント](duplicate-char-count/)
2. [パスワード強度の確認](password-strength-check/)
3. [最長のユニーク部分列](longest-substring/)

## 開発環境のセットアップ

課題を始める前に以下の環境が必要です。

### 前提条件（必須）

- **Node.js & npm** （推奨バージョン：Node.js v14以上）

インストール済みかどうかは、以下のコマンドで確認できます。

```bash
node -v
npm -v
```

インストールされていない場合は、公式サイトからインストールしてください。

- [Node.js公式サイト](https://nodejs.org/ja/)

### テスト環境の準備

依存関係をインストールするために、以下のコマンドを実行します。

```bash
npm install
```

## テストの実行方法

### すべての課題のテストを実行

```bash
npm test
```

### 特定の課題だけテストを実行

```bash
npm test -- <課題ディレクトリ>/<テストファイル名>
```

**例：重複文字のカウントだけをテストしたい場合**

```bash
npm test -- duplicate-char-count/duplicate_char_count.test.js
```

### 特定のテストケースのみを実行（任意）

特定のテストケースだけを実行したい場合は、テスト名を指定します。

```bash
npm test -- duplicate-char-count/duplicate_char_count.test.js -t "文字列 'apple' のカウント"
```

## 推奨する学習手順

1. 課題内容をREADMEで確認
2. テストを実行して失敗を確認（TDD方式を推奨）
3. コードを書いてテストを通す
4. テストが全て通ったらコミット＆セルフマージ

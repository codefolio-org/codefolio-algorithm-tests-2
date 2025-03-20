# パスワード強度の確認

## 課題内容

与えられたパスワードが、以下の要件を満たすかを確認する関数を作成してください。

- 最低8文字以上
- 少なくとも1つの大文字
- 少なくとも1つの数字
- 少なくとも1つの特殊文字（例：`!@#$%^&*`）

## 入力例

```
"Password123!"
```

## 出力例

```
true
```

## 提出方法

- `password_strength_check.js`を編集し、すべてのテストを通過させてください。

### テスト実行方法

```
npm test -- password-strength-check/password_strength_check.test.js
```

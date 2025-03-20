const checkPasswordStrength = require("./password_strength_check");

test("パスワード 'Password123!' の強度を確認", () => {
  expect(checkPasswordStrength("Password123!")).toBe(true);
});

test("パスワード 'password123' の強度を確認", () => {
  expect(checkPasswordStrength("password123")).toBe(false);
});

test("パスワード '12345678' の強度を確認", () => {
  expect(checkPasswordStrength("12345678")).toBe(false);
});

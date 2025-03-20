const countDuplicates = require("./duplicate_char_count");

test("文字列 'apple' の各文字のカウント", () => {
  expect(countDuplicates("apple")).toEqual({ a: 1, p: 2, l: 1, e: 1 });
});

test("文字列 'banana' の各文字のカウント", () => {
  expect(countDuplicates("banana")).toEqual({ b: 1, a: 3, n: 2 });
});

test("文字列 'abcd' の各文字のカウント", () => {
  expect(countDuplicates("abcd")).toEqual({ a: 1, b: 1, c: 1, d: 1 });
});

const longestSubstring = require("./longest_substring");

test("文字列 'abcabcbb' の最長部分列", () => {
  expect(longestSubstring("abcabcbb")).toBe("abc");
});

test("文字列 'bbbbb' の最長部分列", () => {
  expect(longestSubstring("bbbbb")).toBe("b");
});

test("文字列 'pwwkew' の最長部分列", () => {
  expect(longestSubstring("pwwkew")).toBe("wke");
});

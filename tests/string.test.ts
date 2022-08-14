import { findSubstring } from "../ts/string";

test("Must return Array = [0,9]", () => {
  const s = "barfoothefoobarman",
    words = ["foo", "bar"];

  expect(findSubstring(s, words)).toStrictEqual([0, 9]);
});

test("Must return Array = []", () => {
  const s = "wordgoodgoodgoodbestword",
    words = ["word", "good", "best", "word"];

  expect(findSubstring(s, words)).toStrictEqual([]);
});

test("Must return Array = [6,9,12]", () => {
  const s = "barfoofoobarthefoobarman",
    words = ["bar", "foo", "the"];

  expect(findSubstring(s, words)).toStrictEqual([6, 9, 12]);
});

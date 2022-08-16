import { findSubstring, firstUniqChar, romanToInt } from "../ts/string";

describe("findSubstring tests", () => {
  test("Must return Array = [0,9]", () => {
    const s: string = "barfoothefoobarman",
      words: string[] = ["foo", "bar"];

    expect(findSubstring(s, words)).toStrictEqual([0, 9]);
  });

  test("Must return Array = []", () => {
    const s: string = "wordgoodgoodgoodbestword",
      words: string[] = ["word", "good", "best", "word"];

    expect(findSubstring(s, words)).toStrictEqual([]);
  });

  test("Must return Array = [6,9,12]", () => {
    const s: string = "barfoofoobarthefoobarman",
      words: string[] = ["bar", "foo", "the"];

    expect(findSubstring(s, words)).toStrictEqual([6, 9, 12]);
  });
});

describe("romanToInt tests", () => {
  test('Input: s = "" must return null', () => {
    const s: string = "";
    expect(romanToInt(s)).toBe(null);
  });
  test('Input: s = "III" must return 3', () => {
    const s: string = "III";
    expect(romanToInt(s)).toBe(3);
  });
  test('Input: s = "LVIII" must return 58', () => {
    const s: string = "LVIII";
    expect(romanToInt(s)).toBe(58);
  });
  test('Input: s = "MCMXCIV" must return 1994', () => {
    const s: string = "MCMXCIV";
    expect(romanToInt(s)).toBe(1994);
  });
});

describe("firstUniqChar tests", () => {
  test('s = "leetcode" must return 0', () => {
    const s: string = "leetcode";
    expect(firstUniqChar(s)).toBe(0);
  });
  test('s = "loveleetcode" must return 2', () => {
    const s: string = "loveleetcode";
    expect(firstUniqChar(s)).toBe(2);
  });
  test('s = "aabb" must return -1', () => {
    const s: string = "aabb";
    expect(firstUniqChar(s)).toBe(-1);
  });
});

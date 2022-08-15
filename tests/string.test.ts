import { findSubstring, romanToInt } from "../ts/string";

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
    const s = "";
    expect(romanToInt(s)).toBe(null);
  });
  test('Input: s = "III" must return 3', () => {
    const s = "III";
    expect(romanToInt(s)).toBe(3);
  });
  test('Input: s = "LVIII" must return 58', () => {
    const s = "LVIII";
    expect(romanToInt(s)).toBe(58);
  });
  test('Input: s = "MCMXCIV" must return 1994', () => {
    const s = "MCMXCIV";
    expect(romanToInt(s)).toBe(1994);
  });
});

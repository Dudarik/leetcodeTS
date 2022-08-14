import { findSubstring } from "../ts/string";

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

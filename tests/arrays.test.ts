import { minSetSize } from "../ts/arrays";

describe("minSetSize tests", () => {
  test("minSetSize must return 2", () => {
    const arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7];
    expect(minSetSize(arr)).toBe(2);
  });

  test("minSetSize must return 1", () => {
    const arr = [7, 7, 7, 7, 7, 7];
    expect(minSetSize(arr)).toBe(1);
  });
});

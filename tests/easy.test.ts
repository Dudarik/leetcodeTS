import { isPowerOfFour } from "../ts/easy";

describe("isPowerOfFour tests", () => {
  test("isPowerOfFour n = 0, must return false", () => {
    const n = 0;
    expect(isPowerOfFour(n)).toBe(false);
  });

  test("isPowerOfFour n = 16, must return true", () => {
    const n = 16;
    expect(isPowerOfFour(n)).toBe(true);
  });

  test("isPowerOfFour n = 5, must return false", () => {
    const n = 5;
    expect(isPowerOfFour(n)).toBe(false);
  });

  test("isPowerOfFour n = 16, must return false", () => {
    const n = 1;
    expect(isPowerOfFour(n)).toBe(true);
  });
});

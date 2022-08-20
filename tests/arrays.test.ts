import { isPossible, minRefuelStops, minSetSize } from "../ts/arrays";

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

describe("isPossible tests", () => {
  test("isPossible must return true", () => {
    const nums = [1, 2, 3, 3, 4, 5];
    expect(isPossible(nums)).toBe(true);
  });

  test("isPossible must return true", () => {
    const nums = [1, 2, 3, 3, 4, 4, 5, 5];
    expect(isPossible(nums)).toBe(true);
  });

  test("isPossible must return false", () => {
    const nums = [1, 2, 3, 4, 4, 5];
    expect(isPossible(nums)).toBe(false);
  });
});

describe("minRefuelStops tests", () => {
  test("minRefuelStops must return 0", () => {
    const target = 1,
      startFuel = 1,
      stations: Array<Array<number>> = [];
    expect(minRefuelStops(target, startFuel, stations)).toBe(0);
  });

  test("minRefuelStops must return -1", () => {
    const target = 100,
      startFuel = 1,
      stations = [[10, 100]];
    expect(minRefuelStops(target, startFuel, stations)).toBe(-1);
  });

  test("minRefuelStops must return 2", () => {
    const target = 100,
      startFuel = 10,
      stations = [
        [10, 60],
        [20, 30],
        [30, 30],
        [60, 40],
      ];
    expect(minRefuelStops(target, startFuel, stations)).toBe(2);
  });
});

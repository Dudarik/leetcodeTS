import {
  diagonalSort,
  isPossible,
  minRefuelStops,
  minSetSize,
  rotate,
} from "../ts/arrays";

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

describe("diagonalSort tests", () => {
  test("test 1", () => {
    const mat = [
      [3, 3, 1, 1],
      [2, 2, 1, 2],
      [1, 1, 1, 2],
    ];
    expect(diagonalSort(mat)).toStrictEqual([
      [1, 1, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 3, 3],
    ]);
  });

  test("test 2", () => {
    const mat = [
      [11, 25, 66, 1, 69, 7],
      [23, 55, 17, 45, 15, 52],
      [75, 31, 36, 44, 58, 8],
      [22, 27, 33, 25, 68, 4],
      [84, 28, 14, 11, 5, 50],
    ];
    expect(diagonalSort(mat)).toStrictEqual([
      [5, 17, 4, 1, 52, 7],
      [11, 11, 25, 45, 8, 69],
      [14, 23, 25, 44, 58, 15],
      [22, 27, 31, 36, 50, 66],
      [84, 28, 75, 33, 55, 68],
    ]);
  });
});

describe("rotate matrix", () => {
  test("rotate -> Output: [[7,4,1],[8,5,2],[9,6,3]]", () => {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotate(matrix);
    expect(matrix).toStrictEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });
  test("rotate -> Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]", () => {
    let matrix = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    rotate(matrix);
    expect(matrix).toStrictEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });
});

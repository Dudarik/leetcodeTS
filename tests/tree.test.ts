import { sortedArrayToBST, TreeNode } from "../ts/tree";

let nums: number[] = [-10, -3, 0, 5, 9];
let outputTree = new TreeNode(
  0,
  new TreeNode(-3, new TreeNode(-10)),
  new TreeNode(9, new TreeNode(5))
);

test("should equal outputTree", () => {
  expect(sortedArrayToBST(nums)).toStrictEqual(outputTree);
});

nums = [1, 3];
outputTree = new TreeNode(3, new TreeNode(1));

test("should equal outputTree", () => {
  expect(sortedArrayToBST(nums)).toStrictEqual(outputTree);
});

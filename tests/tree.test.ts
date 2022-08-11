import { sortedArrayToBST, isValidBST, TreeNode } from "../ts/tree";

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

test("isValidBST Must return true", () => {
  const root = new TreeNode(2, new TreeNode(1), new TreeNode(3)); //[2,1,3]
  //  Output: true

  expect(isValidBST(root)).toBe(true);
});

test("isValidBST Must return false", () => {
  const root = new TreeNode(
    5,
    new TreeNode(1),
    new TreeNode(4, new TreeNode(3), new TreeNode(6))
  ); //[5,1,4,null,null,3,6]
  // Output: false
  expect(isValidBST(root)).toBe(false);
});

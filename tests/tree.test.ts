import {
  sortedArrayToBST,
  lowestCommonAncestor,
  isValidBST,
  TreeNode,
} from "../ts/tree";

test("sortedArrayToBST must equal outputTree", () => {
  const nums: number[] = [-10, -3, 0, 5, 9];
  const outputTree = new TreeNode(
    0,
    new TreeNode(-3, new TreeNode(-10)),
    new TreeNode(9, new TreeNode(5))
  );

  expect(sortedArrayToBST(nums)).toStrictEqual(outputTree);
});

test("sortedArrayToBST must equal outputTree", () => {
  const nums = [1, 3];
  const outputTree = new TreeNode(3, new TreeNode(1));

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

test("lowestCommonAncestor must return TreeNode with value = 6", () => {
  const root = new TreeNode(
    6,
    new TreeNode(
      2,
      new TreeNode(0),
      new TreeNode(4, new TreeNode(3), new TreeNode(5))
    ),
    new TreeNode(8, new TreeNode(7), new TreeNode(9))
  );

  const p = root.left,
    q = root.right;
  expect(lowestCommonAncestor(root, p, q)).toStrictEqual(root);
});

test("lowestCommonAncestor must return TreeNode with value = 2", () => {
  const root = new TreeNode(
    6,
    new TreeNode(
      2,
      new TreeNode(0),
      new TreeNode(4, new TreeNode(3), new TreeNode(5))
    ),
    new TreeNode(8, new TreeNode(7), new TreeNode(9))
  );

  const p = root.left,
    q = root.left!.right;
  expect(lowestCommonAncestor(root, p, q)).toStrictEqual(p);
});

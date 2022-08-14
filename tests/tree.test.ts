import {
  sortedArrayToBST,
  lowestCommonAncestor,
  isValidBST,
  TreeNode,
} from "../ts/tree";

/**sortedArrayToBST */

describe("sortedArrayToBST tests", () => {
  test("sortedArrayToBST must equal outputTree", () => {
    const nums: number[] = [-10, -3, 0, 5, 9];
    const outputTree: TreeNode = new TreeNode(
      0,
      new TreeNode(-3, new TreeNode(-10)),
      new TreeNode(9, new TreeNode(5))
    );

    expect(sortedArrayToBST(nums)).toStrictEqual(outputTree);
  });

  test("sortedArrayToBST must equal outputTree", () => {
    const nums: number[] = [1, 3];
    const outputTree: TreeNode = new TreeNode(3, new TreeNode(1));

    expect(sortedArrayToBST(nums)).toStrictEqual(outputTree);
  });
});

/**isValidBST */

describe("isValidBST tests", () => {
  test("isValidBST Must return true", () => {
    const root: TreeNode = new TreeNode(2, new TreeNode(1), new TreeNode(3)); //[2,1,3]
    //  Output: true

    expect(isValidBST(root)).toBe(true);
  });

  test("isValidBST Must return false", () => {
    const root: TreeNode = new TreeNode(
      5,
      new TreeNode(1),
      new TreeNode(4, new TreeNode(3), new TreeNode(6))
    ); //[5,1,4,null,null,3,6]
    // Output: false
    expect(isValidBST(root)).toBe(false);
  });
});

/**lowestCommonAncestor */

describe("lowestCommonAncestor tests", () => {
  test("lowestCommonAncestor must return TreeNode with value = 6", () => {
    const root: TreeNode = new TreeNode(
      6,
      new TreeNode(
        2,
        new TreeNode(0),
        new TreeNode(4, new TreeNode(3), new TreeNode(5))
      ),
      new TreeNode(8, new TreeNode(7), new TreeNode(9))
    );

    const p: TreeNode | null = root.left,
      q: TreeNode | null = root.right;
    expect(lowestCommonAncestor(root, p, q)).toStrictEqual(root);
  });

  test("lowestCommonAncestor must return TreeNode with value = 2", () => {
    const root: TreeNode = new TreeNode(
      6,
      new TreeNode(
        2,
        new TreeNode(0),
        new TreeNode(4, new TreeNode(3), new TreeNode(5))
      ),
      new TreeNode(8, new TreeNode(7), new TreeNode(9))
    );

    const p: TreeNode | null = root.left,
      q: TreeNode | null = root.left!.right;
    expect(lowestCommonAncestor(root, p, q)).toStrictEqual(p);
  });
});

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**108. Convert Sorted Array to Binary Search Tree */
/**https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/ */

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 1) return new TreeNode(nums[0]);
  if (nums.length === 0) return null;

  const mid: number = Math.floor(nums.length / 2);
  const tHead: TreeNode = new TreeNode(nums[mid]);

  const left: number[] = nums.slice(0, mid);
  tHead.left = sortedArrayToBST(left);

  const right: number[] = nums.slice(mid + 1, nums.length);
  tHead.right = sortedArrayToBST(right);

  return tHead;
}

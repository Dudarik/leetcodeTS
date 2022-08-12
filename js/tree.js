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
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
/**108. Convert Sorted Array to Binary Search Tree */
/**https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/ */
export function sortedArrayToBST(nums) {
    if (nums.length === 1)
        return new TreeNode(nums[0]);
    if (nums.length === 0)
        return null;
    const mid = Math.floor(nums.length / 2);
    const tHead = new TreeNode(nums[mid]);
    const left = nums.slice(0, mid);
    tHead.left = sortedArrayToBST(left);
    const right = nums.slice(mid + 1, nums.length);
    tHead.right = sortedArrayToBST(right);
    return tHead;
}
/**98. Validate Binary Search Tree */
/**https://leetcode.com/problems/validate-binary-search-tree/ */
export function isValidBST(root) {
    const helper = (root, low, high) => {
        if (!root)
            return true;
        if (root.val < high && root.val > low) {
            return (helper(root.left, low, root.val) && helper(root.right, root.val, high));
        }
        else {
            return false;
        }
    };
    const lowVal = -2147483648;
    const highVal = 2147483647;
    return helper(root, lowVal, highVal);
}
/**235. Lowest Common Ancestor of a Binary Search Tree */
/**https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/ */
export function lowestCommonAncestor(root, p, q) {
    if (!root || !p || !q)
        return root;
    if (root.left && root.right) {
        if (root.left === p && root.right === q)
            return root;
    }
    if (root === p || root === q)
        return root;
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
}

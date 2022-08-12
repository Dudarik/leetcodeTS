import {
  sortedArrayToBST,
  isValidBST,
  TreeNode,
  lowestCommonAncestor,
} from "./tree.js";

/**
 * sortedArrayToBST
 */
// let nums = [-10, -3, 0, 5, 9];
// // Output: [0,-3,9,-10,null,5]

// nums = [1, 3];
// // Output: [3,1]
// console.log(sortedArrayToBST(nums));

/**
 * isValidBST
 */

// let root = new TreeNode(2, new TreeNode(1), new TreeNode(3)); //[2,1,3]
//  Output: true

// root = new TreeNode(
//   5,
//   new TreeNode(1),
//   new TreeNode(4, new TreeNode(3), new TreeNode(6))
// ); //[5,1,4,null,null,3,6]
// Output: false

// console.log(isValidBST(root));

/**
 * lowestCommonAncestor
 */

// let root = new TreeNode(
//   6,
//   new TreeNode(
//     2,
//     new TreeNode(0),
//     new TreeNode(4, new TreeNode(3), new TreeNode(5))
//   ),
//   new TreeNode(8, new TreeNode(7), new TreeNode(9))
// );

// // console.log(root);
// //[6,2,8,0,4,7,9,null,null,3,5],
// let p = 2,
//   q = 8;
// //  Output: 6
// console.log(lowestCommonAncestor(root));

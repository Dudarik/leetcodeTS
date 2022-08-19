import {
  sortedArrayToBST,
  isValidBST,
  TreeNode,
  lowestCommonAncestor,
} from "./tree.js";

import { firstUniqChar } from "./string.js";

import { minSetSize, isPossible } from "./arrays.js";

let nums = [1, 2, 3, 3, 4, 4, 5, 5];
nums = [1, 2, 3, 3, 4, 5];
nums = [1, 2, 3, 4, 4, 5];
console.log(isPossible(nums));

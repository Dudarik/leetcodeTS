import {
  sortedArrayToBST,
  isValidBST,
  TreeNode,
  lowestCommonAncestor,
} from "./tree.js";

import { firstUniqChar } from "./string.js";

import { minSetSize, isPossible } from "./arrays.js";

import { isPalindrome, ListNode } from "./linkedlist.js";

let list = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(1))));

console.log(isPalindrome(list));

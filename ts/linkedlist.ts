export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**234. Palindrome Linked List */
/**https://leetcode.com/problems/palindrome-linked-list/ */

export function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false;

  const reverse = (head: ListNode | null) => {
    let prev: ListNode | null = null;

    while (head) {
      // debugger;
      const next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }

    return prev;
  };

  let fast = head,
    slow = head;

  while (fast) {
    slow = slow.next!;
    fast = fast?.next?.next!;
  }

  slow = reverse(slow)!;

  while (head !== null && slow !== null) {
    if (head.val !== slow.val) return false;
    head = head.next;
    slow = slow.next!;
  }

  return true;
}

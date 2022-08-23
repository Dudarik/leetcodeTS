export class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/**234. Palindrome Linked List */
/**https://leetcode.com/problems/palindrome-linked-list/ */
export function isPalindrome(head) {
    var _a;
    if (!head)
        return false;
    const reverse = (head) => {
        let prev = null;
        while (head) {
            // debugger;
            const next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    };
    let fast = head, slow = head;
    while (fast) {
        slow = slow.next;
        fast = (_a = fast === null || fast === void 0 ? void 0 : fast.next) === null || _a === void 0 ? void 0 : _a.next;
    }
    slow = reverse(slow);
    while (head !== null && slow !== null) {
        if (head.val !== slow.val)
            return false;
        head = head.next;
        slow = slow.next;
    }
    return true;
}

import { isPalindrome, ListNode } from "../ts/linkedlist";

describe("isPalindrome tests", () => {
  test("list = null Must return false", () => {
    const list = null;
    expect(isPalindrome(list)).toBe(false);
  });

  test("list = new ListNode() Must return true", () => {
    const list = new ListNode();
    expect(isPalindrome(list)).toBe(true);
  });

  test("list = [1,2,2,1] Must return true", () => {
    const list = new ListNode(
      1,
      new ListNode(2, new ListNode(2, new ListNode(1)))
    );
    expect(isPalindrome(list)).toBe(true);
  });

  test("list = [1,1,2,1] Must return false", () => {
    const list = new ListNode(
      1,
      new ListNode(1, new ListNode(2, new ListNode(1)))
    );
    expect(isPalindrome(list)).toBe(false);
  });

  test("list = [1,2] Must return false", () => {
    const list = new ListNode(1, new ListNode(2));
    expect(isPalindrome(list)).toBe(false);
  });
});

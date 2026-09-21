/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let current = head;
        let length = 0;
        while (current) {
            length++;
            current = current.next;
        }
        if (length === n) {
            return head.next;
        }
        current = head;
        let indexFromStart = length - n;
        for (let i = 1; i < indexFromStart; i++) {
            current = current.next;
        }

        current.next = current.next.next;
        return head;
    }
}

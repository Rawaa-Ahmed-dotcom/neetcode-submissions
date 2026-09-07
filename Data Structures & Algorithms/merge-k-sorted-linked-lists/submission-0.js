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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
     
        
        if (lists.length === 0) {
            return null;
        }
        
        let finalList = [];
        while (lists.length > 1) {
            let dummyList = [];
            let list1Current = lists[lists.length - 1];
            let list2Current = lists[lists.length - 2];
            lists.pop();
            lists.pop();
            
            let dummyListHead = null;
            let dummyListTail = null;
            let dummyListLength = 0;
            while ( list1Current && list2Current) {
                if (list1Current.val >= list2Current.val) {
                    const newNode = new ListNode(list2Current.val , null);
                    if(dummyListLength === 0) {
                        dummyListHead = newNode;
                        dummyListTail = newNode;
                    }else {
                        dummyListTail.next = newNode;
                        dummyListTail = newNode;
                    }
                    dummyListLength++;
                    list2Current = list2Current.next;
                } else {
                     const newNode = new ListNode(list1Current.val , null);
                    if(dummyListLength === 0) {
                        dummyListHead = newNode;
                        dummyListTail = newNode;
                    }else {
                        dummyListTail.next = newNode;
                        dummyListTail = newNode;
                    }
                    dummyListLength++;
                    list1Current = list1Current.next;
                }
            }
            while (list1Current ) {
                const newNode = new ListNode(list1Current.val , null);
                    if(dummyListLength === 0) {
                        dummyListHead = newNode;
                        dummyListTail = newNode;
                    }else {
                        dummyListTail.next = newNode;
                        dummyListTail = newNode;
                    }
                    dummyListLength++;
                    list1Current = list1Current.next;
            }
            while (list2Current) {
                const newNode = new ListNode(list2Current.val , null);
                    if(dummyListLength === 0) {
                        dummyListHead = newNode;
                        dummyListTail = newNode;
                    }else {
                        dummyListTail.next = newNode;
                        dummyListTail = newNode;
                    }
                    dummyListLength++;
                    list2Current = list2Current.next;
            }

            finalList.push(dummyListHead);
        }

        if (lists.length === 1) {
            finalList.push(lists[0]);
        }
        if (finalList.length > 1) {
            return this.mergeKLists(finalList);
        }
        if (finalList.length === 1) {
            return finalList[0];
        }
    }
}

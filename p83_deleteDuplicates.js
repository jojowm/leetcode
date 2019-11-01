/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
    let saveHead = head
    while(head && head.next) {
        while(head.next && head.next.val === head.val) {
            head.next = head.next.next
        }
        head = head.next
    }
    return saveHead
};

console.log(deleteDuplicates(head))
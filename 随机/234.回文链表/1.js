/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let fast=slow=head
  let pre=new ListNode(null)
  while(fast&&fast.next){
      pre=slow
      slow=slow.next
      fast=fast.next.next
  }
  pre.next=null
  //前半部分
  let cur1=head
  let cur2=reverse(slow)
  while(cur1){
      if(cur1.val!=cur2.val) return false
      cur1=cur1.next
      cur2=cur2.next
  }
  return true


//翻转链表
function reverse(head){
let tmp=new ListNode(null)
let pre=new ListNode(null)
let cur=head
while(cur){
    tmp=cur.next
    cur.next=pre
    pre=cur
    cur=tmp
}
return pre
}
  
};
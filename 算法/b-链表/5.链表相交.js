//找到两个链表相交的地方
//两个链表，一长long一短slow
//算出slow的长度，将long移动到slow长度的位置开始比较

function getIntersectionNode(headA, headB) {
  let curA = headA,
    curB = headB;
  let lenA = (lenB = 0);
  while (curA != null) {
    lenA++;
    curA = curA.next;
  }
  while (curB != null) {
    lenB++;
    curB = curB.next;
  }
  //反正大的在前
  if (lenA < lenB) {
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }
  let gap = lenA - lenB;
  while (gap-- && curA) {
    curA = curA.next;
  }
  while (curA && curB) {
    if (curA == curB) {
      return curA;
    }
    curA = curA.next;
    curB = curB.next;
  }
  return null;
}

//前序迭代 中左右
//迭代的话也只要考虑单层逻辑，1，2，3，1是root，2是left，3是right
// 1进去栈，弹出;
// 然后进right，然后进left；弹出left和right

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [],
    stack = [],
    cur = root;
  if (!root) return res;
  stack.push(root);
  while (stack.length != 0) {
    cur = stack.pop();
    res.push(cur.val);
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }
  return res;
};

//中序遍历 左中右

//把left遍历完左进,中进弹出左，中
//右进去，弹出右
//1，2，3，1是root，2是left，3是right
//1进去了，发现有左孩子，2进去了，2没有左孩子
//  if（cur)结束，弹出2，cur=cur.right，2没有右孩子cur=null
//   弹出1，cur=1.右孩子；cur=3，没有左孩子
//   弹出3，stack.length==0,结束

//左孩子是叶子节点弹出，根据栈的性质，会弹出父节点，然后cur就赋值父节点的right
var inorderTraversal = function (root) {
  const stack = (res = []);
  let cur = root;
  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      // 左
      cur = cur.left;
    } else {
      // --> 弹出 中
      cur = stack.pop();
      res.push(cur.val);
      // 右
      cur = cur.right;
    }
  }
  return res;
};

//后序遍历 2，3，1
//1，2，3
//1进栈，弹出，进2,3，弹出3，2[1,3,2]然后翻转
//入栈 zhongzuo ypu
//出zhong you 左，翻转
function posterTraversal(root) {
  let reslut = [];
  let stack = [],
    cur = root;
  if (!root) return reslut;
  stack.push(root);
  while (stack.length) {
    cur = stack.pop();
    reslut.push(cur.val);
    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
  }
  return reslut.reverse();
}

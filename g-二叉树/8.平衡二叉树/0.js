//还是用递归三部曲 + 后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1
// 1. 确定递归函数参数以及返回值
const getDepth = function (node) {
  // 2. 确定递归函数终止条件
  if (node === null) return 0;
  // 3. 确定单层递归逻辑
  let leftDepth = getDepth(node.left); //左子树高度
  // 当判定左子树不为平衡二叉树时,即可直接返回-1
  if (leftDepth === -1) return -1;
  let rightDepth = getDepth(node.right); //右子树高度
  // 当判定右子树不为平衡二叉树时,即可直接返回-1
  if (rightDepth === -1) return -1;
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return -1;
  } else {
    return 1 + Math.max(leftDepth, rightDepth);
  }
};
return !(getDepth(root) === -1);

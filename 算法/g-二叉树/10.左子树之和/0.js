function sumOfLeftLeaves(root) {
  if (root == null) return 0;
  if (root.left == null && root.right == null) return 0;

  //单层逻辑
  let leftVal = sumOfLeftLeaves(root.left);
  if (root.left && root.left.left == null && root.left.right == null) {
    leftVal = root.left.val;
  }
  let rightVal = sumOfLeftLeaves(root.right);
  return leftVal + rightVal;
}

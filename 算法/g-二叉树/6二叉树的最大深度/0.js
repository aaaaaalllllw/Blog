var maxDepth = function (root) {
  if (!root) return 0;
  let leftdepth = maxDepth(root.left); //左
  let rightdepth = maxDepth(root.right); //右
  return Math.max(leftdepth, rightdepth) + 1; //中
};

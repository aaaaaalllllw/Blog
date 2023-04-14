//二叉树所有的路径，257
//前序的递归的遍历，中左右，但是需要回溯，不能重复添加当前元素

//参数和返回值：参数root当前遍历的节点，path保存路径，result是全局;返回值void
//终止条件,cur.left==null&&cur.right==null
//单层遍历逻辑,需要进中，递归左，pop(),递归右，pop()
// let result = [],
//   path = [];
// function getPath(root, path) {
//   if (root.left == null && root.right == null) {
//     result.push([...path]);
//   }
//   path.push(root);
//   if (root.left) {
//     getPath(root.left, path);
//     path.pop();
//   }
//   if (root.right) {
//     getPath(root.right, path);
//     path.pop();
//   }
// }
// getPath(root, path);
// return result;

//这就是要一条路走到底
function binaryTreePaths(root) {
  let result = [];
  function traversal(root, path) {
    if (root.left == null && root.right == null) {
      path += root.val;
      result.push(path);
    }
    path += `${root.val}->`;
    root.left && traversal(root.left, path);
    root.right && traversal(root.right, path);
  }
  traversal(root, "");
  return result;
}

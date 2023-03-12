//翻转二叉树，也要注意递归顺序

//前序遍历递归
/**
 * 1.确定参数，返回值：root
 * 2.确定终止条件:当前节点为空，就返回
 * 3.确定终止条件:因为是先前序遍历
 *  先交换左右孩子，然后反转左子树，反转右子树
 */

function invertTree(root) {
  if (!root) return root;
  //交换左右节点
  const rightNode = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(rightNode);
  return root;
}

//迭代的前序遍历翻转
//进栈，右左中
function invertTree(root) {
  const invertNode = function (root, left, right) {
    let tmp = left;
    left = right;
    right = tmp;
    root.right = left;
    root.left = right;
  };
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (node) {
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
      stack.push(node);
      stack.push(null);
    } else {
      node = stack.pop();
      invertNode(node, node.left, node.right);
    }
  }
  return root;
}

//层序遍历,第一层while是控制层级，第二层while是控制每一层加入child的
function invertTree(root) {
  if (!root) return null;
  const invertNode = function (root, left, right) {
    let tmp = left;
    left = right;
    right = tmp;
    root.right = left;
    root.left = right;
  };
  let queue = [root];
  let size = queue.length;
  while (size) {
    size = queue.length;
    while (size--) {
      let node = queue.shift();
      invertNode(node, node.left, node.right);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
}

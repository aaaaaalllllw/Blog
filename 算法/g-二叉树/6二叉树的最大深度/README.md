## 二叉树的最大深度 力扣 104

给定一个二叉，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
![这是图片](./1.png)

## 思路

递归算法

1.  确定参数和返回值，参数是 root 节点，返回值是 path 路径
2.  递归终止条件,root=null，return 0
3.  单层遍历逻辑，比较左右子树的高度，返回最大+1

```c++
int leftdepth = getdepth(node->left);       // 左
int rightdepth = getdepth(node->right);     // 右
int depth = 1 + max(leftdepth, rightdepth); // 中
return depth;
```

## js

```js
var maxDepth = function (root) {
  if (!root) return 0;
  let leftdepth = maxDepth(root.left); //左
  let rightdepth = maxDepth(root.right); //右
  return Math.max(leftdepth, rightdepth) + 1; //中
};
```

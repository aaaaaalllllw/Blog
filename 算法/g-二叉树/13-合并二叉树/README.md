## 617.合并二叉树

![这是图片](./1.png)

## 思路还是递归，只不过是递归两棵树

1. 确定参数和返回值:参数两个树根节点,返回值树根节点
2. 终止条件:一方树节点为空

```js
if (t1 == null) return t2;
if (t2 == null) return t1;
```

3. 确定单层递归的逻辑:就是两个节点的值加在一个节点上

```js
t1.val += t2.val;
```

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 == null) return root2;
  if (root2 == null) return root1;

  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};
```

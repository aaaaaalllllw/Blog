## 验证二叉搜索树

给定一个二叉树，判断是否是一个有效的二叉树

- 节点的左子树只包含小于当前节点的树
- 节点的右子树只包含大于当前节点的树
- 所有左子树和右子树自身必须是二叉搜索树

## 思路

递归法中序遍历将一个二叉搜索树转成一个数组

```js
function traversal(root) {
  if (root == null) return;
  traversal(root.left);
  arr.push(root.val);
  traversal(root.right);
}
```

还要比较数组是否有重复数据

```js
for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= arr[i - 1]) return false;
}
```

## 陷阱

不能单纯比价左节点小于中间节点，右节点大于中间节点完事

```js
if (root.val > root.left.val && root.val < root.right.val) {
  return true;
} else {
  return false;
}
```

样例中的最小值可能是语言中最小值

## 递归三部曲

- 确定递归函数返回值以及参数

```js
let maxVal=-Infinty
function isValidBST(root)
```

- 确定终止条件

如果是空节点也是二叉搜索树

```js
if (root == null) return true;
```

- 确定单层递归的逻辑

  中序遍历,一直更新 maxVal,一旦发现 maxVal>=root.val ,就返回 false,注意元素相同也要返回 false

```js
let left = isValidBST(root.val); //左
//中序遍历
if (maxVal < root.val) maxVal = root.val; //中
else return false;

let right = isValidBST(root.right); //右
return left && right;
```

记录每个节点上一个节点，是中序遍历上一个节点，中序遍历是一个有序数组，pre 永远小于等于 root,不能等于

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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let pre = null;
  function inOrder(root) {
    if (root == null) return true;
    //左
    let left = inOrder(root.left);
    //中
    if (pre != null && pre.val >= root.val) return false;
    pre = root;
    let right = inOrder(root.right);
    return right && left;
  }
  return inOrder(root);
};
```

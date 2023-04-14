## 从中序与后序遍历构造序列二叉树

给出

- 中序遍历 inorder=[9,3,15,20,7]
- 后序遍历 postorder=[9,15,7,20,3]

  ![这是图片](./1.png)

## 思路

### 后序中序遍历构建二叉树

后序数组的最后一个元素为切割点,先切中序数组，
根据中序数组，反过来再切后序数组，一层一层，每次后序数组最后一个元素就是节点元素

![这是图片](./2.png)

步骤

1. 如果数组大小为 0，说明是空节点
2. 如果不为空,那么取后序数组最后一个元素为节点元素
3. 找到后序数组最后一个元素在中序数组的位置，作为切割点
4. 切割中序数组,切成中序左数组和中序右数组
5. 切割后序数组，切成后序左数组和后序右数组,也是 0-mid 是后序左子树，剩下是右子树
6. 递归处理左区间和右区间

左右区间
[0,mid),[mid+1,length-1]

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!postorder.length) return null;
  let rootval = postorder.pop();
  let root = new TreeNode(rootval);
  let index = inorder.indexOf(rootval);
  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
  root.right = buildTree(inorder.slice(index + 1), postorder.slice(index));
  return root;
};
```

### 前序中序构建二叉树

preorder=[3,9,20,15,7]
inorder=[9,3,15,20,7]
[3,9,20,15,7]

1. 如果数组大小为 0,说明是空节点
2. 如果不为空，取前序数组第一个元素为节点元素
3. 找到前序数组第一个元素在中序数组的位置，以此为分割线 index
4. 中序数组的区间[0,index-1],[index+1,length-1]
5. 前序数组的区间[0,index]因为 shift()出去一个，[index+1,length-1]

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!inorder.length) return null;
  let rootVal = preorder.shift();
  let root = new TreeNode(rootVal);
  let index = inorder.indexOf(rootVal);
  root.left = buildTree(preorder.slice(0, index), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index), inorder.slice(index + 1));
  return root;
};
```

##

## 思路:搜索树->有序数组->平衡树

> 构造二叉树本质就是寻找分割点，分割点，然后递归左区间和右区间

1. 中序遍历形成有序数组

2. 递归构造树

### 递归三部曲

- 确定递归函数返回值及其参数：返回值当前生成的节点，参数左右区间[left,right]
- 确定终止条件:但区间 left>right
- 确定单层遍历:生成节点，递归左节点，递归右节点

```js
var balanceBST = function (root) {
	let arr = [];
	function inorder(root) {
		if (root == null) {
			return;
		}
		//中序遍历，左中右
		inorder(root.left);
		arr.push(root.val);
		inorder(root.right);
	}

	function create(left, right) {
		if (left > right) {
			return;
		}
		let mid = left + ((right - left) >> 1);
		let root = new TreeNode(arr[mid]); // 中心位置作为当前节点的值
		root.val = arr[mid];
		root.left = create(left, mid - 1);
		root.right = create(mid + 1, right);
		return root;
	}
	inorder(root); //构建有序数组
	let node = create(0, arr.length - 1);
	return node;
};
```

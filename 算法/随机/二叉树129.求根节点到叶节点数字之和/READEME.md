## 129.求根节点到叶节点数字之和

给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
每条从根节点到叶节点的路径都代表一个数字：
![这是图片](./1.jpg)

> 输入：root=[1,2,3]
>
> 输出：25
>
> 解释:从根到叶子节点路径 1->2 代表数字 12
> 从根到叶子节点路径 1->3 代表数字 13
> 因此，数字总和 = 12 + 13 = 25

## 思路回溯三部曲

- 确定递归函数的返回值和参数：返回值 void，参数 root 当前遍历节点
- 确定终止条件:当 root 是叶子节点时候
- 确定单层逻辑，dfs

```js
var sumNumbers = function (root) {
	let res = 0;
	let path = "";
	if (root == null) return 0;
	path += root.val;
	transfer(root);

	function transfer(root) {
		if (root.left == null && root.right == null) {
			//    console.log(path)
			res += Number(path);
			// console.log(res)
			return;
		}
		if (root.left) {
			path += root.left.val;
			transfer(root.left);
			path = path.slice(0, -1);
		}
		if (root.right) {
			path += root.right.val;
			transfer(root.right);
			path = path.slice(0, -1);
		}
		return;
	}
	return res;
};
```

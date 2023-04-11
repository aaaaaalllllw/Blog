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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	//递归后序遍历
	//1.参数和返回值:参数两个p,q各自节点；返回值:true false
	//2. 终止条件:一方为空或者不相等return false，两方都为null return true
	//3. true

	if (q == null && p == null) return true;
	if (q == null && p) return false;
	if (q && p == null) return false;
	if (p.val != q.val) return false;

	let left = isSameTree(p.left, q.left);
	let right = isSameTree(p.right, q.right);

	return left && right;
};
```

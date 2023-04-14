## 层序遍历借用队列，每一层收集

```js
var connect = function (root) {
	if (!root) return root;
	//层序遍历就是父出队列，子就要全部进队列
	let queue = [];
	//  res.concat
	queue.push(root);
	while (queue.length) {
		let size = queue.length;
		for (let i = 0; i < size; i++) {
			let node = queue.shift();
			if (i < size - 1) {
				node.next = queue[0];
			}
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
	}
	return root;
};
```

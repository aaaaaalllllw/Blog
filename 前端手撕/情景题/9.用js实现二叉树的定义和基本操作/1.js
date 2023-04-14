class Node {
	constructor(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
		this.count = 1;
	}
}

class BSTree {
	constructor() {
		this.root = null;
	}
	//删除一个节点
	_removeNode(node, data) {
		if (node == null) return null;
		if (data == node.data) {
			if (node.left == null && node.right == null) {
				return null;
			}
			if (node.left == null) node = node.right;
			if (node.right == null) node = node.left;

			let tmpNode = this.getMiniNode(node);
			node.data = tmpNode.data;
			node.right = this._removeNode(node.right, data);
			return node;
		} else if (data < node.left) {
			//在左子树
			node.left = this._removeNode(node.left);
		} else {
			node.right = this._removeNode(node.right);
		}
	}
	//删除给定的数据结点
	remove(data) {
		this.root = this._removeNode(this.root, data);
	}
	//向二叉树中插入节点
	insert(data) {
		let newNode = new Node(data, null, null);
		if (!this.root) {
			this.root = newNode;
		} else {
			let cur = this.root;
			let parent = null;
			while (true) {
				if (newNode.data > cur.data) {
					parent = cur;
					cur = cur.right;
					if (!cur) {
						parent.right = newNode;
						break;
					}
				}
				if (newNode.data < cur.data) {
					parent = cur;
					cur = cur.left;
					if (!cur) {
						parent.left = newNode;
						break;
					}
				}
			}
		}
	}
	//寻找给定数据的节点
	find(data) {
		let cur = this.root;
		while (cur) {
			if (cur.data === data) {
				return cur;
			} else if (cur.data > data) {
				cur = cur.left;
			} else {
				cur = cur.right;
			}
		}
		return null;
	}
	//获得最小值的节点
	getMiniNode(node = this.root) {
		let cur = node;
		while (cur.left) {
			cur = cur.left;
		}
		return cur;
	}
	//获得最大值的节点
	getMaxNode(node = this.root) {
		let cur = node;
		while (cur.right) {
			cur = cur.right;
		}
		return cur;
	}
}

let myTree = new BSTree();

myTree.insert(20);
myTree.insert(13);
myTree.insert(7);
myTree.insert(9);
myTree.insert(15);
myTree.insert(14);
myTree.insert(42);
myTree.insert(22);
myTree.insert(21);
myTree.insert(24);
myTree.insert(57);
console.log(myTree.getMaxNode());

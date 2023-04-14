// 那我们就将访问的节点放入栈中，把要处理的节点也放入栈中但是要做标记。
// 如何标记呢，就是要处理的节点放入栈之后，紧接着放入一个空指针作为标记。 这种方法也可以叫做标记法
// 用null表明要弹出的, 叶子节点，right和left都是空，就重新入栈，再放置一个null
// 下一轮循环表示要弹出叶子节点

//前序:中左右
//压栈顺序:右左中
//一开始要root，但是进入循环就要弹出
//压入右孩子，左孩子，中;再弹弹
var pre = function (root) {
  let res = [],
    stack = [];
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
    } else {
      node.right && stack.push(node.right);
      node.left && stack.push(node.left);
      stack.push(node);
      stack.push(null);
    }
  }
  return res;
};

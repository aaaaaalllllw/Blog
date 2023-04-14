// 需要借用一个辅助数据结构即队列来实现，队列先进先出，符合一层一层遍历的逻辑，而用栈先进后出适合模拟深度优先遍历也就是递归的逻辑。
// 而这种层序遍历方式就是图论中的广度优先遍历，只不过我们应用在二叉树。
//二叉树[3,9,20,null,null,15,7]
// [[3], [9, 20], [15, 7]];

//利用队列的先进先出，出来shift，进来push;
//每次记录每层个数，上一层出来，push现在这层treeNode
//是为了下次循环好弹出

function levelOrder(root) {
  let res = [],
    queue = [];
  if (!root) return res;
  queue.push(root);
  let size = queue.length;
  while (queue.length) {
    let curVal = [];
    size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      curVal.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(curVal);
  }
  return res;
}

var largestValues = function (root) {
  //使用层序遍历
  let res = [],
    queue = [];
  queue.push(root);

  while (root !== null && queue.length) {
    //设置max初始值就是队列的第一个元素
    let max = queue[0].val;
    let length = queue.length;
    while (length--) {
      let node = queue.shift();

      max = max > node.val ? max : node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    //把每一层的最大值放到res数组
    res.push(max);
  }

  return res;
};

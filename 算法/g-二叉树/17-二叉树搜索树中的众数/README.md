记录

```js
if (pre == NULL) { // 第一个节点
    count = 1; // 频率为1
} else if (pre->val == cur->val) { // 与前一个节点数值相同
    count++;
} else { // 与前一个节点数值不同
    count = 1;
}
pre = cur; // 更新上一个节点
```

等于

```js
if (count == maxCount) { // 如果和最大值相同，放进result中
    result.push_back(cur->val);
}
```

大于清空

```js
if (count > maxCount) { // 如果计数大于最大值
    maxCount = count;   // 更新最大频率
    result.clear();     // 很关键的一步，不要忘记清空result，之前result里的元素都失效了
    result.push_back(cur->val);
}
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let maxCount = 0; //数字最大的频率
  let count = 0; //当前数的频率
  let pre = null; //前指针
  let result = []; //结果数组
  function inOrder(root) {
    if (root == null) return;
    //左
    inOrder(root.left);
    //中
    if (pre == null) {
      count++;
    } else if (pre.val == root.val) {
      count++;
    } else {
      //节点不同
      count = 1;
    }
    if (maxCount == count) {
      result.push(root.val);
    }
    if (count > maxCount) {
      maxCount = count;
      result = [];
      result.push(root.val);
    }
    pre = root;
    inOrder(root.right);
  }
  inOrder(root);
  return result;
};
```

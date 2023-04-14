## 78.子集

说明：解集不能包含重复的子集。

示例: 输入: nums = [1,2,3] 输出: [ [3], [1], [2], [1,2,3], [1,3], [2,3], [1,2], [] ]

把树枝上每个节点都 push 到 path 里面

![这是图片](./1.png)

```js
var subsets = function (nums) {
  let res = [],
    path = [];
  function backtracing(startIndex) {
    res.push([...path]);
    if (startIndex >= nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracing(i + 1);
      path.pop();
    }
  }
  backtracing(0);
  return res;
};

console.log(subsets([1, 2, 3]));
```

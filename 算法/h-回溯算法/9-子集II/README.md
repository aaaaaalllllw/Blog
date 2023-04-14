## 子集去重

给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: [1,2,2]
输出: [ [2], [1], [1,2,2], [2,2], [1,2], [] ]
应该是树层去重

**后面的排列问题去重也是这个套路,所以理解"树层去重"和"树枝去重"**

![这是图片](./1.png)

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [],
    path = [];
  nums.sort();
  function backTarcing(startIndex) {
    res.push([...path]);
    if (startIndex >= nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i - 1] == nums[i]) continue;
      path.push(nums[i]);
      backTarcing(i + 1);
      path.pop();
    }
  }
  backTarcing(0);
  return res;
};
```

## 47.全排列

树层不能重复 nums[i-1]==nums[i]&&used[i-1]==false

给定一个可包含重复数字的序列 nums
输入：nums = [1,1,2]
输出： [[1,1,2], [1,2,1], [2,1,1]]

**同一层 used[i-1]==false**
**同一树干 used[i-1]==true**表示使用过

```js
var permuteUnique = function (nums) {
  let res = [],
    path = [];
  nums.sort();
  let used = new Array(nums.length).fill(false);
  function backtracing(used) {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i - 1] == nums[i] && !used[i - 1]) {
        continue;
      }
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        backtracing(used);
        used[i] = false;
        path.pop();
      }
    }
  }
  backtracing(used);
  return res;
};

console.log(permuteUnique([1, 1, 2]));
```

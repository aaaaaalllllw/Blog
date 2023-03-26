## 216.组合总和 III

找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

```js
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let path = [],
    result = [];
  function backtracking(k, startIndex, target) {
    if (target < 0) return;
    if (path.length == k) {
      if (target == 0) {
        result.push([...path]);
      }
      return;
    }
    for (let i = startIndex; i <= 9; i++) {
      path.push(i);
      backtracking(k, i + 1, target - i);
      path.pop();
    }
  }
  backtracking(k, 1, n);
  return result;
};
```

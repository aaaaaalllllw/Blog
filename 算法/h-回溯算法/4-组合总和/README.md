## 39.组合总和

给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

- 输入:candidates=[2,3,6,7] ，target=7
- 所求解集:[[7],[2,2,3]]

![这是图片](./1.png)

## 思路

1. 递归函数参数，candidates，target，startIndex

2. 递归终止条件
   target<0 return ;target==0 push

3. 单层遍历

## 代码

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let path = [],
    res = [];
  function backtracking(candidates, target, n) {
    if (target < 0) return;
    if (target == 0) res.push([...path]);
    for (let i = n; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtracking(candidates, target - candidates[i], i);
      path.pop();
    }
  }
  backtracking(candidates, target, 0);
  return res;
};
```

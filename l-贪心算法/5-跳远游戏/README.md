尽可能多覆盖,减少跳跃次数
这里需要统计两个覆盖范围，这一步最大的覆盖和下一步最大的覆盖
![真是图片](./1.png)

返回的是步骤

- 当前覆盖范围到达不了，才要走下一步,走了下一步之后当前的覆盖范围要更新
- 如果当前覆盖范围能到达最远距离，就返回

```js
  if (i == curDistance) {                         // 遇到当前覆盖最远距离下标
```

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length == 1) return 0;
  let cur = 0; //当前能覆盖范围
  let next = 0; //之前能覆盖范围
  let ans = 0; //步数
  for (let i = 0; i <= nums.length - 1; i++) {
    next = Math.max(nums[i] + i, next);
    if (cur == i) {
      if (cur < nums.length - 1) {
        ans++;
        cur = next;
        if (next >= nums.length - 1) break;
      } else break;
    }
  }
  return ans;
};
```

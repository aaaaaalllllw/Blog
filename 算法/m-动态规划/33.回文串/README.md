## 回文串

双指针一个从前，一个从后
如果两个相差《=1，dp[i][j]=true
如果》1,就比较 dp[i+1][j-1]

初始的 dp[i][j]
[0][0]=true

```js
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let len = s.length;
  let dp = new Array(len).fill(false).map(() => new Array(len).fill(false));
  let res = 0;
  for (let i = len - 1; i >= 0; i--) {
    // 所以一定要从下到上，从左到右遍历，这样保证dp[i + 1][j - 1]都是经过计算的。
    //i正常遍历数据，j是从i取区间
    for (let j = i; j < len; j++) {
      if (s[i] == s[j]) {
        if (j - i <= 1) {
          res++;
          dp[i][j] = true;
        } else if (dp[i + 1][j - 1] == true) {
          res++;
          dp[i][j] = true;
        }
      }
    }
  }
  return res;
};
```

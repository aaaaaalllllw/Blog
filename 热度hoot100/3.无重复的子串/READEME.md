## 无重复字符的最长子串

## 3.思路滑动窗口

无重复子串的左右指针

- 没有重复右指针继续往后，子串开始加
- 如果出现重复，找到子串和右指针重复的位置，将左指针移动重复的位置+1
- 每次都记录子串的长度，res 记录最大值

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //一个字典，如果遇到重复数据就返回前面的
  let map = new Map();
  let left = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= left) {
      left = map.get(s[i]) + 1;
    }
    res = Math.max(res, i - left + 1);
    map.set(s[i], i);
  }
  return res;
};
```

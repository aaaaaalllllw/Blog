## 1221.分割平衡字符串

## 思路

- count 记录 R，count++
  遇到 L，count--

- 当 count==0，res++

```js
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
	let res = 0,
		count = 0;
	s = s.split("");
	for (let i = 0; i < s.length; i++) {
		if (s[i] == "L") count++;
		else count--;
		if (count == 0) res++;
	}
	return res;
};
```

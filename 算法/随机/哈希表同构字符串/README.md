## 205.同构字符串

给定两个字符串 s 和 t，判断它们是否是同构的

## 思路利用两个 map 做映射

map1 是否 map2，map2 是否映射到 map1，每两个字符串都是不同的映射

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	let len = s.length;
	if (len === 0) return true;
	let maps = new Map();
	let mapt = new Map();
	for (let i = 0, j = 0; i < len; i++, j++) {
		if (!maps.has(s[i])) {
			maps.set(s[i], t[j]); // maps保存 s[i] 到 t[j]的映射
		}
		if (!mapt.has(t[j])) {
			mapt.set(t[j], s[i]); // mapt保存 t[j] 到 s[i]的映射
		}
		// 无法映射，返回 false
		if (maps.get(s[i]) !== t[j] || mapt.get(t[j]) !== s[i]) {
			return false;
		}
	}
	return true;
};
```

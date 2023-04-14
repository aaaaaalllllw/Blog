## 1002.查找常用字符

给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。

示例 1:words=["bella","label","roller"] 输出：["e","l","l"]

## 思路

- 统计每个字符串在 26 个字母中出现的频率
- 找出频率相同的字母，组成数组返回
  ！[这是图片](./1.png)

- 先生成一个 firtword 统计每个字母出现的频率
- words 里面每个 word 遍历都要生成一个新的 map
- 每个 map 有但是 obj 没有就删除，map 有 obj 有取最小值
- 遍历 obj 属性,还要遍历 obj 属性值为了放置重复的字母返回一个数组

```js
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
	let obj = new Object();
	for (let s of words[0]) {
		if (obj[s]) {
			obj[s] = obj[s] + 1;
		} else {
			obj[s] = 1;
		}
	}
	for (let i = 1; i < words.length; i++) {
		let map = new Map();
		for (let s of words[i]) {
			map.has(s) ? map.set(s, map.get(s) + 1) : map.set(s, 1);
		}

		for (let o in obj) {
			if (!map.has(o)) {
				delete obj[o];
			} else {
				obj[o] = Math.min(map.get(o), obj[o]);
			}
		}
	}
	let res = [];
	for (let o in obj) {
		for (let i = 0; i < obj[o]; i++) {
			res.push(o);
		}
	}
	return res;
};
```

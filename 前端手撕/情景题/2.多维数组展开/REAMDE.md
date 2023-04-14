# 展开一层

## flat

```js
let arr = [1, 2, 3, [4, 5]];
let res = arr.flat();
```

## apply()结合 concat()使用展开一维数组

```js
let arr = [1, 2, 3, [4, 5], 6];
let res = [].concat.apply([], arr);
```

## reduce()结合 concat()方法

需要 reduce 的第一个参数累加器

```js
let arr = [1, 3, [1, 34]];
let res = arr.reduce((acc, cur) => acc.concat(cur));
```

# 无论多少层

## flat(infinity)

## 递归+concat()

```js
let arr = [0, [1, 2, 4, [5]]];
let res = flatten(arr);
function flatten(arr) {
	let tmp = [];
	for (let i of arr) {
		if (Array.isArray(i)) {
			tmp=tmp.conact(flatten(i));
		} else {
			tmp.push(i);
		}
	}
	return tmp;
}
```

## 循环+es6 展开符

```js
let arr = [0, [1, 2, 4, [5]]];
let res = flatten(arr);

function(arr){
 while(arr.some((item)=>Array.isArray(item))){
        arr=[].conact(...arr)
    }
}
```

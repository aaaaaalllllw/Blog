a==1&&a==2&&a==3 可能为 true

- 第一种方法
  把 a 定义为一个对象，通过重写 toString 方法。根据规则，==左边对象类型
  右边为 Number，在比较会调用 toString()方法，每次调用时都将返回值+1

```js
const a = {
	value: 1,
	toString: function () {
		return a.value++;
	},
};

console.log(a == 1 && a == 2 && a == 3);
```

- 第二种方法:差不多思路改写 valueOf 方法

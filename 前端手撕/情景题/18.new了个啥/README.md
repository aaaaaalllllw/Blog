# 我们写 new 一下看看

## 看个例子

```js
function Test(age, name) {
	this.name = name;
	this.age = age;
}
let test = new Test(18, "xx");
console.log(test);
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/efc0163f0e8943b293596d3914542d13~tplv-k3u1fbpfcp-watermark.image?)

可以看到它绑定好了 constructor

```js
console.log(test.constructor === Test); //true
```

如果构造函数直接返回一个对象又如何

```js
function Test(age, name) {
	this.name = name;
	this.age = age;
	return {
		age: 20,
	};
}
let test = new Test(18, "xx");
console.log(test);
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81a5597048d5495680532ef2e90ba62b~tplv-k3u1fbpfcp-watermark.image?)
就直接返回该对象

# new 做了什么事

1.创建了一个空对象

2.指定原型

3.绑定了 this,this 为当前实例对象

4.返回构造好的对象

# 写代码开始

```js
function create(Con, ...args) {
	let obj = {};
	Object.setPrototypeOf(obj, Con.prototype); //指定好原型链
	let result = Con.apply(obj, args); //不仅仅是绑定this，执行函数
	// 如果构造函数直接返回，还是返回值;但是如果没有返回值就是undefined
	//console.log(result)
	//console.log(obj)
	//console.log(result instanceof Object)
	return result instanceof Object ? result : obj; //有两种情况，一种返回对象，一种正常返回
}
function Test(name, age) {
	this.name = name;
	this.age = age;
	// return{
	//   age:18
	// }
}

Test.prototype.sayName = function () {
	console.log(this.name);
};

const a = create(Test, "xx", 25);
console.log(a.age);
a.sayName();
```

## 现在逐行分析

- let obj={}//创建一个空对象
- Object.setPrototypeOf(obj, Con.prototype)//指定好原型
- let result = Con.apply(obj, args)//修改 this 为当前对象，并执行构造函数，如果没指定为返回值，result 就是 undefined，如果 Test 指定返回值就是返回值
- return result instanceof Object ? result : obj//result 是一个对象说明构造函数写死了返回值，如果不是就返回创建好的对象 obj
  借鉴这些文章https://juejin.cn/post/6844903789070123021#heading-0
  https://juejin.cn/post/6844903704663949325#heading-2

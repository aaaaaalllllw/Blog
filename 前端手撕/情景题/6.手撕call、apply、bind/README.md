## call

- Function.prototype.call
- call() 方法接受的是一个参数列表

### 基本使用

```js
function Product(name, price) {
	this.name = name;
	this.price = price;
}

function Food(name, price) {
	Product.call(this, name, price);
	this.category = "food";
}

console.log(new Food("cheese", 5).name);
// Expected output: "cheese"
```

### 手撕

- call 是将函数作为属性挂载到当前传入的执行上下文**这样达到绑定效果**
- 然后执行 context.fn(...args)
- 删除 context.fn,将结果返回

**注意**如果函数的最后一个命名参数以 ... 为前缀，则它会将所有后面剩余的是实参个数包裹成一个数组。

```js
// 例子

function test(a, b, ...args) {
	console.log(args);
}

test(1, 2, 3, 4); // [3, 4]
```

context 是函数执行上下文，args 是传入的多个参数的数组

```js
Function.prototype.myCall = function (context, ...args) {
	context = context || window;
	args = args || [];
	//唯一性,当前this就要执行的函数
	const fn = Symbol();
	context[fn] = this;

	//执行函数，保留结果...args把数组展开为一项一项
	let res = context[fn](...args);
	delete context[fn];
	return res;
};
```

### test

```js
Function.prototype.myCall = function (context, ...args) {
	context = context || window;
	args = args || [];
	//唯一性,当前this就要执行的函数
	const fn = Symbol();
	context[fn] = this;

	//执行函数，保留结果
	let res = context[fn](...args);
	delete context[fn];
	return res;
};
age = 18;
let obj = {
	age: 10,
};

function say() {
	console.log(this.age);
}

say(); //18

say.myCall(obj); //10
```

## apply

- Function.prototypr.apply
- apply() 方法接受的是一个参数数组
-

### 基本使用

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max(numbers); //NaN

console.log(max); //给定数值中最大的数。如果任一参数不能转换为数值，则返回 NaN。如果没有提供参数，返回 -Infinity。

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2
```

```js
Function.prototype.myApply=function(context,args){
    context=conetxt||window
    args=args||[]

    let fn=Symbol()
    context[fn]=this
    let res=context[fn](...args)
    delete context[fn]
    return res
}
```

### test

```js
const numbers = [5, 6, 2, 3, 7];

Function.prototype.myApply = function (context, args) {
	context = context || window;
	args = args || [];

	let fn = Symbol();
	context[fn] = this;
	let res = context[fn](...args);
	delete context[fn];
	return res;
};

console.log(Math.max.myApply(null, numbers)); //7
```

## bind

- bind 是返回函数

### 基本使用

```js
const module = {
	x: 42,
	getX: function () {
		return this.x;
	},
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42
```

**可以二次传值**

```js
const mbs = {
	name: "麻不烧",
	say(prefix, age) {
		console.log(`${prefix},my name is ${this.name},i am ${age} year old`);
	},
};

mbs.say("hello", 12); // 'hello,my name is 麻不烧,i am 12 year old'

const B = {
	name: "小丁丁",
};

const sayB = mbs.say.bind(B, "hello");

sayB(3); // 'hello,my name is 小丁丁,i am 3 year old''
```

### 手撕

明确是要返回一个函数

```js
Function.prototype.myBind = function (context, ...outArgs) {
	context = context || window;
	outArgs = outArgs || [];
	let fn = Symbol();
	context[fn] = this;
	return function (...innerArgs) {
		//第二次传递参数
		return context[fn](...outArgs, ...innerArgs);
		delete context[fn];
	};
};
```

### test

```js
const mbs = {
	name: "麻不烧",
	say(prefix, age) {
		console.log(`${prefix},my name is ${this.name},i am ${age} year old`);
	},
};

mbs.say("hello", 12); // 'hello,my name is 麻不烧,i am 12 year old'

const B = {
	name: "小丁丁",
};

const sayB = mbs.say.bind(B, "hello");
Function.prototype.myBind = function (context, ...outArgs) {
	context = context || window;
	outArgs = outArgs || [];
	let fn = Symbol();
	context[fn] = this;
	return function (...innerArgs) {
		//第二次传递参数
		return context[fn](...outArgs, ...innerArgs);
	};
};

console.log(mbs.say.myBind(B, "hello", 18)());
```

> 链接：https://juejin.cn/post/7128233572380442660

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

const numbers = [5, 6, 2, 3, 7];

const max = Math.max(numbers); //NaN

console.log(max); //给定数值中最大的数。如果任一参数不能转换为数值，则返回 NaN。如果没有提供参数，返回 -Infinity。

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2

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

Function.prototype.myCall = function (context, ...args) {
	context = context || window;
	args = args || [];
};

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

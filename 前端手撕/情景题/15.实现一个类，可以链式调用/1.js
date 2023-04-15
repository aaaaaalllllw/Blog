// boy.sayHi().sleep(1000).play("王者").sleep(2000).play("跳一跳");

//首先 定义一个类PlayBoy
class PlayBoy {
	constructor(name) {
		this.name = name;
		this.queue = []; //创建一个任务队列(利用队列的先进先出来模拟链式调用函数的执行顺序)
		setTimeout(() => {
			//进入异步任务队列
			this.next(); //next是类PlayBoy原型方法，用来queue任务队列取出函数执行
		}, 0);
		return this;
	}
}

PlayBoy.prototype.next = function () {
	const fn = this.queue.shift(); //从任务队列中取出函数，函数存在即调用
	fn && fn();
};

// 首先 定义一个类 PlayBoy
class PlayBoy {
	constructor(name) {
		this.name = name;
		this.queue = []; //创建一个任务队列（利用队列的先进先出性质来模拟链式调用函数的执行顺序）
		setTimeout(() => {
			// 进入异步任务队列 也是开启 自定义任务队列 queue 的入口
			this.next(); // next是类PlayBoy 原型上的方法，用来从queue 任务队列中取出函数执行
		}, 0); //一开始就pop()执行一个函数，但是一开始的queue是空的
		return this;
	}
}

PlayBoy.prototype.sayHi = function () {
	const fn = () => {
		console.log("hi");
		this.next();
	};
	this.queue.push(fn);
	return this;
};

PlayBoy.prototype.sleep = function (timer) {
	const fn = () => {
		setTimeout(() => {
			this.next();
		}, timer);
	};
	this.queue.push(fn);
	return this;
};

PlayBoy.prototype.play = function () {
	const fn = () => {
		console.log("play");
		this.next();
	};
	this.queue.push(fn);
	return this;
};

PlayBoy.prototype.next = function () {
	const fn = this.queue.shift(); // 从任务队列中取出函数 函数存在的话即调用

	fn && fn();
};

new PlayBoy().sayHi().sleep(5000).play();

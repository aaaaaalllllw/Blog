/***节流 */

//使用时间戳，事件会
/*为什么要重新将oldtime赋值为最新的时间,
	因为产生了闭包oldtime下次调用时候,
	会延续上一个oldtime;*/

function throttled1(fn, delay = 500) {
	let oldTime = Date.now(); // //第二次以及之后执行函数不会走着
	return function (...args) {
		let context = this; //获取真正调用这个方法的上下文
		let newTime = Date.now();
		if (newTime - oldTime > delay) {
			fn.apply(context, ...args);
			oldTime = Date.now(); //所以需要在这更新
		}
	};
}

//使用定时器写法，delay毫秒后第一次执行，
//第二次事件停止触发后然后再执行一次

function throttled2(fn, delay = 500) {
	let timer = null;
	return function (...args) {
		if (!timer) {
			timer = setTimeout(() => {
				fn.apply(this, ...args);
				timer = null;
			}, delay);
		}
	};
}

//实现一个更加精确的节流
function throttled(fn, delay) {
	let timer = null;
	let startTime = Date.now();
	return function (...args) {
		let curTime = Date.now();
		let remainTime = delay - (curTime - startTime); //还要多少时间开启下一层
		let context = this;
		clearTimeout(timer);
		if (remainTime <= 0) {
			fn.apply(context, ...args);
			startTime = Date.now();
		} else {
			timer = setTimeout(fn, remainTime);
		}
	};
}

//防抖要重新计时
function debounce(func, wait) {
	let timeout;
	return function () {
		let context = this; //保存this执行
		let args = arguments;
		clearTimeout(timeout); //重新计时的奥秘
		timeout = setTimeout(function () {
			func.apply(context, args);
		}, wait);
	};
}

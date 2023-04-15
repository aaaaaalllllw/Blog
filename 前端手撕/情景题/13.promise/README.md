## 初步理解了

then 收集依赖->异步触发 resolve->resolve 执行依赖

then 那时候只是收集了依赖，并没有立刻执行，而是要等异步队列执行的时候

```js
const p1 = new Promise((resolve, reject) => {
	setTime(() => {
		resolve("result");
	}, 1000);
});

p1.then(
	(res) => console.log(res),
	(err) => console.log(err)
);
```

分析 Promise 的调用过程

- Promise 的构造方法接收一个 executor(),在 new Promise()是就立即执行这个 executor 回调

- executor()内部的异步任务被放入宏/微任务

- then()被执行，收集成功/失败回调，放入成功/失败队列
- executor()的异步任务被执行，触发 resolve/reject，从成功/失败队列中取出回调依次执行

```js
class MyPromise {
	//构造方法接收一个回调
	constructor(executor) {
		this._resolveQueue = []; //then 收集的执行成功的回调
		this._rejectQueue = []; //then  收集的执行失败的回调队列

		//由于resolve/reject是在executor内部被调用，因此需要使用箭头函数固定this指向
		let _resolve = (val) => {
			//从成功队列取出回调依次执行
			while (this._resolveQueue.length) {
				const callback = this._resolveQueue.shift();
				callback(val);
			}
		};

		//实现reject
		let _reject = (val) => {
			while (this._rejectQueue.length) {
				const callback = this._rejectQueue.shift();
				callback(val);
			}
		};
		//new Promise()时立即执行executor，并传入resolve和reject
		executor(_resolve, _reject); //传入的是一个函数，参数是class Promise传入，执行了setTimeOut
	}

	//then方法，将成功回调和一个失败的回调，push进对对应的数组
	then(resolveFn, rejectFn) {
		this._resolveQueue.push(resolveFn);
		this._rejectQueue.push(rejectFn);
	}
}

const p1 = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve("resolve"); //执行到这一步，会跳到_resolve
	}, 1000);
}); //(这里面整个都是executor而且new会执行一次)
p1.then((res) => console.log(res)); //这是放入_resolveQueue

//1.初始化了 p1,
//2. p1.then将function (res)=>console.log(res) 放入了_resolveQueue队列
//3.为什么会执行：executor()，执行了_resolve 为什么会在then后面因为setTimeout是异步任务
```

## Promise 状态

> Promise 本质是一个状态机，且状态只能为以下三种:Pengding(等待态)、Fulfilled(执行态)、Rejected(失败)
> 只能从 Pending->Fulfilled,或 Pending->Rejected

> then 方法接收两个可选参数，分别对应状态改变是触发的回调。then 方法返回一个 promise。then 方法可以被同一个 promise 调用多次。

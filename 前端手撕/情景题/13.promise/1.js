// class MyPromise {
// 	//构造方法接收一个回调
// 	constructor(executor) {
// 		this._resolveQueue = []; //then 收集的执行成功的回调
// 		this._rejectQueue = []; //then  收集的执行失败的回调队列

// 		//由于resolve/reject是在executor内部被调用，因此需要使用箭头函数固定this指向
// 		let _resolve = (val) => {
// 			//从成功队列取出回调依次执行
// 			while (this._resolveQueue.length) {
// 				const callback = this._resolveQueue.shift();
// 				callback(val);
// 			}
// 		};

// 		//实现reject
// 		let _reject = (val) => {
// 			while (this._rejectQueue.length) {
// 				const callback = this._rejectQueue.shift();
// 				callback(val);
// 			}
// 		};
// 		//new Promise()时立即执行executor，并传入resolve和reject
// 		executor(_resolve, _reject); //传入的是一个函数，参数是class Promise传入，执行了setTimeOut
// 	}

// 	//then方法，将成功回调和一个失败的回调，push进对对应的数组
// 	then(resolveFn, rejectFn) {
// 		this._resolveQueue.push(resolveFn);
// 		this._rejectQueue.push(rejectFn);
// 	}
// }

// const p1 = new MyPromise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("resolve"); //执行到这一步，会跳到_resolve
// 	}, 1000);
// }); //(这里面整个都是executor而且new会执行一次)
// p1.then((res) => console.log(res)); //这是放入_resolveQueue

// //1.初始化了 p1,
// //2. p1.then将function (res)=>console.log(res) 放入了_resolveQueue队列
// //3.为什么会执行：executor()，执行了_resolve 为什么会在then后面因为setTimeout是异步任务

//Promise/A+规范的三种状态

// const PENDING = "pending";
// const FUlFILLED = "fulfilled";
// const REJECTED = "rejected";

// class MyPromise {
// 	//构造方法接收一个回调
// 	constructor(executor) {
// 		this._status = PENDING; //Promise状态
// 		this._resolveQueue = []; //成功队列，resolve时触发
// 		this._rejectQueue = []; //失败队列，reject时触发

// 		//调用成功，需要箭头函数重新绑定this
// 		let _resolve = (val) => {
// 			if (this._status !== PENDING) return; //只能从PEDING-RJECTED
// 			this._status = FUlFILLED;
// 		};

// 		while (this._resolveQueue.length) {
// 			const callback = this._resolveQueue.shift();
// 			callback(val);
// 		}

// 		let _reject = (val) => {
// 			if (this._status !== PENDING) return;
// 			this._status = REJECTED;

// 			while (this._rejectQueue.length) {
// 				const callback = this._rejectQueue.shift();
// 				callback(val);
// 			}
// 		};
// 		executor(_resolve, _reject);
// 	}
// 	then(resolveFn, rejectFn) {
// 		this._resolveQueue.push(resolveFn);
// 		this._rejectQueue.push(rejectFn);
// 	}
// }

// const p1 = new Promise((resolve, reject) => {
// 	resolve(1);
// });

// p1.then((res) => {
// 	console.log(res);
// 	//then回调中可以return 一个Promise
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(2);
// 		}, 1000);
// 	});
// })
// 	.then((res) => {
// 		console.log(res);
// 		//then回调也可以return 一个值
// 		return 3;
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	});

const PENDING = "pending";
const FUlFILLED = "fulfilled";
const REJECTED = "rejected";
class MyPromise {
	//构造方法接收一个回调
	constructor(executor) {
		this._status = PENDING; //Promise状态
		this._resolveQueue = []; //成功队列，resolve时触发
		this._rejectQueue = []; //失败队列，reject时触发

		//调用成功，需要箭头函数重新绑定this
		let _resolve = (val) => {
			if (this._status !== PENDING) return; //只能从PEDING-RJECTED
			this._status = FUlFILLED;
			while (this._resolveQueue.length) {
				const callback = this._resolveQueue.shift();
				callback(val);
			}
		};

		let _reject = (val) => {
			if (this._status !== PENDING) return;
			this._status = REJECTED;

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
		//return 一个新的promise
		return new MyPromise((resolve, reject) => {
			const fulfilledFn = (value) => {
				try {
					//执行第一个(当前的)Promise的成功回调，并获取返回值
					let x = resolveFn(value); //resolveFn才是console.log,return 2,3这种
					//分类讨论返回值，如果是Promise，那么等待Promise状态变更，否则直接resolve
					//这里是resolve之后，就能被下一个.then()的回调获取到返回值，从而实现链式调用
					x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
				} catch (error) {
					reject(error);
				}
			};
			//把后续then收集到依赖都push进当前Promise的成功回调(_resolveQueue),这是为了保证调用
			this._resolveQueue.push(fulfilledFn); //这里的this，和上面返回return new Promise不一样，this是上一个，return是下一个
			//reject 同理
			const rejectedFn = (error) => {
				try {
					let x = rejectFn(error);
					x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
				} catch (error) {
					reject(error);
				}
			};
			this._rejectQueue.push(rejectedFn);
		});
	}
}
// p1.then((res) => {
// 	console.log(res);
// 	return 2;
// })
// 	.then((res) => {
// 		console.log(res);
// 		return 3;
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	});
// const p1 = new MyPromise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(1);
// 	}, 500);
// });

// const p2 = p1.then((res) => {
// 	console.log(res);
// 	return 2;
// }); //给p1的成功或者失败队列push函数，但是会返回一个新的Promise

// const p3 = p2.then((res) => {
// 	console.log(res);
// 	return 3;
// });

// const p4 = p3.then((res) => {
// 	console.log(res);
// });

// const fulfilledFn = (value) => {
//     try {
//         //执行第一个(当前的)Promise的成功回调，并获取返回值
//         let x = resolveFn(value);
//         //分类讨论返回值，如果是Promise，那么等待Promise状态变更，否则直接resolve
//         //这里是resolve之后，就能被下一个.then()的回调获取到返回值，从而实现链式调用
//         x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
//     } catch (error) {
//         reject(error);
//     }
// };
//现在是把fulFilledFn加入了_resoleQueue队列中
// 这块是then都一个push进去之后才执行的

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
		typeof resolveFn != "function" ? (resolveFn = (value) => value) : null;
		typeof rejectFn != "function"
			? (rejectFn = (reason) => {
					throw new Error(reason instanceof Error ? reason.message : reason);
			  })
			: null;
		//return 一个新的promise
		return new MyPromise((resolve, reject) => {
			const fulfilledFn = (value) => {
				try {
					//执行第一个(当前的)Promise的成功回调，并获取返回值
					let x = resolveFn(value); //resolveFn才是console.log,return 2,3这种
					//分类讨论返回值，如果是Promise，那么等待Promise状态变更，否则直接resolve
					//这里是resolve之后，就能被下一个.then()的回调获取到返回值，从而实现链式调用
					x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
				} catch (error) {
					reject(error);
				}
			};
			// //把后续then收集到依赖都push进当前Promise的成功回调(_resolveQueue),这是为了保证调用
			// this._resolveQueue.push(fulfilledFn); //这里的this，和上面返回return new Promise不一样，this是上一个，return是下一个
			//reject 同理
			const rejectedFn = (error) => {
				try {
					let x = rejectFn(error);
					x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
				} catch (error) {
					reject(error);
				}
			};
			// this._rejectQueue.push(rejectedFn);
			switch (this._status) {
				case PENDING:
					this._resolveQueue.push(fulfilledFn);
					this._rejectQueue.push(rejectedFn);
					break;
				case FUlFILLED:
					fulfilledFn(this._value);
					break;
				case REJECTED:
					rejectedFn(this._value);
					break;
			}
		});
	}
	static resolve(value) {
		if (value instanceof MyPromise) return value;
		return new MyPromise((resolve) => resolve(value));
	}

	static reject(reason) {
		return new MyPromise((resolve, reject) => reject(reason));
	}

	static all(promiseArr) {
		let index = 0;
		let res = [];
		return new MyPromise((resolve, reject) => {
			promiseArr.forEach((p, i) => {
				MyPromise.resolve(p).then(
					(val) => {
						index++;
						res[i] = val;
						if (index == promiseArr.length) {
							resolve(res);
						}
					},
					(err) => {
						//一个为rejected就返回这个rejected
						reject(err);
					}
				);
			});
		});
	}
	static race(promiseArr) {
		return new MyPromise((resolve, reject) => {
			//同时执行Promise,如果有一个Promise的状态发生改变,就变更新MyPromise的状态
			for (let p of promiseArr) {
				MyPromise.resolve(p).then(
					//Promise.resolve(p)用于处理传入值不为Promise的情况
					(value) => {
						resolve(value); //注意这个resolve是上边new MyPromise的
					},
					(err) => {
						reject(err);
					}
				);
			}
		});
	}
}

function* myGenerator() {
	console.log(yield "1"); //test1
	console.log(yield "2"); //test2
	console.log(yield "3"); //test3
}

// 获取迭代器
const gen = myGenerator();

gen.next();
gen.next("test1");
gen.next("test2");
gen.next("test3");

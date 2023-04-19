//红灯3秒亮一次，黄灯2亮一次，绿灯1秒亮一次，如何让三个灯不断交替重复亮灯

function red() {
	console.log("red");
}

function green() {
	console.log("green");
}

function yellow() {
	console.log("yellow");
}

//对亮灯程序进行包装
const light = function (timer, cb) {
	return new Promise((resolve) => {
		setTimeout(() => {
			cb();
			resolve(); //改变状态
		}, timer);
	});
};

//串联起来
const step = function () {
	Promise.resolve()
		.then(() => {
			return light(3000, red);
		})
		.then(() => {
			return light(2000, green);
		})
		.then(() => {
			return light(1000, yellow);
		})
		.then(() => {
			return step();
		});
};

step();

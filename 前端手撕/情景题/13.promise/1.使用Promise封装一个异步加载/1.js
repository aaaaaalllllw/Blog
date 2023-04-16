//使用Promise封装一个异步加载图片的方法
//只需要在图片的onload函数，使用resolve方法一下就可以

function loading(url) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = function () {
			resolve(img);
		};
		img.onerror = function () {
			reject(new Error("Can not load" + url));
		};
		img.src;
	});
}

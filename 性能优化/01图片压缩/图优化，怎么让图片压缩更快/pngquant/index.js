var pngquant = require("node-pngquant-native");
var fs = require("fs");
fs.readFile("./in.png", function (err, buffer) {
	if (err) throw err;
	var resBuffer = pngquant.compress(buffer, {
		speed: 1, //1 ~ 11
	});

	fs.writeFile(
		"./out.png",
		resBuffer,
		{
			flags: "wb",
		},
		function (err) {},
	);
});
fs.readFile("./1.txt", "utf-8", function (err, dataStr) {
	// 打印失败的结果
	//如果读取成功，则err的值为null
	//如果读取失败，则err的值为错误对象，dataStr的值为undefined
	console.log(err);
	console.log("-----------"); // 打印成功的结果
	console.log(dataStr);
});

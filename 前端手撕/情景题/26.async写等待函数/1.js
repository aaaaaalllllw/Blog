function wait(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
	console.log("start");
	await wait(5000); //等待2分钟
	console.log("end");
}

run();

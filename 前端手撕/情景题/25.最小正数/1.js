const { min } = require("moment");

function findMiniIndex(arr) {
	let index = -1;
	let min = Infinity;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0 && arr[i] < min) {
			index = i;
			min = arr[i];
		}
	}
	return min;
}

console.log(findMiniIndex([-1, 1, -2, 0.5]));

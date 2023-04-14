let arr = [0, [1, 2, 4, [5]]];
let res = flatten(arr);
console.log(res);

function flatten(arr) {
	while (arr.some((item) => Array.isArray(item))) {
		arr = [].conact(...arr);
	}
	return arr;
}

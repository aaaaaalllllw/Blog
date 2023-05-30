function flatten(arr) {
	let res = [];
	arr.forEach((item) => {
		if (Array.isArray(item)) {
			res = res.concat(flatten(item));
		} else {
			res.push(item);
		}
	});
	return res;
}

console.log(flatten([[1], [[1]], 3]));

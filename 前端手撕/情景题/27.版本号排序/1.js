//字符串比较unicode
const arr = ["0.1.1", "2.3.3", "0.302.1", "4.2", "4.3.5", "4.3.4.5"];
arr.sort((a, b) => (a > b ? -1 : 1));
console.log(arr); // ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']

//还可以通过加权

const p = 1000;
const gen = (arr) => arr.split(".").reduce(reducer, 0);
console.log(gen);
const reducer = (acc, value, index) =>
	acc + +value * Math.pow(p, arr.length - index - 1);

arr.sort((a, b) => (gen(a) > gen(b) ? -1 : 1));

console.log(arr);

//循环比较

arr.sort((a, b) => {
	let i = 0;
	const arr1 = a.split(".");
	const arr2 = b.split(".");

	while (true) {
		const s1 = arr1[i];
		const s2 = arr2[i++]; //这里i动了
		if (s1 === undefined || s2 === undefined) {
			return arr2.length - arr1.length;
		}
		if (s1 === s2) continue;
		return s2 - s1;
	}
});

console.log(arr);

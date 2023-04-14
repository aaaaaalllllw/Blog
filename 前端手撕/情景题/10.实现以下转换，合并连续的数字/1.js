// [1,2,3,4,6,7,9,13,15]->['1->4','6->7','13','15']

function transfer(arr) {
	let res = [];
	for (let i = 0; i < arr.length; ) {
		let num = i;
		for (let j = i; j < arr.length - 1; ) {
			if (arr[j] + 1 == arr[j + 1]) {
				j++;
				num = j;
			} else {
				break;
			}
		}
		let str;
		if (num != i) {
			str = `${arr[i]}->${arr[num]}`;
			i = num;
		} else {
			str = `${arr[i]}`;
		}
		i++;
		res.push(str);
	}
	return res;
}

console.log(transfer([1, 2, 3, 4, 6, 7, 9, 13, 14, 15]));

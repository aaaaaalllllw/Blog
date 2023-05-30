function shallowClone(obj) {
	const newObj = {};
	for (let prop in obj) {
		newObj[prop] = obj[prop];
	}
	return newObj;
}

let obj = {
	a: 1,
	b: [11],
};

let newObj = shallowClone(obj);
// newObj.b.push(22);这样变了
// newObj.b = [22];这样没变
console.log(obj.b);

//循环递归
function deepClone(obj, hash = new WeakMap()) {
	if (obj === null) return obj;
	if (obj instanceof Date) return new Date(obj);
	if (obj instanceof RegExp) return new RegExp(obj);
	if (typeof obj !== "object") return obj;
	if (hash.get(obj)) return hash.get(obj);
	let cloneObj = new obj.constructor();
	hash.set(obj, cloneObj);
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			cloneObj[key] = obj[key];
		}
	}
	return cloneObj;
}

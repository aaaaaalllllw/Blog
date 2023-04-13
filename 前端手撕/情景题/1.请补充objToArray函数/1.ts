/**
 * @file objToArray
 *
 * 将对象按照要求转为数组
 * 注意console示例运行结果
 */
type Obj = Record<string, string>;
interface FormatItem {
	key: string;
	op: string;
	value: string;
}

function objToArray(obj: Record<string, Obj>): FormatItem[] {
	// 补全此处代码
	let arr: FormatItem[] = [];
	let keys: string[] = Object.keys(obj);
	for (let key of keys) {
		let op = Object.keys(obj[key])[0];
		arr.push({
			key,
			op: op,
			value: obj[key][op],
		});
	}
	return arr;
	throw new Error("功能待实现");
}

console.log(
	objToArray({
		key1: {
			op1: "value1",
		},
		key2: {
			op2: "value2",
		},
	})
);
// result示例
// [
//     {key: 'key1', op: 'op1', value: 'value1'},
//     {key: 'key2', op: 'op2', value: 'value2'}
// ]

export default {};

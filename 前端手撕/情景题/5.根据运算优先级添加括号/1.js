function addBrackets(expression) {
	//要返回的数组最后join
	let resArr = [];
	let symbolArr = ["+", "-", "*", "/"];
	let highLevelSymbolArr = ["*", "/"];
	//是否普通符号
	const isSymbol = (str) => symbolArr.includes(str);
	//是否高级符号
	const isHigh = (str) => highLevelSymbolArr.includes(str);

	//是否在括号中
	let isInBacket = false;
	//临时变量
	let currNum = "";

	for (let i = 0; i < expression.length; i++) {
		if (isSymbol(expression[i])) {
			//当前值是否符号
			if (isHigh(expression[i])) {
				//是否为高级符号
				if (!isInBacket) {
					currNum = "(" + currNum;
				}
				isInBacket = true;
				currNum += expression[i];
			} else {
				if (isInBacket) {
					currNum += ")";
					isInBacket = false;
				}

				resArr.push(currNum);
				currNum = "";
				resArr.push(expression[i]);
			}
		} else {
			currNum += expression[i];
		}
	}
	//后面的
	if (currNum) {
		resArr.push(currNum + (isInBacket ? ")" : ""));
	}
	return resArr.join("");
}

console.log(addBrackets("11+2-3*4+5/2*4+10/5"));

//分别用于记录当前是否高优先级运算范围和临时值

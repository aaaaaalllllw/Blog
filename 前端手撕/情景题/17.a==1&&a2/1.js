// const a = {
// 	value: 1,
// 	toString: function () {
// 		return a.value++;
// 	},
// };

// console.log(a == 1 && a == 2 && a == 3);

function findMostWord(article) {
	// 合法性判断
	if (!article) return;

	// 参数处理
	article = article.trim().toLowerCase();

	let wordList = article.match(/[a-z]+/g), //字符串转化为，字母数组
		visited = [],
		maxNum = 0,
		maxWord = "";

	article = " " + wordList.join("  ") + " "; //去除多余的标点符号

	// 遍历判断单词出现次数
	wordList.forEach(function (item) {
		if (visited.indexOf(item) < 0) {
			let word = new RegExp(" " + item + " ", "g"), //正则
				num = article.match(word).length; //匹配到字母在文章中出现多少次
			visited.push(item);
			if (num > maxNum) {
				maxNum = num;
				maxWord = item;
			}
		}
	});

	return maxWord + "  " + maxNum;
}

console.log(findMostWord("i am i,what am am"));

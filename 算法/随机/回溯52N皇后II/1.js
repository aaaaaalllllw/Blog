/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
	//行遍历，列遍历
	let chess = new Array(n).fill([]).map(() => new Array(n).fill("."));
	let count = 0;

	//回溯算法
	function backtracing(row, n) {
		if (row == n) {
			count++;
			return;
		}

		for (let col = 0; col < n; col++) {
			if (isVaild(n, row, col)) {
				chess[row][col] = "Q";
				backtracing(row + 1, n);
				chess[row][col] = ".";
			}
		}
	}
	function isVaild(n, row, col) {
		for (let i = row - 1; i >= 0; i--) {
			if (chess[i][col] == "Q") {
				return false;
			}
		}
		//45度
		for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
			if (chess[i][j] == "Q") {
				return false;
			}
		}
		//135
		for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
			if (chess[i][j] == "Q") {
				return false;
			}
		return true;
	}
	backtracing(0, n);

	return count;
};

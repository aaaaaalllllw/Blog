/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
	let visited = new Array(rooms.length).fill(false);

	function dfs(key, visited) {
		if (visited[key]) {
			return;
		}
		visited[key] = true;
		let keys = rooms[key];
		// console.log(keys);
		// console.log(typeof keys);
		for (i of keys) {
			dfs(i, visited);
		}
	}
	dfs(0, visited);
	for (v of visited) {
		if (v == false) {
			return false;
		}
	}
	return true;
};

console.log(canVisitAllRooms([[1], [2], [3], []]));

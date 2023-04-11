/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
	let i = (j = 0);
	for (; i < name.length, j < typed.length; ) {
		if (name[i] == typed[j]) {
			i++;
			j++;
		} else {
			if (j == 0) return false;
			else {
				while (j < typed.length && typed[j] == typed[j + 1]) {
					j++;
				}
				j++;
				if (name[i] == typed[j]) {
					j++;
					i++;
				} else {
					return false;
				}
			}
		}
	}
	if (i < name.length) {
		return false;
	}
	while (j < typed.length) {
		if (typed[j + 1] == typed[j]) j++;
		else return false;
	}
	return true;
};

console.log(isLongPressedName("alex", "aaleexa"));

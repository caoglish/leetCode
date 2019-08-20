/**
 * 1002. Find Common Characters
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
	let c = {};
	if (Object.getOwnPropertyNames(c).length == 0) {
		for (let l of A.shift().split('')) {
			if (!c.hasOwnProperty(l)) c[l] = 1;
			else c[l]++;
		}
	}
	while (A.length > 0) {
		let compare = A.shift();
		for (let [key, value] of Object.entries(c)) {
			let count = 0;
			let index = 0;
			for (let i = 0; i < value; i++) {
				if (compare.indexOf(key, index) >= 0) {
					index = compare.indexOf(key, index) + 1;
					count++;
				}
			}
			if (count > 0) c[key] = count;
			else delete c[key];
		}
	}
	let result = [];
	for (let [key, value] of Object.entries(c)) {
		result = result.concat(Array(value).fill(key));
	}
	return result;
};

module.exports = commonChars;
//942. DI String Match
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
	let len = S.length;
	let low = 0
	let high = len
	let result = [];
	for (let i = 0; i < len; i++) {
		if (S[i] == "I") {
			result.push(low);
			low++;
		} else if (S[i] == "D") {
			result.push(high);
			high--;
		}
	}
	result.push(high);

	return result;

};

module.exports = diStringMatch
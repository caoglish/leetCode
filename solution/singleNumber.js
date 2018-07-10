/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let numMap = {};
	nums.forEach((v) => {
		numMap[v] = numMap[v] === undefined ? 1 : numMap[v] + 1;
	});
	let result = Object.keys(numMap).reduce((result, key) => {
		return numMap[key] === 1 ? key : result;
	});
	return parseInt(result);
};

module.exports = singleNumber;
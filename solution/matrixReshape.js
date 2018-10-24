//566. Reshape the Matrix
/**
 * 
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
	let result = [];
	let row = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums[i].length; j++) {
			let item = nums[i][j];
			row.push(item);
			if (row.length === c) {
				result.push(row);
				row = [];
			}
		}
	}

	if (result.length === r && result[0].length === c) {
		return result;
	}

	return nums;

};
module.exports = matrixReshape;
/**
 * 1089. Duplicate Zeros
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
	let len = arr.length;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			arr.splice(i + 1, 0, 0);
			i++;
		}
	}
	arr.splice(len, arr.length - 1);

};
module.exports = duplicateZeros;
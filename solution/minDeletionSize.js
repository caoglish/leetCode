//944. Delete Columns to Make Sorted
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
	let len = A.length;
	let dnum = 0;
	for (let i = 0; i < A[0].length; i++) {

		for (let j = 0; j < len - 1; j++) {
			if (A[j][i].charCodeAt() > A[j + 1][i].charCodeAt()) {
				dnum++;
				break;
			}
		}
	}
	return dnum;
};

module.exports = minDeletionSize;
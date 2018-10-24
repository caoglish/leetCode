/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {

	let crease = 0;

	for (let i = 0; i < A.length - 1; i++) {
		if (A[i] - A[i + 1] === 0) {
			continue;
		} else if (crease === 0) {
			crease = A[i] - A[i + 1];
		} else if (crease < 0 && A[i] - A[i + 1] > 0 || (crease > 0 && A[i] - A[i + 1] < 0)) {
			return false;
		}
	}
	return true;

};
module.exports = isMonotonic
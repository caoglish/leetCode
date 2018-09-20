var transpose1 = function (A) {
	let len = A[0].length;
	let result = [];
	for (let i = 0; i < len; i++) {
		let transpose = [];
		for (let arr of A) {
			transpose.push(arr[i]);

		}
		result.push(transpose);
	}
	return result;

};

var transpose2 = function (A) {
	let xlen = A[0].length;

	let result = [];
	for (let i = 0; i < xlen; i++) {
		let col = A.map(subArr => subArr[i]);
		result.push(col);
	}
	return result;
};
module.exports = {
	transpose1: transpose1,
	transpose2: transpose2
};
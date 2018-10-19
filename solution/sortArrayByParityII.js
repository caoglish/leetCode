//922. Sort Array By Parity II
var sortArrayByParityII = function (A) {
	let len = A.length;
	let result = [];
	let evenindex = 0;
	let oddindex = 1;

	for (let i = 0; i < len; i++) {
		if (A[i] % 2 === 0) {
			result[evenindex] = A[i];
			evenindex += 2;
		} else {
			result[oddindex] = A[i];
			oddindex += 2;
		}
	}

	return result;
};
module.exports = sortArrayByParityII;
var isToeplitzMatrix = function (matrix) {
	let xlen = matrix[0].length;
	let ylen = matrix.length;

	let list = [];
	let row = [];
	for (let i = 0; i < xlen; i++) {
		row = [];
		for (let k = 0; k < ylen; k++) {
			if (i + k < xlen && k < ylen) {
				row.push(matrix[k][i + k]);
			}
			if (k + 1 == ylen) list.push(row);
		}
	}

	let klen = xlen > ylen ? ylen - 1 : xlen; //reduce num of loop for vertical recuring.
	for (let i = 1; i < ylen; i++) {
		row = [];
		for (let k = 0; k < klen; k++) {

			if (i + k < ylen && k < xlen) {
				row.push(matrix[i + k][k]);
			}
			if (k + 1 == klen) list.push(row);
		}
	}


	return list.reduce((sum, arr) => {
		return sum && (new Set(arr)).size === 1;
	}, true);






};



module.exports = isToeplitzMatrix;
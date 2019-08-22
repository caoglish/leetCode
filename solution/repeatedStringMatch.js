/**
 * 686. Repeated String Match
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
	let times = 1;
	let origin = A;
	while (A.length < B.length) {
		A += origin;
		times++;
	}

	if (!A.includes(B) ) {
		A += origin;
		times++;
	}

	return A.includes(B)  ? times : -1;
};

module.exports = repeatedStringMatch;
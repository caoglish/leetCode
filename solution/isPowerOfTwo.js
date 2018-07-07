var isPowerOfTwo = function (n) {

	if (n === 1) {
		return true;
	}
	do {
		if (n === 2) {
			return true;
		}
		n = n / 2;
		if (parseInt(n, 10) !== n || n < 2) return false;

	} while (n);
};

var isPowerOfTwo1 = function (n) {
	let l = Math.log2(n);
	if (parseInt(l) === l) return true;
	return false;

};

module.exports = {
	isPowerOfTwo: isPowerOfTwo,
	isPowerOfTwo1: isPowerOfTwo1
};
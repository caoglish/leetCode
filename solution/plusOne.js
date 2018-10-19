/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	var len = digits.length;
	for (let i = len - 1; i >= 0; i--) {
		digits[i] += 1;
		if (digits[i] < 10) {
			return digits;
		} else {
			digits[i] = 0;
			if (i === 0)
				digits.unshift(1);
		}
	}

	return digits;
};

module.exports = plusOne;
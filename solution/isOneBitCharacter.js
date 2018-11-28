//717. 1 - bit and 2 - bit Characters
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
	let i = 0;
	let last = null;
	while (i < bits.length) {
		if (bits[i] == 0) {
			last = 0;
			i++;

		}
		if (bits[i] == 1) {
			last = 1;
			i = i + 2;
		}
	}

	if (last == 0) return true;

	return false;
};

module.exports = isOneBitCharacter;
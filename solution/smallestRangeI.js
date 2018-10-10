var smallestRangeI = function (A, K) {
	return Math.max(Math.max(...A) - K - (Math.min(...A) + K), 0);
};


module.exports = smallestRangeI;
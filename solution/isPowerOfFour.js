var isPowerOfFour = function (num) {
	let power = Math.log(num)/Math.log(4);
	if(power===parseInt(power)) return true;
	return false;
};

module.exports = isPowerOfFour;
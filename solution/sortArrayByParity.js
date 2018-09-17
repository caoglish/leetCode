var sortArrayByParity = function (A) {
	let result = [];
	for (let item of A) {
		if (item % 2 == 0) result.unshift(item);
		else result.push(item);
	}
	return result;
};

module.exports = sortArrayByParity;
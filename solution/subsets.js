//78. Subsets
var subsets = function (nums) {
	let result = [
		[]
	];
	for (let i of nums) {
		let resultLen = result.length;
		for (let j = 0; j < resultLen; j++) {
			let n = Object.assign([], result[j]);
			n.push(i);
			result.push(n);
		}
	}
	return result;
};

module.exports = subsets;
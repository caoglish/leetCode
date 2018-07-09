var findMaxConsecutiveOnes = function (nums) {
	return Math.max.apply(null, nums.join('').split('0').map((n) => n.length));
};

var findMaxConsecutiveOnes1 = function (nums) {
	var max = 0;
	var count = 0;
	nums.push(0);
	for (let i = 0; i < nums.length; i++) {
		if (nums[i]) {
			count++;
		} else {
			max = Math.max(count, max);
			count = 0;
		}
	}
	return max;
};

module.exports = {
	findMaxConsecutiveOnes,
	findMaxConsecutiveOnes1
};
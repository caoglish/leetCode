//16. 3Sum Closest
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	nums = nums.sort((a, b) => a - b);
	let len = nums.length;
	let result = nums[1] + nums[2] + nums[3];
	let closest = Number.MAX_SAFE_INTEGER;
	for (let a = 0; a < len - 2; a++) {
		let c1 = a + 1;
		let c2 = len - 1;
		while (c1 < c2) {

			let sum = nums[a] + nums[c1] + nums[c2];
			let current = Math.abs(sum - target);

			if (current === 0) {
				return target;
			}
			if (current < closest) {
				result = sum;
				closest = current;
			}
			if (nums[c1] + nums[c2] < target - nums[a]) {
				c1++;
			} else if (nums[c1] + nums[c2] > target - nums[a]) {
				c2--;
			}
		}
	}
	return result;
};
module.exports = threeSumClosest;
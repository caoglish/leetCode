/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	let len = nums.length;
	k = k % len;
	let right = nums.splice(-k, k);
	nums.unshift.apply(nums, right);
	return nums;
};

module.exports = rotate;
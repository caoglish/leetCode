/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	let len = nums.length;
	k = k % len;
	if (k === 0) return nums;
	return nums.splice(-k, k).concat(nums);






};

module.exports = rotate;
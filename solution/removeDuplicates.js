/**
 * 26. Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	if(nums.length<=1) return;
	//due to nums length reduced dynamtically, so use nums.length rather than len=nums.length
	for (let t1 = 0; t1 < nums.length; t1++) {
		if(nums[t1]==nums[t1+1]){
			nums.splice(t1, 1);
			t1=t1-1;
		}
	}
};

module.exports = removeDuplicates;

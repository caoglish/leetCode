var removeDuplicates = function (nums) {
	if(nums.length<=1) return;
	//due to nums length reduced dynamtically, so use nums.length rather than len=nums.length
	for (let t1 = 0; t1 < nums.length; t1++) {
		for (let t2 = t1 + 1; t2 < nums.length; t2++) {
			if(nums[t1]==nums[t2]){
				nums.splice(t2, 1);
				t2=t2-1;
			}else{
				break;
			}
		}
	}
};
//console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
module.exports = removeDuplicates;

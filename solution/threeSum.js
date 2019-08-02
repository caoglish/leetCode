/**
 * 15. 3Sum
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	nums=nums.sort((a,b)=>a-b);

	let findNext=function(nums,pos,step){
		let i=pos;
		while(i<nums.length&&i>=0&&nums[pos]==nums[i]){
			i +=step;
		}
		return i;
	};

	let result = [];
	let len = nums.length;
	for (let i = 0; i < len - 2; i=findNext(nums,i,1)) {
		let l = i;
		let m=l+1;
		let r=len-1;
		while(m<r){
			let sum=nums[l]+nums[m]+nums[r];
			if(sum===0){
				result.push([nums[l],nums[m],nums[r]]);
				m=findNext(nums,m,1);
				r=findNext(nums,r,-1);
			}else if(sum<0){
				m=findNext(nums,m,1);
			}else{
				r=findNext(nums,r,-1);
			}
		}
	}
	return result;
};

module.exports = threeSum;
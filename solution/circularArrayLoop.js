/**
 * 457. Circular Array Loop
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
	let len= nums.length;

	let findNextIndex=function(nums,index){
		return ((nums[index]+index)%len+len)%len;
	};

	let hasCycle=(nums,index)=>{
		let from = index;
		let findCycle= false;
		let direction = nums[index]>0;
		let count=0;

		while(count++<len){
			index = findNextIndex(nums,index);
			let newDirection = nums[index]>0;
			if(newDirection!==direction) return false;
			if(index === from){
				findCycle= true;
				break;
			}

		}
		return  findCycle&&count>1;
	};

	for(let i=0;i<len;i++){
		if(hasCycle(nums,i)){
			return true;
		}
	}
	return false;

};

module.exports = circularArrayLoop;
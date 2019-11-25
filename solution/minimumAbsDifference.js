/**
 * 1200. Minimum Absolute Difference
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
	arr=arr.sort((a,b)=>a-b);
	let len=arr.length;
	let minDiff=arr[len-1]-arr[0];
	let result=[];

	for(let i = 0;i<len-1 ;i++){
		let diff=arr[i+1]-arr[i];
		if(minDiff>diff){
			minDiff=diff;
			result=[]
			result.push([arr[i],arr[i+1]]);
		}else if(diff==minDiff) {
			result.push([arr[i],arr[i+1]]);
		}
		
	}
	return result;
};


module.exports = minimumAbsDifference;
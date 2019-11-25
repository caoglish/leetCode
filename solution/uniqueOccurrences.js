/**
 * 1207. Unique Number of Occurrences
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
	let count={};
	let len=arr.length;
	for(let i = 0 ; i < len ; i++){
		if(count[arr[i]+""]==undefined)count[arr[i]+""]=1;
		else count[arr[i]+""]++;
	}
	let values = Object.values(count)
	let valSet= new Set(values);
	
	return valSet.size==values.length;
	
};

module.exports =uniqueOccurrences;

//961. N-Repeated Element in Size 2N Array
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
	let r={};
	for(let i = 0; i < A.length ; i ++){
		if(r[A[i]] === undefined) r[A[i]]=1;
		else 		return A[i];
	}
};

module.exports = repeatedNTimes;
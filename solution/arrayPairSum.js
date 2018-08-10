var arrayPairSum = function (nums) {
	let sortedNum = nums.sort((a, b) => a - b);
	let loop=sortedNum.length/2;
	let sum = 0;
	for(let i = 0 ; i < loop; i++){
		sum += sortedNum.splice(0, 2)[0];
	}

	return sum;
};


module.exports = arrayPairSum;
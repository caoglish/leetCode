var selfDividingNumbers = function (left, right) {
	let result = [];
	
	for (let i = left; i <= right; i++) {
		let sn = i.toString();
		if (sn.toString().indexOf(0) > 0) continue;
		let mod = sn.split('').reduce((sum,digit)=>{
			return sum + i % parseInt(digit);
		},0);
		if(mod===0)	result.push(i);
	}
	return result;
};


module.exports = selfDividingNumbers;
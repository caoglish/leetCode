var binaryGap = function (N) {
	let bn = (N >>> 0).toString(2);
	let indexList=[], index=-1;
	while((index =bn.indexOf('1',index+1) )!=-1){
		indexList.push(index);
	}
	if(indexList.length<2) return 0;
	let distanceList=[];
	for(let i =0 ; i < indexList.length-1; i++){
		distanceList.push(indexList[i + 1] - indexList[i]);
	}

	return Math.max.apply(null, distanceList);
};

module.exports = binaryGap;
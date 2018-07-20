//work but very slow. (over 2000ms)
var buddyStrings = function (A, B) {

	if(A.length !== B.length) return false;

	if(A===B && A.length > new Set(A).size ) return true;
	
	for(let i =0 ; i < A.length-1 ; i++ ){
		for (let j = i+1; j < B.length ; j++) {
			if (A[i]!==B[i]&&A[i] === B[j] && A[j] === B[i]) return true;
		}
	}
	return false;
};

//much quicker solution. (about 72ms)
var buddyStrings1 = function (A, B) {
	if (A.length !== B.length || A.length < 0 ) return false;
	if (A === B && A.length > new Set(A).size) return true;

	let indexList=[];
	for (let i = 0; i < A.length ; i++) {
		if(A[i]!==B[i]){
			indexList.push(i);
		}
	}

	for (let i =0; i < indexList.length; i++){
		let first = indexList[0];
		let second = indexList[1];
		if(A[first]===B[second]&&A[second]===B[first]) return true;
	}

	return false;
};

module.exports = {
	buddyStrings: buddyStrings,
	buddyStrings1: buddyStrings1
}
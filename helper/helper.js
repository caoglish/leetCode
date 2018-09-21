let oneOfArray = function (arr, arrlist) {
	let compare = (array1, array2) => array1.length === array2.length && array1.every((value, index) => value === array2[index]);
	for (let arrItem of arrlist) {
		if (compare(arr, arrItem)) return true;
	}

	return false;

};

module.exports = {
	oneOfArray
};
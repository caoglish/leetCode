const sortArrayByParity = require('../solution/sortArrayByParity');
let oneOfArray = function (arr, arrlist) {
	let compare = (array1, array2) => array1.length === array2.length && array1.every((value, index) => value === array2[index]);
	for (let arrItem of arrlist) {
		if (compare(arr, arrItem)) return true;
	}

	return false;

};
test('sortArrayByParity', () => {

	expect(oneOfArray(sortArrayByParity([3, 1, 2, 4]), [
		[4, 2, 3, 1],
		[2, 4, 1, 3],
		[4, 2, 1, 3],
		[2, 4, 3, 1]
	])).toBeTruthy();


});
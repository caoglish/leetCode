const sortArrayByParity = require('../solution/sortArrayByParity');
const oneOfArray = require('../helper/helper').oneOfArray;

test('sortArrayByParity', () => {

	expect(oneOfArray(sortArrayByParity([3, 1, 2, 4]), [
		[4, 2, 3, 1],
		[2, 4, 1, 3],
		[4, 2, 1, 3],
		[2, 4, 3, 1]
	])).toBeTruthy();


});
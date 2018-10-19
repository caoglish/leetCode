const sortArrayByParityII = require('../solution/sortArrayByParityII');
const oneOfArray = require('../helper/helper').oneOfArray;

test('sortArrayByParityII ', () => {
	expect(oneOfArray(sortArrayByParityII([4, 2, 5, 7]), [
		[4, 5, 2, 7],
		[4, 7, 2, 5],
		[2, 5, 4, 7],
		[2, 7, 4, 5]
	])).toBeTruthy();

});
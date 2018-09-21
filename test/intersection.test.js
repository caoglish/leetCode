const intersection = require('../solution/intersection');
const oneOfArray = require('../helper/helper').oneOfArray;

test('arrayPairSum', () => {
	expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
	expect(oneOfArray(intersection([4, 9, 5], [9, 4, 9, 8, 4]), [
		[9, 4],
		[4, 9],
	])).toBeTruthy();

});
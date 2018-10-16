/*global test  expect*/
const subsets = require('../solution/subsets');


test('subsets', () => {
	expect(subsets([1, 2, 3, 4])).toEqual([
		[],
		[1],
		[2],
		[1, 2],
		[3],
		[1, 3],
		[2, 3],
		[1, 2, 3],
		[4],
		[1, 4],
		[2, 4],
		[1, 2, 4],
		[3, 4],
		[1, 3, 4],
		[2, 3, 4],
		[1, 2, 3, 4]
	]);

	expect(subsets([1, 2, 3])).toEqual([
		[],
		[1],
		[2],
		[1, 2],
		[3],
		[1, 3],
		[2, 3],
		[1, 2, 3]
	]);

});
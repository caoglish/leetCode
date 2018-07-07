/*global test  expect*/
const flipAndInvertImage = require('../solution/flipAndInvertImage');

test('flipAndInvertImage', () => {
	expect(flipAndInvertImage([
		[1, 1, 0],
		[1, 0, 1],
		[0, 0, 0]
	])).toEqual([
		[1, 0, 0],
		[0, 1, 0],
		[1, 1, 1]
	]);
	expect(flipAndInvertImage([
		[1, 1, 0, 0],
		[1, 0, 0, 1],
		[0, 1, 1, 1],
		[1, 0, 1, 0]
	])).toEqual([
		[1, 1, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 1],
		[1, 0, 1, 0]
	]);
});
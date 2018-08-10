/*global test  expect*/
const arrayPairSum = require('../solution/arrayPairSum');


test('arrayPairSum', () => {
	expect(arrayPairSum([1, 4, 3, 2])).toBe(4);
	expect(arrayPairSum([1, 4, 3, 2,8,9])).toBe(12);
	expect(arrayPairSum( [6214, -2290, 2833, -7908])).toBe(-5075);
	expect(arrayPairSum([11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855])).toBe(6662);
});
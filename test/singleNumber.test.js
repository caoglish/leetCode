/*global test  expect*/
const singleNumber = require('../solution/singleNumber');

test('singleNumber', () => {
	expect(singleNumber([2, 2, 1])).toBe(1);
	expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
});
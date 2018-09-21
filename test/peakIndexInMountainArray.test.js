/*global test  expect*/
const peakIndexInMountainArray = require('../solution/peakIndexInMountainArray');

test('peakIndexInMountainArray', () => {
	expect(peakIndexInMountainArray([0, 1, 0])).toBe(1);
	expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1);
});
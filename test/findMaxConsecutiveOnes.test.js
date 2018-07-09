/*global test  expect*/
const findMaxConsecutiveOnes = require('../solution/findMaxConsecutiveOnes').findMaxConsecutiveOnes;
const findMaxConsecutiveOnes1 = require('../solution/findMaxConsecutiveOnes').findMaxConsecutiveOnes1;

test('findMaxConsecutiveOnes', () => {
	expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
	expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
});

test('findMaxConsecutiveOnes1', () => {
	expect(findMaxConsecutiveOnes1([1, 1, 0, 1, 1, 1])).toBe(3);
	expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
});
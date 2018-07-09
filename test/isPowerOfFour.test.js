/*global test  expect*/
const isPowerOfFour = require('../solution/isPowerOfFour');

test('isPowerOfFour', () => {
	expect(isPowerOfFour(16)).toBe(true);
	expect(isPowerOfFour(15)).toBe(false);
	expect(isPowerOfFour(256)).toBe(true);
	expect(isPowerOfFour(218)).toBe(false);
});
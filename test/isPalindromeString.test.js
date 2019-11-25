
/*global test  expect*/
const isPalindromeString = require('../solution/isPalindromeString');

test('isPalindromeString', () => {
	expect(isPalindromeString("A man, a plan, a canal: Panama")).toBe(true);
	expect(isPalindromeString( "race a car")).toBe(false);
	expect(isPalindromeString( "0P")).toBe(false);
	expect(isPalindromeString( "`l;`` 1o1 ??;l`")).toBe(true);

});
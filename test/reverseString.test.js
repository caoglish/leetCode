/*global test  expect*/
const reverseString = require('../solution/reverseString');


test('reverseString', () => {
	let s;
	reverseString(s=['h','e','l','l','o']);
	expect(s).toEqual(['o','l','l','e','h']);
	reverseString(s=['H','a','n','n','a','h']);
	expect(s).toEqual( ['h','a','n','n','a','H']);
});
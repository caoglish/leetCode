const longestCommonPrefix = require('../solution/longestCommonPrefix');

test('longestCommonPrefix', () => {
	expect(longestCommonPrefix( ['flower','flow','flight'])).toBe('fl');
	expect(longestCommonPrefix(['dog','racecar','car'])).toBe('');
	expect(longestCommonPrefix([])).toBe('');
	expect(longestCommonPrefix(["aaa","aa","aaa"])).toBe('aa');

});
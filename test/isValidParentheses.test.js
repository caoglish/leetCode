const isValidParentheses = require('../solution/isValidParentheses');


test('isValidParentheses', () => {

	expect(isValidParentheses('()')).toBe(true);

	expect(isValidParentheses('()[]{}')).toBe(true);
	expect(isValidParentheses('(]')).toBe(false);
	expect(isValidParentheses('([)]')).toBe(false);
	expect(isValidParentheses('{[]}')).toBe(true);



});
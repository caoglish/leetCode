const removeOuterParentheses = require('../solution/removeOuterParentheses');

test('removeOuterParentheses', () => {
	expect(removeOuterParentheses('(()())(())')).toEqual( '()()()');
	expect(removeOuterParentheses('(()())(())(()(()))')).toEqual( '()()()()(())');
	expect(removeOuterParentheses('()()')).toEqual( '');

});

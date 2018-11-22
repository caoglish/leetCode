const checkPossibility = require('../solution/checkPossibility');

test('checkPossibility', () => {
	expect(checkPossibility([4, 2, 3])).toBe(true);
	expect(checkPossibility([4, 2, 1])).toBe(false);
	expect(checkPossibility([3, 4, 2, 3])).toBe(false);
	expect(checkPossibility([2, 3, 3, 2, 4])).toBe(true);
	expect(checkPossibility([2, 3, 3, 3, 4])).toBe(true);
	expect(checkPossibility([2, 3, 4, 2, 5, 6, 7])).toBe(true);
});
const isMonotonic = require('../solution/isMonotonic');


test('isMonotonic', () => {
	expect(isMonotonic([1, 2, 2, 3])).toBe(true);
	expect(isMonotonic([6, 5, 4, 4])).toBe(true);
	expect(isMonotonic([1, 3, 2])).toBe(false);
	expect(isMonotonic([1, 2, 4, 5])).toBe(true);
	expect(isMonotonic([1, 1, 1])).toBe(true);

});
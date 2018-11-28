const isOneBitCharacter = require('../solution/isOneBitCharacter');

test('isOneBitCharacter', () => {
	expect(isOneBitCharacter([1, 0, 0])).toBe(true);
	expect(isOneBitCharacter([1, 1, 1, 0])).toBe(false);
	expect(isOneBitCharacter([0, 0])).toBe(true);
	expect(isOneBitCharacter([0, 1, 0])).toBe(false);

});
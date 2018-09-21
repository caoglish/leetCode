const binaryGap = require('../solution/binaryGap');


test('binaryGap', () => {
	expect(binaryGap(22)).toBe(2);
	expect(binaryGap(5)).toBe(2);
	expect(binaryGap(6)).toBe(1);
	expect(binaryGap(8)).toBe(0);
});
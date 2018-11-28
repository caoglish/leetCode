const minDeletionSize = require('../solution/minDeletionSize');

test('minDeletionSize', () => {
	expect(minDeletionSize(["cba", "daf", "ghi"])).toBe(1);
	expect(minDeletionSize(["a", "b"])).toBe(0);
	expect(minDeletionSize(["zyx", "wvu", "tsr"])).toBe(3);
	expect(minDeletionSize(["cba", "daf", "ghi"])).toBe(1);

});
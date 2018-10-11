const threeSumClosest = require('../solution/threeSumClosest');


test('threeSumClosest', () => {
	expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
	expect(threeSumClosest([0, 1, 2], 0)).toBe(3);
	expect(threeSumClosest([1, 1, -1], 1)).toBe(1);
	expect(threeSumClosest([1, 1, -1, -1, 3], -1)).toBe(-1);
	expect(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)).toBe(82);

});
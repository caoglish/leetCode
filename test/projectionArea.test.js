const projectionArea = require('../solution/projectionArea');

test('projectionArea', () => {
	expect(projectionArea([
		[2]
	])).toEqual(5);
	expect(projectionArea([
		[1, 2],
		[3, 4]
	])).toEqual(17);
	expect(projectionArea([
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1]
	])).toEqual(14);
	expect(projectionArea([
		[2, 2, 2],
		[2, 1, 2],
		[2, 2, 2]
	])).toEqual(21);
	expect(projectionArea([
		[1, 0],
		[0, 2]
	])).toEqual(8);
});
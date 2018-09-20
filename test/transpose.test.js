const transpose1 = require('../solution/transpose').transpose1;
const transpose2 = require('../solution/transpose').transpose2;

test('transpose1', () => {
	expect(transpose1([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	])).toEqual([
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9]
	]);
	expect(transpose1([
		[1, 2, 3],
		[4, 5, 6]
	])).toEqual([
		[1, 4],
		[2, 5],
		[3, 6]
	]);

	expect(transpose1([
		[1, 4],
		[2, 5],
		[3, 6]
	])).toEqual(
		[
			[1, 2, 3],
			[4, 5, 6]
		]);
});

test('transpose2', () => {
	expect(transpose2([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	])).toEqual([
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9]
	]);
	expect(transpose2([
		[1, 2, 3],
		[4, 5, 6]
	])).toEqual([
		[1, 4],
		[2, 5],
		[3, 6]
	]);

	expect(transpose2([
		[1, 4],
		[2, 5],
		[3, 6]
	])).toEqual(
		[
			[1, 2, 3],
			[4, 5, 6]
		]);
});
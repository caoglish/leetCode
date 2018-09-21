const isToeplitzMatrix = require('../solution/isToeplitzMatrix');


test('isToeplitzMatrix', () => {

	expect(isToeplitzMatrix([
		[1, 2, 3, 4],
		[5, 1, 2, 3],
		[9, 5, 1, 2]
	])).toBe(true);

	expect(isToeplitzMatrix([
		[1, 2],
		[2, 2]
	])).toBe(false);
	expect(isToeplitzMatrix([
		[41, 45],
		[81, 41],
		[73, 81],
		[47, 73],
		[0, 47],
		[79, 76]
	])).toBe(false);
	expect(isToeplitzMatrix([
		[36, 59, 71, 15, 26, 82, 87],
		[56, 36, 59, 71, 15, 26, 82],
		[15, 0, 36, 59, 71, 15, 26]
	])).toBe(false);



});
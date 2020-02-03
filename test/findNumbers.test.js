
const findNumbers = require('../solution/findNumbers');

test('findNumbers', () => {
	expect(findNumbers( [12,345,2,6,7896])).toBe(2);
	expect(findNumbers( [555,901,482,1771])).toBe(1);

});
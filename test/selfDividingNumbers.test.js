
const selfDividingNumbers = require('../solution/selfDividingNumbers');

test('selfDividingNumbers', () => {
	expect(selfDividingNumbers(1, 22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
	expect(selfDividingNumbers(22, 22)).toEqual([22]);
	
});
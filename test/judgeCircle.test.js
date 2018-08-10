/*global test  expect*/
const judgeCircle = require('../solution/judgeCircle');

test('judgeCircle', () => {
	expect(judgeCircle('UD')).toBe(true);
	expect(judgeCircle('LL')).toBe(false);
	expect(judgeCircle('URDL')).toBe(true);
	expect(judgeCircle('DDRR')).toBe(false);
});
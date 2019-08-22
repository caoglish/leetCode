
const repeatedStringMatch = require('../solution/repeatedStringMatch');


test('repeatedStringMatch', () => {
	expect(repeatedStringMatch('abcd','cdabcdab')).toBe(3);
	expect(repeatedStringMatch('a','aa')).toBe(2);


});